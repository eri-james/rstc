"use client";

import React from "react";
import Link from "next/link";
import { FileText, ExternalLink, MapPin } from "lucide-react";
import { SectionReveal, StaggerReveal, StaggerItem } from "./motion";

const raceCards = [
  {
    name: "RSTC RaceCard",
    href: "https://royalsabahturfclub.com.my/RP/RP070626.pdf",
    border: "border-teal-200",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    accent: "bg-teal-500",
  },
  {
    name: "HKJC RaceCard",
    href: "https://racing.hkjc.com/racing/information/English/racing/RaceCard.aspx",
    border: "border-purple-200",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    accent: "bg-purple-500",
  },
  {
    name: "SLTC RaceCard",
    href: "https://www.selangorturfclub.com/horse-racing/local-racing/race-card/",
    border: "border-amber-200",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accent: "bg-amber-600",
  },
  {
    name: "AUS RaceCard",
    href: "#",
    border: "border-rose-200",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    accent: "bg-rose-500",
  },
];

export default function WelcomeSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Text */}
        <SectionReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4 tracking-tight">
            WELCOME TO RSTC
          </h2>
          <div className="w-20 h-1 bg-[#0052CC] mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            On this beautiful Land Below the Wind sits the Tambalang Racecourse
            at Tuaran. Watched over by Mount Kinabalu, the &lsquo;Sport of
            Kings&rsquo; continues to thrive well for over a century since 1908.
          </p>
        </SectionReveal>

        {/* Race Cards Grid */}
        <StaggerReveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          staggerDelay={0.12}
        >
          {raceCards.map((card) => (
            <StaggerItem key={card.name}>
              <Link
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center p-6 rounded-xl border ${card.border} bg-white shadow-sm hover:shadow-lg transition-all duration-200`}
              >
                {/* Accent top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${card.accent} rounded-t-xl`}
                />
                <div
                  className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <FileText className={`w-7 h-7 ${card.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-800 text-center mb-2">
                  {card.name}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm text-gray-400 group-hover:text-[#0052CC] transition-colors">
                  View Race Card
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Location badge */}
        <SectionReveal className="flex items-center justify-center mt-10 gap-2 text-gray-400" delay={0.3}>
          <MapPin className="w-4 h-4" />
          <span className="text-sm">
            Tambalang Racecourse, Tuaran, Sabah, Malaysia
          </span>
        </SectionReveal>
      </div>
    </section>
  );
}
