"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, CheckCircle2, X, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [showAppeal, setShowAppeal] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        try {
            const res = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus("success");
                setShowAppeal(true);
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white py-20 relative overflow-hidden"
        >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />

            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-8">
                <div className="space-y-6">
                    <h4 className="font-bold text-2xl tracking-tight">The Oloja Foundation</h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        A home for everyone. We participate in providing homes and empowering communities across Nigeria through education, resources, and direct support.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors">
                            <Send size={14} className="text-white" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors">
                            <Heart size={14} className="text-white" />
                        </a>
                    </div>
                </div>

                <div>
                    <h5 className="font-bold text-lg mb-6 text-amber-500">Quick Links</h5>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> About Us</Link></li>
                        <li><Link href="/about#mission" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> Our Mission</Link></li>
                        <li><Link href="/events" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> Events</Link></li>
                        <li><Link href="/activities" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> Our Activities</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" /> Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h5 className="font-bold text-lg mb-6 text-amber-500">Contact Info</h5>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex gap-3">
                            <MapPin size={18} className="text-amber-500 shrink-0" />
                            <span>Abuja & Jos, Nigeria</span>
                        </li>
                        <li className="flex gap-3">
                            <Mail size={18} className="text-amber-500 shrink-0" />
                            <a href="mailto:theolojafoundation@gmail.com" className="hover:text-white transition-colors">theolojafoundation@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                    <h5 className="font-bold text-lg mb-4 text-amber-500">Stay Updated</h5>
                    <p className="text-xs text-gray-400 mb-4 leading-relaxed">Join our mission and get updates on our impact projects.</p>
                    <form onSubmit={handleSubscribe} className="space-y-2">
                        <div className="relative">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="bg-gray-900 border border-gray-700 px-4 py-3 text-sm w-full text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                            />
                        </div>
                        <button
                            disabled={status === "loading"}
                            className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 rounded-xl shadow-lg shadow-amber-500/10 transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            {status === "loading" ? (
                                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                            ) : (
                                "Subscribe Now"
                            )}
                        </button>
                    </form>
                    {status === "error" && (
                        <p className="text-red-400 text-[10px] mt-2 text-center font-medium">Something went wrong. Please try again.</p>
                    )}
                </div>
            </div>

            <div className="container mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-[10px] px-4 md:px-8 tracking-widest uppercase">
                &copy; {new Date().getFullYear()} The Oloja Foundation. Built with love for humanity.
            </div>

            {/* Appeal Modal */}
            <AnimatePresence>
                {showAppeal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowAppeal(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white text-gray-900 max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setShowAppeal(false)}
                                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-8 rotate-3">
                                    <Heart className="text-amber-600 fill-amber-600" size={32} />
                                </div>

                                <h3 className="text-3xl font-bold mb-4 tracking-tight">Thank you for joining us!</h3>
                                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                    <p>
                                        At <span className="text-amber-600 font-bold">The Oloja Foundation</span>, we believe that small acts of kindness create waves of change. Your presence here is the first step toward that change.
                                    </p>
                                    <p className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 font-medium italic">
                                        &quot;We invite you to be part of our mission to provide homes and empower lives—every contribution, no matter the size, brings us closer to a world where everyone has a home.&quot;
                                    </p>
                                </div>

                                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/donate"
                                        onClick={() => setShowAppeal(false)}
                                        className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold flex-1 text-center hover:bg-amber-600 hover:text-black transition-all shadow-xl shadow-black/10 active:scale-95"
                                    >
                                        Support Our Mission
                                    </Link>
                                    <button
                                        onClick={() => setShowAppeal(false)}
                                        className="px-8 py-4 rounded-2xl font-bold border border-gray-200 text-gray-500 hover:bg-gray-50 transition-all active:scale-95"
                                    >
                                        Maybe Later
                                    </button>
                                </div>

                                <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400 font-medium uppercase tracking-widest">
                                    <CheckCircle2 size={14} className="text-emerald-500" />
                                    Subscription Active
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.footer>
    );
}
