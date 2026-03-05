import { NextResponse } from 'next/server';
import { getWebPush, getArrivalInfo } from '@/lib/pushService';
import { loadSubscriptions, saveSubscriptions } from '@/lib/subscriptionStore';

export async function POST() {
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

  const validSubs = subs.filter((_: any, i: number) => results[i].status === 'fulfilled');
  await saveSubscriptions(validSubs);

  return NextResponse.json({
    sent: results.filter(r => r.status === 'fulfilled').length,
    failed: results.filter(r => r.status === 'rejected').length,
  });
}
