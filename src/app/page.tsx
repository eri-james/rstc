"use client";

import Header from "@/components/rstc/header";
import HeroSection from "@/components/rstc/hero-section";
import Footer from "@/components/rstc/footer";
import {
  UpcomingRacesSection,
  LatestResultsSection,
  StallionSpotlightSection,
  FromTheClubSection,
  BettingGuidePreview,
} from "@/components/rstc/landing-sections";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* White glass overlay for content sections */}
        <div className="glass-overlay">
          <UpcomingRacesSection />
          <LatestResultsSection />
          <StallionSpotlightSection />
          <FromTheClubSection />
          <BettingGuidePreview />
        </div>
      </main>
      <Footer />
    </div>
  );
}
