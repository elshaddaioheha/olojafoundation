import { Heart, HandCoins, Building2, Globe } from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Sharing",
        desc: "Share feelings and spiritual to the poor, children around the world, helping them to integrate into the community.",
        link: "FIND CAMPAIGNS"
    },
    {
        icon: HandCoins,
        title: "Donation",
        desc: "A gift made by an individual or an organization to a nonprofit organization, charity or private foundation.",
        link: "MAKE A DONATION"
    },
    {
        icon: Building2,
        title: "Community",
        desc: "We help local nonprofits access the funding, tools, training, and support they need to become more.",
        link: "JOIN US"
    },
    {
        icon: Globe,
        title: "Responsibilities",
        desc: "Are you concerned about the health of our planet, and ready to do what you can to save it?",
        link: "OUR PROMISE"
    }
];

export default function CoreValues() {
    return (
        <section className="container py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-12">Our Core Values.</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {values.map((v, i) => (
                        <div key={i} className="flex flex-col items-start gap-4">
                            <div className="text-amber-500 mb-2">
                                <v.icon size={40} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-xl">{v.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">{v.desc}</p>
                            <a href="#" className="text-xs font-bold uppercase tracking-widest border-b-2 border-gray-200 pb-1 hover:border-amber-500 transition-colors">
                                {v.link}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
