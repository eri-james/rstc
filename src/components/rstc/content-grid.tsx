"use client";

import React from "react";
import Link from "next/link";
import { Trophy, GraduationCap, Heart, ChevronRight } from "lucide-react";
import { SectionReveal, StaggerReveal, StaggerItem } from "./motion";

const contentCards = [
  {
    icon: Trophy,
    title: "Racing",
    description:
      "Experience the thrill of thoroughbred horse racing at Tambalang Racecourse.",
    links: [
      { label: "Rules of Racing", href: "#" },
      { label: "Game - How To Play", href: "#" },
      { label: "Horse Ownership", href: "#" },
      { label: "Prohibited Substances", href: "#" },
    ],
  },
  {
    icon: GraduationCap,
    title: "Apprentice Program",
    description:
      "Developing the next generation of jockeys and racing professionals.",
    links: [{ label: "Apprentice Program", href: "#" }],
  },
  {
    icon: Heart,
    title: "Breeding",
    description:
      "Excellence in thoroughbred breeding and bloodstock management.",
    links: [
      { label: "Breeding Regulations", href: "#" },
      { label: "Stallions", href: "#" },
    ],
  },
];

export default function ContentGrid() {
  return (
    <section className="bg-[#1E3A8A] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <SectionReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            EXPLORE RSTC
          </h2>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mb-6 rounded-full" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Discover the world of horse racing, breeding, and professional
            development at the Royal Sabah Turf Club.
          </p>
        </SectionReveal>

        {/* Cards Grid */}
        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {contentCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <StaggerItem key={card.title}>
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/10 h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#0052CC]/50 flex items-center justify-center mb-5 group-hover:bg-[#0052CC]/70 transition-colors duration-200">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-5 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Links */}
                  <ul className="space-y-2.5">
                    {card.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-[#3B82F6] hover:text-[#60A5FA] text-sm font-medium transition-colors duration-200 group/link"
                        >
                          <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Subtle hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#3B82F6]/0 to-[#3B82F6]/0 group-hover:from-[#3B82F6]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
