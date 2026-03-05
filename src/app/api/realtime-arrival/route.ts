import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const station = request.nextUrl.searchParams.get('station');

  if (!station) {
    return NextResponse.json({ error: 'station parameter required' }, { status: 400 });
  }

  const API_KEY = process.env.SEOUL_API_KEY;

  if (!API_KEY || API_KEY === 'your_seoul_api_key_here') {
    return NextResponse.json(getMockArrivalData(station));
  }

  try {
    const url = `http://swopenAPI.seoul.go.kr/api/subway/${API_KEY}/json/realtimeStationArrival/0/20/${encodeURIComponent(station)}`;
    const response = await fetch(url, { next: { revalidate: 0 } });

    if (!response.ok) {
      throw new Error(`Seoul API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Realtime arrival API error:', error);
    return NextResponse.json(getMockArrivalData(station));
  }
}

function getMockArrivalData(station: string) {
  const now = new Date();
  const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

  return {
    realtimeArrivalList: [
      {
        subwayId: '1006',
        updnLine: '상행',
        trainLineNm: '응암순환(내선)',
        statnFid: '0',
        statnTid: '0',
        statnId: '0',
        statnNm: station,
        btrainNo: '6215',
        bstatnId: '0',
        bstatnNm: '응암순환(내선)',
        arvlMsg2: '2분 후 도착',
        arvlMsg3: '석계',
        arvlCd: '99',
        barvlDt: '120',
        recptnDt: timeStr,
        btrainSttus: '일반',
      },
      {
        subwayId: '1006',
        updnLine: '상행',
        trainLineNm: '응암순환(내선)',
        statnFid: '0',
        statnTid: '0',
        statnId: '0',
        statnNm: station,
        btrainNo: '6213',
        bstatnId: '0',
        bstatnNm: '응암순환(내선)',
        arvlMsg2: '8분 후 도착',
        arvlMsg3: '고려대',
        arvlCd: '99',
        barvlDt: '480',
        recptnDt: timeStr,
        btrainSttus: '일반',
      },
    ],
  };
}
