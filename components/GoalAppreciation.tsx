"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles, Trophy, Star } from "lucide-react";

export default function GoalAppreciation() {
    return (
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-blue-50">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-10 left-10 text-emerald-200 opacity-20"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <Sparkles size={80} />
                </motion.div>
                <motion.div
                    className="absolute bottom-20 right-20 text-blue-200 opacity-20"
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <Star size={100} />
                </motion.div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Trophy Icon Header */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: 0.2
                    }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="bg-gradient-to-br from-yellow-400 to-amber-500 p-6 rounded-full shadow-2xl"
                        >
                            <Trophy size={60} className="text-white" />
                        </motion.div>
                        {/* Floating sparkles around trophy */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                }}
                                animate={{
                                    x: [0, Math.cos((i * Math.PI) / 4) * 60],
                                    y: [0, Math.sin((i * Math.PI) / 4) * 60],
                                    opacity: [1, 0],
                                    scale: [0, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "easeOut",
                                }}
                            >
                                <Sparkles size={20} className="text-yellow-400" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            We Did It Together!
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium">
                        🎉 Goal Achieved · Hearts United · Dreams Realized 🎉
                    </p>
                </motion.div>

                {/* Main Content Card */}
                <motion.div
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-emerald-100"
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Founder Image Section */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="relative h-[400px] md:h-auto"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 z-10" />
                            <Image
                                src="/images/founder.jpg"
                                alt="Oloja Foundation Founder"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Floating hearts */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute z-20"
                                    style={{
                                        left: `${20 + i * 15}%`,
                                        bottom: "-10%",
                                    }}
                                    animate={{
                                        y: [0, -400],
                                        opacity: [0, 1, 1, 0],
                                        scale: [0.5, 1, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 4 + i * 0.5,
                                        repeat: Infinity,
                                        delay: i * 0.8,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Heart
                                        size={24 + i * 4}
                                        className="text-red-400 fill-red-300"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Message Section */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-emerald-50/30"
                        >
                            {/* Quote Mark */}
                            <div className="text-8xl text-emerald-200 font-serif leading-none mb-4">
                                "
                            </div>

                            {/* Founder Message */}
                            <div className="mb-8 -mt-12">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9, duration: 0.6 }}
                                    className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic"
                                >
                                    <span className="font-semibold text-emerald-700 not-italic text-2xl">
                                        Words cannot fully express our gratitude.
                                    </span>
                                    <br />
                                    <br />
                                    The Oloja Foundation sincerely appreciates every single one of
                                    you—our incredible donors, dedicated volunteers, and
                                    unwavering supporters. Your generosity, compassion, and belief
                                    in our mission have transformed lives and brought hope to
                                    those who needed it most.
                                    <br />
                                    <br />
                                    <span className="font-semibold text-gray-800 not-italic">
                                        Thank you for making this happen.
                                    </span>
                                    <br />
                                    <br />
                                    Together, we've proven that when hearts unite for a worthy
                                    cause, nothing is impossible. May God bless you all
                                    abundantly, and may your kindness return to you tenfold.
                                </motion.p>

                                {/* Signature */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.1, duration: 0.6 }}
                                    className="border-t-2 border-emerald-200 pt-6 mt-6"
                                >
                                    <p className="text-gray-900 font-bold text-xl mb-1">
                                        With heartfelt gratitude,
                                    </p>
                                    <p className="text-emerald-700 font-semibold text-lg">
                                        Founder, Oloja Foundation
                                    </p>
                                    <p className="text-gray-500 text-sm mt-2">
                                        "A Home for Everyone"
                                    </p>
                                </motion.div>
                            </div>

                            {/* Closing Quote Mark */}
                            <div className="text-8xl text-emerald-200 font-serif leading-none text-right -mb-8">
                                "
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Stats/Celebration */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[
                        { icon: Heart, label: "Lives Touched", value: "100+", color: "red" },
                        { icon: Trophy, label: "Goal Achieved", value: "100%", color: "yellow" },
                        { icon: Sparkles, label: "Dreams Fulfilled", value: "Countless", color: "emerald" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 1.3 + index * 0.1,
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                            }}
                            className={`bg-white rounded-2xl p-6 shadow-lg border-2 border-${stat.color}-100 text-center hover:shadow-2xl transition-shadow duration-300`}
                        >
                            <stat.icon
                                size={48}
                                className={`mx-auto mb-4 text-${stat.color}-500`}
                            />
                            <p className="text-3xl font-bold text-gray-800 mb-2">
                                {stat.value}
                            </p>
                            <p className="text-gray-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
