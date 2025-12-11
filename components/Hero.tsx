"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_bg.jpg"
                    alt="Children smiling"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="container relative z-10 text-center flex flex-col items-center">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-amber-400 font-bold tracking-widest text-sm md:text-base mb-4 uppercase"
                >
                    We're a National NGO (Non-Governmental Organization)
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                >
                    Change Everything
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="max-w-2xl text-lg md:text-xl text-gray-200 mb-10"
                >
                    You have the opportunity to impact the lives of individuals and families in need.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                    <Link
                        href="/donate"
                        className="btn border-2 border-white text-white hover:bg-white hover:text-black hover:border-white transition-all px-8 py-3 rounded-none uppercase tracking-widest text-sm"
                    >
                        Get Involved
                    </Link>
                </motion.div>
            </div>
        </section >
    );
}
