import fs from 'fs';
import path from 'path';

const SUBS_FILE = path.join(process.cwd(), '.push-subscriptions.json');
const REDIS_KEY = 'push-subscriptions';

// Upstash Redis 사용 여부 (환경변수로 판단)
function useRedis() {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function getRedis() {
  const { Redis } = await import('@upstash/redis');
  return new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });
}

export async function loadSubscriptions(): Promise<any[]> {
  if (useRedis()) {
    const redis = await getRedis();
    const data = await redis.get<any[]>(REDIS_KEY);
    return data ?? [];
  }

  try {
    if (fs.existsSync(SUBS_FILE)) {
      return JSON.parse(fs.readFileSync(SUBS_FILE, 'utf-8'));
    }
  } catch {}
  return [];
}

export async function saveSubscriptions(subs: any[]): Promise<void> {
  if (useRedis()) {
    const redis = await getRedis();
    await redis.set(REDIS_KEY, subs);
    return;
  }

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
