"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Heart, PlayCircle } from "lucide-react";
import VideoPlaceholder from "@/components/VideoPlaceholder";

interface Activity {
    id: string;
    title: string;
    dateLabel: string;
    description: string;
    location: string;
    impact: string;
    quote: string;
    images: string[];
}

const activities: Activity[] = [
    {
        id: "ark-of-refuge",
        title: "Visit to Ark of Refuge Orphanage",
        dateLabel: "First Outreach",
        description: "Our first successful outreach where we spent quality time with the children at Ark of Refuge Orphanage. We provided essential supplies, shared moments of joy, and marked the beginning of our mission to impact lives. It was an emotional day filled with smiles, laughter, and a reminder of why our work is so vital.",
        location: "Ark of Refuge Orphanage",
        impact: "Many children nourished & supported",
        quote: "Seeing the smiles on these children's faces made every effort worth it. This is just the beginning.",
        images: [
            "/images/activities/ark-of-refuge/image1.jpg",
            "/images/activities/ark-of-refuge/image2.jpg",
            "/images/activities/ark-of-refuge/image3.jpg",
            "/images/activities/ark-of-refuge/image4.jpg",
            "/images/activities/ark-of-refuge/image5.jpg",
        ]
    },
    {
        id: "jks-orphanage",
        title: "Visit to JKS Orphanage",
        dateLabel: "Recent Outreach",
        description: "A heartwarming visit to JKS Orphanage for Special Needs. We were privileged to spend time with the incredible children and staff, providing essential items and sharing in a day of love and connection. Witnessing the resilience and joy of these special children strengthens our resolve to continue our support.",
        location: "JKS Orphanage for Special Needs",
        impact: "Special needs children supported & empowered",
        quote: "Every child is special and deserves to feel loved. Our visit to JKS was a profound reminder of that.",
        images: [
            "/images/activities/jks-orphanage/image1.jpg",
            "/images/activities/jks-orphanage/image2.jpg",
            "/images/activities/jks-orphanage/image3.jpg",
        ]
    },
    {
        id: "feed-the-streets",
        title: "Operation Feed the Streets",
        dateLabel: "Community Outreach",
        description: "A large-scale mission dedicated to providing hot meals and essential food packs to individuals across our local communities. Operation Feed the Streets is about more than just nutrition; it's about sharing a message of love and ensuring that no one in our reach goes to bed hungry. We spent the day connecting with people where they are, offering both physical and emotional support.",
        location: "Abuja Metropolitan Areas",
        impact: "Hundreds of individuals fed & supported",
        quote: "Nutrition is a human right. Every meal shared is a seed of hope planted in someone's heart.",
        images: [
            "/images/campaign/img2.jpg",
            "/images/campaign/img1.jpg",
            "/images/campaign/img3.jpg",
        ]
    },
    {
        id: "hospital-visit",
        title: "Medical Outreach: Kubwa General Hospital",
        dateLabel: "Hospital Visitation",
        description: "A profound outreach at Kubwa General Hospital, Abuja. Our team dedicated a full day to visiting patients across multiple wards, distributing medical essentials, nutritious support, and personal care kits. Notably, 150,000 NGN was spent paying some part of the hospital bills of a woman who had just given birth a day before (20th December, 2025). We also spent an extra 50,000 NGN on 7 mothers in the paediatrics ward on the 22nd of December, 2025. This mission aimed to provide tangible relief and stand in solidarity with those in need.",
        location: "Kubwa General Hospital, Abuja",
        impact: "Dozens of patients supported & financial bills paid",
        quote: "Healing begins with care. Our presence at Kubwa General Hospital was a testament to our belief that no one should walk the path of recovery alone.",
        images: [
            "/images/activities/hospital-visit/hero.jpg",
            "/images/campaign/img4.jpg",
            "/images/campaign/img6.jpg",
        ]
    }
];

const Slideshow = ({ images, title }: { images: string[], title: string }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000 + Math.random() * 2000); // Slight variation for each slideshow
        return () => clearInterval(timer);
    }, [images.length]);

    const next = () => setIndex((prev) => (prev + 1) % images.length);
    const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt={`${title} ${index + 1}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={prev} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={next} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all">
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === index ? "w-8 bg-amber-500" : "bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function ActivitiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar forceOpaque={true} />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gray-50 border-b border-gray-100">
                <div className="container px-4 md:px-8 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        Our Documentary
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black mb-6 text-gray-900 leading-tight"
                    >
                        Documenting Our <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">Global Impact</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Success isn't measured in naira, but in the number of lives changed. Explore our journey on the ground.
                    </motion.p>
                </div>
            </section>

            {/* Impact Stats Bar */}
            <section className="py-12 bg-white relative z-10 -mt-10">
                <div className="container px-4 md:px-8 mx-auto">
                    <div className="bg-gray-900 rounded-[2rem] p-8 md:p-12 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Persons reached", value: "90+", color: "text-amber-500" },
                            { label: "Volunteers", value: "20+", color: "text-blue-400" },
                            { label: "Communities reached", value: "3", color: "text-emerald-400" },
                            { label: "Total Outreach", value: "4", color: "text-purple-400" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>{stat.value}</div>
                                <div className="text-gray-400 text-xs uppercase font-bold tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 md:px-8 mx-auto">
                    {activities.map((activity, idx) => (
                        <div key={activity.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                                <Slideshow images={activity.images} title={activity.title} />
                            </div>

                            <div className={`space-y-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-bold uppercase tracking-wider">
                                    <Calendar size={14} /> {activity.dateLabel}
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                    {activity.title}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {activity.description}
                                </p>

                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-amber-600 font-bold">
                                            <MapPin size={18} />
                                            <span>Location</span>
                                        </div>
                                        <p className="text-gray-500 font-medium">{activity.location}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-amber-600 font-bold">
                                            <Users size={18} />
                                            <span>Impact</span>
                                        </div>
                                        <p className="text-gray-500 font-medium">{activity.impact}</p>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <blockquote className="border-l-4 border-amber-500 pl-6 italic text-gray-500 text-lg">
                                        "{activity.quote}"
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Videos Section */}
                    <div className="mt-40 mb-32">
                        <div className="text-center mb-16">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4 block"
                            >
                                Foundation Cinema
                            </motion.span>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 group">
                                Impact <span className="text-amber-500">Documentaries</span>
                            </h2>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                                Experience our journey through motion. These videos capture the essence of our missions and the stories of those we serve.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <VideoPlaceholder
                                thumbnail="/images/hero_bg.jpg"
                                title="Foundation Journey Summary"
                                videoUrl="/videos/summary/summary0.mp4"
                                description="A comprehensive look at our growth, mission, and the lives we've touched since our inception."
                                label="Main Summary"
                            />
                            <VideoPlaceholder
                                thumbnail="/images/impact_reach.jpg"
                                title="Operation Feed the Streets Highlights"
                                videoUrl="/videos/activities/operation-feed-the-streets/fts1.mp4"
                                description="Documenting our community outreach mission providing hot meals and support to the streets."
                                label="Event Highlight"
                            />
                        </div>

                        {/* Additional Clips Section */}
                        <div className="mt-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                <span className="w-8 h-[2px] bg-amber-500"></span> More Outreach Clips
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <VideoPlaceholder
                                    thumbnail="/images/campaign/img1.jpg"
                                    title="Street Feeding Clip #1"
                                    videoUrl="/videos/activities/operation-feed-the-streets/fts2.mp4"
                                    label="BTS Clip"
                                />
                                <VideoPlaceholder
                                    thumbnail="/images/campaign/img3.jpg"
                                    title="Street Feeding Clip #2"
                                    videoUrl="/videos/activities/operation-feed-the-streets/fts3.mp4"
                                    label="BTS Clip"
                                />
                                <VideoPlaceholder
                                    thumbnail="/images/activities/hospital-visit/hero.jpg"
                                    title="Hospital Outreach Highlights #1"
                                    videoUrl="/videos/activities/hospital-visit/hp1.mp4"
                                    description="Documenting our moments of impact and direct engagement with patients."
                                    label="Medical Mission"
                                />
                                <VideoPlaceholder
                                    thumbnail="/images/campaign/img4.jpg"
                                    title="Hospital Outreach Highlights #2"
                                    videoUrl="/videos/activities/hospital-visit/hp2.mp4"
                                    description="A closer look at the distribution of medical support and personal care kits."
                                    label="Mission Gallery"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 text-center border-2 border-dashed border-gray-200">
                        <Heart className="mx-auto text-amber-500 mb-6" size={48} />
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">More Activities Coming Soon</h3>
                        <p className="text-gray-500 max-w-lg mx-auto">
                            We are constantly working on new outreaches and campaigns. Follow our journey as we continue to spread love and hope.
                        </p>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
