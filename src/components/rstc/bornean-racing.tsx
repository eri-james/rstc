"use client";

import React from "react";
import { Mountain, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "./motion";

export default function BorneanRacing() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto">
          {/* Decorative mountain icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#0052CC]/5 flex items-center justify-center">
              <Mountain className="w-10 h-10 text-[#0052CC]" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-6 tracking-tight">
            HOME OF BORNEAN RACING
          </h2>

          <div className="w-20 h-1 bg-[#0052CC] mx-auto mb-8 rounded-full" />

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            The Royal Sabah Turf Club has been the heart of horse racing in
            Borneo for over a century. Nestled in the shadow of the majestic
            Mount Kinabalu, our Tambalang Racecourse offers a racing experience
            unlike any other — where the spirit of competition meets the natural
            wonder of Sabah. From the thunder of hooves on the track to the
            cheers of the crowd, RSTC continues the grand tradition of the Sport
            of Kings in the Land Below the Wind.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-[#0052CC] hover:bg-[#003D99] text-white rounded-lg px-8 h-11 font-medium"
            >
              <a
                href="https://www.youtube.com/channel/UC8wxKCx9pQhilTlFaoSeJDg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Watch on YouTube
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#0052CC] text-[#0052CC] hover:bg-[#0052CC]/5 rounded-lg px-8 h-11 font-medium"
            >
              <a href="#" className="inline-flex items-center gap-2">
                Learn Our History
              </a>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
