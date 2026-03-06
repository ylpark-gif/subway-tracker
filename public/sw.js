// Service Worker for 지하철 실시간 추적 PWA

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Push 알림 수신
self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {};
  const title = data.title || '🚇 지하철 도착 알림';
  const pushData = data.data || {};
  const options = {
    body: data.body || '열차 정보를 확인하세요',
    icon: '/icons/icon.svg',
    badge: '/icons/icon.svg',
    vibrate: [200, 100, 200],
    tag: 'subway-arrival',
    renotify: true,
    requireInteraction: true,
    data: {
      url: '/',
      departure: pushData.departure,
      arrival: pushData.arrival,
    },
  };

  event.waitUntil(
    self.registration.showNotification(title, options).then(() => {
      if (pushData.type === 'scheduled-push') {
        return scheduleFollowUps(pushData);
      }
    })
  );
});

// 후속 알림 스케줄링 (10초 간격, 같은 tag로 덮어씌워 업데이트)
async function scheduleFollowUps(config) {
  const { departure, arrival, scheduleEnd } = config;
  if (!scheduleEnd) return;

  const INTERVAL = 10 * 1000; // 10초 간격
  const [endH, endM] = scheduleEnd.split(':').map(Number);
  const now = new Date();
  const kstNow = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const endTime = new Date(kstNow);
  endTime.setUTCHours(endH - 9, endM, 0, 0);

  const remaining = endTime.getTime() - now.getTime();
  const maxUpdates = Math.min(Math.floor(remaining / INTERVAL), 90);

  for (let i = 1; i <= maxUpdates; i++) {
    setTimeout(async () => {
      try {
        const res = await fetch(`/api/realtime-arrival?station=${encodeURIComponent(departure)}`);
        const data = await res.json();
        const arrivals = data.realtimeArrivalList ?? [];

        const relevant = arrivals
          .filter(a => a.updnLine === '상행')
          .sort((a, b) => parseInt(a.barvlDt) - parseInt(b.barvlDt));

        let body = `${departure}역 접근 중인 열차 없음`;
        if (relevant.length > 0) {
          const first = relevant[0];
          const sec = parseInt(first.barvlDt);
          const min = Math.floor(sec / 60);
          const secR = sec % 60;
          body = `첫 열차: ${min}분 ${secR}초 후 (${first.arvlMsg3})`;
          if (relevant.length > 1) {
            const sec2 = parseInt(relevant[1].barvlDt);
            const min2 = Math.floor(sec2 / 60);
            body += `\n다음: ${min2}분 후 (${relevant[1].arvlMsg3})`;
          }
        }

        self.registration.showNotification(
          `🚇 ${departure}→${arrival} 열차 도착 알림`,
          {
            body,
            icon: '/icons/icon.svg',
            badge: '/icons/icon.svg',
            tag: 'subway-arrival',
            renotify: true,
            requireInteraction: true,
            data: { url: '/', departure, arrival },
          }
        );
      } catch (e) {
        console.error('Follow-up notification failed:', e);
      }
    }, i * INTERVAL);
  }
}

// 알림 클릭 시 앱 열기 (딥링크)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const departure = data.departure || '';
  const arrival = data.arrival || '';

  let url = '/';
  if (departure && arrival) {
    url = `/?from=${encodeURIComponent(departure)}&to=${encodeURIComponent(arrival)}&autotrack=1`;
  }

  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      for (const client of clients) {
        if ('focus' in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      return self.clients.openWindow(url);
    })
  );
});
