'use client';

import { Route } from '@/types';

interface StageIndicatorProps {
  route: Route;
  currentSegmentIndex: number;
  isTransferring: boolean;
}

export function StageIndicator({ route, currentSegmentIndex, isTransferring }: StageIndicatorProps) {
  const stages = [
    { label: '출발', sublabel: route.segments[0].fromStation.name, icon: '🚉' },
    ...route.transfers.map(t => ({
      label: '환승',
      sublabel: `${t.station.name} (${t.fromLine}→${t.toLine})`,
      icon: '🔄',
    })),
    { label: '도착', sublabel: route.segments[route.segments.length - 1].toStation.name, icon: '📍' },
  ];

  return (
    <div className="flex items-center justify-between w-full">
      {stages.map((stage, idx) => {
        // Simplified: first stage complete if tracking started, transfer complete if on segment 2, arrival complete if done
        const stageComplete = (() => {
          if (idx === 0) return true; // 출발은 항상 완료
          if (idx === 1) return currentSegmentIndex > 0 || isTransferring; // 환승
          return false; // 도착은 마지막
        })();

        return (
          <div key={idx} className="flex items-center">
            {idx > 0 && (
              <div className={`w-12 sm:w-20 h-0.5 mx-1 ${stageComplete ? 'bg-blue-500' : 'bg-gray-300'}`} />
            )}
            <div className="flex flex-col items-center">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm
                ${stageComplete ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}
              `}>
                {stageComplete ? '✓' : stage.icon}
              </div>
              <span className={`text-xs mt-1 ${stageComplete ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                {stage.label}
              </span>
              <span className="text-[10px] text-gray-400">{stage.sublabel}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
