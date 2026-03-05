'use client';

import { CongestionData } from '@/types';

interface CongestionPanelProps {
  congestion: CongestionData | null;
  isLoading: boolean;
}

function getCongestionColor(value: number): string {
  if (value <= 40) return '#2DB400'; // 녹색 - 여유
  if (value <= 60) return '#FFD600'; // 노란색 - 보통
  if (value <= 80) return '#FF6B00'; // 주황 - 혼잡
  return '#FF0000'; // 빨강 - 매우 혼잡
}

function getCongestionLabel(value: number): string {
  if (value <= 40) return '여유';
  if (value <= 60) return '보통';
  if (value <= 80) return '혼잡';
  return '매우혼잡';
}

export function CongestionPanel({ congestion, isLoading }: CongestionPanelProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-sm font-semibold text-gray-500 mb-4">칸별 혼잡도</h3>
        <div className="animate-pulse flex gap-1.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex-1 h-24 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (!congestion) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center text-gray-400">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">칸별 혼잡도</h3>
        <p className="text-sm">열차 선택 후 혼잡도 정보가 표시됩니다</p>
      </div>
    );
  }

  const minCar = congestion.congestionCar.indexOf(Math.min(...congestion.congestionCar));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-gray-500">칸별 혼잡도</h3>
        <span className="text-xs text-gray-400">
          전체 평균: {congestion.congestionTrain}%
        </span>
      </div>

      {/* 열차 모양 혼잡도 바 */}
      <div className="flex gap-1 items-end">
        {congestion.congestionCar.map((value, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center">
            {/* 추천 표시 */}
            {idx === minCar && (
              <span className="text-[10px] text-green-600 font-bold mb-1">추천</span>
            )}

            {/* 혼잡도 바 */}
            <div
              className={`
                w-full rounded-t-sm relative
                ${idx === 0 ? 'rounded-l-md' : ''}
                ${idx === congestion.congestionCar.length - 1 ? 'rounded-r-md' : ''}
                ${idx === minCar ? 'ring-2 ring-green-400 ring-offset-1' : ''}
              `}
              style={{
                height: `${Math.max(20, value * 0.8)}px`,
                backgroundColor: getCongestionColor(value),
                opacity: 0.85,
              }}
            />

            {/* 퍼센트 */}
            <span className="text-[10px] text-gray-600 mt-1 tabular-nums">{value}%</span>

            {/* 칸 번호 */}
            <span className="text-[10px] text-gray-400">{idx + 1}칸</span>
          </div>
        ))}
      </div>

      {/* 범례 */}
      <div className="flex gap-4 mt-4 justify-center">
        {[
          { label: '여유', color: '#2DB400', range: '~40%' },
          { label: '보통', color: '#FFD600', range: '40~60%' },
          { label: '혼잡', color: '#FF6B00', range: '60~80%' },
          { label: '매우혼잡', color: '#FF0000', range: '80%~' },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
            <span className="text-[10px] text-gray-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
