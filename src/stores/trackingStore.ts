import { create } from 'zustand';
import { TrackingProgress } from '@/services/routeCalculator';

interface TrackingState {
  progress: TrackingProgress | null;
  selectedTrainNo: string | null;
  lastUpdated: Date | null;
  error: string | null;
  setProgress: (progress: TrackingProgress) => void;
  setSelectedTrain: (trainNo: string) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useTrackingStore = create<TrackingState>((set) => ({
  progress: null,
  selectedTrainNo: null,
  lastUpdated: null,
  error: null,

  setProgress: (progress) => set({ progress, lastUpdated: new Date(), error: null }),
  setSelectedTrain: (trainNo) => set({ selectedTrainNo: trainNo }),
  setError: (error) => set({ error }),
  reset: () => set({ progress: null, selectedTrainNo: null, lastUpdated: null, error: null }),
}));
