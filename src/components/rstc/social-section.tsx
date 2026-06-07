"use client";

import React from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";
import { SectionReveal, StaggerReveal, StaggerItem } from "./motion";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/royalsabahturfclub",
    icon: Facebook,
    color: "hover:bg-[#1877F2] hover:border-[#1877F2]",
    label: "Follow us on Facebook",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC8wxKCx9pQhilTlFaoSeJDg",
    icon: Youtube,
    color: "hover:bg-[#FF0000] hover:border-[#FF0000]",
    label: "Subscribe on YouTube",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/royalsabahturfclub/",
    icon: Instagram,
    color: "hover:bg-[#E4405F] hover:border-[#E4405F]",
    label: "Follow us on Instagram",
  },
];

export default function SocialSection() {
  return (
    <section className="bg-[#1E3A8A] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            FOLLOW US ON SOCIAL MEDIA
          </h2>
          <p className="text-white/60 mb-10 max-w-lg mx-auto">
            Stay connected with the latest race updates, news, and events from
            the Royal Sabah Turf Club.
          </p>
        </SectionReveal>

        <StaggerReveal className="flex items-center justify-center gap-5 sm:gap-8" staggerDelay={0.15}>
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <StaggerItem key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-black/20 ${social.color}`}
                >
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white/80 group-hover:text-white transition-colors" />
                </a>
              </StaggerItem>
            );
          })}
        </StaggerReveal>

        {/* Social names under icons */}
        <div className="flex items-center justify-center gap-5 sm:gap-8 mt-4">
          {socialLinks.map((social) => (
            <div key={social.name} className="w-14 sm:w-16 text-center">
              <span className="text-white/40 text-xs font-medium uppercase tracking-wider">
                {social.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
