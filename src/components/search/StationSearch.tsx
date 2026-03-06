'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouteStore } from '@/stores/routeStore';
import { LINE_6_STATIONS, LINE_3_STATIONS } from '@/constants/stations';

const ALL_STATIONS = [
  ...LINE_6_STATIONS.map(s => ({ name: s.name, line: '6호선' })),
  ...LINE_3_STATIONS.map(s => ({ name: s.name, line: '3호선' })),
];

// 중복 제거 (약수 등 환승역)
const UNIQUE_STATIONS = ALL_STATIONS.reduce<{ name: string; lines: string[] }[]>((acc, s) => {
  const existing = acc.find(a => a.name === s.name);
  if (existing) {
    if (!existing.lines.includes(s.line)) existing.lines.push(s.line);
  } else {
    acc.push({ name: s.name, lines: [s.line] });
  }
  return acc;
}, []);

const LINE_COLORS: Record<string, string> = {
  '6호선': 'bg-amber-700',
  '3호선': 'bg-orange-500',
};

function StationInput({
  label,
  value,
  onChange,
  dotColor,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  dotColor: string;
  disabled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const filtered = query
    ? UNIQUE_STATIONS.filter(s => s.name.includes(query)).slice(0, 8)
    : UNIQUE_STATIONS.slice(0, 8);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="flex-1 w-full relative" ref={ref}>
      <label className="text-xs text-gray-500 mb-1 block">{label}</label>
      <div className="relative">
        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${dotColor}`}>●</span>
        <input
          type="text"
          value={open ? query : value}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => {
            setOpen(true);
            setQuery(value);
          }}
          className="w-full pl-8 pr-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50"
          placeholder={`${label} 입력`}
          disabled={disabled}
        />
      </div>
      {open && !disabled && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-400">검색 결과 없음</div>
          ) : (
            filtered.map((s) => (
              <button
                key={s.name}
                className="w-full px-3 py-2 text-left text-sm hover:bg-blue-50 flex items-center justify-between"
                onClick={() => {
                  onChange(s.name);
                  setQuery(s.name);
                  setOpen(false);
                }}
              >
                <span>{s.name}</span>
                <span className="flex gap-1">
                  {s.lines.map(l => (
                    <span key={l} className={`text-[10px] text-white px-1.5 py-0.5 rounded ${LINE_COLORS[l]}`}>
                      {l.replace('호선', '')}
                    </span>
                  ))}
                </span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export function StationSearch() {
  const { departure, arrival, isTracking, setStations, startTracking, stopTracking } = useRouteStore();
  const [fromInput, setFromInput] = useState(departure);
  const [toInput, setToInput] = useState(arrival);

  const handleStart = () => {
    setStations(fromInput, toInput);
    startTracking();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">
      <div className="flex flex-col sm:flex-row gap-3 items-end">
        <StationInput
          label="출발역"
          value={fromInput}
          onChange={setFromInput}
          dotColor="text-blue-500"
          disabled={isTracking}
        />
        <div className="hidden sm:flex items-center pb-1 text-gray-300 text-xl">→</div>
        <StationInput
          label="도착역"
          value={toInput}
          onChange={setToInput}
          dotColor="text-red-500"
          disabled={isTracking}
        />
        <button
          onClick={isTracking ? stopTracking : handleStart}
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

      {!isTracking && (
        <p className="text-xs text-gray-400 mt-3">
          6호선, 3호선 역을 검색하세요 (환승역: 약수)
        </p>
      )}
    </div>
  );
}
