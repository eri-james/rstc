"use client";

import Header from "@/components/rstc/header";
import Footer from "@/components/rstc/footer";
import { motion } from "framer-motion";
import {
  historyTimeline,
  committeeMembers,
  venueInfo,
} from "@/lib/data/mock-data";
import { Clock, MapPin, Users, Heart } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function TheClubPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative w-full py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Since 1908</p>
              <h1 className="text-white font-black text-4xl sm:text-5xl tracking-tight">The Club</h1>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                Heritage, venue, and the people behind the Royal Sabah Turf Club — the Sport of Kings in the Land Below the Wind.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="glass-overlay">
          {/* History Timeline */}
          <section className="py-10 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-green">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> History</span>
              </div>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="relative">
                {/* Timeline line */}
                <div className="absolute left-[18px] sm:left-[22px] top-0 bottom-0 w-0.5 bg-emerald-200" />

                <div className="space-y-4">
                  {historyTimeline.map((event) => (
                    <motion.div key={event.year} variants={itemVariants} className="relative pl-12 sm:pl-14">
                      {/* Timeline dot */}
                      <div className="absolute left-2.5 sm:left-3 top-1.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />

                      <div className="content-card bg-white rounded-lg shadow-sm border-2 border-emerald-300 p-4 sm:p-5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">{event.year}</span>
                        <h3 className="font-extrabold text-gray-900 text-base mt-0.5">{event.title}</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">{event.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Visit Us */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-green">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Visit Us</span>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="bg-white rounded-lg shadow-sm border-2 border-emerald-400 p-5 sm:p-6">
                  <h3 className="font-extrabold text-gray-900 text-lg">{venueInfo.name}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{venueInfo.address}</p>
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">{venueInfo.description}</p>

                  {/* Map Embed */}
                  <div className="mt-4 rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.1!2d116.2!3d6.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDYnMDAuMCJOIDExNsKwMTInMDAuMCJF!5e0!3m2!1sen!2smy!4v1"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Tambalang Racecourse Location"
                    />
                  </div>

                  <a
                    href={venueInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-emerald-500 hover:text-emerald-600 font-bold text-sm transition-colors"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Committee */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-green">
                <span className="flex items-center gap-2"><Users className="w-4 h-4" /> Committee</span>
              </div>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {committeeMembers.map((member) => (
                  <motion.div key={member.role} variants={itemVariants}>
                    <div className="bg-white rounded-lg shadow-sm border-2 border-emerald-200 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">{member.role}</p>
                      <p className="font-bold text-gray-900 text-sm mt-0.5">{member.name}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CSR */}
          <section className="py-8 px-4 sm:px-6 pb-12">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-green">
                <span className="flex items-center gap-2"><Heart className="w-4 h-4" /> CSR</span>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="bg-white rounded-lg shadow-sm border-2 border-emerald-300 p-5 sm:p-6">
                  <h3 className="font-extrabold text-gray-900 text-lg">Corporate Social Responsibility</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    As one of Sabah&apos;s oldest institutions, the Royal Sabah Turf Club is committed to giving back to the community. Through charitable donations, youth development programmes, and support for local sporting events, RSTC plays an active role in the social fabric of Tuaran and the broader Sabah community. The club also sponsors educational initiatives and cultural events, including the annual Kaamatan Harvest Festival celebrations.
                  </p>
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
