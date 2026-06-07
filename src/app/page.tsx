"use client";

import Header from "@/components/rstc/header";
import HeroSection from "@/components/rstc/hero-section";
import Footer from "@/components/rstc/footer";
import {
  WhatsNewFeed,
  QuickAccessSection,
  UmamusumeEventBanner,
} from "@/components/rstc/landing-sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* White glass overlay for content sections — MURA style */}
        <div className="glass-overlay">
          <UmamusumeEventBanner />
          <WhatsNewFeed />
          <QuickAccessSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
