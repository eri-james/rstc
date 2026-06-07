"use client";

import React from "react";
import Header from "@/components/rstc/header";
import HeroCarousel from "@/components/rstc/hero-carousel";
import WelcomeSection from "@/components/rstc/welcome-section";
import ContentGrid from "@/components/rstc/content-grid";
import BorneanRacing from "@/components/rstc/bornean-racing";
import SocialSection from "@/components/rstc/social-section";
import Footer from "@/components/rstc/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <WelcomeSection />
        <ContentGrid />
        <BorneanRacing />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}
