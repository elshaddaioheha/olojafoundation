"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar({ forceOpaque = false }: { forceOpaque?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        // Check initially too
        setScrolled(window.scrollY > 50);

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
                    {/* Fallback text if logo is messy */}
                    {/* <span className="font-bold text-2xl tracking-tight">The Oloja Foundation</span> */}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="hover:text-amber-500 transition-colors font-medium">Home</Link>
                    <Link href="/about" className="hover:text-amber-500 transition-colors font-medium">About</Link>
                    <Link href="/events" className="hover:text-amber-500 transition-colors font-medium">Events</Link>
                    <Link href="/members" className="hover:text-amber-500 transition-colors font-medium">Members</Link>
                    <Link href="/contact" className="hover:text-amber-500 transition-colors font-medium">Contact</Link>
                    <Link href="/donate" className="btn btn-primary px-6 py-2 rounded-full">DONATE NOW</Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white text-black absolute top-full left-0 right-0 p-4 shadow-lg flex flex-col gap-4">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/events" onClick={() => setIsOpen(false)}>Events</Link>
                    <Link href="/members" onClick={() => setIsOpen(false)}>Members</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link href="/donate" onClick={() => setIsOpen(false)} className="bg-amber-500 text-black text-center py-2 rounded">Donate Now</Link>
                </div>
            )}
        </nav>
    );
}
