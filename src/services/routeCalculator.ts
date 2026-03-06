import { Route, RouteSegment, TransferInfo } from '@/types';
import { SubwayLine } from '@/types/route';
import { LINE_6_STATIONS, LINE_3_STATIONS, getStationsBetween } from '@/constants/stations';
import { LINE_COLORS, LINE_IDS } from '@/constants/lines';
import { TRANSFER_WALKING_MINUTES } from '@/constants/config';

function findStationLine(name: string): SubwayLine | null {
  if (LINE_6_STATIONS.find(s => s.name === name)) return '6호선';
  if (LINE_3_STATIONS.find(s => s.name === name)) return '3호선';
  return null;
}

function getDirection(fromName: string, toName: string, line: SubwayLine): 'up' | 'down' {
  const stations = line === '6호선' ? LINE_6_STATIONS : LINE_3_STATIONS;
  const fromIdx = stations.findIndex(s => s.name === fromName);
  const toIdx = stations.findIndex(s => s.name === toName);
  // 6호선: index 감소 = 상행(응암순환), 3호선: index 감소 = 상행(대화방면)
  return fromIdx > toIdx ? 'up' : 'down';
}

export function calculateRoute(fromName: string, toName: string): Route | null {
  if (fromName === toName) return null;

  const fromLine = findStationLine(fromName);
  const toLine = findStationLine(toName);

  if (!fromLine || !toLine) return null;

  // Case 1: 동일 노선
  if (fromLine === toLine) {
    return buildSingleLineRoute(fromName, toName, fromLine);
  }

  // Case 2: 6호선 → 3호선 (약수 환승)
  if (fromLine === '6호선' && toLine === '3호선') {
    return buildTransferRoute(fromName, toName, '6호선', '3호선', '약수');
  }

  // Case 3: 3호선 → 6호선 (약수 환승)
  if (fromLine === '3호선' && toLine === '6호선') {
    return buildTransferRoute(fromName, toName, '3호선', '6호선', '약수');
  }

  // Case 4: 양쪽 노선 모두에 있는 역 (환승역이 출발/도착인 경우)
  const fromOnBoth = LINE_6_STATIONS.find(s => s.name === fromName) && LINE_3_STATIONS.find(s => s.name === fromName);
  const toOnBoth = LINE_6_STATIONS.find(s => s.name === toName) && LINE_3_STATIONS.find(s => s.name === toName);

  if (fromOnBoth) {
    // 출발역이 환승역: 도착역 노선에 맞춰 동일노선 처리
    return buildSingleLineRoute(fromName, toName, toLine);
  }
  if (toOnBoth) {
    return buildSingleLineRoute(fromName, toName, fromLine);
  }

  return null;
}

function buildSingleLineRoute(fromName: string, toName: string, line: SubwayLine): Route | null {
  const stations = line === '6호선' ? LINE_6_STATIONS : LINE_3_STATIONS;
  const from = stations.find(s => s.name === fromName);
  const to = stations.find(s => s.name === toName);
  if (!from || !to) return null;

  const segStations = getStationsBetween(fromName, toName, line);
  if (segStations.length === 0) return null;

  const direction = getDirection(fromName, toName, line);

  const segment: RouteSegment = {
    line,
    lineId: LINE_IDS[line],
    lineColor: LINE_COLORS[line],
    direction,
    fromStation: from,
    toStation: to,
    stations: segStations,
    estimatedMinutes: (segStations.length - 1) * 2,
  };

  return {
    segments: [segment],
    transfers: [],
    totalStations: segStations.length - 1,
    totalEstimatedMinutes: segment.estimatedMinutes,
  };
}

function buildTransferRoute(
  fromName: string,
  toName: string,
  fromLine: SubwayLine,
  toLine: SubwayLine,
  transferStation: string,
): Route | null {
  const fromStations = fromLine === '6호선' ? LINE_6_STATIONS : LINE_3_STATIONS;
  const toStations = toLine === '6호선' ? LINE_6_STATIONS : LINE_3_STATIONS;

  const from = fromStations.find(s => s.name === fromName);
  const transferFrom = fromStations.find(s => s.name === transferStation);
  const transferTo = toStations.find(s => s.name === transferStation);
  const to = toStations.find(s => s.name === toName);

  if (!from || !transferFrom || !transferTo || !to) return null;

  const seg1Stations = getStationsBetween(fromName, transferStation, fromLine);
  const seg2Stations = getStationsBetween(transferStation, toName, toLine);

  if (seg1Stations.length === 0 || seg2Stations.length === 0) return null;

  const segment1: RouteSegment = {
    line: fromLine,
    lineId: LINE_IDS[fromLine],
    lineColor: LINE_COLORS[fromLine],
    direction: getDirection(fromName, transferStation, fromLine),
    fromStation: from,
    toStation: transferFrom,
    stations: seg1Stations,
    estimatedMinutes: (seg1Stations.length - 1) * 2,
  };

  const segment2: RouteSegment = {
    line: toLine,
    lineId: LINE_IDS[toLine],
    lineColor: LINE_COLORS[toLine],
    direction: getDirection(transferStation, toName, toLine),
    fromStation: transferTo,
    toStation: to,
    stations: seg2Stations,
    estimatedMinutes: (seg2Stations.length - 1) * 2,
  };

  const transfer: TransferInfo = {
    station: transferFrom,
    fromLine,
    toLine,
    walkingMinutes: TRANSFER_WALKING_MINUTES[transferStation] || 3,
  };

  const totalStations = (seg1Stations.length - 1) + (seg2Stations.length - 1);

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
  trainStatus: string;
  stationsPassed: number;
  stationsRemaining: number;
  progress: number;
  isTransferring: boolean;
  statusMessage: string;
  eta: number | null;
}

export function calculateProgress(
  route: Route,
  currentStation: string,
  trainStatus: string,
  segmentIndex: number,
  isTransferring: boolean,
): TrackingProgress {
  let stationsPassed = 0;

  for (let i = 0; i < segmentIndex; i++) {
    stationsPassed += route.segments[i].stations.length - 1;
  }

  if (!isTransferring && segmentIndex < route.segments.length) {
    const currentSegment = route.segments[segmentIndex];
    const stationIdx = currentSegment.stations.findIndex(s => s.name === currentStation);
    if (stationIdx !== -1) {
      stationsPassed += stationIdx;
    }
  }

  const statusOffset: Record<string, number> = { '0': 0.3, '1': 0.5, '2': 0.8 };
  const offset = statusOffset[trainStatus] || 0;

  const progress = Math.min(100, ((stationsPassed + offset) / route.totalStations) * 100);
  const stationsRemaining = route.totalStations - stationsPassed;

  let statusMessage = '';
  if (isTransferring) {
    const transfer = route.transfers[0];
    statusMessage = transfer
      ? `${transfer.station.name}역에서 ${transfer.toLine}으로 환승하세요!`
      : '환승 중...';
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
