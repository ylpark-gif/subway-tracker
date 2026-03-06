'use client';

import { useState, useEffect, useCallback } from 'react';

type PushState = 'loading' | 'unsupported' | 'denied' | 'prompt' | 'subscribed' | 'unsubscribed';

export function usePushNotification() {
  const [state, setState] = useState<PushState>('loading');

  useEffect(() => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      setState('unsupported');
      return;
    }

    const checkState = async () => {
      const permission = Notification.permission;
      if (permission === 'denied') {
        setState('denied');
        return;
      }

      try {
        const registration = await navigator.serviceWorker.getRegistration('/sw.js');
        if (registration) {
          const subscription = await registration.pushManager.getSubscription();
          setState(subscription ? 'subscribed' : 'unsubscribed');
        } else {
          setState('unsubscribed');
        }
      } catch {
        setState('unsubscribed');
      }
    };

    checkState();
  }, []);

  const subscribe = useCallback(async (
    routeData?: { departure: string; arrival: string; departureLineId: string; departureDirection: string },
    scheduleData?: { enabled: boolean; days: number[]; startTimeKST: string; endTimeKST: string; intervalMinutes: number },
  ) => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;

      const permission = await Notification.requestPermission();
      if (permission === 'denied') {
        setState('denied');
        return false;
      }

      const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!vapidKey) {
        console.error('VAPID public key not found');
        return false;
      }

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidKey).buffer as ArrayBuffer,
      });

      const body: any = { ...subscription.toJSON() };
      if (routeData) body.route = routeData;
      if (scheduleData) body.schedule = scheduleData;

      const res = await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setState('subscribed');
        return true;
      }
      return false;
    } catch (err) {
      console.error('Push subscription failed:', err);
      return false;
    }
  }, []);

  const updateRouteSchedule = useCallback(async (
    routeData: { departure: string; arrival: string; departureLineId: string; departureDirection: string },
    scheduleData: { enabled: boolean; days: number[]; startTimeKST: string; endTimeKST: string; intervalMinutes: number },
  ) => {
    try {
      const registration = await navigator.serviceWorker.getRegistration('/sw.js');
      if (!registration) return false;
      const subscription = await registration.pushManager.getSubscription();
      if (!subscription) return false;

      const res = await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...subscription.toJSON(),
          route: routeData,
          schedule: scheduleData,
        }),
      });
      return res.ok;
    } catch {
      return false;
    }
  }, []);

  const unsubscribe = useCallback(async () => {
    try {
      const registration = await navigator.serviceWorker.getRegistration('/sw.js');
      if (registration) {
        const subscription = await registration.pushManager.getSubscription();
        if (subscription) {
          await subscription.unsubscribe();
        }
      }
      setState('unsubscribed');
      return true;
    } catch {
      return false;
    }
  }, []);

  const testNotification = useCallback(async () => {
    try {
      const res = await fetch('/api/push/send', { method: 'POST' });
      return res.ok;
    } catch {
      return false;
    }
  }, []);

  return { state, subscribe, unsubscribe, testNotification, updateRouteSchedule };
}

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
