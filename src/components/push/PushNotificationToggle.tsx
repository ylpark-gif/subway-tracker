'use client';

import { usePushNotification } from '@/hooks/usePushNotification';

export function PushNotificationToggle() {
  const { state, subscribe, unsubscribe } = usePushNotification();

  if (state === 'loading' || state === 'unsupported') return null;

  const handleToggle = async () => {
    if (state === 'subscribed') {
      await unsubscribe();
    } else {
      await subscribe();
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={state === 'denied'}
      className="flex items-center gap-1.5 shrink-0"
      title={
        state === 'denied'
          ? '브라우저 설정에서 알림을 허용해주세요'
          : state === 'subscribed'
          ? '출근 알림 켜짐 (평일 8:35)'
          : '출근 알림 켜기'
      }
    >
      <span className="text-xs text-gray-400">
        {state === 'subscribed' ? '알림 ON' : '알림'}
      </span>
      <div
        className={`relative w-10 h-5 rounded-full transition-colors ${
          state === 'subscribed' ? 'bg-blue-500' : 'bg-gray-300'
        } ${state === 'denied' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
            state === 'subscribed' ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
    </button>
  );
}
