'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0~100
  lineColor: string;
  secondaryColor?: string;
  transferPoint?: number; // 환승 지점 % (0~100)
}

export function ProgressBar({ progress, lineColor, secondaryColor, transferPoint }: ProgressBarProps) {
  return (
    <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      {/* 채워지는 바 */}
      <motion.div
        className="absolute top-0 left-0 h-full rounded-full"
        style={{
          background: secondaryColor && transferPoint && progress > transferPoint
            ? `linear-gradient(to right, ${lineColor} ${(transferPoint / progress) * 100}%, ${secondaryColor} 100%)`
            : lineColor,
        }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* 환승 지점 마커 */}
      {transferPoint && (
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-gray-400 rotate-45 z-10"
          style={{ left: `${transferPoint}%`, transform: 'translate(-50%, -50%) rotate(45deg)' }}
        />
      )}
    </div>
  );
}
