import { NextResponse } from 'next/server';
import { saveDonation } from '@/app/lib/db';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');

    if (!reference) {
        return NextResponse.json({ error: 'Reference reference is required' }, { status: 400 });
    }

    try {
        const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: data.message || 'Verification failed' }, { status: response.status });
        }

        if (data.status && data.data.status === 'success') {
            // Save using our helper
            saveDonation({
                reference: data.data.reference,
                amount: data.data.amount / 100, // Convert kobo to NGN
                email: data.data.customer.email,
                name: data.data.metadata?.name || "Anonymous",
                date: new Date().toISOString()
            });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Paystack Verification Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
