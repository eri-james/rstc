"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Trophy,
  ChevronRight,
  Swords,
  Landmark,
  BookOpen,
  Sparkles,
  PawPrint,
  Flag,
} from "lucide-react";
import { feedItems, derbyEvents } from "@/lib/data/mock-data";

/* ── Quick Access ──────────────────────────────────────────── */

const quickAccessTiles = [
  {
    label: "Racing",
    icon: Swords,
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    href: "/race-day",
    description: "Race cards, calendars & results",
  },
  {
    label: "The Club",
    icon: Landmark,
    color: "bg-emerald-500",
    hoverColor: "hover:bg-emerald-600",
    href: "/the-club",
    description: "History, venue & heritage",
  },
  {
    label: "Own & Breed",
    icon: PawPrint,
    color: "bg-amber-500",
    hoverColor: "hover:bg-amber-600",
    href: "/own-and-breed",
    description: "Stallions, breeding & ownership",
  },
  {
    label: "Betting Guide",
    icon: BookOpen,
    color: "bg-violet-500",
    hoverColor: "hover:bg-violet-600",
    href: "/betting-guide",
    description: "How to play, rules & commingling",
  },
];

/* ── Category config ───────────────────────────────────────── */

const categoryConfig = {
  race: { label: "Racing", color: "text-blue-500", bg: "bg-blue-50", border: "feed-card-blue", icon: Flag },
  derby: { label: "Derby", color: "text-pink-500", bg: "bg-pink-50", border: "feed-card-pink", icon: Sparkles },
  club: { label: "Club", color: "text-emerald-500", bg: "bg-emerald-50", border: "feed-card-green", icon: Landmark },
  own: { label: "Own & Breed", color: "text-amber-500", bg: "bg-amber-50", border: "feed-card-amber", icon: PawPrint },
  betting: { label: "Betting", color: "text-violet-500", bg: "bg-violet-50", border: "feed-card-violet", icon: BookOpen },
  results: { label: "Results", color: "text-emerald-600", bg: "bg-emerald-50", border: "feed-card-green", icon: Trophy },
};

/* ── Animation variants ────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ── Components ────────────────────────────────────────────── */

export function WhatsNewFeed() {
  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="header-skew header-skew-blue">What&apos;s New &amp; Upcoming</div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-3"
        >
          {feedItems.map((item) => {
            const config = categoryConfig[item.category];
            const Icon = config.icon;
            return (
              <motion.div key={item.id} variants={itemVariants}>
                <Link
                  href={item.href}
                  className={`content-card block bg-white rounded-lg shadow-sm ${config.border} p-4 sm:p-5 group`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`shrink-0 w-9 h-9 ${config.bg} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${config.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${config.color}`}>
                          {config.label}
                        </span>
                        <span className="text-gray-300 text-[10px]">·</span>
                        <span className="text-gray-400 text-[10px] font-medium">{item.date}</span>
                      </div>
                      <h3 className="font-extrabold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm mt-0.5 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function QuickAccessSection() {
  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="header-skew header-skew-green">Quick Access</div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {quickAccessTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <motion.div key={tile.label} variants={itemVariants}>
                <Link
                  href={tile.href}
                  className={`quick-tile block ${tile.color} ${tile.hoverColor} text-white rounded-xl p-5 sm:p-6 text-center shadow-lg`}
                >
                  <Icon className="w-7 h-7 mx-auto mb-2 opacity-90" />
                  <h3 className="font-black text-sm sm:text-base tracking-wide">{tile.label}</h3>
                  <p className="text-white/70 text-[10px] sm:text-xs mt-1 font-medium">{tile.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function UmamusumeEventBanner() {
  const event = derbyEvents[0]; // Use the first upcoming event
  if (!event) return null;

  return (
    <section className="py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            href="/derby"
            className="content-card block bg-white rounded-xl shadow-md border-2 border-pink-400 overflow-hidden group"
          >
            <div className="bg-gradient-to-r from-pink-500 to-pink-400 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-white/80" />
                <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">
                  Special Event
                </span>
              </div>
              <h3 className="text-white font-black text-lg sm:text-xl tracking-tight">
                {event.title}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-1 font-medium">
                {event.subtitle} · {event.displayDate} · {event.venue.split(",")[0]}
              </p>
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between">
              <p className="text-gray-600 text-xs sm:text-sm">
                {event.activities.slice(0, 3).join(" · ")}
              </p>
              <ChevronRight className="w-5 h-5 text-pink-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
