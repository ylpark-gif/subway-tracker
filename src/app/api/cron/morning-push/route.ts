import { NextRequest, NextResponse } from 'next/server';
import { getWebPush, getArrivalInfo } from '@/lib/pushService';
import { loadSubscriptions, saveSubscriptions } from '@/lib/subscriptionStore';

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
    // Vercel Cron 인증
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

    const webpush = getWebPush();
    const arrivalMsg = await getArrivalInfo();

    const payload = JSON.stringify({
      title: '🚇 출근 열차 도착 알림',
      body: arrivalMsg,
    });

    const results = await Promise.allSettled(
      subs.map(sub => webpush.sendNotification(sub, payload))
    );

    const validSubs = subs.filter((_: any, i: number) => results[i].status === 'fulfilled');
    await saveSubscriptions(validSubs);

    return NextResponse.json({
      sent: results.filter(r => r.status === 'fulfilled').length,
      failed: results.filter(r => r.status === 'rejected').length,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}
