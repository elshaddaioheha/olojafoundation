"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const PaystackButton = dynamic<any>(
    () => import("react-paystack").then((mod) => mod.PaystackButton as any),
    { ssr: false }
);

export default function DonatePage() {
    const [amount, setAmount] = useState(5000);
    const [customAmount, setCustomAmount] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [mounted, setMounted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const resetForm = () => {
        setAmount(5000);
        setCustomAmount("");
        setEmail("");
        setName("");
        setPhone("");
        setShowSuccess(false);
    };

    const componentProps = {
        email,
        amount: (customAmount ? parseInt(customAmount) : amount) * 100, // Paystack is in kobo
        metadata: {
            name,
            phone,
        },
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        text: "Donate Now",
        onSuccess: () => setShowSuccess(true),
        onClose: () => alert("Wait! Don't leave :("),
    };

    return (
        <main className="min-h-screen bg-gray-50 relative">
            <Navbar />

            {/* Success Splash Screen */}
            {showSuccess && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl p-8 md:p-12 max-w-lg w-full text-center shadow-2xl animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Your donation has been received. Thank you for making a difference in the lives of many.
                        </p>
                        <button
                            onClick={resetForm}
                            className="bg-amber-500 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors w-full uppercase tracking-widest"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="pt-32 pb-20 container">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-xl">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-4 text-slate-800">Make a Donation</h1>
                        <p className="text-gray-500">Your contribution helps us provide a home for everyone.</p>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-bold mb-2 text-gray-700">Select Amount (NGN)</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            {[1000, 5000, 10000, 50000].map((val) => (
                                <button
                                    key={val}
                                    onClick={() => { setAmount(val); setCustomAmount(""); }}
                                    className={`py-3 rounded-lg font-bold border-2 transition-all ${!customAmount && amount === val ? "border-amber-500 bg-amber-50 text-amber-700" : "border-gray-200 text-gray-500 hover:border-amber-300"}`}
                                >
                                    ₦{val.toLocaleString()}
                                </button>
                            ))}
                        </div>
                        <input
                            type="number"
                            placeholder="Custom Amount"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                        />
                    </div>

                    <div className="space-y-4 mb-8">
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 focus:bg-white focus:outline-none focus:border-amber-500 transition-colors"
                                placeholder="08012345678"
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        {/* We prefer using client-only rendering for Paystack to avoid hydration issues */}
                        {mounted && <PaystackButton {...componentProps} className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-widest rounded-lg shadow-lg transform active:scale-95 transition-all" />}
                    </div>

                    <p className="text-xs text-center text-gray-400 mt-6">
                        Secure payments powered by Paystack.
                    </p>
                </div>
            </div>
            <Footer />
        </main >
    );
}
