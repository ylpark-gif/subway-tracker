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
  const options = {
    body: data.body || '태릉입구역 열차 정보를 확인하세요',
    icon: '/icons/icon.svg',
    badge: '/icons/icon.svg',
    vibrate: [200, 100, 200],
    tag: 'subway-arrival',
    renotify: true,
    data: { url: '/' },
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

// 알림 클릭 시 앱 열기
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      for (const client of clients) {
        if (client.url.includes('/') && 'focus' in client) {
          return client.focus();
        }
      }
      return self.clients.openWindow('/');
    })
  );
});
