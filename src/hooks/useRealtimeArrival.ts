'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchRealtimeArrival } from '@/services/seoulMetroApi';
import { ArrivalInfo } from '@/types';
import { API_CONFIG } from '@/constants/config';

export function useRealtimeArrival(station: string, enabled: boolean = true) {
  return useQuery<ArrivalInfo[]>({
    queryKey: ['realtimeArrival', station],
    queryFn: () => fetchRealtimeArrival(station),
    refetchInterval: API_CONFIG.POLLING_INTERVALS.ARRIVAL,
    enabled,
    retry: API_CONFIG.RETRY.COUNT,
    staleTime: 5000,
  });
}
