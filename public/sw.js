// Service Worker for 지하철 실시간 추적 PWA

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Push 알림 수신 → 단순 표시 (서버가 반복 발송 담당)
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
    self.registration.showNotification(title, options)
  );
});

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
