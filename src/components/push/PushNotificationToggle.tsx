'use client';

import { usePushNotification } from '@/hooks/usePushNotification';
import { useState } from 'react';

export function PushNotificationToggle() {
  const { state, subscribe, unsubscribe, testNotification } = usePushNotification();
  const [testing, setTesting] = useState(false);

  if (state === 'loading') return null;
  if (state === 'unsupported') return null;

  const handleToggle = async () => {
    if (state === 'subscribed') {
      await unsubscribe();
    } else {
      await subscribe();
    }
  };

  const handleTest = async () => {
    setTesting(true);
    await testNotification();
    setTesting(false);
  };

  return (
    <div className="flex items-center justify-between py-3 px-4 bg-white rounded-xl border border-gray-100">
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-lg">🔔</span>
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-800">출근 알림</p>
          <p className="text-xs text-gray-400">
            {state === 'denied'
              ? '브라우저 설정에서 알림을 허용해주세요'
              : state === 'subscribed'
              ? '평일 오전 8:35 열차 도착 알림'
              : '알림을 켜면 출근 시간에 자동 알림'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {state === 'subscribed' && (
          <button
            onClick={handleTest}
            disabled={testing}
            className="text-xs text-blue-500 hover:text-blue-600 disabled:text-gray-300"
          >
            {testing ? '전송중...' : '테스트'}
          </button>
        )}
        <button
          onClick={handleToggle}
          disabled={state === 'denied'}
          className={`relative w-11 h-6 rounded-full transition-colors ${
            state === 'subscribed' ? 'bg-blue-500' : 'bg-gray-300'
          } ${state === 'denied' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
              state === 'subscribed' ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
