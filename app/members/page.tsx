"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MembersStats() {
    // Placeholder data - in a real app this would come from an API
    const [stats] = useState({
        totalDonations: 12500000,
        livesImpacted: 4500,
        activeVolunteers: 120,
        communitiesReached: 15,
        recentDonations: [
            { id: 1, name: "Anonymous", amount: 50000, date: "2024-10-01" },
            { id: 2, name: "John Doe", amount: 10000, date: "2024-10-02" },
            { id: 3, name: "Sarah Smith", amount: 25000, date: "2024-10-03" },
            { id: 4, name: "Community Group A", amount: 100000, date: "2024-10-05" },
        ]
    });

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-32 pb-20 container">
                <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                    <h1 className="text-3xl font-bold mb-2">Member Statistics</h1>
                    <p className="text-gray-500">Track the impact and growth of The Oloja Foundation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
                        <div className="text-gray-500 text-sm font-bold uppercase tracking-wide mb-2">Total Donations</div>
                        <div className="text-3xl font-bold">₦{stats.totalDonations.toLocaleString()}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                        <div className="text-gray-500 text-sm font-bold uppercase tracking-wide mb-2">Lives Impacted</div>
                        <div className="text-3xl font-bold">{stats.livesImpacted.toLocaleString()}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                        <div className="text-gray-500 text-sm font-bold uppercase tracking-wide mb-2">Volunteers</div>
                        <div className="text-3xl font-bold">{stats.activeVolunteers}</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                        <div className="text-gray-500 text-sm font-bold uppercase tracking-wide mb-2">Communities</div>
                        <div className="text-3xl font-bold">{stats.communitiesReached}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                                        <th className="p-3 rounded-l">Donor</th>
                                        <th className="p-3">Amount</th>
                                        <th className="p-3 rounded-r">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.recentDonations.map((d) => (
                                        <tr key={d.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                                            <td className="p-3 font-medium">{d.name}</td>
                                            <td className="p-3 text-emerald-600 font-bold">₦{d.amount.toLocaleString()}</td>
                                            <td className="p-3 text-gray-500">{d.date}</td>
                                        </tr>
                                    ))}
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
