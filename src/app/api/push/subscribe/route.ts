import { NextRequest, NextResponse } from 'next/server';
import { addSubscription } from '@/lib/subscriptionStore';

export async function POST(request: NextRequest) {
  const subscription = await request.json();
  await addSubscription(subscription);
  return NextResponse.json({ success: true });
}
