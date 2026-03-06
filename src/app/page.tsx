'use client';

import { useEffect, useMemo } from 'react';
import { useRouteStore } from '@/stores/routeStore';
import { useTrackingStore } from '@/stores/trackingStore';
import { useRealtimePosition } from '@/hooks/useRealtimePosition';
import { useRealtimeArrival } from '@/hooks/useRealtimeArrival';
import { useCongestion } from '@/hooks/useCongestion';
import { calculateProgress } from '@/services/routeCalculator';
import { StationSearch } from '@/components/search/StationSearch';
import { RouteMapView } from '@/components/route-map/RouteMapView';
import { CongestionPanel } from '@/components/congestion/CongestionPanel';
import { UpcomingTrains } from '@/components/arrival/UpcomingTrains';
import { PushNotificationToggle } from '@/components/push/PushNotificationToggle';
import { TrainPosition } from '@/types';
import { LINE_6_STATIONS, LINE_3_STATIONS } from '@/constants/stations';

function getDirectionLabel(line: string, direction: 'up' | 'down'): string {
  if (line === '6호선') {
    return direction === 'up' ? '응암순환 방면' : '신내 방면';
  }
  return direction === 'up' ? '대화 방면' : '오금 방면';
}

function getStationLine(name: string): string {
  if (LINE_6_STATIONS.find(s => s.name === name)) return '6호선';
  if (LINE_3_STATIONS.find(s => s.name === name)) return '3호선';
  return '6호선';
}

export default function Home() {
  const { departure, route, isTracking } = useRouteStore();
  const { progress, setProgress } = useTrackingStore();

  // 첫 번째 세그먼트 기준 방향
  const firstSegment = route?.segments[0];
  const departureLine = firstSegment?.line ?? getStationLine(departure);
  const departureDirection = firstSegment?.direction ?? 'up';

  // 현재 추적 중인 구간
  const currentSegment = route?.segments[progress?.currentSegmentIndex ?? 0];
  const currentLine = currentSegment?.line ?? departureLine;
  const currentStation = progress?.currentStationName ?? route?.segments[0]?.fromStation.name ?? departure;

  // 실시간 열차 위치 폴링 (5초)
  const { data: line6Trains } = useRealtimePosition('6호선', isTracking);
  const { data: line3Trains } = useRealtimePosition('3호선', isTracking);

  // 실시간 도착 정보 폴링 (10초)
  const { data: arrivalData } = useRealtimeArrival(currentStation, isTracking);

  // 칸별 혼잡도 (30초)
  const { data: congestion, isLoading: congestionLoading } = useCongestion(
    currentLine, currentStation, isTracking
  );

  // 열차 위치 업데이트 처리
  useEffect(() => {
    if (!isTracking || !route) return;

    const segmentIndex = progress?.currentSegmentIndex ?? 0;
    const segment = route.segments[segmentIndex];
    if (!segment) return;

    const trains = segment.line === '6호선' ? line6Trains : line3Trains;
    if (!trains || trains.length === 0) return;

    const directionCode = segment.direction === 'up' ? '0' : '1';
    const routeStationNames = segment.stations.map(s => s.name);

    const matchingTrains = trains.filter((t: TrainPosition) => {
      const matchesDirection = t.updnLine === directionCode;
      const onRoute = routeStationNames.includes(t.statnNm);
      return matchesDirection && onRoute;
    });

    if (matchingTrains.length > 0) {
      const fromIdx = segment.stations.findIndex(s => s.name === segment.fromStation.name);
      let bestTrain = matchingTrains[0];
      let bestDistance = Infinity;

      for (const train of matchingTrains) {
        const trainIdx = segment.stations.findIndex(s => s.name === train.statnNm);
        const distance = Math.abs(trainIdx - fromIdx);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestTrain = train;
        }
      }

      const newProgress = calculateProgress(
        route,
        bestTrain.statnNm,
        bestTrain.trainSttus,
        segmentIndex,
        false,
      );

      setProgress(newProgress);
    }
  }, [line6Trains, line3Trains, isTracking, route, progress?.currentSegmentIndex, setProgress]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                🚇 서울 지하철 실시간 추적
              </h1>
              <p className="text-xs text-gray-400 mt-1">출발역과 도착역을 검색해보세요</p>
            </div>
            <PushNotificationToggle />
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {/* 출발/도착역 검색 */}
        <StationSearch />

        {/* 출발역 실시간 도착 정보 */}
        <UpcomingTrains
          station={departure}
          targetLine={departureLine}
          targetDirection={departureDirection}
          directionLabel={getDirectionLabel(departureLine, departureDirection)}
        />

        {/* 노선도 시각화 */}
        {route && (
          <RouteMapView
            route={route}
            tracking={progress}
          />
        )}

        {/* 칸별 혼잡도 */}
        {isTracking && (
          <CongestionPanel
            congestion={congestion ?? null}
            isLoading={congestionLoading}
          />
        )}

        {/* 하단 정보 */}
        {route && !isTracking && (
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm">
              총 {route.totalStations}개 역 | 예상 소요시간 약 {route.totalEstimatedMinutes}분
            </p>
            <p className="text-gray-300 text-xs mt-1">
              {route.segments.map((seg, i) => (
                <span key={i}>
                  {i > 0 && ' + 환승 + '}
                  {seg.line} {seg.stations.length - 1}역
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
