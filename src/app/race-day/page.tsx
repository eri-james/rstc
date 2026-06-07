"use client";

import Header from "@/components/rstc/header";
import Footer from "@/components/rstc/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  raceDays,
  raceCards,
  raceResults,
  raceAnalyses,
} from "@/lib/data/mock-data";
import {
  Calendar,
  FileText,
  ExternalLink,
  Trophy,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function RaceDayPage() {
  const upcoming = raceDays.filter((r) => r.status === "upcoming");
  const completed = raceDays.filter((r) => r.status === "completed");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative w-full py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">RSTC</p>
              <h1 className="text-white font-black text-4xl sm:text-5xl tracking-tight">Race Day</h1>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                Upcoming races, race cards, results, and analysis for Tambalang Racecourse.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="glass-overlay">
          {/* Upcoming Races */}
          <section className="py-10 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-blue">Upcoming Races</div>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-3">
                {upcoming.map((race) => (
                  <motion.div key={race.id} variants={itemVariants}>
                    <div className="content-card bg-white rounded-lg shadow-sm border-2 border-blue-500 p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-blue-500" />
                          </div>
                          <div>
                            <h3 className="font-extrabold text-gray-900 text-base sm:text-lg">{race.displayDate}</h3>
                            <p className="text-gray-500 text-sm">{race.venue}</p>
                            <p className="text-gray-400 text-xs mt-0.5">{race.raceCount} races · {race.distances} · {race.type}</p>
                            {race.featuredRace && (
                              <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider bg-blue-500 text-white px-2 py-0.5 rounded">{race.featuredRace}</span>
                            )}
                          </div>
                        </div>
                        <a href={raceCards[0]?.url} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors">
                          Race Card <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Race Cards */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-blue">Race Cards</div>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {raceCards.map((card) => (
                  <motion.div key={card.id} variants={itemVariants}>
                    <a href={card.url} target="_blank" rel="noopener noreferrer" className="content-card block bg-white rounded-lg shadow-sm border-2 border-blue-300 p-4 text-center group">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg mx-auto mb-2 flex items-center justify-center">
                        {card.type === "pdf" ? <FileText className="w-5 h-5 text-blue-500" /> : <ExternalLink className="w-5 h-5 text-blue-500" />}
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">{card.label}</h3>
                      <p className="text-gray-400 text-[10px] mt-0.5 uppercase tracking-wider">{card.type === "pdf" ? "PDF Download" : "External Link"}</p>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Results */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-green">Latest Results</div>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-3">
                {raceResults.map((result) => (
                  <motion.div key={result.id} variants={itemVariants}>
                    <div className="content-card bg-white rounded-lg shadow-sm border-2 border-emerald-500 p-4 sm:p-5">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                          <Trophy className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-extrabold text-gray-900 text-base">{result.displayDate}</h3>
                          <p className="text-gray-500 text-sm">{result.venue} Racecourse</p>
                          <div className="mt-2 space-y-1">
                            {result.highlights.map((h) => (
                              <p key={`${h.race}-${h.horseName}`} className="text-gray-600 text-sm pl-3 border-l-2 border-amber-400">
                                Race {h.race}: <span className="font-bold">{h.horseName}</span> ({h.position}{h.position === 1 ? "st" : "nd"}) {h.time && `· ${h.time}`}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                      {result.resultUrl && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <a href={result.resultUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-600 font-bold text-sm transition-colors">Full Results →</a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Race Analysis */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-amber">Race Analysis</div>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {raceAnalyses.map((analysis) => (
                  <motion.div key={analysis.id} variants={itemVariants}>
                    <a href={analysis.url} target="_blank" rel="noopener noreferrer" className="content-card block bg-white rounded-lg shadow-sm border-2 border-amber-400 p-4 group">
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">{analysis.label}</h3>
                          <p className="text-gray-400 text-xs">PDF Download</p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* New to Racing Bridge */}
          <section className="py-8 px-4 sm:px-6 pb-12">
            <div className="max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <Link href="/race-day/newcomers" className="content-card block bg-white rounded-xl shadow-md border-2 border-pink-400 overflow-hidden group">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-white/80" />
                      <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">New to Racing?</span>
                    </div>
                    <h3 className="text-white font-black text-lg tracking-tight">Love the Anime? Learn Real Racing</h3>
                    <p className="text-white/80 text-sm mt-1 font-medium">Bridge your Umamusume knowledge to the real thing</p>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <p className="text-gray-600 text-sm">Race types, betting formats, breeding — the concepts you know from the game work the same way at Tambalang.</p>
                    <ChevronRight className="w-5 h-5 text-pink-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
