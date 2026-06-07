# RSTC Website Rebuild — Direction & Context

## Project Overview

**What:** Complete from-scratch rebuild of the Royal Sabah Turf Club (RSTC) website  
**Repo:** https://github.com/eri-james/rstc  
**Deploy:** GitHub Pages (static export, basePath `/rstc`)  
**Stack:** Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui + Framer Motion  
**Status:** Demo website — functional but with placeholder/mock data where real data is unavailable  
**Aesthetic:** Colourful & minimal — inspired by https://murauma.neocities.org (MURA)

---

## Client/Organization Context

### Who is RSTC?
- Royal Sabah Turf Club — a horse racing institution in Sabah, Malaysia, founded in 1908
- Originally "Jesselton Turf Club", renamed "North Borneo Turf Club", then "Royal Sabah Turf Club" in 1965
- Operates Tambalang Racecourse at Tuaran, watched over by Mount Kinabalu
- One of 4 Malaysian turf clubs (others: Selangor STC, Perak PRTC, Selangor SLTC)
- Runs commingled betting through HKJC (Hong Kong), Australian/SRW pools, and Singapore STC

### Critical Organizational Constraints

1. **No digital race data infrastructure**
   - RSTC has NO JSON/API for race cards or results — they have relied on printed materials and PDFs since the 1970s
   - This is extremely old-fashioned compared to HKJC, STC, etc. which all have live digital systems
   - Race cards exist as PDFs (RSTC, HKJC, STC, AUS racebooks linked on original site)
   - Race analysis exists as PDFs (SLTC, PRTC analysis PDFs)
   - The only "dynamic" feature is `result.php` which is a basic PHP page showing past results

2. **Membership is physical/not digitized**
   - Membership records are kept in physical books, not databases
   - There is no online membership system, signup form, or member portal
   - "Join Us" on the original site just links to `#` — it's aspirational, not functional
   - Any "membership" feature on the new site will be informational only

3. **Photo gallery is stale**
   - The gallery (gallery.php) barely gets updated
   - **Decision: Backburner.** Do not build a gallery section for MVP. Can be added later if content exists.

4. **Content is thin across most pages**
   - History page: The only page with real substance (rich 1908-origin story)
   - Visit Tambalang: Just an address + Google Maps link
   - Function Room: Minimal info
   - Off-Course Betting: Minimal info
   - Committee: Names only (from original site)
   - Most other pages are just links to PDFs or external sites

---

## Aesthetic Direction: MURA-Inspired

### Source Inspiration
https://murauma.neocities.org — a site built for an Umamusume game club by the same developer

### Core Design Language

| Element | MURA Pattern | RSTC Adaptation |
|---------|-------------|-----------------|
| **Layout** | White cards floating on fixed background image | Same — white content cards on racecourse/bg photo |
| **Section headers** | Skewed colour banners via `clip-path: polygon()` | Each pillar gets its own skewed colour banner |
| **Cards** | `bg-white rounded-lg shadow-md border-2 border-{color}` | Same — bold 2px coloured borders by category |
| **Colour blocks** | Solid-colour CTA cards (bg-blue-500, bg-green-500, etc.) | Same — bright tile-like action cards |
| **Animation** | Fade-in-on-scroll (opacity + translateY) | Same — Framer Motion scroll reveals |
| **Navigation** | SPA-style (sections show/hide, no reloads) | Same — single page with section navigation |
| **Typography** | Noto Sans JP + Inter, heavy font weights | Inter/system sans, bold headers, clean body |
| **Background** | Fixed full-bleed image (Umamusume official art) | Fixed full-bleed racecourse/Sabah landscape photo |

### RSTC Colour System

| Section | Colour | Tailwind Class | Hex | Rationale |
|---------|--------|---------------|-----|-----------|
| **Race Day** | Royal Blue | `blue-500` | `#3B82F6` | RSTC brand colour, racing = blue |
| **The Club** | Emerald | `emerald-500` | `#10B981` | Borneo, nature, growth, "Land Below the Wind" |
| **Own & Breed** | Amber/Gold | `amber-500` | `#F59E0B` | Premium, royalty, horse racing trophies |
| **Betting Guide** | Violet | `violet-500` | `#8B5CF6` | Distinct from racing blue, represents the analytical side |
| **Accents/CTAs** | Pink `#EC4899`, Red `#EF4444` | `pink-500`, `red-500` | Alerts, highlights, important actions |
| **Background** | — | — | — | Racecourse / Mount Kinabalu photo (fixed, slight blur/overlay) |

---

## Site Structure

### Single-Page SPA Layout

```
RSTC — Home of Bornean Racing

┌─────────────────────────────────────────────┐
│  NAVBAR: Logo | Race Day | Club | Own & Breed | Bet Guide │
│  (Sticky, glass-effect, minimal)                          │
├─────────────────────────────────────────────┤
│                                             │
│  🏇 HERO — Full-width background photo     │
│  "The Sport of Kings since 1908"           │
│  + "View Race Calendar" CTA                │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  🔵 RACE DAY (blue section)                │
│  Skewed blue header banner                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ Upcoming │ │ Race     │ │ Results  │   │
│  │ Races    │ │ Cards    │ │          │   │
│  │ Calendar │ │ (4 club  │ │ (Links   │   │
│  │ (mock    │ │  PDFs)   │ │  to ext  │   │
│  │  data)   │ │          │ │  sites)  │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│  ┌──────────────────────────────────┐      │
│  │ Race Analysis (SLTC/PRTC PDFs)  │      │
│  └──────────────────────────────────┘      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  🟢 THE CLUB (green section)               │
│  Skewed green header banner                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ History  │ │ Visit    │ │ Commit-  │   │
│  │ Timeline │ │ Us       │ │ tee      │   │
│  │ (1908 →  │ │ (Map +   │ │          │   │
│  │  present)│ │  Venue)  │ │          │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│  ┌──────────┐                               │
│  │ CSR      │                               │
│  └──────────┘                               │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  🟡 OWNERSHIP & BREEDING (amber section)   │
│  Skewed amber header banner                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ Breeding │ │ Stallion │ │ Appren-  │   │
│  │ Regs     │ │ Registry │ │ tice     │   │
│  │ (PDF)    │ │ (Cards)  │ │ Program  │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│  ┌──────────┐                               │
│  │ Horse    │                               │
│  │ Ownership│                               │
│  └──────────┘                               │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  🟣 BETTING GUIDE (violet section)         │
│  Skewed violet header banner               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ How To   │ │ Comming- │ │ Rules &  │   │
│  │ Play     │ │ ling     │ │ Prohib-  │   │
│  │          │ │ Intro    │ │ ited     │   │
│  │          │ │ + Rules  │ │ Subs.    │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER — Socials (FB, IG, YT) · Disclaimer · © │
└─────────────────────────────────────────────┘
```

### Navigation (5 items)

| Nav Item | Scrolls to | Colour |
|----------|-----------|--------|
| **Race Day** | #race-day | Blue |
| **The Club** | #the-club | Green |
| **Own & Breed** | #own-breed | Amber |
| **Bet Guide** | #bet-guide | Violet |

Logo scrolls to top. No "Home" link needed (it's a single page).

### What Each Section Actually Contains

Given the organizational constraints (no API, no database, PDF-only data):

#### Race Day (Blue)
- **Upcoming Races** — Mock calendar with 3-4 demo race day entries (dates, venue, race type). Functional UI but demo data.
- **Race Cards** — 4 colour-coded card/tile buttons linking to existing PDFs:
  - RSTC race card (PDF)
  - HKJC race card (external link)
  - STC/Selangor race card (external link)
  - AUS race card (PDF)
- **Results** — Links to external result pages:
  - RSTC results (link to result.php or placeholder)
  - HKJC results (external)
  - STC results (external)
  - SLTC results (external via Selangor site)
  - PRTC results (external via Perak site)
- **Race Analysis** — 2 tiles linking to SLTC and PRTC analysis PDFs

#### The Club (Green)
- **History** — The real history text (it's the best content on the site). Display as a timeline or story card.
- **Visit Us** — Tambalang Racecourse address + embedded Google Map. Function Room info card. OCB locations.
- **Management Committee** — Placeholder names/roles (taken from original site).
- **CSR** — Brief card about Corporate Social Responsibility.

#### Ownership & Breeding (Amber)
- **Breeding Regulations** — Link to PDF + summary card.
- **Stallion Registry** — Placeholder cards with stallion names and placeholder images.
- **Apprentice Program** — Info card about the program.
- **Horse Ownership** — Info card / guide.

#### Betting Guide (Violet)
- **How To Play** — Step-by-step guide card (from original site's "Game - How To Play").
- **Commingling** — Introduction + links to HKJC betting rules PDF + Australia/SRW rules PDF.
- **Rules & Prohibited Substances** — Link to rules PDF + prohibited substances PDF.

---

## What We're NOT Building (Out of Scope)

| Feature | Reason |
|---------|--------|
| Live race data/API | Doesn't exist in the organization |
| Member portal / login | No digital membership system |
| Online membership signup | Physical records only; form would be aspirational |
| Photo gallery | Backburner — barely updated, no content pipeline |
| Blog / news CMS | No content team to maintain it |
| Dynamic results page | result.php is external; no data to feed |
| E-commerce / ticketing | Out of scope for demo |
| Bahasa Malaysia / Kadazandusun | English-only for demo; can be added later |

---

## User Personas (for design decisions)

### Persona 1: The Punter (70% of traffic)
- Wants: "What's racing? When? Who won?"
- Needs: Race calendar, race card PDFs, result links
- Behaviour: Mobile-first, checks on race day, wants fast access to PDFs

### Persona 2: The Horse Owner / Breeder (15%)
- Wants: Breeding regulations, stallion info, ownership rules
- Needs: Clear regulatory documents, stallion registry
- Behaviour: Desktop, visits occasionally for reference material

### Persona 3: The Tourist / Curious Visitor (10%)
- Wants: "What is this place? Can I visit?"
- Needs: History, venue info, map
- Behaviour: Mobile, first-time visitor, scans briefly

### Persona 4: Industry / Committee (5%)
- Wants: Committee info, CSR, institutional legitimacy
- Needs: Corporate presence, contact info
- Behaviour: Desktop, visits for specific reference

---

## Technical Decisions

- **Static export** (`output: 'export'`) — required for GitHub Pages
- **basePath: `/rstc`** — GitHub Pages deploys to eri-james.github.io/rstc/
- **No API routes** — incompatible with static export
- **No server-side features** — no SSR, no middleware, no image optimization
- **Images unoptimized** — required for static export
- **Framer Motion** — for scroll animations (fade-in-on-scroll like MURA)
- **SPA navigation** — smooth scroll to sections, not page routes (keeps it simple, fast, MURA-like)
- **PDF links** — race cards and documents remain as PDF downloads/external links (this IS the reality of RSTC's data)
- **Mock data** — race calendar, stallion registry use placeholder/demo data for UI demonstration

---

## Files & Assets We Need

### Images to Source/Generate
- Hero background: Racecourse/Sabah landscape (generate or source)
- RSTC logo (exists at original site: images/logo.png)
- Race card banner images (from original: gif/racebook/*.png)
- Stallion placeholder images (generate)

### Content We Have (from original site)
- Full history text (from history.html)
- Tambalang Racecourse address (89150 Tuaran, Sabah)
- Social media links (FB, IG, YT)
- All PDF links (race cards, analysis, commingling rules, breeding regulations)
- All external result links (HKJC, STC, SLTC, PRTC)
- Google Analytics ID (G-Q1ZTEDQMRK) — can reuse if needed

### Content That Needs Mocking
- Upcoming race calendar entries (3-4 demo dates)
- Stallion registry entries (4-6 placeholder stallions)
- Committee member names/roles (use from original or placeholder)
- CSR content (brief placeholder paragraph)
- How To Play guide content (brief placeholder)

---

## Change Log

- **2026-06-07**: Initial direction document created
- **2026-06-07**: Updated with organizational constraints — no API/data, PDF-only operations since 1970s, membership is physical records, photo gallery backburnered
