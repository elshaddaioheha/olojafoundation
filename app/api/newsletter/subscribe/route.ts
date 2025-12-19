import { NextResponse } from 'next/server';
import { subscribeNewsletter } from '@/app/lib/db';

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        subscribeNewsletter(email);

        return NextResponse.json({ success: true, message: 'Subscribed successfully' });
    } catch (e) {
        return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
    }
}
