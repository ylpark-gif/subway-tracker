import { NextResponse } from 'next/server';
import { getWebPush, getArrivalInfo } from '@/lib/pushService';
import { loadSubscriptions, saveSubscriptions } from '@/lib/subscriptionStore';

export async function POST() {
  try {
    const subs = await loadSubscriptions();

    if (subs.length === 0) {
      return NextResponse.json({ error: 'No subscriptions' }, { status: 404 });
    }

    const webpush = getWebPush();
    const arrivalMsg = await getArrivalInfo();

    const payload = JSON.stringify({
      title: '🚇 태릉입구역 열차 도착 알림',
      body: arrivalMsg,
    });

    const results = await Promise.allSettled(
      subs.map(sub => webpush.sendNotification(sub, payload))
    );

    // 410 Gone만 구독 삭제 (만료된 구독), 일시적 에러는 유지
    const validSubs = subs.filter((_: any, i: number) => {
      if (results[i].status === 'rejected') {
        const err = (results[i] as PromiseRejectedResult).reason;
        return err?.statusCode !== 410;
      }
      return true;
    });
    await saveSubscriptions(validSubs);

    const errors = results
      .map((r, i) => r.status === 'rejected'
        ? { endpoint: subs[i]?.endpoint?.slice(0, 60), error: (r as PromiseRejectedResult).reason?.message, statusCode: (r as PromiseRejectedResult).reason?.statusCode }
        : null)
      .filter(Boolean);

    return NextResponse.json({
      sent: results.filter(r => r.status === 'fulfilled').length,
      failed: results.filter(r => r.status === 'rejected').length,
      errors,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}
