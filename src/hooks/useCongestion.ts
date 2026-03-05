'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchCongestion } from '@/services/seoulMetroApi';
import { CongestionData } from '@/types';
import { API_CONFIG } from '@/constants/config';

export function useCongestion(line: string, station: string, enabled: boolean = true) {
  return useQuery<CongestionData>({
    queryKey: ['congestion', line, station],
    queryFn: () => fetchCongestion(line, station),
    refetchInterval: API_CONFIG.POLLING_INTERVALS.CONGESTION,
    enabled: enabled && !!station,
    retry: 1,
    staleTime: 15000,
  });
}
