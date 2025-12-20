"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Simple CountUp Hook
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = time - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function (easeOutExpo)
            const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            setCount(Math.floor(end * ease));

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
};

// Component for animated numbers
const AnimatedNumber = ({ value, prefix = "" }: { value: number, prefix?: string }) => {
    const count = useCountUp(value);
    return <span>{prefix}{count.toLocaleString()}</span>;
};

// Donation Interface
interface Donation {
    email: string;
    amount: number;
    date: string;
}

export default function MembersStats() {
    const [stats, setStats] = useState({
        totalDonations: 623000,
        recentDonations: [] as Donation[]
    });

    useEffect(() => {
        // Fetch real stats
        fetch('/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data.totalRaised) {
                    setStats({
                        totalDonations: data.totalRaised,
                        recentDonations: data.donations || []
                    });
                }
            })
            .catch(err => console.error("Failed to fetch stats", err));
    }, []);

    // Helper to mask email
    const maskEmail = (email: string) => {
        if (!email) return "Anonymous";
        const [name, domain] = email.split('@');
        return `${name.substring(0, 1)}***@${domain}`;
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar forceOpaque={true} />
            <div className="pt-32 pb-20 container px-4 md:px-12"> {/* Added more horizontal padding */}
                <div className="bg-white p-8 rounded-xl shadow-sm mb-8 mx-auto max-w-7xl"> {/* Constrained width */}
                    <h1 className="text-3xl font-bold mb-2">Member Statistics</h1>
                    <p className="text-gray-500">Track the impact and growth of The Oloja Foundation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
                        <div className="text-gray-500 text-sm font-bold uppercase tracking-wide mb-2">Total Donations</div>
                        <div className="text-3xl font-bold text-amber-600">
                            <AnimatedNumber value={stats.totalDonations} prefix="₦" />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                        <div className="text-gray-500 text-sm font-bold uppercase tracking-wide mb-2">Lives Impacted</div>
                        <div className="text-3xl font-bold text-blue-600">
                            <AnimatedNumber value={100} />+
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                        <div className="text-gray-500 text-sm font-bold uppercase tracking-wide mb-2">Volunteers</div>
                        <div className="text-3xl font-bold text-green-600">
                            <AnimatedNumber value={20} />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                        <div className="text-gray-500 text-sm font-bold uppercase tracking-wide mb-2">Communities</div>
                        <div className="text-3xl font-bold text-purple-600">
                            <AnimatedNumber value={1} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Chart Placeholder */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h3 className="font-bold text-lg mb-6">Impact Over Time</h3>
                        <div className="h-64 flex items-end justify-between gap-2 px-4 border-b border-l border-gray-200">
                            {/* CSS Bar Chart */}
                            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                                <div key={i} className="w-full bg-amber-100 hover:bg-amber-500 transition-colors rounded-t cursor-pointer relative group" style={{ height: `${h}%` }}>
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {h}%
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 text-xs text-gray-400">
                            <span>Jan</span><span>Dec</span>
                        </div>
                    </div>

                    {/* Recent Donations Table */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h3 className="font-bold text-lg mb-6">Recent Contributions</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-gray-50 text-gray-600 font-bold">
                                    <tr>
                                        <th className="p-3 rounded-l">Donor (Email)</th>
                                        <th className="p-3">Amount</th>
                                        <th className="p-3 rounded-r">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.recentDonations.length === 0 ? (
                                        <tr>
                                            <td colSpan={3} className="p-4 text-center text-gray-400">No donations yet. Be the first!</td>
                                        </tr>
                                    ) : (
                                        stats.recentDonations.map((d, i) => (
                                            <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                                                <td className="p-3 font-medium">{maskEmail(d.email)}</td>
                                                <td className="p-3 text-emerald-600 font-bold">₦{d.amount.toLocaleString()}</td>
                                                <td className="p-3 text-gray-500">{new Date(d.date).toLocaleDateString()}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
