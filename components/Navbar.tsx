"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ forceOpaque = false }: { forceOpaque?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        // Check initially too
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isOpaque = scrolled || forceOpaque;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isOpaque ? "bg-white/90 backdrop-blur-md shadow-sm py-4 text-black" : "bg-transparent py-6 text-white"}`}>
            <div className="container flex items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-2">
                    {/* Using the logo provided. Adjust sizes as needed. */}
                    <div className={`relative ${isOpaque ? "h-20 w-60" : "h-24 w-64"}`}>
                        <Image
                            src={isOpaque ? "/images/logo_black.png" : "/images/logo_white.png"}
                            alt="The Oloja Foundation"
                            fill
                            className="object-contain object-left"
                            sizes="(max-width: 768px) 200px, 300px"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="hover:text-amber-500 transition-colors font-medium">Home</Link>
                    <Link href="/about" className="hover:text-amber-500 transition-colors font-medium">About</Link>
                    <Link href="/events" className="hover:text-amber-500 transition-colors font-medium">Events</Link>
                    <Link href="/activities" className="hover:text-amber-500 transition-colors font-medium">Activities</Link>
                    <Link href="/contact" className="hover:text-amber-500 transition-colors font-medium">Contact</Link>
                    <Link href="/donate" className="btn btn-primary px-6 py-2 rounded-full">DONATE NOW</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            y: 0,
                            transition: {
                                duration: 0.5,
                                ease: [0.16, 1, 0.3, 1]
                            }
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            y: -20,
                            transition: {
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1]
                            }
                        }}
                        className="md:hidden bg-white text-black absolute top-full left-0 right-0 overflow-hidden shadow-xl border-t border-gray-100"
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                                }
                            }}
                            className="flex flex-col gap-4 p-8"
                        >
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "/about" },
                                { name: "Events", href: "/events" },
                                { name: "Activities", href: "/activities" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <motion.div
                                    key={item.name}
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-bold hover:text-amber-600 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                            >
                                <Link
                                    href="/donate"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-amber-500 text-black text-center py-4 rounded-none font-bold uppercase tracking-widest block mt-4 shadow-lg active:scale-95 transition-transform"
                                >
                                    Donate Now
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
