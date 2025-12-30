"use client";

import { Heart, HandCoins, Building2, Globe } from "lucide-react";
import { motion } from "framer-motion";

const values = [
    {
        icon: Heart,
        title: "Sharing",
        desc: "Share kindness and Love. Be it through donations , or simply spreading the word.",
        link: "/events",
        linkText: "FIND CAMPAIGNS"
    },
    {
        icon: HandCoins,
        title: "Donation",
        desc: "A gift made by an individual or an organization to a nonprofit organization, charity or private foundation.",
        link: "/donate",
        linkText: "MAKE A DONATION"
    },
    {
        icon: Building2,
        title: "Community",
        desc: "We help individuals with basic needs and empowerment opportunities.",
        link: "/contact",
        linkText: "JOIN US"
    },
    {
        icon: Globe,
        title: "Responsibilities",
        desc: "Are you concerned about putting smiles on people's faces? Join us.",
        link: "https://chat.whatsapp.com/HdHp5Bvonic29juOtR6mDQ",
        linkText: "JOIN US"
    }
];

export default function CoreValues() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            } as any
        }
    };

    return (
        <section className="container py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-12"
                >
                    Our Core Values.
                </motion.h3>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="flex flex-col items-start gap-4"
                        >
                            <div className="text-amber-500 mb-2">
                                <v.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-xl">{v.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">{v.desc}</p>
                            <a href={v.link} className="text-xs font-bold uppercase tracking-widest border-b-2 border-gray-200 pb-1 hover:border-amber-500 transition-colors">
                                {v.linkText}
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
