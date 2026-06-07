"use client";

import Header from "@/components/rstc/header";
import Footer from "@/components/rstc/footer";
import { motion } from "framer-motion";
import { bettingTypes, comminglingDocuments, pdfDocuments } from "@/lib/data/mock-data";
import { BookOpen, FileText, AlertTriangle, Globe } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function BettingGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative w-full py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-violet-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Betting Guide</p>
              <h1 className="text-white font-black text-4xl sm:text-5xl tracking-tight">How Betting Works</h1>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                Learn how race betting, commingling, and pools work across Malaysian and international turf clubs.
              </p>
              <div className="flex items-center gap-2 mt-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 max-w-md">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                <p className="text-white/70 text-xs font-medium">This site provides betting information only. It does not handle or facilitate actual betting.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="glass-overlay">
          {/* Bet Types */}
          <section className="py-10 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-violet">
                <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> Bet Types</span>
              </div>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {bettingTypes.map((bet) => (
                  <motion.div key={bet.name} variants={itemVariants}>
                    <div className="content-card bg-white rounded-lg shadow-sm border-2 border-violet-400 p-4 sm:p-5 h-full flex flex-col">
                      <h3 className="font-extrabold text-violet-600 text-lg">{bet.name}</h3>
                      <p className="text-gray-600 text-sm mt-1 flex-1">{bet.description}</p>
                      <div className="mt-3 bg-violet-50 rounded-lg p-3">
                        <p className="text-violet-700 text-xs font-medium">{bet.example}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Commingling */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-violet">
                <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Commingling</span>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="bg-white rounded-lg shadow-sm border-2 border-violet-400 p-5 sm:p-6">
                  <h3 className="font-extrabold text-gray-900 text-lg">What is Commingling?</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Commingling allows RSTC to pool bets with international turf clubs, giving punters access to larger pools and better odds. When you bet on a Hong Kong Jockey Club race at an RSTC outlet, your bet goes into the same pool as bets placed in Hong Kong. This means bigger payouts and more racing options available every race day. RSTC currently commingles with the Hong Kong Jockey Club (HKJC), Singapore Turf Club (STC), and Australian racing authorities through the SRW (Summer Racing World) pools.
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {comminglingDocuments.map((doc) => (
                      <a
                        key={doc.id}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3 bg-violet-50 rounded-lg p-3 group"
                      >
                        <FileText className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm group-hover:text-violet-600 transition-colors">{doc.title}</h4>
                          <p className="text-gray-500 text-xs mt-0.5">{doc.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Rules & Prohibited Substances */}
          <section className="py-8 px-4 sm:px-6 pb-12">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-red">
                <span className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> Rules & Prohibited Substances</span>
              </div>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-3">
                {pdfDocuments.filter((d) => d.category === "rules" || d.category === "prohibited").map((doc) => (
                  <motion.div key={doc.id} variants={itemVariants}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="content-card block bg-white rounded-lg shadow-sm border-2 border-red-300 p-4 sm:p-5 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm group-hover:text-red-600 transition-colors">{doc.title}</h3>
                          <p className="text-gray-500 text-xs mt-0.5">{doc.description}</p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
