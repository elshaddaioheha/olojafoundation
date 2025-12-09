import Image from "next/image";

export default function Stats() {
    return (
        <section className="relative z-20 -mt-20 container mb-20 px-4 md:px-8" id="stats">
            <div className="grid grid-cols-1 lg:grid-cols-2 shadow-2xl overflow-hidden rounded-lg">

                {/* Left: Orange Info Block */}
                <div className="bg-[#EA580C] text-white p-12 md:p-16 flex flex-col justify-center">
                    <span className="uppercase text-xs font-bold tracking-widest mb-4 opacity-80">Who We Are</span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                        To build a community where people receive support and empowerment.
                    </h2>
                    <div className="text-white/90 mb-8 leading-relaxed space-y-4 text-sm md:text-base">
                        <p>
                            The Oloja Foundation is dedicated to supporting and empowering people through education, resources, and opportunities. We connect individuals to scholarships, grants, and work, creating avenues for growth.
                        </p>
                        <div>
                            <strong className="block mb-1 text-white">Our Mission</strong>
                            <ul className="list-disc pl-4 space-y-1 opacity-90">
                                <li>Subject to meet needs through food, education, and resources.</li>
                                <li>To empower people through skills and opportunities.</li>
                                <li>To run consistent outreaches that improve daily living.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center font-bold text-xl">
                                92%
                            </div>
                            <div className="text-xs font-medium w-32 opacity-80">
                                funds go towards program and support services
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center font-bold text-xl">
                                98%
                            </div>
                            <div className="text-xs font-medium w-32 opacity-80">
                                impact in communities reached
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Image/Quote Block */}
                <div className="relative bg-gray-100 min-h-[500px]">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/founder.jpg"
                            alt="Oloja Fatima"
                            fill
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    </div>

                    {/* Bio Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white z-10">
                        <p className="text-lg md:text-xl font-serif italic mb-6 leading-relaxed opacity-90">
                            &quot;Oloja Fatima is a 400-level medical student at Bingham University and the founder of The Oloja Foundation. Beyond medicine, she has explored various businesses, gaining experience and trust from many. She brings the values of transparency, dedication, and service to the foundation. A devoted follower of God, she intends for the foundation to reflect His love and care to everyone it serves.&quot;
                        </p>
                        <div>
                            <div className="text-xl font-bold text-amber-500">Oloja Fatima</div>
                            <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Founder & Medical Student</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

