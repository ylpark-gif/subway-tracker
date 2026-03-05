'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchRealtimeArrival } from '@/services/seoulMetroApi';
import { ArrivalInfo } from '@/types';
import { useCountdown } from '@/hooks/useCountdown';
import { API_CONFIG } from '@/constants/config';

interface UpcomingTrainsProps {
  station: string;
  targetLine: string;
  targetDirection: 'up' | 'down';
  directionLabel: string;
}

function ArrivalCountdown({ seconds }: { seconds: number }) {
  const { minutes, seconds: secs, isExpired } = useCountdown(seconds);
  if (isExpired) return <span className="text-green-600 font-bold text-2xl">곧 도착</span>;
  return (
    <span className="tabular-nums">
      <span className="text-2xl font-bold text-gray-900">{minutes}</span>
      <span className="text-sm text-gray-400">분 </span>
      <span className="text-2xl font-bold text-gray-900">{String(secs).padStart(2, '0')}</span>
      <span className="text-sm text-gray-400">초</span>
    </span>
  );
}

export function UpcomingTrains({ station, targetLine, targetDirection, directionLabel }: UpcomingTrainsProps) {
  const { data: arrivals, isLoading } = useQuery<ArrivalInfo[]>({
    queryKey: ['upcoming-arrivals', station],
    queryFn: () => fetchRealtimeArrival(station),
    refetchInterval: API_CONFIG.POLLING_INTERVALS.ARRIVAL,
    staleTime: 5000,
  });

  const lineId = targetLine === '6호선' ? '1006' : '1003';
  const directionStr = targetDirection === 'up' ? '상행' : '하행';

  // 해당 노선 + 방향 + 아직 출발하지 않은 열차만 (arvlCd !== '2')
  const filtered = (arrivals ?? [])
    .filter((a) => a.subwayId === lineId && a.updnLine === directionStr && a.arvlCd !== '2')
    .sort((a, b) => parseInt(a.barvlDt) - parseInt(b.barvlDt));

  const getAdjustedSeconds = (arrival: ArrivalInfo) => {
    const seconds = parseInt(arrival.barvlDt, 10);
    if (isNaN(seconds)) return 0;
    const recptnTime = new Date(arrival.recptnDt.replace(' ', 'T')).getTime();
    if (isNaN(recptnTime)) return seconds;
    const elapsed = Math.max(0, (Date.now() - recptnTime) / 1000);
    return Math.max(0, Math.round(seconds - elapsed));
  };

  // 도착 시각 계산 (현재시각 + 남은초)
  const getArrivalTime = (seconds: number) => {
    const arrival = new Date(Date.now() + seconds * 1000);
    return `${String(arrival.getHours()).padStart(2, '0')}:${String(arrival.getMinutes()).padStart(2, '0')}`;
  };

  const getStatusLabel = (code: string) => {
    switch (code) {
      case '0': return { text: '진입 중', color: 'bg-blue-500 text-white' };
      case '1': return { text: '도착', color: 'bg-green-500 text-white' };
      case '5': return { text: '전역 도착', color: 'bg-purple-100 text-purple-700' };
      case '4': return { text: '전역 진입', color: 'bg-orange-100 text-orange-700' };
      case '3': return { text: '전역 출발', color: 'bg-gray-100 text-gray-600' };
      default: return { text: '접근 중', color: 'bg-gray-100 text-gray-600' };
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-5 animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-48 mb-4" />
        <div className="space-y-3">
          <div className="h-20 bg-gray-100 rounded-xl" />
          <div className="h-20 bg-gray-100 rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* 헤더 */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3.5">
        <h2 className="text-white font-bold text-base flex items-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          {station}역에 오는 열차
        </h2>
        <p className="text-blue-100 text-xs mt-0.5">{targetLine} · {directionLabel}</p>
      </div>

      {/* 열차 목록 */}
      <div className="p-4 space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-sm">
            현재 접근 중인 열차가 없습니다
          </div>
        ) : (
          filtered.map((arrival, idx) => {
            const adjustedSec = getAdjustedSeconds(arrival);
            const isFirst = idx === 0;
            const status = getStatusLabel(arrival.arvlCd);
            const arrivalTime = getArrivalTime(adjustedSec);

            return (
              <div
                key={`${arrival.btrainNo}-${idx}`}
                className={`
                  rounded-xl border p-4 transition-all
                  ${isFirst
                    ? 'border-blue-200 bg-blue-50/60 shadow-sm'
                    : 'border-gray-100 bg-gray-50/30'
                  }
                `}
              >
                {/* 상단: 라벨 */}
                <div className="flex items-center gap-2 mb-2">
                  {isFirst && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white font-bold">
                      첫 번째 열차
                    </span>
                  )}
                  {!isFirst && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">
                      다음 열차
                    </span>
                  )}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${status.color}`}>
                    {status.text}
                  </span>
                </div>

                {/* 중앙: 카운트다운 + 도착시각 */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">{station}역 도착까지</p>
                    <ArrivalCountdown seconds={adjustedSec} />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">도착 예정</p>
                    <ArrivalCountdown seconds={adjustedSec} />
                  </div>
                </div>

                {/* 하단: 현재 위치 */}
                <div className="mt-2.5 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>현재 위치: <span className="text-gray-600 font-medium">{arrival.arvlMsg3}</span></span>
                  <span>{arrival.bstatnNm}행 · #{arrival.btrainNo}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 하단 */}
      <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100">
        <p className="text-[10px] text-gray-400 text-center">
          10초마다 자동 갱신 · 서울교통공사 실시간 데이터
        </p>
      </div>
    </div>
  );
}
