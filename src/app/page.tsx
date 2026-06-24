"use client";

import Navbar from "@/components/Navbar";
import QuickSpaceHero from "@/components/QuickSpaceHero";
import LogoMarquee from "@/components/LogoMarquee";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import QuickSpaceFeatures from "@/components/QuickSpaceFeatures";
import QuickSpaceSplitSections from "@/components/QuickSpaceSplitSections";
import OurProcess from "@/components/OurProcess";
import StatsBanner from "@/components/StatsBanner";
import QuickSpaceTestimonials from "@/components/QuickSpaceTestimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <QuickSpaceHero />
      <LogoMarquee />
      <PerformanceMetrics />
      <QuickSpaceFeatures />
      <QuickSpaceSplitSections />
      <OurProcess />
      <StatsBanner />
      <QuickSpaceTestimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
