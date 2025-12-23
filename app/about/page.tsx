"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Heart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="bg-gray-900 text-white pt-40 pb-20 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Building a community where everyone receives the support and empowerment they need to thrive.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 px-4 md:px-8">
                <div className="container mx-auto max-w-4xl space-y-16">

                    {/* Who We Are */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                            <Users className="text-amber-500" /> Who We Are
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            The Oloja Foundation is a dedicated Non-Governmental Organization (NGO) committed to supporting and empowering people through education, essential resources, and life-changing opportunities. We aim to provide a safety net for those in need, creating concrete avenues for personal and community growth. By connecting individuals to scholarships, grants, and gainful employment, we strive to lift communities out of poverty and hopelessness. Our consistent outreaches ensure we make a tangible, real-time impact in the lives of the people we serve.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                                <Target className="text-amber-500" /> Our Mission
                            </h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-500 font-bold">•</span>
                                    To meet critical needs through the provision of food, quality education, and essential resources.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-500 font-bold">•</span>
                                    To empower individuals by providing skills acquisition programs and connecting them to career opportunities.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-500 font-bold">•</span>
                                    To conduct consistent community outreaches that directly improve daily living standards.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-500 font-bold">•</span>
                                    To build a resilient community focused on creating transparent and lasting social impact.
                                </li>
                            </ul>
                        </div>

                        {/* Vision */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                                <Heart className="text-amber-500" /> Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                To build a compassionate world where every person has access to the support and empowerment they need to realize their full potential. We envision a society where barriers to growth are removed, and communities thrive through mutual support and shared resources.
                            </p>
                            <div className="bg-amber-100 p-4 rounded-lg">
                                <p className="text-amber-800 font-medium italic">
                                    "A home for everyone."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Promise */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                            <ShieldCheck className="text-amber-500" /> Our Promise
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We promise to remain transparent, dedicated, and service-oriented in all our endeavors. Whether it&apos;s through providing a meal, funding a scholarship, or offering a grant, our goal is to reflect care and love to everyone we serve. We are committed to using every resource efficiently to ensure the maximum positive impact on our community.
                        </p>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
