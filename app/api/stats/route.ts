import { NextResponse } from 'next/server';
import { getDonationStats } from '@/app/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const stats = getDonationStats();
        return NextResponse.json(stats);
    } catch (e) {
        return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
    }
}
