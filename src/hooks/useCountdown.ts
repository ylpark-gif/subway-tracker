'use client';

import { useState, useEffect, useRef } from 'react';

export function useCountdown(targetSeconds: number | null) {
  const [remaining, setRemaining] = useState<number | null>(targetSeconds);
  const startTimeRef = useRef<number | null>(null);
  const initialValueRef = useRef<number | null>(null);

  useEffect(() => {
    if (targetSeconds === null || targetSeconds <= 0) {
      setRemaining(targetSeconds);
      return;
    }

    startTimeRef.current = Date.now();
    initialValueRef.current = targetSeconds;
    setRemaining(targetSeconds);

    const interval = setInterval(() => {
      if (startTimeRef.current === null || initialValueRef.current === null) return;

      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const newRemaining = Math.max(0, initialValueRef.current - elapsed);
      setRemaining(Math.round(newRemaining));

      if (newRemaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetSeconds]);

  const minutes = remaining !== null ? Math.floor(remaining / 60) : 0;
  const seconds = remaining !== null ? remaining % 60 : 0;

  return {
    remaining,
    minutes,
    seconds,
    formatted: remaining !== null
      ? `${minutes}분 ${String(seconds).padStart(2, '0')}초`
      : '--:--',
    isExpired: remaining !== null && remaining <= 0,
  };
}
