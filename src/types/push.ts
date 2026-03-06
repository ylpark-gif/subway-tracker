export interface SavedRoute {
  departure: string;
  arrival: string;
  departureLineId: string;
  departureDirection: string;
}

export interface PushSchedule {
  enabled: boolean;
  days: number[];
  startTimeKST: string;
  endTimeKST: string;
  intervalMinutes: number;
}

export interface SavedSubscription {
  endpoint: string;
  keys: { p256dh: string; auth: string };
  route?: SavedRoute;
  schedule?: PushSchedule;
}
