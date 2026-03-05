'use client';

import { useState } from 'react';
import { useRouteStore } from '@/stores/routeStore';

export function StationSearch() {
  const { departure, arrival, isTracking, setStations, startTracking, stopTracking } = useRouteStore();
  const [fromInput, setFromInput] = useState(departure);
  const [toInput, setToInput] = useState(arrival);

  const handleStart = () => {
    setStations(fromInput, toInput);
    startTracking();
  };

  const handleStop = () => {
    stopTracking();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="flex flex-col sm:flex-row gap-3 items-end">
        {/* 출발역 */}
        <div className="flex-1 w-full">
          <label className="text-xs text-gray-500 mb-1 block">출발역</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">●</span>
            <input
              type="text"
              value={fromInput}
              onChange={(e) => setFromInput(e.target.value)}
              className="w-full pl-8 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
              placeholder="출발역 입력"
              disabled={isTracking}
            />
          </div>
        </div>

        {/* 화살표 */}
        <div className="hidden sm:flex items-center pb-1 text-gray-300 text-xl">→</div>

        {/* 도착역 */}
        <div className="flex-1 w-full">
          <label className="text-xs text-gray-500 mb-1 block">도착역</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500">●</span>
            <input
              type="text"
              value={toInput}
              onChange={(e) => setToInput(e.target.value)}
              className="w-full pl-8 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
              placeholder="도착역 입력"
              disabled={isTracking}
            />
          </div>
        </div>

        {/* 버튼 */}
        <button
          onClick={isTracking ? handleStop : handleStart}
          className={`
            px-6 py-2.5 rounded-lg text-sm font-semibold text-white whitespace-nowrap transition-all
            ${isTracking
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-lg'
            }
          `}
        >
          {isTracking ? '추적 중지' : '경로 추적 시작'}
        </button>
      </div>

      {/* 기본 경로 안내 */}
      {!isTracking && (
        <p className="text-xs text-gray-400 mt-3">
          기본 경로: 6호선 태릉입구 → 약수(환승) → 3호선 매봉
        </p>
      )}
    </div>
  );
}
