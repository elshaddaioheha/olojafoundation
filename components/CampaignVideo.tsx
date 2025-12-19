"use client";

import { motion } from "framer-motion";
import InstagramEmbed from "./InstagramEmbed";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function CampaignVideo() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block bg-amber-100 text-amber-600 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-6">
                                Watch Our Story
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                See the Impact of <br />
                                <span className="text-amber-500">Our Last Campaign</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                Experience the moments that define our mission. From the streets to the orphanages, see how your support changes lives every single day.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/donate"
                                    className="btn bg-amber-500 hover:bg-amber-600 text-black font-bold px-10 py-4 rounded-xl shadow-lg transition-all active:scale-95 text-center"
                                >
                                    Support Our Next Event
                                </Link>
                                <Link
                                    href="/events"
                                    className="btn border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 rounded-xl transition-all text-center"
                                >
                                    View Upcoming Events
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
                            <InstagramEmbed url="https://www.instagram.com/p/DSTOyM3Ddop/" />

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
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
