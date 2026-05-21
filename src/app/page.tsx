import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GameCategories from "@/components/GameCategories";
import FeaturedListings from "@/components/FeaturedListings";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import LegalSection from "@/components/LegalSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-4 py-2 rounded text-white z-50"
        style={{ background: "var(--color-primary)" }}
      >
        Bỏ qua điều hướng
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <GameCategories />
        <FeaturedListings />
        <HowItWorks />
        <TrustSection />
        <CTASection />
        <LegalSection />
      </main>

      <Footer />
    </>
  );
}
