export interface Station {
  name: string;
  code: string;
  line: string;
  index: number; // 노선 내 순서
}

export interface StationCoord {
  name: string;
  lat: number;
  lng: number;
}
