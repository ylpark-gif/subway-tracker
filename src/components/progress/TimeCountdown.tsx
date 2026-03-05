'use client';

import { useCountdown } from '@/hooks/useCountdown';

interface TimeCountdownProps {
  targetSeconds: number | null;
  label?: string;
}

export function TimeCountdown({ targetSeconds, label = '도착 예정' }: TimeCountdownProps) {
  const { formatted, remaining } = useCountdown(targetSeconds);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">{label}</span>
      <span className={`
        text-lg font-bold tabular-nums
        ${remaining !== null && remaining <= 60 ? 'text-red-500' : 'text-gray-900'}
      `}>
        {formatted}
      </span>
    </div>
  );
}
