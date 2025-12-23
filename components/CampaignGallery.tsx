"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const media = [
    {
        type: "image",
        url: "/images/campaign/img1.jpg",
        title: "Kubwa General Hospital Visit",
        description: "Our dedicated team arriving at Kubwa General Hospital to provide support and medical relief."
    },
    {
        type: "image",
        url: "/images/campaign/img2.jpg",
        title: "Street Outreach",
        description: "Providing essential supplies and food to individuals in our local communities."
    },
    {
        type: "image",
        url: "/images/campaign/img3.jpg",
        title: "JKSI Home for Special Needs",
        description: "Sharing love and much-needed supplies with the wonderful children at JKSI Home."
    },
    {
        type: "image",
        url: "/images/campaign/img4.jpg",
        title: "Moments of Joy",
        description: "The heartwarming smiles that drive our mission forward every single day."
    },
    {
        type: "image",
        url: "/images/campaign/img5.jpg",
        title: "Impact & Connection",
        description: "Building lasting bonds with the communities we serve through direct engagement."
    }
];

export default function CampaignGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % media.length);
    };

    const slidePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
    };

    useEffect(() => {
        const timer = setInterval(slideNext, 6000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-widest text-sm mb-4"
                        >
                            <Camera size={18} />
                            <span>On the Ground</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                        >
                            Moments from Our <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                                Latest Outreach
                            </span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-md text-lg italic"
                    >
                        "Every picture tells a story of hope, every video captures a moment of change. See the impact of your support in action."
                    </motion.p>
                </div>

                <div className="relative aspect-[16/9] md:aspect-[21/9] w-full group">
                    <div className="absolute inset-0 bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={media[currentIndex].url}
                                    alt={media[currentIndex].title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3">{media[currentIndex].title}</h3>
                                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl leading-relaxed">
                                            {media[currentIndex].description}
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="absolute inset-y-0 left-4 md:left-8 flex items-center z-10">
                        <button
                            onClick={slidePrev}
                            className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-amber-500 hover:text-black transition-all active:scale-95 group/btn shadow-xl"
                        >
                            <ChevronLeft size={24} className="group-hover/btn:-translate-x-1 transition-transform" />
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-4 md:right-8 flex items-center z-10">
                        <button
                            onClick={slideNext}
                            className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-amber-500 hover:text-black transition-all active:scale-95 group/btn shadow-xl"
                        >
                            <ChevronRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Slide Indicator */}
                    <div className="absolute top-8 right-8 z-10 flex items-center gap-3">
                        {media.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > currentIndex ? 1 : -1);
                                    setCurrentIndex(i);
                                }}
                                className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex
                                    ? "w-8 bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                                    : "w-4 bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Counter Tag */}
                    <div className="absolute top-8 left-8 z-10 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 text-sm font-bold tracking-widest">
                        {currentIndex + 1} / {media.length}
                    </div>
                </div>

                {/* Thumbnail Strip (Desktop) */}
                <div className="hidden md:grid grid-cols-5 gap-4 mt-8">
                    {media.map((item, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ y: -5 }}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`relative aspect-[16/9] rounded-2xl overflow-hidden border-2 transition-all duration-300 ${i === currentIndex ? "border-amber-500 scale-95 shadow-lg" : "border-transparent opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                                }`}
                        >
                            <Image
                                src={item.url}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}
