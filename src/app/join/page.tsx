"use client";

import Header from "@/components/rstc/header";
import Footer from "@/components/rstc/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserPlus, Sparkles } from "lucide-react";

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative w-full py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Community</p>
              <h1 className="text-white font-black text-4xl sm:text-5xl tracking-tight">Join Us</h1>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                Become part of the RSTC fan community. Track races, follow horses, and connect with fellow racing enthusiasts.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="glass-overlay">
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-lg mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="w-16 h-16 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <UserPlus className="w-8 h-8 text-amber-500" />
                </div>
                <h2 className="font-black text-gray-900 text-2xl">Coming Soon</h2>
                <p className="text-gray-500 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
                  Website membership with Discord OAuth, race tracking, horse following, and personalised profiles is coming in a future update. This membership is for the fan community site only and is independent of the actual Royal Sabah Turf Club.
                </p>

                <div className="mt-6 flex flex-col items-center gap-3">
                  <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-4 max-w-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-pink-400" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-pink-500">Umamusume Fan?</span>
                    </div>
                    <p className="text-gray-600 text-xs">
                      Future members will be able to earn Umamusume-themed achievements and customise their profiles.
                    </p>
                  </div>

                  <Link
                    href="/"
                    className="text-amber-500 hover:text-amber-600 font-bold text-sm transition-colors"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
