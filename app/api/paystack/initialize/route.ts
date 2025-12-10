import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, amount, name, phone } = body;

        const secretKey = process.env.PAYSTACK_SECRET_KEY;
        if (!secretKey) {
            console.error("PAYSTACK_SECRET_KEY is missing in environment variables.");
            return NextResponse.json({ error: 'Server configuration error: Missing Payment Key' }, { status: 500 });
        }

        const origin = req.headers.get('origin');
        const callback_url = origin ? `${origin}/donate` : 'http://localhost:3000/donate';

        const params = {
            email,
            amount: amount,
            callback_url,
            metadata: {
                name,
                phone,
                custom_fields: [
                    {
                        display_name: "Name",
                        variable_name: "name",
                        value: name
                    },
                    {
                        display_name: "Phone Number",
                        variable_name: "phone",
                        value: phone
                    }
                ]
            }
        };

        console.log("Initializing Paystack payment...", { email, amount, callback_url });

        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${secretKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Paystack API Error:", data);
            return NextResponse.json({ error: data.message || 'Payment initialization failed' }, { status: response.status });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Paystack Initialization Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
