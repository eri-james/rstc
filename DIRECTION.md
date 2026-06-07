# RSTC Website Rebuild — Direction & Context

## Project Overview

**What:** Complete from-scratch rebuild of the Royal Sabah Turf Club (RSTC) website  
**Repo:** https://github.com/eri-james/rstc  
**Deploy:** Cloudflare Workers (via @opennextjs/cloudflare) — live at rstc.pages.dev  
**Stack:** Next.js 16 + TypeScript + Tailwind CSS 4 + shadcn/ui + Framer Motion  
**Status:** Demo website — functional but with placeholder/mock data where real data is unavailable. Independent/third-party fan-made platform, not affiliated with the actual RSTC organization.  
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
   - Website membership is independent of actual club membership (this is a fan-made site)

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

### RSTC × Umamusume Pretty Derby

RSTC has actively embraced Umamusume Pretty Derby as a marketing channel to attract younger generations. This is not theoretical — they are hosting real crossover events:

- **RSTC Kaamatan Cup (Harvest Festival Cup)** — June 7, 2026, at Tambalang Racecourse
  - Featured Umamusume cosplayers (kemo★kyun group)
  - Activities: real horse racing, photo ops with cosplayers, starter gate racing with cosplayers
  - Partners: kemo★kyun, LIFT, AniHobby, HobbyCon, Fluffy Pink Corner
  - This proves RSTC sees Umamusume as a viable bridge to younger audiences

**Implication for the website**: Umamusume content must exist, but it must serve as an **on-ramp to real racing**, not a parallel attraction that overshadows the site's core purpose.

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
| **Navigation** | Multi-page (each section has its own route) | Same — separate pages per section |
| **Typography** | Noto Sans JP + Inter, heavy font weights | Inter/system sans, bold headers, clean body |
| **Background** | Fixed full-bleed image (Umamusume official art) | Fixed full-bleed racecourse/Sabah landscape photo |

### RSTC Colour System

| Section | Colour | Tailwind Class | Hex | Rationale |
|---------|--------|---------------|-----|-----------|
| **Race Day** | Royal Blue | `blue-500` | `#3B82F6` | RSTC brand colour, racing = blue |
| **The Club** | Emerald | `emerald-500` | `#10B981` | Borneo, nature, growth, "Land Below the Wind" |
| **Own & Breed** | Amber/Gold | `amber-500` | `#F59E0B` | Premium, royalty, horse racing trophies |
| **Betting Guide** | Violet | `violet-500` | `#8B5CF6` | Distinct from racing blue, represents the analytical side |
| **Umamusume / Derby** | Pink | `pink-500` | `#EC4899` | Umamusume brand colour, youth energy, crossover events |
| **Accents** | Red | `red-500` | `#EF4444` | Alerts, highlights, important actions |
| **Background** | — | — | — | Racecourse / Mount Kinabalu photo (fixed, slight blur/overlay) |

### The "Pink Signal" — Visual Language for Umamusume

Pink (#EC4899) serves as the **Umamusume signal colour** throughout the site. Whenever users see a pink-bordered card, pink badge, or pink accent, they immediately know it's Umamusume-related content. This creates a consistent visual language without needing explicit "Umamusume" labels everywhere.

---

## Site Structure

### Multi-Page Routes

```
/                    → Landing — "What's New & Upcoming" feed
/race-day            → Race hub (cards, results, analysis)
/the-club            → Club info & heritage
/own-and-breed       → Ownership & breeding
/betting-guide       → Betting explainer
/derby               → Umamusume crossover hub (hidden route — not in main nav)
/profile             → User dashboard (auth required, Phase 4+)
```

### Navigation (5 items)

| Nav Item | Route | Colour |
|----------|-------|--------|
| **Home** | `/` | — |
| **About** | `/the-club` | Green |
| **Racing** | `/race-day` | Blue |
| **Betting** | `/betting-guide` | Violet |
| **Join Us** | `/profile` (or signup) | Amber |

**Note**: Umamusume/`/derby` is intentionally NOT in the main navigation. It's a hidden route accessible via event cards on the landing page.

### Wireframe — Landing Page

```
RSTC — Home of Bornean Racing

┌─────────────────────────────────────────────┐
│  NAVBAR: Logo | Home | About | Racing | Betting | Join Us │
│  (Sticky, glass-effect, minimal)                          │
├─────────────────────────────────────────────┤
│                                             │
│  🏇 HERO — Full-width background photo     │
│  "The Sport of Kings since 1908"           │
│  + "View Race Calendar" CTA                │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  WHAT'S NEW & UPCOMING (mixed feed)         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ 🔵 Race  │ │ 🟢 Club  │ │ 🟡 Own   │   │
│  │ Day      │ │ News     │ │ & Breed  │   │
│  │ Event    │ │ Update   │ │ Update   │   │
│  └──────────┘ └──────────┘ └──────────┘   │
│  ┌──────────┐ ┌──────────┐                 │
│  │ 🟣 Bet   │ │ 🩷 Uma   │  ← Pink card   │
│  │ Guide    │ │ Event!   │    signals      │
│  │ Update   │ │ (links   │    Umamusume    │
│  │          │ │  /derby) │    content      │
│  └──────────┘ └──────────┘                 │
│                                             │
├─────────────────────────────────────────────┤
│  QUICK ACCESS TILES (colour-coded)          │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐      │
│  │ 🔵   │ │ 🟢   │ │ 🟡   │ │ 🟣   │      │
│  │Race  │ │Club  │ │Own & │ │Bet   │      │
│  │Day   │ │      │ │Breed │ │Guide │      │
│  └──────┘ └──────┘ └──────┘ └──────┘      │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER — Socials (FB, IG, YT) · Disclaimer · © │
└─────────────────────────────────────────────┘
```

---

## Umamusume Integration Strategy

### Core Principle
**Umamusume is a bridge, not a destination.** The site's primary identity is a racing information hub. Umamusume content channels curious fans INTO the real racing content rather than creating a separate silo. Someone who comes for Umamusume should leave understanding real racing.

### Three-Pronged Approach

#### 1. Event-Driven Presence (Always Active)

The most natural integration — Umamusume content appears organically through the existing event system.

- **Landing page**: Crossover events (like the Kaamatan Cup) appear in the "What's New & Upcoming" feed alongside regular race days
  - Uses **pink (#EC4899) bordered cards** instead of blue — the "pink signal"
  - Card displays Umamusume branding/event name, date, and a CTA
- **When no Umamusume event is active**: No Umamusume content is visible on the main site. It stays purely racing.
- **When an event is upcoming/live**: A highlighted pink card appears in the landing feed, linking to `/derby`
- This mirrors exactly how RSTC uses Umamusume — as event marketing, not permanent branding

#### 2. Bridge Content — "New to Racing?" (Under Race Day)

A sub-page nested under Race Day that uses Umamusume concepts to teach real racing fundamentals.

- **Route**: `/race-day/newcomers` — clearly nested under an existing section
- **Concept**: "Love the anime? Here's how real racing works."
- Uses Umamusume analogies to explain real concepts:
  - **Race types**: "In Umamusume, races like the Tenno Sho are REAL races at real tracks — and you can watch them commingled at RSTC"
  - **Betting formats**: "Win, Place, Quinella — the betting you see in the game works the same way at Tambalang"
  - **Horse breeding**: "The stallion registry at RSTC is how real breeding works, just like in the training arcs"
  - **Race cards**: "Those race programs you see in the anime? RSTC publishes real ones for every race day"
- **Tone**: Respectful bridge, educational — not "anime fan service"
- **Purpose**: Channels curious anime fans INTO the real content. A fan who comes for Umamusume ends up reading real race cards and betting guides.

#### 3. Hidden `/derby` Route (Event-Linked)

A dedicated Umamusume corner that doesn't appear in the main navigation — accessible only via event cards or direct URL.

- **Route**: `/derby` — clean, thematic, doesn't say "umamusume" in the URL
- **Colour**: Pink #EC4899 — distinct from the 4 main section colours
- **Contents**:
  - Upcoming crossover events (Kaamatan Cup, etc.) with full details
  - Photo highlights from past events (when content exists)
  - Community links (kemo★kyun, Discord, partner orgs)
  - "Racing for Fans" — bridge content (links to `/race-day/newcomers`)
  - Small disclaimer: "Fan-made page — not affiliated with Cygames or Umamusume Pretty Derby"
- **Access**: Landing page event cards link here when an Umamusume event is upcoming. The rest of the time, it's quiet.
- **Philosophy**: It gives Umamusume a home without giving it the same visual weight as Race Day or The Club. Discoverable for those who seek it, invisible for those who don't care.

### Future Enhancements (Phase 4–5+)

- **Profile gamification**: Umamusume-themed profile personalization — character avatars, "trainer card" style profiles, achievement badges themed after Umamusume concepts ("First Race Watched" badge styled like a training milestone)
- **Heritage × Counterparts**: Small callouts on history/champion horse pages noting Umamusume counterparts ("Special Week, Silence Suzuka, and Tokai Teio from Umamusume are based on real JRA champions")

---

## What Each Page Actually Contains

Given the organizational constraints (no API, no database, PDF-only data):

### `/` Landing — "What's New & Upcoming"

- **Event Feed** — Mixed cards showing upcoming race days, club news, and crossover events
  - Blue cards = Race Day events
  - Green cards = Club news/updates
  - Amber cards = Own & Breed updates
  - Violet cards = Betting Guide updates
  - Pink cards = Umamusume crossover events (link to `/derby`)
- **Quick Access Tiles** — 4 colour-coded tiles linking to each main section page
- **Hero Banner** — Racecourse photo with tagline and primary CTA

### `/race-day` — Race Hub (Blue)

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
- **New to Racing?** — Bridge content sub-page (`/race-day/newcomers`) using Umamusume analogies to explain real racing

### `/the-club` — Club Info & Heritage (Green)

- **History** — The real history text (it's the best content on the site). Display as a timeline or story card.
- **Visit Us** — Tambalang Racecourse address + embedded Google Map. Function Room info card. OCB locations.
- **Management Committee** — Placeholder names/roles (taken from original site).
- **CSR** — Brief card about Corporate Social Responsibility.

### `/own-and-breed` — Ownership & Breeding (Amber)

- **Breeding Regulations** — Link to PDF + summary card.
- **Stallion Registry** — Placeholder cards with stallion names and placeholder images.
- **Apprentice Program** — Info card about the program.
- **Horse Ownership** — Info card / guide.

### `/betting-guide` — Betting Explainer (Violet)

- **How To Play** — Step-by-step guide card (from original site's "Game - How To Play").
- **Commingling** — Introduction + links to HKJC betting rules PDF + Australia/SRW rules PDF.
- **Rules & Prohibited Substances** — Link to rules PDF + prohibited substances PDF.
- **Important**: This site provides betting INFORMATION only. It does not handle or facilitate actual betting.

### `/derby` — Umamusume Hub (Pink, Hidden Route)

- **Upcoming Events** — Full details for crossover events (Kaamatan Cup, etc.)
- **Past Events** — Photo highlights and recaps (when content exists)
- **Community** — Links to kemo★kyun, AniHobby, HobbyCon, Discord communities
- **Racing for Fans** — Bridge content linking to `/race-day/newcomers`
- **Disclaimer** — Fan-made page, not affiliated with Cygames or Umamusume Pretty Derby
- **Not in main nav** — Accessible via landing page event cards or direct URL only

### `/profile` — User Dashboard (Phase 4+)

- **Auth required** — Discord OAuth as primary authentication
- **Profile** — User info, avatar, preferences
- **Tracked Races** — Races the user is following
- **Tracked Horses** — Horses the user is interested in
- **Achievements** — Gamification badges (Umamusume-themed in Phase 5+)

---

## What We're NOT Building (Out of Scope)

| Feature | Reason |
|---------|--------|
| Live race data/API | Doesn't exist in the organization |
| Actual betting handling | Legal risk; site is informational only |
| Actual club membership | Physical records only; website membership is independent |
| Photo gallery (main) | Backburner — barely updated, no content pipeline |
| Blog / news CMS | No content team to maintain it |
| Dynamic results page | result.php is external; no data to feed |
| E-commerce / ticketing | Out of scope for demo |
| Bahasa Malaysia / Kadazandusun | English-only for demo; can be added later |
| Umamusume in main navigation | Intentionally hidden — event-driven presence only |

---

## User Personas (for design decisions)

### Persona 1: The Punter (50% of traffic)
- Wants: "What's racing? When? Who won?"
- Needs: Race calendar, race card PDFs, result links
- Behaviour: Mobile-first, checks on race day, wants fast access to PDFs

### Persona 2: The Umamusume Fan (20%)
- Wants: "I saw the Kaamatan Cup poster — what's this about?"
- Needs: Event details, bridge to understanding real racing
- Behaviour: Mobile, comes from social media/anime communities, likely first-time racing visitor
- **Key journey**: Landing → pink event card → `/derby` → bridge content → `/race-day` → becomes a racing fan

### Persona 3: The Horse Owner / Breeder (15%)
- Wants: Breeding regulations, stallion info, ownership rules
- Needs: Clear regulatory documents, stallion registry
- Behaviour: Desktop, visits occasionally for reference material

### Persona 4: The Tourist / Curious Visitor (10%)
- Wants: "What is this place? Can I visit?"
- Needs: History, venue info, map
- Behaviour: Mobile, first-time visitor, scans briefly

### Persona 5: Industry / Committee (5%)
- Wants: Committee info, CSR, institutional legitimacy
- Needs: Corporate presence, contact info
- Behaviour: Desktop, visits for specific reference

---

## Technical Decisions

- **Cloudflare Workers** — hosting via @opennextjs/cloudflare (SSR capable)
- **Cloudflare D1** — SQLite database for race data, user profiles (Phase 2+)
- **Cloudflare R2** — file/image storage (Phase 2+)
- **Discord OAuth** — primary authentication method (Phase 4+)
- **Framer Motion** — for scroll animations (fade-in-on-scroll like MURA)
- **Multi-page routes** — each section has its own route (not SPA sections)
- **PDF links** — race cards and documents remain as PDF downloads/external links (this IS the reality of RSTC's data)
- **Mock data** — race calendar, stallion registry use placeholder/demo data for UI demonstration
- **`/derby` is a hidden route** — not in navigation, accessible via event cards only

---

## Files & Assets We Need

### Images to Source/Generate
- Hero background: Racecourse/Sabah landscape (generate or source)
- RSTC logo (exists at original site: images/logo.png)
- Race card banner images (from original: gif/racebook/*.png)
- Stallion placeholder images (generate)
- Umamusume event imagery (from RSTC's marketing materials, e.g. Kaamatan Cup poster)

### Content We Have (from original site)
- Full history text (from history.html)
- Tambalang Racecourse address (89150 Tuaran, Sabah)
- Social media links (FB, IG, YT)
- All PDF links (race cards, analysis, commingling rules, breeding regulations)
- All external result links (HKJC, STC, SLTC, PRTC)
- Google Analytics ID (G-Q1ZTEDQMRK) — can reuse if needed
- Kaamatan Cup event details (June 7, 2026; kemo★kyun guest; activities)

### Content That Needs Mocking
- Upcoming race calendar entries (3-4 demo dates)
- Stallion registry entries (4-6 placeholder stallions)
- Committee member names/roles (use from original or placeholder)
- CSR content (brief placeholder paragraph)
- How To Play guide content (brief placeholder)
- Bridge content for "New to Racing?" page (Umamusume-to-real-racing analogies)

---

## Phased Build Plan

### Phase 1: Visual Identity Rebuild (CURRENT)
- Rebuild entire UI from old dark-blue theme to MURA style
- Fixed background image, white cards, skewed colour banners
- Bold 2px coloured borders, fade-in scroll animations
- Multi-page navigation structure
- Landing page as "What's New & Upcoming" feed

### Phase 2: Database & Data Layer
- Cloudflare D1 + Prisma setup
- Seed with mock race data, stallion data
- PDF metadata storage (link, category, club origin)

### Phase 3: Core Pages — Full Content
- Build out `/race-day`, `/the-club`, `/own-and-breed`, `/betting-guide`
- Build `/derby` hidden route
- Build `/race-day/newcomers` bridge content page

### Phase 4: Authentication & User System
- Discord OAuth integration
- User profiles
- Website membership (independent of actual club)

### Phase 5: Tracking & Engagement
- Bookmark/follow races and horses
- Achievement/gamification system
- Umamusume-themed profile personalization

### Phase 6: Polish & Extras
- Performance optimization
- Accessibility audit
- SEO optimization
- Additional language support (if needed)

---

## Change Log

- **2026-06-07**: Initial direction document created
- **2026-06-07**: Updated with organizational constraints — no API/data, PDF-only operations since 1970s, membership is physical records, photo gallery backburnered
- **2026-06-08**: Major update — migrated from GitHub Pages to Cloudflare Workers, multi-page structure, website membership as independent platform, user profiles with race/horse tracking
- **2026-06-08**: Added Umamusume integration strategy (event-driven presence + bridge content + hidden `/derby` route). Added Persona 2: The Umamusume Fan. Updated colour system with Pink #EC4899 as Umamusume signal colour. Added Kaamatan Cup event context
