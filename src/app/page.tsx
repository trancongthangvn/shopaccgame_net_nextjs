import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveTicker from "@/components/LiveTicker";
import FlashSale from "@/components/FlashSale";
import GameListings from "@/components/GameListings";
import StatsBand from "@/components/StatsBand";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import LegalSection from "@/components/LegalSection";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-4 py-2 rounded text-white z-50"
        style={{ background: "var(--purple)" }}
      >
        Bỏ qua điều hướng
      </a>

      <TopBar />
      <Navbar />
      <LiveTicker />

      <main id="main-content">
        <HeroSection />
        <FlashSale />
        <GameListings />
        <StatsBand />
        <Testimonials />
        <HowItWorks />
        <TrustSection />
        <CTASection />
        <LegalSection />
      </main>

      <Footer />
      <FloatingChat />
    </>
  );
}
