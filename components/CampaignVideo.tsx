"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import VideoPlaceholder from "./VideoPlaceholder";

export default function CampaignVideo() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block bg-amber-100 text-amber-600 font-bold uppercase tracking-widest text-xs px-5 py-2.5 rounded-none mb-6">
                                Watch Our Story
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Our Journey of <br />
                                <span className="text-amber-500">Love and Impact</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                                Watch our full summary documentary to see how we've been transforming lives. From providing medical aid to feeding the streets, every moment is a step towards a better future.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/donate"
                                    className="btn bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-4 rounded-none shadow-xl transition-all active:scale-95 text-center uppercase tracking-widest text-sm"
                                >
                                    Support Our Next Event
                                </Link>
                                <Link
                                    href="/activities"
                                    className="btn border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 rounded-none transition-all text-center uppercase tracking-widest text-sm"
                                >
                                    View All Activities
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Video Embed */}
                    <div className="lg:w-1/2 w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <VideoPlaceholder
                                thumbnail="/images/hero_bg.jpg"
                                title="Watch Our 2024 Impact Story"
                                videoUrl="/videos/summary/summary0.mp4"
                                description="A glimpse into how your support is transforming communities across the nation."
                                label="Foundation Documentary"
                            />
                        </motion.div>

                        {/* Play Indicator Icon (Visual only) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                            <PlayCircle className="text-white w-20 h-20 drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
