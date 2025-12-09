"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

export default function EventsPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <section className="bg-gray-900 text-white pt-40 pb-20 px-4 md:px-8 flex-grow">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="w-24 h-24 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Calendar className="text-amber-500 w-12 h-12" />
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Upcoming Events</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        Join us in our upcoming outreaches and community programs.
                    </p>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                        <h2 className="text-2xl font-bold mb-4">No events scheduled at the moment</h2>
                        <p className="text-gray-400">
                            Please check back later or follow our social media channels for updates on our latest campaigns and activities.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
