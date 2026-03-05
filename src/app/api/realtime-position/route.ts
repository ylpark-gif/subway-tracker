import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const line = request.nextUrl.searchParams.get('line');

  if (!line) {
    return NextResponse.json({ error: 'line parameter required' }, { status: 400 });
  }

  const API_KEY = process.env.SEOUL_API_KEY;

  if (!API_KEY || API_KEY === 'your_seoul_api_key_here') {
    // Mock 데이터 반환 (API 키 없을 때)
    return NextResponse.json(getMockPositionData(line));
  }

  try {
    const url = `http://swopenAPI.seoul.go.kr/api/subway/${API_KEY}/json/realtimePosition/0/100/${encodeURIComponent(line)}`;
    const response = await fetch(url, { next: { revalidate: 0 } });

    if (!response.ok) {
      throw new Error(`Seoul API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Realtime position API error:', error);
    return NextResponse.json(getMockPositionData(line));
  }
}

function getMockPositionData(line: string) {
  const now = new Date();
  const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

  if (line === '6호선') {
    return {
      realtimePositionList: [
        {
          subwayId: '1006',
          subwayNm: '6호선',
          statnId: '644',
          statnNm: '석계',
          trainNo: '6215',
          lastStnId: '633',
          lastStnNm: '약수',
          recptnDt: timeStr,
          updnLine: '0',
          statnTid: '633',
          statnTnm: '응암순환(내선)',
          trainSttus: '2',
          directAt: '0',
          lstcarAt: '0',
        },
        {
          subwayId: '1006',
          subwayNm: '6호선',
          statnId: '640',
          statnNm: '고려대',
          trainNo: '6213',
          lastStnId: '633',
          lastStnNm: '약수',
          recptnDt: timeStr,
          updnLine: '0',
          statnTid: '633',
          statnTnm: '응암순환(내선)',
          trainSttus: '1',
          directAt: '0',
          lstcarAt: '0',
        },
        {
          subwayId: '1006',
          subwayNm: '6호선',
          statnId: '647',
          statnNm: '봉화산',
          trainNo: '6217',
          lastStnId: '610',
          lastStnNm: '응암',
          recptnDt: timeStr,
          updnLine: '1',
          statnTid: '610',
          statnTnm: '응암순환(외선)',
          trainSttus: '2',
          directAt: '0',
          lstcarAt: '0',
        },
      ],
    };
  }

  // 3호선 mock
  return {
    realtimePositionList: [
      {
        subwayId: '1003',
        subwayNm: '3호선',
        statnId: '334',
        statnNm: '금호',
        trainNo: '3125',
        lastStnId: '352',
        lastStnNm: '오금',
        recptnDt: timeStr,
        updnLine: '1',
        statnTid: '352',
        statnTnm: '오금',
        trainSttus: '2',
        directAt: '0',
        lstcarAt: '0',
      },
      {
        subwayId: '1003',
        subwayNm: '3호선',
        statnId: '339',
        statnNm: '고속터미널',
        trainNo: '3127',
        lastStnId: '352',
        lastStnNm: '오금',
        recptnDt: timeStr,
        updnLine: '1',
        statnTid: '352',
        statnTnm: '오금',
        trainSttus: '0',
        directAt: '0',
        lstcarAt: '0',
      },
    ],
  };
}
