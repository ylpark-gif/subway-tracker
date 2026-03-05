'use client';

import { usePushNotification } from '@/hooks/usePushNotification';
import { useState } from 'react';

export function PushNotificationToggle() {
  const { state, subscribe, unsubscribe } = usePushNotification();
  const [showTip, setShowTip] = useState(false);

  if (state === 'loading') return null;

  const handleToggle = async () => {
    if (state === 'unsupported') {
      setShowTip(true);
      setTimeout(() => setShowTip(false), 4000);
      return;
    }
    if (state === 'denied') {
      setShowTip(true);
      setTimeout(() => setShowTip(false), 4000);
      return;
    }
    if (state === 'subscribed') {
      await unsubscribe();
    } else {
      await subscribe();
    }
  };

  return (
    <div className="relative shrink-0">
      <button
        onClick={handleToggle}
        className="flex items-center gap-1.5"
      >
        <span className="text-xs text-gray-400">
          {state === 'subscribed' ? '알림 ON' : '알림'}
        </span>
        <div
          className={`relative w-10 h-5 rounded-full transition-colors ${
            state === 'subscribed' ? 'bg-blue-500'
            : state === 'unsupported' || state === 'denied' ? 'bg-gray-200'
            : 'bg-gray-300'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
              state === 'subscribed' ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </div>
      </button>
      {showTip && (
        <div className="absolute right-0 top-8 bg-gray-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap z-50 shadow-lg">
          {state === 'unsupported'
            ? 'iOS: 홈 화면에 추가 후 사용 가능'
            : '브라우저 설정에서 알림을 허용해주세요'}
        </div>
      )}
    </div>
  );
}
