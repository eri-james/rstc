"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Calendar,
  Crown,
  MapPin,
  Star,
  Flag,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    title: "RSTC KAAMATAN CUP",
    subtitle: "Harvest Festival Cup",
    date: "7th June 2026",
    gradient: "from-[#0052CC] via-[#1E3A8A] to-[#0F2557]",
    icon: Trophy,
  },
  {
    title: "Welcome to Royal Sabah Turf Club",
    subtitle: "Home of Bornean Racing",
    date: "Since 1908",
    gradient: "from-[#1E3A8A] via-[#0052CC] to-[#3B82F6]",
    icon: Crown,
  },
  {
    title: "Tambalang Racecourse",
    subtitle: "Watched over by Mount Kinabalu",
    date: "Tuaran, Sabah",
    gradient: "from-[#0F2557] via-[#1E3A8A] to-[#0052CC]",
    icon: MapPin,
  },
  {
    title: "Sabah Racing Season 2026",
    subtitle: "Experience the Thrill of the Sport of Kings",
    date: "New Season Ahead",
    gradient: "from-[#0052CC] via-[#1E4D8A] to-[#0F2557]",
    icon: Flag,
  },
  {
    title: "Apprentice Jockey Program",
    subtitle: "Developing Future Champions",
    date: "Apply Now",
    gradient: "from-[#1E3A8A] via-[#2D4A9A] to-[#0052CC]",
    icon: Star,
  },
  {
    title: "Thoroughbred Breeding",
    subtitle: "Excellence in Bloodstock & Breeding",
    date: "Learn More",
    gradient: "from-[#0F2557] via-[#1E3A8A] to-[#0044AA]",
    icon: Crown,
  },
  {
    title: "Race Day Experience",
    subtitle: "Join Us for an Unforgettable Day at the Races",
    date: "Upcoming Events",
    gradient: "from-[#0052CC] via-[#1E3A8A] to-[#0F2557]",
    icon: Calendar,
  },
  {
    title: "Commingle Betting",
    subtitle: "Bet on International Races via HKJC & Australia",
    date: "Place Your Bets",
    gradient: "from-[#1E3A8A] via-[#0052CC] to-[#3B82F6]",
    icon: Flag,
  },
];

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="relative w-full bg-[#1E3A8A]">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => {
            const IconComponent = slide.icon;
            return (
              <CarouselItem key={index} className="pl-0">
                <div
                  className={`relative w-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center overflow-hidden`}
                  style={{ minHeight: "clamp(320px, 55vh, 560px)" }}
                >
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-[0.04]">
                    <div className="absolute top-10 left-10 w-96 h-96 rounded-full border border-white/30" />
                    <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full border border-white/30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/20" />
                    <div className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full border border-white/20" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                      {slide.title}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 font-light">
                      {slide.subtitle}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2.5">
                      <Calendar className="w-4 h-4 text-white/70" />
                      <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                        {slide.date}
                      </span>
                    </div>
                  </div>

                  {/* Bottom gradient fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1E3A8A] to-transparent" />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Manual controls */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-20">
          <button
            onClick={() => api?.scrollPrev()}
            className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 border border-white/10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 z-20">
          <button
            onClick={() => api?.scrollNext()}
            className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 border border-white/10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
