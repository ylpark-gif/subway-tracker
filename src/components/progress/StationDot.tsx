'use client';

interface StationDotProps {
  name: string;
  isPassed: boolean;
  isCurrent: boolean;
  isTransfer: boolean;
  lineColor: string;
  showLabel: boolean;
}

export function StationDot({ name, isPassed, isCurrent, isTransfer, lineColor, showLabel }: StationDotProps) {
  return (
    <div className="flex flex-col items-center relative">
      {/* 역 점 */}
      <div
        className={`
          rounded-full border-2 transition-all duration-500 relative z-10
          ${isTransfer ? 'w-5 h-5 rotate-45 rounded-sm' : 'w-3 h-3 rounded-full'}
          ${isCurrent ? 'scale-125 ring-2 ring-offset-1' : ''}
          ${isPassed ? 'border-current' : 'border-gray-300 bg-white'}
        `}
        style={{
          backgroundColor: isPassed || isCurrent ? lineColor : undefined,
          borderColor: isPassed || isCurrent ? lineColor : undefined,
          '--tw-ring-color': isCurrent ? lineColor : undefined,
        } as React.CSSProperties}
      />
      {/* 역 이름 라벨 */}
      {showLabel && (
        <span
          className={`
            text-[10px] mt-1.5 whitespace-nowrap absolute top-full
            ${isCurrent ? 'font-bold text-gray-900' : isPassed ? 'text-gray-500' : 'text-gray-400'}
          `}
        >
          {name}
        </span>
      )}
    </div>
  );
}
