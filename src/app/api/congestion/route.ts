import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const line = request.nextUrl.searchParams.get('line');
  const station = request.nextUrl.searchParams.get('station');

  if (!line || !station) {
    return NextResponse.json({ error: 'line and station parameters required' }, { status: 400 });
  }

  // SK API 키가 없으면 mock 데이터
  return NextResponse.json(getMockCongestionData(line, station));
}

function getMockCongestionData(line: string, station: string) {
  // 실제적인 mock 혼잡도 데이터 (칸별 0~100%)
  const baseCongestion = [32, 45, 58, 67, 78, 82, 71, 55, 42, 35];
  // 약간의 랜덤 변동 추가
  const congestionCar = baseCongestion.map(v =>
    Math.max(0, Math.min(100, v + Math.floor(Math.random() * 20) - 10))
  );
  const congestionTrain = Math.round(
    congestionCar.reduce((a, b) => a + b, 0) / congestionCar.length
  );

  return {
    trainNo: '6215',
    stationName: station,
    lineName: line,
    congestionTrain,
    congestionCar,
  };
}
