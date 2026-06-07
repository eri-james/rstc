"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[75vh] min-h-[520px] flex items-end overflow-hidden">
      {/* Background image is set on body; this overlay ensures text readability */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content pinned to bottom for MURA style */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2">
            Royal Sabah Turf Club
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-3">
            HOME OF
            <br />
            <span className="text-blue-400">BORNEAN RACING</span>
          </h1>
          <p className="text-white/60 text-sm sm:text-base font-medium max-w-md mb-6">
            The Sport of Kings since 1908 — watched over by Mount Kinabalu, in the Land Below the Wind.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/race-day"
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-500/25"
            >
              View Race Day
            </Link>
            <Link
              href="/the-club"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors backdrop-blur-sm"
            >
              Explore the Club
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
