import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, amount, name, phone } = body;

        const params = {
            email,
            amount: amount, // already in kobo from frontend? or convert here? Let's assume frontend sends kobo or we convert. Standard is frontend sends base unit, backend handles logic, but existing code had logic. I'll stick to receiving kobo for now or handle it.
            // Actually, cleaner if frontend sends NGN and backend converts, but let's keep it simple.
            // Existing code: `amount: (customAmount ? parseInt(customAmount) : amount) * 100` -> sends kobo.
            // I will accept kobo for consistency, or NGN. Let's accept kobo.
            callback_url: `${req.headers.get('origin')}/donate`, // Dynamic callback URL
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

        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: data.message || 'Payment initialization failed' }, { status: response.status });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Paystack Initialization Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
