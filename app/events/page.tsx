"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone, Mail, Instagram, CheckCircle2 } from "lucide-react";
import InstagramEmbed from "@/components/InstagramEmbed";

export default function EventsPage() {
    // Countdown Timer Logic
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set target date to December 20, 2025 at 9:00 AM
        const targetDate = new Date("2025-12-20T09:00:00");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Progress Calculation
    const targetAmount = 620000;
    const raisedAmount = 562800;
    const percentage = Math.min((raisedAmount / targetAmount) * 100, 100);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header */}
            <section className="bg-gray-900 text-white pt-32 pb-16 px-4 md:px-8">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="inline-block bg-amber-500/20 text-amber-500 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-6">
                        Upcoming Campaign
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">THE IMPACT Reach</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Support THE OLOJA FOUNDATION in their upcoming campaign to bring hope and help to those in need.
                    </p>
                </div>
            </section>

            <section className="py-12 px-4 md:px-8 -mt-8">
                <div className="container mx-auto max-w-5xl">

                    {/* Event Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        {/* Countdown Section */}
                        <div className="bg-amber-500 p-8 text-center text-black">
                            <h3 className="font-bold uppercase tracking-widest text-sm mb-6 opacity-80">Countdown to Event</h3>
                            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold">{timeLeft.days}</div>
                                    <div className="text-xs font-bold uppercase mt-1 opacity-60">Days</div>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold">{timeLeft.hours}</div>
                                    <div className="text-xs font-bold uppercase mt-1 opacity-60">Hours</div>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold">{timeLeft.minutes}</div>
                                    <div className="text-xs font-bold uppercase mt-1 opacity-60">Mins</div>
                                </div>
                                <div>
                                    <div className="text-4xl md:text-5xl font-bold">{timeLeft.seconds}</div>
                                    <div className="text-xs font-bold uppercase mt-1 opacity-60">Secs</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2">
                            {/* Video Side */}
                            <div className="relative min-h-[400px] flex items-center justify-center bg-gray-50 border-r border-gray-100">
                                <InstagramEmbed url="https://www.instagram.com/p/DSTOyM3Ddop/" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                {/* Fundraising Progress */}
                                <div className="mb-10 bg-gray-900 rounded-2xl p-6 text-white shadow-lg">
                                    <div className="font-bold text-sm uppercase tracking-widest text-amber-500 mb-2">Fundraising Goal</div>
                                    <div className="flex items-end gap-3 mb-4">
                                        <span className="text-3xl font-bold">₦{raisedAmount.toLocaleString()}</span>
                                        <span className="text-white/50 text-sm mb-1">/ ₦{targetAmount.toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                                        <div
                                            className="bg-amber-500 h-full rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <div className="text-right text-xs font-bold mt-2 text-amber-500">{percentage.toFixed(1)}% Reached</div>
                                </div>

                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4 text-gray-900">About the Campaign</h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Help us achieve our target amount of <span className="font-bold text-gray-900">₦620,000</span>. Your contributions will directly support our planned activities to bring relief and joy to the less privileged.
                                    </p>

                                    <h4 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">Planned Activities:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg">
                                            <CheckCircle2 className="text-amber-500 flex-shrink-0" size={20} /> Feed the Streets
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg">
                                            <CheckCircle2 className="text-amber-500 flex-shrink-0" size={20} /> Orphanage Visit
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg">
                                            <CheckCircle2 className="text-amber-500 flex-shrink-0" size={20} /> Hospital Visit
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-amber-50 border border-amber-100 p-6 rounded-xl">
                                        <h4 className="font-bold text-amber-800 mb-2 text-sm uppercase">How to Donate</h4>
                                        <p className="text-sm text-amber-900/70 mb-4">Please use the Donate button below or contact us for account details.</p>
                                        <Link href="/donate" className="btn w-full bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg transition-transform active:scale-95 text-center block">
                                            Donate Now
                                        </Link>
                                    </div>

                                    <div className="border-t border-gray-100 pt-6">
                                        <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase">Connect with Us</h4>
                                        <div className="space-y-3 text-sm text-gray-500">
                                            <a href="https://chat.whatsapp.com/HdHp5Bvonic29juOtR6mDQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-600 transition-colors">
                                                <Phone className="text-amber-500" size={16} /> Join our Community
                                            </a>
                                            <div className="flex items-center gap-3">
                                                <Mail className="text-amber-500" size={16} /> theolojafoundation@gmail.com
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Instagram className="text-amber-500" size={16} /> @theolojafoundation
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
