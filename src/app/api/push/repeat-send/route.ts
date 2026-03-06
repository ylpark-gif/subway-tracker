import { NextRequest, NextResponse } from 'next/server';
import { getWebPush, getArrivalInfoForRoute } from '@/lib/pushService';
import { loadSubscriptions, saveSubscriptions } from '@/lib/subscriptionStore';

const INTERVAL = 10_000; // 10초
const MAX_ITERATIONS = 5; // 5회 × 10초 = 50초 (Vercel 60초 제한 내)

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const maxDuration = 60;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const endTimeKST = body.endTimeKST ?? '08:50';

    // 종료 시간 계산
    const [endH, endM] = endTimeKST.split(':').map(Number);
    const now = new Date();
    const kstNow = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    const endTime = new Date(kstNow);
    endTime.setUTCHours(endH - 9, endM, 0, 0);

    if (now.getTime() >= endTime.getTime()) {
      return NextResponse.json({ done: true, reason: 'past end time' });
    }

    const subs = await loadSubscriptions();
    if (subs.length === 0) {
      return NextResponse.json({ error: 'No subscriptions' }, { status: 404 });
    }

    const webpush = getWebPush();
    let sentCount = 0;
    let failedCount = 0;

    for (let i = 0; i < MAX_ITERATIONS; i++) {
      // 종료 시간 체크
      if (Date.now() >= endTime.getTime()) break;

      // 각 구독자에게 최신 도착 정보 푸시
      const results = await Promise.allSettled(
        subs.map(async (sub: any) => {
          const departure = sub.route?.departure ?? '태릉입구';
          const arrival = sub.route?.arrival ?? '매봉';
          const lineId = sub.route?.departureLineId ?? '1006';
          const direction = sub.route?.departureDirection ?? '상행';

          const arrivalMsg = await getArrivalInfoForRoute(departure, lineId, direction);

          const payload = JSON.stringify({
            title: `🚇 ${departure}→${arrival} 열차 도착 알림`,
            body: arrivalMsg,
            data: { type: 'simple-update', departure, arrival },
          });

          return webpush.sendNotification(sub, payload);
        })
      );

      // 410 Gone 구독 제거
      const gone = results
        .map((r, idx) => r.status === 'rejected' && (r as PromiseRejectedResult).reason?.statusCode === 410 ? idx : -1)
        .filter(idx => idx >= 0);

      if (gone.length > 0) {
        const validSubs = subs.filter((_: any, idx: number) => !gone.includes(idx));
        await saveSubscriptions(validSubs);
      }

      sentCount += results.filter(r => r.status === 'fulfilled').length;
      failedCount += results.filter(r => r.status === 'rejected').length;

      // 마지막 반복이 아니면 10초 대기
      if (i < MAX_ITERATIONS - 1 && Date.now() < endTime.getTime()) {
        await sleep(INTERVAL);
      }
    }

    // 아직 종료 시간 안 됐으면 다음 배치 체인
    const remaining = endTime.getTime() - Date.now();
    if (remaining > INTERVAL) {
      const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';

      // fire-and-forget: 다음 배치 트리거
      fetch(`${baseUrl}/api/push/repeat-send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ endTimeKST }),
      }).catch(() => {});
    }

    return NextResponse.json({ sent: sentCount, failed: failedCount, chainedNext: remaining > INTERVAL });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
