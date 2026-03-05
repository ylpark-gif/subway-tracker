import { Route, RouteSegment, TransferInfo } from '@/types';
import { LINE_6_STATIONS, LINE_3_STATIONS, getStationsBetween } from '@/constants/stations';
import { LINE_COLORS, LINE_IDS } from '@/constants/lines';
import { TRANSFER_WALKING_MINUTES } from '@/constants/config';

export function calculateRoute(fromName: string, toName: string): Route | null {
  // 태릉입구(6호선) → 약수(환승) → 매봉(3호선) 경로
  // 6호선에서 태릉입구→약수 방향은 index가 감소하는 방향 (35→23)

  const line6From = LINE_6_STATIONS.find(s => s.name === fromName);
  const line6Transfer = LINE_6_STATIONS.find(s => s.name === '약수');
  const line3Transfer = LINE_3_STATIONS.find(s => s.name === '약수');
  const line3To = LINE_3_STATIONS.find(s => s.name === toName);

  if (!line6From || !line6Transfer || !line3Transfer || !line3To) {
    return null;
  }

  // 6호선 구간: 태릉입구(idx:35) → 약수(idx:23) - index 감소 = 상행(내선순환)
  const segment1Stations = getStationsBetween(fromName, '약수', '6호선');
  // 3호선 구간: 약수(idx:24) → 매봉(idx:34) - index 증가 = 하행(오금방면)
  const segment2Stations = getStationsBetween('약수', toName, '3호선');

  const segment1: RouteSegment = {
    line: '6호선',
    lineId: LINE_IDS['6호선'],
    lineColor: LINE_COLORS['6호선'],
    direction: 'up', // 내선순환 (index 감소 방향)
    fromStation: line6From,
    toStation: line6Transfer,
    stations: segment1Stations,
    estimatedMinutes: (segment1Stations.length - 1) * 2, // 역당 약 2분
  };

  const segment2: RouteSegment = {
    line: '3호선',
    lineId: LINE_IDS['3호선'],
    lineColor: LINE_COLORS['3호선'],
    direction: 'down', // 오금 방면 (index 증가 방향)
    fromStation: line3Transfer,
    toStation: line3To,
    stations: segment2Stations,
    estimatedMinutes: (segment2Stations.length - 1) * 2,
  };

  const transfer: TransferInfo = {
    station: line6Transfer,
    fromLine: '6호선',
    toLine: '3호선',
    walkingMinutes: TRANSFER_WALKING_MINUTES['약수'] || 3,
  };

  const totalStations = (segment1Stations.length - 1) + (segment2Stations.length - 1);

  return {
    segments: [segment1, segment2],
    transfers: [transfer],
    totalStations,
    totalEstimatedMinutes: segment1.estimatedMinutes + transfer.walkingMinutes + segment2.estimatedMinutes,
  };
}

// 현재 추적 중인 열차의 진행 상황 계산
export interface TrackingProgress {
  currentSegmentIndex: number;
  currentStationName: string;
  trainStatus: string; // '0'=진입, '1'=도착, '2'=출발
  stationsPassed: number;
  stationsRemaining: number;
  progress: number; // 0~100
  isTransferring: boolean;
  statusMessage: string;
  eta: number | null; // 도착 예정 초
}

export function calculateProgress(
  route: Route,
  currentStation: string,
  trainStatus: string,
  segmentIndex: number,
  isTransferring: boolean,
): TrackingProgress {
  let stationsPassed = 0;

  // 완료된 구간의 역 수
  for (let i = 0; i < segmentIndex; i++) {
    stationsPassed += route.segments[i].stations.length - 1;
  }

  // 현재 구간에서 지나온 역 수
  if (!isTransferring && segmentIndex < route.segments.length) {
    const currentSegment = route.segments[segmentIndex];
    const stationIdx = currentSegment.stations.findIndex(s => s.name === currentStation);
    if (stationIdx !== -1) {
      stationsPassed += stationIdx;
    }
  }

  // trainSttus 기반 미세 조정
  const statusOffset: Record<string, number> = { '0': 0.3, '1': 0.5, '2': 0.8 };
  const offset = statusOffset[trainStatus] || 0;

  const progress = Math.min(100, ((stationsPassed + offset) / route.totalStations) * 100);
  const stationsRemaining = route.totalStations - stationsPassed;

  // 상태 메시지 생성
  let statusMessage = '';
  if (isTransferring) {
    statusMessage = '약수역에서 3호선으로 환승하세요!';
  } else {
    const statusMessages: Record<string, string> = {
      '0': `열차가 ${currentStation}역에 들어가고 있어요!`,
      '1': `${currentStation}역에 도착했어요!`,
      '2': `${currentStation}역을 출발했어요!`,
    };
    statusMessage = statusMessages[trainStatus] || `${currentStation} 부근을 지나고 있어요`;
  }

  return {
    currentSegmentIndex: segmentIndex,
    currentStationName: currentStation,
    trainStatus,
    stationsPassed,
    stationsRemaining,
    progress,
    isTransferring,
    statusMessage,
    eta: null,
  };
}
