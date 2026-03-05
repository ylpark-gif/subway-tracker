'use client';

interface StationCounterProps {
  remaining: number;
  total: number;
}

export function StationCounter({ remaining, total }: StationCounterProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">남은 정거장</span>
      <span className="text-lg font-bold text-gray-900">
        {remaining}<span className="text-sm font-normal text-gray-400">/{total}개</span>
      </span>
    </div>
  );
}
