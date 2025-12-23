import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import CampaignVideo from "@/components/CampaignVideo";
import GoalAppreciation from "@/components/GoalAppreciation";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <CampaignVideo />
      <GoalAppreciation />
      <CoreValues />
      <Footer />
    </main>
  );
}
