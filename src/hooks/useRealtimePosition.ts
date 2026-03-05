'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchRealtimePosition } from '@/services/seoulMetroApi';
import { TrainPosition } from '@/types';
import { API_CONFIG } from '@/constants/config';

export function useRealtimePosition(line: string, enabled: boolean = true) {
  return useQuery<TrainPosition[]>({
    queryKey: ['realtimePosition', line],
    queryFn: () => fetchRealtimePosition(line),
    refetchInterval: API_CONFIG.POLLING_INTERVALS.POSITION,
    enabled,
    retry: API_CONFIG.RETRY.COUNT,
    retryDelay: (attempt) => Math.min(API_CONFIG.RETRY.DELAY * 2 ** attempt, 5000),
    staleTime: 3000,
  });
}
