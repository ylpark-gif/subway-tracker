import webpush from 'web-push';

let initialized = false;

export function getWebPush() {
  if (!initialized) {
    webpush.setVapidDetails(
      'mailto:subway@example.com',
      process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
      process.env.VAPID_PRIVATE_KEY!
    );
    initialized = true;
  }
  return webpush;
}

export async function getArrivalInfoForRoute(
  departure: string,
  lineId: string,
  direction: string
): Promise<string> {
  const API_KEY = process.env.SEOUL_API_KEY;
  if (!API_KEY || API_KEY === 'your_seoul_api_key_here') {
    return `${departure}역 도착 정보를 확인하세요`;
  }

  try {
    const url = `http://swopenAPI.seoul.go.kr/api/subway/${API_KEY}/json/realtimeStationArrival/0/10/${encodeURIComponent(departure)}`;
    const res = await fetch(url, { cache: 'no-store' });
    const data = await res.json();
    const arrivals = data.realtimeArrivalList ?? [];

    const filtered = arrivals
      .filter((a: any) => a.subwayId === lineId && a.updnLine === direction)
      .sort((a: any, b: any) => parseInt(a.barvlDt) - parseInt(b.barvlDt));

    if (filtered.length === 0) return `현재 ${departure}역 접근 중인 열차 없음`;

    const first = filtered[0];
    const min = Math.floor(parseInt(first.barvlDt) / 60);
    const sec = parseInt(first.barvlDt) % 60;

    let msg = `첫 열차: ${min}분 ${sec}초 후 (${first.arvlMsg3})`;
    if (filtered.length > 1) {
      const second = filtered[1];
      const min2 = Math.floor(parseInt(second.barvlDt) / 60);
      msg += `\n다음: ${min2}분 후 (${second.arvlMsg3})`;
    }
    return msg;
  } catch {
    return `${departure}역 도착 정보를 확인하세요`;
  }
}

export async function getArrivalInfo(): Promise<string> {
  return getArrivalInfoForRoute('태릉입구', '1006', '상행');
}
