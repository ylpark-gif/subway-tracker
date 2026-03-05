import { TrainPosition, ArrivalInfo } from './train';

export interface RealtimePositionResponse {
  errorMessage: {
    status: number;
    code: string;
    message: string;
    total: number;
  };
  realtimePositionList: TrainPosition[];
}

export interface RealtimeArrivalResponse {
  errorMessage: {
    status: number;
    code: string;
    message: string;
    total: number;
  };
  realtimeArrivalList: ArrivalInfo[];
}
