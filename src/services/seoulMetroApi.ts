import { TrainPosition, ArrivalInfo, CongestionData } from '@/types';

export async function fetchRealtimePosition(line: string): Promise<TrainPosition[]> {
  const res = await fetch(`/api/realtime-position?line=${encodeURIComponent(line)}`);
  if (!res.ok) throw new Error('Failed to fetch position data');
  const data = await res.json();
  return data.realtimePositionList || [];
}

export async function fetchRealtimeArrival(station: string): Promise<ArrivalInfo[]> {
  const res = await fetch(`/api/realtime-arrival?station=${encodeURIComponent(station)}`);
  if (!res.ok) throw new Error('Failed to fetch arrival data');
  const data = await res.json();
  return data.realtimeArrivalList || [];
}

export async function fetchCongestion(line: string, station: string): Promise<CongestionData> {
  const res = await fetch(`/api/congestion?line=${encodeURIComponent(line)}&station=${encodeURIComponent(station)}`);
  if (!res.ok) throw new Error('Failed to fetch congestion data');
  return res.json();
}
