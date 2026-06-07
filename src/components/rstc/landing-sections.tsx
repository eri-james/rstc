"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Trophy, Star, Clock, ChevronRight } from "lucide-react";

/* ── Mock data for demo ───────────────────────────────────── */

const upcomingRaces = [
  {
    date: "15 Jun 2026",
    venue: "Tambalang Racecourse",
    races: 8,
    distances: "1000M – 1800M",
    type: "Mixed Breed & Thoroughbred",
  },
  {
    date: "29 Jun 2026",
    venue: "Tambalang Racecourse",
    races: 6,
    distances: "1100M – 1600M",
    type: "Pony Racing",
  },
  {
    date: "13 Jul 2026",
    venue: "Tambalang Racecourse",
    races: 8,
    distances: "1000M – 1800M",
    type: "Thoroughbred",
  },
];

const latestResults = [
  {
    date: "10 May 2026",
    venue: "Tambalang",
    highlights: [
      "Race 1: Golden Arrow (1st)",
      "Race 3: Sabah Spirit (1st)",
      "Race 5: Mount Kinabalu (1st)",
    ],
  },
  {
    date: "24 May 2026",
    venue: "Tambalang",
    highlights: [
      "Race 2: Borneo Star (1st)",
      "Race 4: Tambalang Dream (1st)",
    ],
  },
];

const stallionSpotlight = [
  { name: "Northern Dancer Line", breed: "Thoroughbred", color: "bg-amber-500" },
  { name: "Borneo Thunder", breed: "Mixed Breed", color: "bg-emerald-500" },
  { name: "Kinabalu Storm", breed: "Thoroughbred", color: "bg-blue-500" },
];

/* ── Fade-in hook ──────────────────────────────────────────── */

function useFadeIn() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/* ── Components ────────────────────────────────────────────── */

export function UpcomingRacesSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="race-day" className="py-12 px-4">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="header-skew mb-6">UPCOMING RACES</div>

        <div className="space-y-4">
          {upcomingRaces.map((race) => (
            <div
              key={race.date}
              className="content-card bg-white p-5 rounded-lg shadow-md border-2 border-blue-500"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white p-2 rounded-lg">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-lg">{race.date}</h3>
                    <p className="text-gray-500 text-sm">{race.venue} · {race.type}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{race.races} races · {race.distances}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:shrink-0">
                  <button className="flex items-center gap-1 text-blue-500 hover:text-blue-600 font-bold text-sm transition-colors">
                    <Star className="w-4 h-4" />
                    Track
                  </button>
                  <Link
                    href="/race-day"
                    className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
                  >
                    Race Card
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/race-day"
          className="inline-flex items-center gap-1 mt-4 text-blue-500 hover:text-blue-600 font-bold text-sm transition-colors"
        >
          See All Races <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

export function LatestResultsSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="py-12 px-4">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="header-skew header-skew-green mb-6">LATEST RESULTS</div>

        <div className="space-y-4">
          {latestResults.map((result) => (
            <div
              key={result.date}
              className="content-card bg-white p-5 rounded-lg shadow-md border-2 border-emerald-500"
            >
              <div className="flex items-start gap-3">
                <div className="bg-emerald-500 text-white p-2 rounded-lg">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-gray-900 text-lg">{result.date}</h3>
                  <p className="text-gray-500 text-sm">{result.venue} Racecourse</p>
                  <div className="mt-2 space-y-1">
                    {result.highlights.map((h) => (
                      <p key={h} className="text-gray-600 text-sm news-item pl-3 py-0.5">
                        {h}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <Link
                  href="/race-day"
                  className="text-emerald-500 hover:text-emerald-600 font-bold text-sm transition-colors"
                >
                  Full Results →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StallionSpotlightSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section className="py-12 px-4">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="header-skew header-skew-amber mb-6">STALLION SPOTLIGHT</div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stallionSpotlight.map((stallion) => (
            <div
              key={stallion.name}
              className="content-card bg-white p-5 rounded-lg shadow-md border-2 border-amber-500 text-center"
            >
              <div className={`w-16 h-16 ${stallion.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                <span className="text-white text-2xl font-black">
                  {stallion.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-black text-gray-900 text-lg">{stallion.name}</h3>
              <p className="text-gray-400 text-sm">{stallion.breed}</p>
            </div>
          ))}
        </div>

        <Link
          href="/own-and-breed"
          className="inline-flex items-center gap-1 mt-4 text-amber-500 hover:text-amber-600 font-bold text-sm transition-colors"
        >
          See Stallion Registry <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

export function FromTheClubSection() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="the-club" className="py-12 px-4">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="header-skew header-skew-violet mb-6">FROM THE CLUB</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/the-club"
            className="content-card block bg-white p-6 rounded-lg shadow-md border-2 border-violet-500"
          >
            <div className="bg-violet-500 text-white p-2 rounded-lg inline-block mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-black text-gray-900 text-lg mb-1">History · Since 1908</h3>
            <p className="text-gray-500 text-sm">
              From the Jesselton Turf Club to the Royal Sabah Turf Club — over a century of the Sport of Kings.
            </p>
          </Link>

          <Link
            href="/the-club"
            className="content-card block bg-white p-6 rounded-lg shadow-md border-2 border-violet-500"
          >
            <div className="bg-violet-500 text-white p-2 rounded-lg inline-block mb-3">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="font-black text-gray-900 text-lg mb-1">Visit Tambalang</h3>
            <p className="text-gray-500 text-sm">
              Racecourse at Tuaran, watched over by Mount Kinabalu. Find us on the map.
            </p>
          </Link>
        </div>

        <Link
          href="/the-club"
          className="inline-flex items-center gap-1 mt-4 text-violet-500 hover:text-violet-600 font-bold text-sm transition-colors"
        >
          Explore the Club <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

export function BettingGuidePreview() {
  const { ref, visible } = useFadeIn();

  return (
    <section id="bet-guide" className="py-12 px-4">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="header-skew header-skew-pink mb-6">BETTING GUIDE</div>

        <div className="content-card bg-white p-6 rounded-lg shadow-md border-2 border-pink-500">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="font-black text-gray-900 text-lg mb-1">How Betting Works</h3>
              <p className="text-gray-500 text-sm max-w-md">
                New to horse racing? Learn how commingling, pools, and race betting work across Malaysian and international turf clubs.
              </p>
              <p className="text-pink-500 text-xs font-bold mt-2 uppercase tracking-wider">
                ⚠️ This site does not handle betting — educational only
              </p>
            </div>
            <Link
              href="/betting-guide"
              className="shrink-0 inline-flex items-center gap-1 bg-pink-500 hover:bg-pink-600 text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors"
            >
              Learn More
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
