import { NextRequest, NextResponse } from 'next/server';
import { addSubscription } from '@/lib/subscriptionStore';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { route, schedule, ...subscription } = body;

  const savedSub: any = { ...subscription };
  if (route) savedSub.route = route;
  if (schedule) savedSub.schedule = schedule;

  await addSubscription(savedSub);
  return NextResponse.json({ success: true });
}
