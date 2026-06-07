/* ── RSTC Data Model — TypeScript Types ──────────────────────── */

// Section colour categories
export type SectionColour = "blue" | "green" | "amber" | "violet" | "pink" | "red";

// ── Race Day ──────────────────────────────────────────────────

export interface RaceDay {
  id: string;
  date: string;          // ISO date string "2026-06-15"
  displayDate: string;   // Human-readable "15 Jun 2026"
  venue: string;
  raceCount: number;
  distances: string;     // "1000M – 1800M"
  type: RaceType;
  status: "upcoming" | "live" | "completed";
  featuredRace?: string; // Name of the big race
}

export type RaceType = "Thoroughbred" | "Pony Racing" | "Mixed Breed & Thoroughbred";

export interface RaceCard {
  id: string;
  club: string;          // "RSTC" | "HKJC" | "SLTC" | "AUS" | "STC"
  label: string;         // "RSTC Race Card"
  url: string;           // PDF or external link
  type: "pdf" | "external";
  colour: SectionColour;
}

export interface RaceResult {
  id: string;
  date: string;
  displayDate: string;
  venue: string;
  highlights: ResultHighlight[];
  resultUrl?: string;
}

export interface ResultHighlight {
  race: number;
  horseName: string;
  position: number;
  time?: string;
}

export interface RaceAnalysis {
  id: string;
  club: string;
  label: string;
  url: string;
}

// ── The Club ──────────────────────────────────────────────────

export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
}

export interface CommitteeMember {
  role: string;
  name: string;
}

export interface VenueInfo {
  name: string;
  address: string;
  mapUrl: string;
  description: string;
}

// ── Own & Breed ───────────────────────────────────────────────

export interface Stallion {
  id: string;
  name: string;
  breed: string;
  yob: number;           // Year of birth
  color: string;         // Coat colour
  origin: string;        // Country of origin
  summary: string;
}

export interface PdfDocument {
  id: string;
  title: string;
  category: "breeding-regs" | "rules" | "prohibited" | "commingling" | "other";
  url: string;
  description: string;
}

// ── Betting Guide ─────────────────────────────────────────────

export interface BettingType {
  name: string;          // "Win" | "Place" | "Quinella" etc.
  description: string;
  example: string;
}

// ── Events / Feed ─────────────────────────────────────────────

export type FeedCategory = "race" | "derby" | "club" | "own" | "betting" | "results";

export interface FeedItem {
  id: string;
  category: FeedCategory;
  title: string;
  date: string;
  description: string;
  href: string;
  featured?: boolean;
}

// ── Umamusume / Derby ─────────────────────────────────────────

export interface DerbyEvent {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  displayDate: string;
  venue: string;
  description: string;
  activities: string[];
  partners: string[];
  status: "upcoming" | "completed";
  type: "crossover" | "viewing" | "community";
}

export interface BridgeContent {
  id: string;
  umamusumeConcept: string;
  realRacingEquivalent: string;
  explanation: string;
}

// ── User (Phase 4+) ───────────────────────────────────────────

export interface UserProfile {
  id: string;
  displayName: string;
  avatarUrl?: string;
  trackedRaces: string[];   // RaceDay IDs
  trackedHorses: string[];  // Stallion IDs (future: horse IDs)
  joinedAt: string;
}
