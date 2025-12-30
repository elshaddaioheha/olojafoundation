"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import VideoModal from "./VideoModal";

interface VideoPlaceholderProps {
    thumbnail: string;
    title: string;
    videoUrl?: string;
    description?: string;
    label?: string;
}

export default function VideoPlaceholder({ thumbnail, title, videoUrl, description, label }: VideoPlaceholderProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 group cursor-pointer"
                onClick={() => videoUrl && setIsModalOpen(true)}
            >
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl border-4 border-white transition-all duration-500 group-hover:shadow-amber-500/20 group-hover:scale-[1.02]">
                    {/* Overlay with Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-70" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center text-black shadow-2xl relative"
                        >
                            <PlayCircle size={40} className="ml-1" />
                            {/* Ripple Effect */}
                            <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-25" />
                        </motion.div>
                    </div>

                    {/* Info Labels */}
                    {label && (
                        <div className="absolute top-6 left-6">
                            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                                {label}
                            </span>
                        </div>
                    )}

                    {/* Animated Graphic Element */}
                    <div className="absolute -bottom-1 -left-1 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/30 transition-colors" />

                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                <div className="px-4 transition-transform duration-300 group-hover:translate-x-2">
                    <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{title}</h3>
                    {description && <p className="text-gray-500 leading-relaxed max-w-md">{description}</p>}
                </div>
            </motion.div>

            {videoUrl && (
                <VideoModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    videoUrl={videoUrl}
                    title={title}
                />
            )}
        </>
    );
}
