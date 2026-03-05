export const API_CONFIG = {
  SEOUL_API_BASE: 'http://swopenAPI.seoul.go.kr/api/subway',
  POLLING_INTERVALS: {
    POSITION: 5000,   // 5초
    ARRIVAL: 10000,   // 10초
    CONGESTION: 30000, // 30초
  },
  RETRY: {
    COUNT: 3,
    DELAY: 1000,
  },
} as const;

export const TRANSFER_WALKING_MINUTES: Record<string, number> = {
  '약수': 3, // 약수역 6호선↔3호선 환승 약 3분
};
