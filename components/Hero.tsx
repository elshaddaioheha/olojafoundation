import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_bg.jpg"
                    alt="Children smiling"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="container relative z-10 text-center flex flex-col items-center">
                <span className="text-amber-400 font-bold tracking-widest text-sm md:text-base mb-4 uppercase">
                    We're a Worldwide NGO (Non-Governmental Organization)
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    change everything
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-10">
                    You have the opportunity to impact the lives of individuals and families devastated by poverty.
                </p>

                <Link
                    href="/donate"
                    className="btn border-2 border-white text-white hover:bg-white hover:text-black hover:border-white transition-all px-8 py-3 rounded-none uppercase tracking-widest text-sm"
                >
                    Get Involved
                </Link>
            </div>
        </section>
    );
}
