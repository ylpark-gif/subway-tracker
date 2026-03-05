export interface TrainPosition {
  subwayId: string;
  subwayNm: string;
  statnId: string;
  statnNm: string;
  trainNo: string;
  lastStnId: string;
  lastStnNm: string;
  recptnDt: string;
  updnLine: string; // "0"=상행/내선, "1"=하행/외선
  statnTid: string;
  statnTnm: string;
  trainSttus: string; // "0"=진입, "1"=도착, "2"=출발
  directAt: string; // "0"=일반, "1"=급행
  lstcarAt: string; // "0"=일반, "1"=막차
}

export interface ArrivalInfo {
  subwayId: string;
  updnLine: string;
  trainLineNm: string;
  statnFid: string;
  statnTid: string;
  statnId: string;
  statnNm: string;
  btrainNo: string;
  bstatnId: string;
  bstatnNm: string;
  arvlMsg2: string;
  arvlMsg3: string;
  arvlCd: string;
  barvlDt: string; // 도착 예정 초
  recptnDt: string;
  btrainSttus: string;
}
