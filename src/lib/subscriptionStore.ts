const REDIS_KEY = 'push-subscriptions';

function useRedis() {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function redisGet(): Promise<any[] | null> {
  const res = await fetch(
    `${process.env.UPSTASH_REDIS_REST_URL}/get/${REDIS_KEY}`,
    {
      headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
      cache: 'no-store',
    }
  );
  const data = await res.json();
  if (!data.result) return null;

  let parsed = data.result;
  // 문자열이면 배열이 될 때까지 파싱 (이중 인코딩 대응)
  while (typeof parsed === 'string') {
    try {
      parsed = JSON.parse(parsed);
    } catch {
      return null;
    }
  }
  return Array.isArray(parsed) ? parsed : null;
}

async function redisSet(value: any[]): Promise<void> {
  await fetch(
    `${process.env.UPSTASH_REDIS_REST_URL}/set/${REDIS_KEY}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(JSON.stringify(value)),
      cache: 'no-store',
    }
  );
}

export async function loadSubscriptions(): Promise<any[]> {
  if (useRedis()) {
    const data = await redisGet();
    return data ?? [];
  }

  // 로컬 개발용 파일 기반
  const fs = await import('fs');
  const path = await import('path');
  const SUBS_FILE = path.join(process.cwd(), '.push-subscriptions.json');
  try {
    if (fs.existsSync(SUBS_FILE)) {
      return JSON.parse(fs.readFileSync(SUBS_FILE, 'utf-8'));
    }
  } catch {}
  return [];
}

export async function saveSubscriptions(subs: any[]): Promise<void> {
  if (useRedis()) {
    await redisSet(subs);
    return;
  }

  const fs = await import('fs');
  const path = await import('path');
  const SUBS_FILE = path.join(process.cwd(), '.push-subscriptions.json');
  fs.writeFileSync(SUBS_FILE, JSON.stringify(subs, null, 2));
}

export async function addSubscription(subscription: any): Promise<void> {
  const subs = await loadSubscriptions();
  const exists = subs.some((s: any) => s.endpoint === subscription.endpoint);
  if (!exists) {
    subs.push(subscription);
    await saveSubscriptions(subs);
  }
}
