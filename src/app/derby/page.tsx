"use client";

import Header from "@/components/rstc/header";
import Footer from "@/components/rstc/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { derbyEvents, bridgeContent } from "@/lib/data/mock-data";
import { Sparkles, Calendar, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function DerbyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero — Pink themed */}
        <section className="relative w-full py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <p className="text-pink-400 text-xs font-bold uppercase tracking-[0.2em]">RSTC × Umamusume</p>
              </div>
              <h1 className="text-white font-black text-4xl sm:text-5xl tracking-tight">Derby</h1>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                Crossover events, community, and the bridge from anime to real racing.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="glass-overlay">
          {/* Events */}
          <section className="py-10 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-pink">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Events</span>
              </div>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-4">
                {derbyEvents.map((event) => (
                  <motion.div key={event.id} variants={itemVariants}>
                    <div className="bg-white rounded-xl shadow-md border-2 border-pink-400 overflow-hidden">
                      <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-5 sm:p-6">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                            {event.type === "crossover" ? "Crossover Event" : "Community Event"}
                          </span>
                          {event.status === "upcoming" && (
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2 py-0.5 rounded">
                              Upcoming
                            </span>
                          )}
                        </div>
                        <h3 className="text-white font-black text-xl sm:text-2xl">{event.title}</h3>
                        {event.subtitle && (
                          <p className="text-white/80 text-sm font-medium">{event.subtitle}</p>
                        )}
                        <p className="text-white/60 text-xs mt-2">{event.displayDate} · {event.venue}</p>
                      </div>
                      <div className="p-5 sm:p-6">
                        <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>

                        {/* Activities */}
                        <div className="mt-4">
                          <h4 className="font-bold text-gray-900 text-sm mb-2">Activities</h4>
                          <ul className="space-y-1">
                            {event.activities.map((activity) => (
                              <li key={activity} className="text-gray-600 text-sm flex items-start gap-2">
                                <span className="text-pink-400 mt-0.5">●</span>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Partners */}
                        <div className="mt-4">
                          <h4 className="font-bold text-gray-900 text-sm mb-2">Partners</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.partners.map((partner) => (
                              <span key={partner} className="text-xs font-bold bg-pink-50 text-pink-600 px-2.5 py-1 rounded-lg">
                                {partner}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Racing for Fans — Bridge Content Preview */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-pink">
                <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Racing for Fans</span>
              </div>

              <p className="text-gray-600 text-sm mb-4 max-w-lg">
                The concepts you know from Umamusume translate directly to real racing. Here are some key connections:
              </p>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-3">
                {bridgeContent.slice(0, 3).map((item) => (
                  <motion.div key={item.id} variants={itemVariants}>
                    <div className="bg-white rounded-lg shadow-sm border-2 border-pink-200 p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1 bg-pink-50 rounded-lg p-3">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-pink-400">In Umamusume</span>
                          <p className="font-bold text-gray-900 text-xs mt-0.5">{item.umamusumeConcept}</p>
                        </div>
                        <div className="hidden sm:flex items-center"><ArrowRight className="w-4 h-4 text-gray-300" /></div>
                        <div className="sm:hidden flex justify-center"><ArrowRight className="w-4 h-4 text-gray-300 rotate-90" /></div>
                        <div className="flex-1 bg-blue-50 rounded-lg p-3">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-blue-400">At RSTC</span>
                          <p className="font-bold text-gray-900 text-xs mt-0.5">{item.realRacingEquivalent}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <Link
                href="/race-day/newcomers"
                className="inline-flex items-center gap-1 mt-4 text-pink-500 hover:text-pink-600 font-bold text-sm transition-colors"
              >
                See full bridge guide <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Community Links */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-pink">Community</div>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { name: "kemo★kyun", description: "Umamusume cosplay performance group", url: "https://twitter.com/kemokyun" },
                  { name: "AniHobby", description: "Anime & hobby community in Sabah", url: "#" },
                  { name: "HobbyCon", description: "Annual hobby & anime convention", url: "https://hobbycon.net" },
                ].map((community) => (
                  <motion.div key={community.name} variants={itemVariants}>
                    <a
                      href={community.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="content-card block bg-white rounded-lg shadow-sm border-2 border-pink-200 p-4 text-center group"
                    >
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-pink-600 transition-colors">{community.name}</h3>
                      <p className="text-gray-400 text-xs mt-0.5">{community.description}</p>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="py-8 px-4 sm:px-6 pb-12">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="text-gray-400 text-xs">
                  This is a fan-made page and is not affiliated with Cygames, Umamusume Pretty Derby, or the Royal Sabah Turf Club.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
