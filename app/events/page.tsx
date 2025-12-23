"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoalAppreciation from "@/components/GoalAppreciation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone, Mail, Instagram, CheckCircle2, Trophy, PartyPopper, Heart } from "lucide-react";
import InstagramEmbed from "@/components/InstagramEmbed";
import { motion, AnimatePresence } from "framer-motion";

const Confetti = () => {
    const pieces = Array.from({ length: 40 });
    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {pieces.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        top: "-5%",
                        left: `${Math.random() * 100}%`,
                        scale: Math.random() * 0.5 + 0.5,
                        rotate: 0,
                        opacity: 1
                    }}
                    animate={{
                        top: "105%",
                        left: `${(Math.random() * 100)}%`,
                        rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                        opacity: [1, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        ease: "easeOut",
                        repeat: 2,
                        delay: Math.random() * 2
                    }}
                    className="absolute w-3 h-3 rounded-sm shadow-sm"
                    style={{
                        backgroundColor: ['#fbbf24', '#f59e0b', '#3b82f6', '#ef4444', '#10b981', '#a855f7'][Math.floor(Math.random() * 6)]
                    }}
                />
            ))}
        </div>
    );
};

export default function EventsPage() {
    // Countdown Timer Logic
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isClient, setIsClient] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setIsClient(true);
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
    const raisedAmount = 623000;
    const percentage = (raisedAmount / targetAmount) * 100;

    useEffect(() => {
        if (isClient) {
            const timer = setTimeout(() => {
                setProgress(percentage);
                if (percentage >= 100) {
                    const confettiTimer = setTimeout(() => setShowConfetti(true), 1200);
                    return () => clearTimeout(confettiTimer);
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isClient, percentage]);

    return (
        <main className="min-h-screen bg-gray-50 overflow-x-hidden">
            <Navbar />
            <AnimatePresence>
                {showConfetti && <Confetti />}
            </AnimatePresence>

            {/* Header */}
            <section className="bg-gray-900 text-white pt-32 pb-16 px-4 md:px-8 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-20 right-10 opacity-10 pointer-events-none"
                >
                    <Trophy size={300} />
                </motion.div>

                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block bg-amber-500/20 text-amber-500 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-6"
                    >
                        Upcoming Campaign
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
                    >
                        THE IMPACT Reach
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Support THE OLOJA FOUNDATION in their upcoming campaign to bring hope and help to those in need.
                    </motion.p>
                </div>
            </section>

            <section className="py-12 px-4 md:px-8 -mt-8">
                <div className="container mx-auto max-w-5xl">

                    {/* Event Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden"
                    >
                        {/* Countdown Section */}
                        <div className="bg-amber-500 p-8 text-center text-black">
                            <h3 className="font-bold uppercase tracking-widest text-sm mb-6 opacity-80">Countdown to Event</h3>
                            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
                                {[
                                    { label: 'Days', value: timeLeft.days },
                                    { label: 'Hours', value: timeLeft.hours },
                                    { label: 'Mins', value: timeLeft.minutes },
                                    { label: 'Secs', value: timeLeft.seconds }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="text-4xl md:text-5xl font-bold">{item.value}</div>
                                        <div className="text-xs font-bold uppercase mt-1 opacity-60">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2">
                            {/* Instagram Embed Side */}
                            <div className="relative min-h-[400px] flex items-center justify-center bg-gray-50 border-r border-gray-100 p-4">
                                <InstagramEmbed url="https://www.instagram.com/p/DSTOyM3Ddop/" />
                                {percentage >= 100 && (
                                    <motion.div
                                        initial={{ scale: 0, rotate: -20 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ type: "spring", delay: 1.5 }}
                                        className="absolute top-4 left-4 bg-amber-500 text-black px-4 py-2 rounded-xl font-black text-sm shadow-xl flex items-center gap-2 z-20"
                                    >
                                        <PartyPopper size={18} /> GOAL MET!
                                    </motion.div>
                                )}
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                {/* Fundraising Progress */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-10 bg-gray-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <Trophy size={60} className="text-amber-500" />
                                    </div>
                                    <div className="font-bold text-sm uppercase tracking-widest text-amber-500 mb-2">Fundraising Goal</div>
                                    <div className="flex items-end gap-3 mb-4">
                                        <span className="text-3xl font-bold">₦{raisedAmount.toLocaleString()}</span>
                                        <span className="text-white/50 text-sm mb-1">/ ₦{targetAmount.toLocaleString()}</span>
                                    </div>

                                    {/* Progress Bar Container */}
                                    <div className="relative w-full bg-white/10 h-4 rounded-full overflow-hidden shadow-inner">
                                        <motion.div
                                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                        />
                                        {/* Animated Glow tip */}
                                        <motion.div
                                            animate={{ left: [`${progress - 5}%`, `${progress}%`] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                            className="absolute top-0 bottom-0 w-2 bg-white/30 blur-sm brightness-150"
                                            style={{ left: `${progress}%` }}
                                        />
                                    </div>

                                    <div className="flex justify-between items-center mt-3">
                                        <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-white/40 tracking-wider">
                                            <Heart size={10} className="text-amber-500 fill-amber-500" /> Humanity First
                                        </div>
                                        <div className="text-lg font-black text-amber-500">
                                            {progress.toFixed(1)}% Reached
                                        </div>
                                    </div>
                                </motion.div>

                                <div className="mb-8">
                                    <h2 className="text-2xl font-bold mb-4 text-gray-900 border-l-4 border-amber-500 pl-4">About the Campaign</h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        Help us achieve our target amount of <span className="font-bold text-gray-900">₦620,000</span>. Your contributions will directly support our planned activities to bring relief and joy to the less privileged.
                                    </p>

                                    <h4 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">Planned Activities:</h4>
                                    <ul className="space-y-3 font-medium">
                                        <li className="flex items-center gap-3 text-gray-600 bg-gray-50 border border-gray-100 p-3 rounded-xl transition-colors hover:bg-amber-50/50">
                                            <CheckCircle2 className="text-amber-500 flex-shrink-0" size={20} /> Feed the Streets
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600 bg-gray-50 border border-gray-100 p-3 rounded-xl transition-colors hover:bg-amber-50/50">
                                            <CheckCircle2 className="text-amber-500 flex-shrink-0" size={20} /> Orphanage Visit
                                        </li>
                                        <li className="flex items-center gap-3 text-gray-600 bg-gray-50 border border-gray-100 p-3 rounded-xl transition-colors hover:bg-amber-50/50">
                                            <CheckCircle2 className="text-amber-500 flex-shrink-0" size={20} /> Hospital Visit
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl shadow-sm relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform">
                                            <Heart size={80} fill="currentColor" className="text-amber-600" />
                                        </div>
                                        <h4 className="font-bold text-amber-800 mb-2 text-sm uppercase">Support the Cause</h4>
                                        <p className="text-sm text-amber-900/70 mb-4">Every extra naira helps us reach even more communities needing help.</p>
                                        <Link href="/donate" className="btn w-full bg-amber-500 hover:bg-amber-600 text-black font-bold uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all active:scale-95 text-center block relative z-10">
                                            Donate Now
                                        </Link>
                                    </div>

                                    <div className="border-t border-gray-100 pt-6">
                                        <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Connect with Us</h4>
                                        <div className="space-y-4 text-sm text-gray-500 font-medium">
                                            <a href="https://chat.whatsapp.com/HdHp5Bvonic29juOtR6mDQ" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-600 transition-colors group">
                                                <div className="p-2 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                                                    <Phone className="text-amber-600" size={16} />
                                                </div>
                                                Join our Community
                                            </a>
                                            <div className="flex items-center gap-3 group">
                                                <div className="p-2 bg-amber-50 rounded-lg">
                                                    <Mail className="text-amber-600" size={16} />
                                                </div>
                                                theolojafoundation@gmail.com
                                            </div>
                                            <div className="flex items-center gap-3 group">
                                                <div className="p-2 bg-amber-50 rounded-lg">
                                                    <Instagram className="text-amber-600" size={16} />
                                                </div>
                                                @theolojafoundation
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Social Milestone Section */}
            {percentage >= 100 && (
                <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30" />
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <div className="inline-block p-4 bg-amber-500/10 rounded-full mb-6">
                                <Trophy className="text-amber-500" size={48} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">A Shared Victory</h2>
                            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                                Our goal was ambitious, but your generosity was greater. <span className="text-white font-bold">₦623,000</span> raised is more than just a number—it&apos;s a testament to our community&apos;s heart.
                            </p>
                            <Link href="/members" className="inline-flex items-center gap-2 text-amber-500 font-bold hover:gap-4 transition-all">
                                See Donor Analytics <CheckCircle2 size={16} />
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Appreciation from Founder */}
            {percentage >= 100 && <GoalAppreciation />}

            <Footer />
        </main>
    );
}
