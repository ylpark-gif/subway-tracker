'use client';

import { motion } from 'framer-motion';
import { Route } from '@/types';
import { TrackingProgress } from '@/services/routeCalculator';
import { LINE_COLORS } from '@/constants/lines';

interface RouteMapViewProps {
  route: Route;
  tracking: TrackingProgress | null;
}

export function RouteMapView({ route, tracking }: RouteMapViewProps) {
  const seg1 = route.segments[0];
  const seg2 = route.segments[1];
  const seg1Color = LINE_COLORS[seg1.line];
  const seg2Color = LINE_COLORS[seg2?.line] || seg1Color;

  // 전체 역 수
  const totalStations = seg1.stations.length + (seg2 ? seg2.stations.length - 1 : 0);

  // SVG 레이아웃 계산
  const padding = 40;
  const svgWidth = 800;
  const svgHeight = 200;
  const lineY1 = 60; // 6호선 Y 위치
  const lineY2 = 140; // 3호선 Y 위치
  const transferX = padding + ((seg1.stations.length - 1) / (totalStations - 1)) * (svgWidth - padding * 2);

  // 각 역의 X 좌표 계산
  const getStationX = (segmentIndex: number, stationIndex: number) => {
    let globalIndex: number;
    if (segmentIndex === 0) {
      globalIndex = stationIndex;
    } else {
      globalIndex = seg1.stations.length - 1 + stationIndex;
    }
    return padding + (globalIndex / (totalStations - 1)) * (svgWidth - padding * 2);
  };

  // 현재 역 찾기
  const findCurrentStation = () => {
    if (!tracking) return null;
    for (let si = 0; si < route.segments.length; si++) {
      const idx = route.segments[si].stations.findIndex(s => s.name === tracking.currentStationName);
      if (idx !== -1) return { segmentIndex: si, stationIndex: idx };
    }
    return null;
  };

  const currentPos = findCurrentStation();
  const trainX = currentPos ? getStationX(currentPos.segmentIndex, currentPos.stationIndex) : null;
  const trainY = currentPos ? (currentPos.segmentIndex === 0 ? lineY1 : lineY2) : null;

  // 지나온 역 판단
  const isStationPassed = (segIdx: number, stnIdx: number) => {
    if (!tracking) return false;
    if (segIdx < tracking.currentSegmentIndex) return true;
    if (segIdx > tracking.currentSegmentIndex) return false;
    const currentSeg = route.segments[segIdx];
    const currentIdx = currentSeg.stations.findIndex(s => s.name === tracking.currentStationName);
    return stnIdx <= currentIdx;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 overflow-x-auto">
      <h3 className="text-sm font-semibold text-gray-500 mb-2 px-2">노선도</h3>
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full min-w-[600px]" preserveAspectRatio="xMidYMid meet">
        {/* 6호선 노선 */}
        <line
          x1={getStationX(0, 0)}
          y1={lineY1}
          x2={transferX}
          y2={lineY1}
          stroke={seg1Color}
          strokeWidth={4}
          strokeLinecap="round"
          opacity={0.3}
        />
        {/* 6호선 진행 바 */}
        {tracking && tracking.currentSegmentIndex === 0 && trainX && (
          <motion.line
            x1={getStationX(0, 0)}
            y1={lineY1}
            x2={trainX}
            y2={lineY1}
            stroke={seg1Color}
            strokeWidth={4}
            strokeLinecap="round"
            animate={{ x2: trainX }}
            transition={{ duration: 0.8 }}
          />
        )}
        {tracking && tracking.currentSegmentIndex > 0 && (
          <line
            x1={getStationX(0, 0)}
            y1={lineY1}
            x2={transferX}
            y2={lineY1}
            stroke={seg1Color}
            strokeWidth={4}
            strokeLinecap="round"
          />
        )}

        {/* 환승 연결선 */}
        <line
          x1={transferX}
          y1={lineY1 + 8}
          x2={transferX}
          y2={lineY2 - 8}
          stroke="#999"
          strokeWidth={2}
          strokeDasharray="4 3"
        />
        <text x={transferX + 8} y={(lineY1 + lineY2) / 2 + 4} fill="#999" fontSize={10}>환승</text>

        {/* 3호선 노선 */}
        {seg2 && (
          <>
            <line
              x1={transferX}
              y1={lineY2}
              x2={getStationX(1, seg2.stations.length - 1)}
              y2={lineY2}
              stroke={seg2Color}
              strokeWidth={4}
              strokeLinecap="round"
              opacity={0.3}
            />
            {/* 3호선 진행 바 */}
            {tracking && tracking.currentSegmentIndex === 1 && trainX && (
              <motion.line
                x1={transferX}
                y1={lineY2}
                x2={trainX}
                y2={lineY2}
                stroke={seg2Color}
                strokeWidth={4}
                strokeLinecap="round"
                animate={{ x2: trainX }}
                transition={{ duration: 0.8 }}
              />
            )}
          </>
        )}

        {/* 6호선 역 노드들 */}
        {seg1.stations.map((station, idx) => {
          const x = getStationX(0, idx);
          const passed = isStationPassed(0, idx);
          const isCurrent = tracking?.currentStationName === station.name && tracking?.currentSegmentIndex === 0;
          const isTransfer = station.name === '약수';
          const showLabel = idx === 0 || idx === seg1.stations.length - 1 || isTransfer || isCurrent || idx % 3 === 0;

          return (
            <g key={`s1-${idx}`}>
              {isTransfer ? (
                <rect
                  x={x - 6} y={lineY1 - 6} width={12} height={12}
                  transform={`rotate(45 ${x} ${lineY1})`}
                  fill={passed ? seg1Color : 'white'}
                  stroke={passed ? seg1Color : '#ccc'}
                  strokeWidth={2}
                />
              ) : (
                <circle
                  cx={x} cy={lineY1} r={isCurrent ? 5 : 3.5}
                  fill={passed ? seg1Color : 'white'}
                  stroke={passed ? seg1Color : '#ccc'}
                  strokeWidth={isCurrent ? 2.5 : 1.5}
                />
              )}
              {showLabel && (
                <text
                  x={x} y={lineY1 - 14}
                  textAnchor="middle"
                  fontSize={isCurrent ? 11 : 9}
                  fontWeight={isCurrent ? 'bold' : 'normal'}
                  fill={isCurrent ? seg1Color : passed ? '#666' : '#bbb'}
                >
                  {station.name}
                </text>
              )}
            </g>
          );
        })}

        {/* 3호선 역 노드들 */}
        {seg2?.stations.map((station, idx) => {
          const x = getStationX(1, idx);
          const passed = isStationPassed(1, idx);
          const isCurrent = tracking?.currentStationName === station.name && tracking?.currentSegmentIndex === 1;
          const isTransfer = station.name === '약수';
          const showLabel = idx === 0 || idx === seg2.stations.length - 1 || isTransfer || isCurrent || idx % 3 === 0;

          return (
            <g key={`s2-${idx}`}>
              {isTransfer ? (
                <rect
                  x={x - 6} y={lineY2 - 6} width={12} height={12}
                  transform={`rotate(45 ${x} ${lineY2})`}
                  fill={passed ? seg2Color : 'white'}
                  stroke={passed ? seg2Color : '#ccc'}
                  strokeWidth={2}
                />
              ) : (
                <circle
                  cx={x} cy={lineY2} r={isCurrent ? 5 : 3.5}
                  fill={passed ? seg2Color : 'white'}
                  stroke={passed ? seg2Color : '#ccc'}
                  strokeWidth={isCurrent ? 2.5 : 1.5}
                />
              )}
              {showLabel && (
                <text
                  x={x} y={lineY2 + 22}
                  textAnchor="middle"
                  fontSize={isCurrent ? 11 : 9}
                  fontWeight={isCurrent ? 'bold' : 'normal'}
                  fill={isCurrent ? seg2Color : passed ? '#666' : '#bbb'}
                >
                  {station.name}
                </text>
              )}
            </g>
          );
        })}

        {/* 열차 마커 */}
        {trainX && trainY && (
          <motion.g
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.text
              x={trainX}
              y={trainY}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={20}
              animate={{ x: trainX, y: trainY }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              🚇
            </motion.text>
          </motion.g>
        )}

        {/* 호선 라벨 */}
        <rect x={4} y={lineY1 - 10} width={40} height={20} rx={4} fill={seg1Color} />
        <text x={24} y={lineY1 + 4} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">
          {seg1.line}
        </text>

        {seg2 && (
          <>
            <rect x={4} y={lineY2 - 10} width={40} height={20} rx={4} fill={seg2Color} />
            <text x={24} y={lineY2 + 4} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">
              {seg2.line}
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
