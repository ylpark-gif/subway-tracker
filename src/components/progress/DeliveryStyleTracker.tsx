'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Route } from '@/types';
import { TrackingProgress } from '@/services/routeCalculator';
import { ProgressBar } from './ProgressBar';
import { StationDot } from './StationDot';
import { TrainAnimation } from './TrainAnimation';
import { TimeCountdown } from './TimeCountdown';
import { StationCounter } from './StationCounter';
import { StageIndicator } from './StageIndicator';
import { LINE_COLORS } from '@/constants/lines';

interface DeliveryStyleTrackerProps {
  route: Route;
  tracking: TrackingProgress | null;
  eta: number | null;
}

export function DeliveryStyleTracker({ route, tracking, eta }: DeliveryStyleTrackerProps) {
  if (!tracking) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center text-gray-400">
        경로 추적을 시작해주세요
      </div>
    );
  }

  // 전체 경로의 모든 역 목록 (환승역은 한 번만)
  const allStations = route.segments.flatMap((seg, segIdx) => {
    if (segIdx === 0) return seg.stations;
    return seg.stations.slice(1); // 환승역 중복 제거
  });

  // 환승 지점의 퍼센트 위치
  const transferStationCount = route.segments[0].stations.length - 1;
  const transferPoint = (transferStationCount / route.totalStations) * 100;

  // 현재 역의 인덱스
  const currentStationIdx = allStations.findIndex(s => s.name === tracking.currentStationName);

  // 라벨 표시할 역 (시작, 끝, 환승, 현재, 매 3번째)
  const shouldShowLabel = (idx: number, name: string) => {
    if (idx === 0 || idx === allStations.length - 1) return true;
    if (name === '약수') return true;
    if (idx === currentStationIdx) return true;
    if (allStations.length <= 12) return true;
    return idx % 3 === 0;
  };

  const segment1Color = LINE_COLORS[route.segments[0].line];
  const segment2Color = LINE_COLORS[route.segments[1]?.line] || segment1Color;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* 상태 메시지 헤더 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tracking.statusMessage}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="px-6 py-4 text-white"
          style={{
            background: `linear-gradient(135deg, ${segment1Color}, ${segment2Color})`,
          }}
        >
          <p className="text-lg font-bold">{tracking.statusMessage}</p>
          <p className="text-sm opacity-80 mt-1">
            {route.segments[tracking.currentSegmentIndex]?.line} | {tracking.isTransferring ? '환승 중' : '운행 중'}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="p-6 space-y-6">
        {/* 3단계 인디케이터 */}
        <StageIndicator
          route={route}
          currentSegmentIndex={tracking.currentSegmentIndex}
          isTransferring={tracking.isTransferring}
        />

        {/* 프로그레스 바 + 열차 아이콘 */}
        <div className="relative pt-4 pb-8">
          <div className="relative">
            <ProgressBar
              progress={tracking.progress}
              lineColor={segment1Color}
              secondaryColor={segment2Color}
              transferPoint={transferPoint}
            />
            <TrainAnimation progress={tracking.progress} />
          </div>

          {/* 역 점들 */}
          <div className="flex justify-between mt-3 px-0">
            {allStations.map((station, idx) => {
              const stationProgress = (idx / (allStations.length - 1)) * 100;
              const isPassed = stationProgress < tracking.progress;
              const isCurrent = station.name === tracking.currentStationName;
              const isTransfer = station.name === '약수';
              const lineColor = idx <= transferStationCount ? segment1Color : segment2Color;

              return (
                <StationDot
                  key={`${station.line}-${station.name}`}
                  name={station.name}
                  isPassed={isPassed}
                  isCurrent={isCurrent}
                  isTransfer={isTransfer}
                  lineColor={lineColor}
                  showLabel={shouldShowLabel(idx, station.name)}
                />
              );
            })}
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <StationCounter
            remaining={tracking.stationsRemaining}
            total={route.totalStations}
          />
          <TimeCountdown targetSeconds={eta} />
        </div>
      </div>
    </div>
  );
}
