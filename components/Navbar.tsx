"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4 text-black" : "bg-transparent py-6 text-white"}`}>
            <div className="container flex items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-2">
                    {/* Using the logo provided. Adjust sizes as needed. */}
                    <div className="relative h-12 w-40">
                        <Image
                            src={scrolled ? "/images/logo_black.png" : "/images/logo_white.png"}
                            alt="The Oloja Foundation"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    {/* Fallback text if logo is messy */}
                    {/* <span className="font-bold text-2xl tracking-tight">The Oloja Foundation</span> */}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="hover:text-amber-500 transition-colors font-medium">Home</Link>
                    <Link href="/about" className="hover:text-amber-500 transition-colors font-medium">About</Link>
                    <Link href="#stats" className="hover:text-amber-500 transition-colors font-medium">Impact</Link>
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
                    <Link href="#stats" onClick={() => setIsOpen(false)}>Impact</Link>
                    <Link href="/donate" onClick={() => setIsOpen(false)} className="bg-amber-500 text-black text-center py-2 rounded">Donate Now</Link>
                </div>
            )}
        </nav>
    );
}
