import { NextResponse } from 'next/server';
import { saveDonation } from '@/app/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');

    if (!reference) {
        return NextResponse.json({ error: 'Reference reference is required' }, { status: 400 });
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
        console.error("PAYSTACK_SECRET_KEY is missing in environment variables.");
        return NextResponse.json({ error: 'Server configuration error: Missing Payment Key' }, { status: 500 });
    }

    try {
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${secretKey}`,
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Paystack API Verification Error:", data);
            return NextResponse.json({ error: data.message || 'Verification failed' }, { status: response.status });
        }

        if (data.status && data.data.status === 'success') {
            // Save using our helper
            try {
                saveDonation({
                    reference: data.data.reference,
                    amount: data.data.amount / 100, // Convert kobo to NGN
                    email: data.data.customer.email,
                    name: data.data.metadata?.name || "Anonymous",
                    date: new Date().toISOString()
                });
            } catch (dbError) {
                console.error("Failed to save donation to DB:", dbError);
                // Don't fail the request if DB save fails, just log it.
            }
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Paystack Verification Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
