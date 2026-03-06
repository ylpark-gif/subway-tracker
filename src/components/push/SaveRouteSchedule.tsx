'use client';

import { useState, useEffect } from 'react';
import { useRouteStore } from '@/stores/routeStore';
import { usePushNotification } from '@/hooks/usePushNotification';
import { calculateRoute } from '@/services/routeCalculator';
import { LINE_IDS } from '@/constants/lines';

export function SaveRouteSchedule() {
  const { departure, arrival } = useRouteStore();
  const { state, subscribe, updateRouteSchedule } = usePushNotification();

  const [enabled, setEnabled] = useState(false);
  const [startTime, setStartTime] = useState('08:35');
  const [endTime, setEndTime] = useState('08:50');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('push-schedule');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setEnabled(parsed.enabled ?? false);
        setStartTime(parsed.startTime ?? '08:35');
        setEndTime(parsed.endTime ?? '08:50');
      } catch {}
    }
  }, []);

  const getRouteData = () => {
    const route = calculateRoute(departure, arrival);
    if (!route) return null;
    const seg = route.segments[0];
    const lineId = LINE_IDS[seg.line] ?? '1006';
    const direction = seg.direction === 'up' ? '상행' : '하행';
    return { departure, arrival, departureLineId: lineId, departureDirection: direction };
  };

  const handleSave = async () => {
    setSaving(true);
    const routeData = getRouteData();
    if (!routeData) {
      setSaving(false);
      return;
    }

    const schedule = {
      enabled,
      days: [1, 2, 3, 4, 5],
      startTimeKST: startTime,
      endTimeKST: endTime,
      intervalMinutes: 5,
    };

    localStorage.setItem('push-schedule', JSON.stringify({
      enabled,
      startTime,
      endTime,
    }));

    let ok = false;
    if (state === 'subscribed') {
      ok = await updateRouteSchedule(routeData, schedule);
    } else {
      ok = await subscribe(routeData, schedule);
    }

    setSaving(false);
    if (ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-700">출근 알림 설정</h3>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative w-10 h-5 rounded-full transition-colors ${
            enabled ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
              enabled ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>

      {enabled && (
        <>
          <div className="bg-blue-50 rounded-lg px-3 py-2 mb-3">
            <p className="text-sm text-blue-800 font-medium">
              {departure} → {arrival}
            </p>
            <p className="text-xs text-blue-600 mt-0.5">평일 반복 알림</p>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <label className="text-xs text-gray-500 w-8">시작</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <label className="text-xs text-gray-500 w-8">종료</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
              saved
                ? 'bg-green-500 text-white'
                : saving
                  ? 'bg-gray-200 text-gray-400'
                  : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
            }`}
          >
            {saved ? '저장 완료!' : saving ? '저장 중...' : '저장'}
          </button>

          <p className="text-[11px] text-gray-400 mt-2 text-center">
            설정 시간에 5분 간격으로 도착 알림이 옵니다
          </p>
        </>
      )}
    </div>
  );
}
