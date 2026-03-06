import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Route } from '@/types';
import { calculateRoute } from '@/services/routeCalculator';

interface RouteState {
  departure: string;
  arrival: string;
  route: Route | null;
  isTracking: boolean;
  setStations: (departure: string, arrival: string) => void;
  startTracking: () => void;
  stopTracking: () => void;
}

export const useRouteStore = create<RouteState>()(
  persist(
    (set) => ({
      departure: '태릉입구',
      arrival: '매봉',
      route: null,
      isTracking: false,

      setStations: (departure, arrival) => {
        const route = calculateRoute(departure, arrival);
        set({ departure, arrival, route });
      },

      startTracking: () => {
        set((state) => {
          if (!state.route) {
            const route = calculateRoute(state.departure, state.arrival);
            return { route, isTracking: true };
          }
          return { isTracking: true };
        });
      },

      stopTracking: () => set({ isTracking: false }),
    }),
    {
      name: 'subway-route',
      partialize: (state) => ({
        departure: state.departure,
        arrival: state.arrival,
      }),
    }
  )
);
