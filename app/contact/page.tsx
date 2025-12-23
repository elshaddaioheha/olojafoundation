"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to handle form submission would go here (e.g. API call)
        alert("Message sent! We will get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="bg-gray-900 text-white pt-40 pb-20 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        We&apos;d love to hear from you. Reach out to us for enquiries, partnerships, or support.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            <p className="text-gray-600 mb-8">
                                Have a question or want to get involved? Send us a message or reach out through our social channels.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Email Us</h4>
                                    <a href="mailto:theolojafoundation@gmail.com" className="text-gray-600 hover:text-amber-600 transition-colors">
                                        theolojafoundation@gmail.com
                                    </a>
                                </div>
                            </div>



                            <div className="flex items-start gap-4">
                                <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Visit Us</h4>
                                    <p className="text-gray-600">
                                        Abuja, Nigeria ; Jos, Nigeria
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="https://instagram.com/olojafoundation" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-700 transition-colors flex items-center gap-2">
                                    Instagram
                                </a>
                                <a href="https://chat.whatsapp.com/HdHp5Bvonic29juOtR6mDQ" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition-colors flex items-center gap-2">
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                <Send size={20} /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
