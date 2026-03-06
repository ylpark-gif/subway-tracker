import { NextRequest, NextResponse } from 'next/server';
import { loadSubscriptions } from '@/lib/subscriptionStore';

const HOLIDAYS_2026 = [
  '20260101', '20260216', '20260217', '20260218', '20260301',
  '20260505', '20260524', '20260606', '20260815',
  '20260921', '20260922', '20260923', '20261003', '20261009', '20261225',
];

function isKoreanHoliday(): boolean {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const year = kst.getUTCFullYear();
  const month = String(kst.getUTCMonth() + 1).padStart(2, '0');
  const day = String(kst.getUTCDate()).padStart(2, '0');
  return HOLIDAYS_2026.includes(`${year}${month}${day}`);
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (
      process.env.CRON_SECRET &&
      authHeader !== `Bearer ${process.env.CRON_SECRET}`
    ) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (isKoreanHoliday()) {
      return NextResponse.json({ skipped: true, reason: 'holiday' });
    }

    const subs = await loadSubscriptions();
    if (subs.length === 0) {
      return NextResponse.json({ error: 'No subscriptions' }, { status: 404 });
    }

    const now = new Date();
    const kstDay = new Date(now.getTime() + 9 * 60 * 60 * 1000).getUTCDay();

    // 스케줄 요일 체크 (구독자 중 하나라도 해당 요일이면 진행)
    const hasActiveSchedule = subs.some((sub: any) => {
      if (!sub.schedule?.enabled) return true; // 스케줄 없으면 기본 발송
      return sub.schedule.days.includes(kstDay);
    });

    if (!hasActiveSchedule) {
      return NextResponse.json({ skipped: true, reason: 'no active schedule today' });
    }

    // repeat-send 엔드포인트로 위임 (10초 간격 반복 푸시)
    const endTimeKST = subs[0]?.schedule?.endTimeKST ?? '08:50';
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

    // fire-and-forget: repeat-send 시작
    fetch(`${baseUrl}/api/push/repeat-send`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ endTimeKST }),
    }).catch(() => {});

    return NextResponse.json({ triggered: true, endTimeKST });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}
