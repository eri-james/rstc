"use client";

import Header from "@/components/rstc/header";
import Footer from "@/components/rstc/footer";
import { motion } from "framer-motion";
import { bridgeContent } from "@/lib/data/mock-data";
import { Sparkles, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function NewcomersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative w-full py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <p className="text-pink-400 text-xs font-bold uppercase tracking-[0.2em]">Bridge Content</p>
              </div>
              <h1 className="text-white font-black text-3xl sm:text-4xl tracking-tight">
                New to Racing?
              </h1>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                Love the anime? Here&apos;s how real racing works. The concepts you know from Umamusume translate directly to the track at Tambalang.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="glass-overlay">
          {/* Bridge Content */}
          <section className="py-10 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-pink">From Anime to Real Racing</div>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-4">
                {bridgeContent.map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <div className="bg-white rounded-lg shadow-sm border-2 border-pink-300 p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Umamusume side */}
                        <div className="flex-1 bg-pink-50 rounded-lg p-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400">In Umamusume</span>
                          <h3 className="font-extrabold text-gray-900 text-sm mt-1">{item.umamusumeConcept}</h3>
                        </div>
                        {/* Arrow */}
                        <div className="hidden sm:flex items-center">
                          <ArrowRight className="w-5 h-5 text-gray-300" />
                        </div>
                        <div className="sm:hidden flex justify-center">
                          <ArrowRight className="w-5 h-5 text-gray-300 rotate-90" />
                        </div>
                        {/* Real racing side */}
                        <div className="flex-1 bg-blue-50 rounded-lg p-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">At RSTC</span>
                          <h3 className="font-extrabold text-gray-900 text-sm mt-1">{item.realRacingEquivalent}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-3">{item.explanation}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-8 px-4 sm:px-6 pb-12">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-center">
                  <h3 className="text-white font-black text-lg sm:text-xl">Ready to explore real racing?</h3>
                  <p className="text-white/70 text-sm mt-1">Check out upcoming race days and race cards at Tambalang.</p>
                  <Link href="/race-day" className="inline-flex items-center gap-1 mt-4 bg-white text-blue-600 font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
                    View Race Day <ChevronRight className="w-4 h-4" />
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
