"use client";

import Header from "@/components/rstc/header";
import Footer from "@/components/rstc/footer";
import { motion } from "framer-motion";
import { stallions, pdfDocuments } from "@/lib/data/mock-data";
import { FileText, PawPrint, GraduationCap, Crown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function OwnAndBreedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="relative w-full py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Own & Breed</p>
              <h1 className="text-white font-black text-4xl sm:text-5xl tracking-tight">Ownership & Breeding</h1>
              <p className="text-white/60 text-sm sm:text-base mt-2 max-w-lg">
                Stallion registry, breeding regulations, and ownership information for the 2026 racing season.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="glass-overlay">
          {/* Stallion Registry */}
          <section className="py-10 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-amber">
                <span className="flex items-center gap-2"><PawPrint className="w-4 h-4" /> Stallion Registry</span>
              </div>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {stallions.map((stallion) => (
                  <motion.div key={stallion.id} variants={itemVariants}>
                    <div className="content-card bg-white rounded-lg shadow-sm border-2 border-amber-400 p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                          <span className="text-amber-700 text-xl font-black">{stallion.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h3 className="font-extrabold text-gray-900 text-base">{stallion.name}</h3>
                          <p className="text-gray-400 text-xs">{stallion.breed} · {stallion.color} · b.{stallion.yob}</p>
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs mb-2"><span className="font-bold text-gray-700">Origin:</span> {stallion.origin}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{stallion.summary}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Regulations & Documents */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-amber">
                <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Regulations & Documents</span>
              </div>

              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="space-y-3">
                {pdfDocuments.map((doc) => (
                  <motion.div key={doc.id} variants={itemVariants}>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="content-card block bg-white rounded-lg shadow-sm border-2 border-amber-300 p-4 sm:p-5 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-amber-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">{doc.title}</h3>
                          <p className="text-gray-500 text-xs mt-0.5">{doc.description}</p>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Apprentice Program */}
          <section className="py-8 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-amber">
                <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Apprentice Program</span>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="bg-white rounded-lg shadow-sm border-2 border-amber-300 p-5 sm:p-6">
                  <h3 className="font-extrabold text-gray-900 text-lg">Jockey Apprentice Programme</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    The RSTC Apprentice Programme develops the next generation of jockeys for Malaysian racing. Apprentices undergo rigorous training in riding technique, race strategy, horse care, and fitness under the guidance of experienced trainers. Graduates of the programme have gone on to compete at tracks across Malaysia and internationally. The programme is open to young riders who demonstrate exceptional talent, discipline, and a passion for the sport.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Horse Ownership */}
          <section className="py-8 px-4 sm:px-6 pb-12">
            <div className="max-w-5xl mx-auto">
              <div className="header-skew header-skew-amber">
                <span className="flex items-center gap-2"><Crown className="w-4 h-4" /> Horse Ownership</span>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <div className="bg-white rounded-lg shadow-sm border-2 border-amber-300 p-5 sm:p-6">
                  <h3 className="font-extrabold text-gray-900 text-lg">Become a Racehorse Owner</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Owning a racehorse is one of the most thrilling experiences in sport. At RSTC, prospective owners can register through the club and participate in racing at Tambalang. Ownership options range from sole ownership to syndicates, where multiple owners share the costs and excitement of racing. The club provides guidance on purchasing, training, and entering horses for races. For more information, contact the RSTC office or refer to the breeding regulations document above.
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
