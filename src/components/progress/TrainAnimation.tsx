'use client';

import { motion } from 'framer-motion';

interface TrainAnimationProps {
  progress: number; // 0~100
}

export function TrainAnimation({ progress }: TrainAnimationProps) {
  return (
    <motion.div
      className="absolute top-1/2 z-20"
      style={{ left: `${progress}%` }}
      animate={{ left: `${progress}%` }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        <span className="text-2xl drop-shadow-md">🚇</span>
      </div>
    </motion.div>
  );
}
