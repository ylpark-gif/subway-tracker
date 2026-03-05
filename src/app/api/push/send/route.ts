import { NextResponse } from 'next/server';
import webpush from 'web-push';
import { loadSubscriptions, saveSubscriptions } from '@/lib/subscriptionStore';

webpush.setVapidDetails(
  'mailto:subway@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

async function getArrivalInfo(): Promise<string> {
  const API_KEY = process.env.SEOUL_API_KEY;
  if (!API_KEY || API_KEY === 'your_seoul_api_key_here') {
    return '태릉입구역 도착 정보를 확인하세요';
  }

  try {
    const url = `http://swopenAPI.seoul.go.kr/api/subway/${API_KEY}/json/realtimeStationArrival/0/10/${encodeURIComponent('태릉입구')}`;
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    const arrivals = data.realtimeArrivalList ?? [];

    const line6Up = arrivals
      .filter((a: any) => a.subwayId === '1006' && a.updnLine === '상행')
      .sort((a: any, b: any) => parseInt(a.barvlDt) - parseInt(b.barvlDt));

    if (line6Up.length === 0) return '현재 접근 중인 6호선 열차 없음';

    const first = line6Up[0];
    const min = Math.floor(parseInt(first.barvlDt) / 60);
    const sec = parseInt(first.barvlDt) % 60;

    let msg = `첫 번째 열차: ${min}분 ${sec}초 후 도착 (현재 ${first.arvlMsg3})`;
    if (line6Up.length > 1) {
      const second = line6Up[1];
      const min2 = Math.floor(parseInt(second.barvlDt) / 60);
      msg += `\n다음 열차: ${min2}분 후 (${second.arvlMsg3})`;
    }
    return msg;
  } catch {
    return '태릉입구역 도착 정보를 확인하세요';
  }
}

export async function POST() {
  const subs = await loadSubscriptions();

  if (subs.length === 0) {
    return NextResponse.json({ error: 'No subscriptions' }, { status: 404 });
  }

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
