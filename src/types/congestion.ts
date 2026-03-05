export interface CongestionData {
  trainNo: string;
  stationName: string;
  lineName: string;
  congestionTrain: number; // 전체 혼잡도 %
  congestionCar: number[]; // 칸별 혼잡도 % 배열
}
