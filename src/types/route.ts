import { Station } from './station';

export type SubwayLine = '1호선' | '2호선' | '3호선' | '4호선' | '5호선' | '6호선' | '7호선' | '8호선' | '9호선';

export interface RouteSegment {
  line: SubwayLine;
  lineId: string;
  lineColor: string;
  direction: 'up' | 'down';
  fromStation: Station;
  toStation: Station;
  stations: Station[];
  estimatedMinutes: number;
}

export interface TransferInfo {
  station: Station;
  fromLine: SubwayLine;
  toLine: SubwayLine;
  walkingMinutes: number;
}

export interface Route {
  segments: RouteSegment[];
  transfers: TransferInfo[];
  totalStations: number;
  totalEstimatedMinutes: number;
}
