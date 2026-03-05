'use client';

import { useEffect, useMemo } from 'react';
import { useRouteStore } from '@/stores/routeStore';
import { useTrackingStore } from '@/stores/trackingStore';
import { useRealtimePosition } from '@/hooks/useRealtimePosition';
import { useRealtimeArrival } from '@/hooks/useRealtimeArrival';
import { useCongestion } from '@/hooks/useCongestion';
import { calculateProgress } from '@/services/routeCalculator';
import { StationSearch } from '@/components/search/StationSearch';
import { DeliveryStyleTracker } from '@/components/progress/DeliveryStyleTracker';
import { RouteMapView } from '@/components/route-map/RouteMapView';
import { CongestionPanel } from '@/components/congestion/CongestionPanel';
import { UpcomingTrains } from '@/components/arrival/UpcomingTrains';
import { PushNotificationToggle } from '@/components/push/PushNotificationToggle';
import { TrainPosition } from '@/types';

export default function Home() {
  const { route, isTracking } = useRouteStore();
  const { progress, setProgress, setError } = useTrackingStore();

  // 현재 추적 중인 구간
  const currentSegment = route?.segments[progress?.currentSegmentIndex ?? 0];
  const currentLine = currentSegment?.line ?? '6호선';
  const currentStation = progress?.currentStationName ?? route?.segments[0]?.fromStation.name ?? '태릉입구';

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

    const trains = segmentIndex === 0 ? line6Trains : line3Trains;
    if (!trains || trains.length === 0) return;

    // 현재 경로 방향과 일치하는 열차 필터링
    const directionCode = segment.direction === 'up' ? '0' : '1';
    const routeStationNames = segment.stations.map(s => s.name);

    const matchingTrains = trains.filter((t: TrainPosition) => {
      const matchesDirection = t.updnLine === directionCode;
      const onRoute = routeStationNames.includes(t.statnNm);
      return matchesDirection && onRoute;
    });

    if (matchingTrains.length > 0) {
      // 출발역에서 가장 가까운 열차 선택
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

  // ETA 계산
  const eta = useMemo(() => {
    if (!arrivalData || arrivalData.length === 0) return null;

    // 현재 경로 방향과 일치하는 도착 정보 찾기
    const relevantArrival = arrivalData[0];
    if (!relevantArrival) return null;

    const seconds = parseInt(relevantArrival.barvlDt, 10);
    if (isNaN(seconds)) return null;

    // recptnDt 보정
    const recptnTime = new Date(relevantArrival.recptnDt).getTime();
    const now = Date.now();
    const elapsed = Math.max(0, (now - recptnTime) / 1000);

    return Math.max(0, Math.round(seconds - elapsed));
  }, [arrivalData]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            🚇 서울 지하철 실시간 추적
          </h1>
          <p className="text-xs text-gray-400 mt-1">배달의민족처럼 내 열차를 실시간으로 확인하세요</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {/* 출발/도착역 검색 */}
        <StationSearch />

        {/* 태릉입구역 실시간 도착 정보 */}
        <UpcomingTrains
          station="태릉입구"
          targetLine="6호선"
          targetDirection="up"
          directionLabel="약수·이태원 방면"
        />

        {/* 출근 알림 설정 */}
        <PushNotificationToggle />

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
              6호선 {route.segments[0].stations.length - 1}역 + 환승 + 3호선 {route.segments[1]?.stations.length ? route.segments[1].stations.length - 1 : 0}역
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
