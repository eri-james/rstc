"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image is set on body; overlay for text readability */}
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-white font-black text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight mb-4">
          HOME OF
          <br />
          <span className="text-blue-400">BORNEAN RACING</span>
        </h1>
        <p className="text-white/70 text-lg sm:text-xl font-medium mb-8 max-w-lg mx-auto">
          The Sport of Kings since 1908 — watched over by Mount Kinabalu, in the Land Below the Wind.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#race-day"
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-colors"
          >
            View Race Day
          </Link>
          <Link
            href="/#the-club"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-colors backdrop-blur-sm"
          >
            Explore the Club
          </Link>
        </div>
      </div>
    </section>
  );
}
