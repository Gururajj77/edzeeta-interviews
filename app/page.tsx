// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import InternshipTrainingsSection from "@/components/sections/InternshipTrainingsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import PricingSection from "@/components/sections/PricingSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <InternshipTrainingsSection />
      <WhyUsSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
