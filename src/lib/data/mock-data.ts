import type {
  RaceDay,
  RaceCard,
  RaceResult,
  RaceAnalysis,
  HistoryEvent,
  CommitteeMember,
  VenueInfo,
  Stallion,
  PdfDocument,
  BettingType,
  FeedItem,
  DerbyEvent,
  BridgeContent,
} from "@/lib/types";

/* ── Race Day ──────────────────────────────────────────────── */

export const raceDays: RaceDay[] = [
  {
    id: "rd-001",
    date: "2026-06-15",
    displayDate: "15 Jun 2026",
    venue: "Tambalang Racecourse, Tuaran",
    raceCount: 8,
    distances: "1000M – 1800M",
    type: "Mixed Breed & Thoroughbred",
    status: "upcoming",
    featuredRace: "Tuaran Cup",
  },
  {
    id: "rd-002",
    date: "2026-06-29",
    displayDate: "29 Jun 2026",
    venue: "Tambalang Racecourse, Tuaran",
    raceCount: 6,
    distances: "1100M – 1600M",
    type: "Pony Racing",
    status: "upcoming",
  },
  {
    id: "rd-003",
    date: "2026-07-13",
    displayDate: "13 Jul 2026",
    venue: "Tambalang Racecourse, Tuaran",
    raceCount: 8,
    distances: "1000M – 1800M",
    type: "Thoroughbred",
    status: "upcoming",
    featuredRace: "Sabah Derby",
  },
  {
    id: "rd-004",
    date: "2026-07-27",
    displayDate: "27 Jul 2026",
    venue: "Tambalang Racecourse, Tuaran",
    raceCount: 7,
    distances: "1000M – 1600M",
    type: "Mixed Breed & Thoroughbred",
    status: "upcoming",
  },
  {
    id: "rd-005",
    date: "2026-05-10",
    displayDate: "10 May 2026",
    venue: "Tambalang Racecourse, Tuaran",
    raceCount: 8,
    distances: "1000M – 1800M",
    type: "Thoroughbred",
    status: "completed",
    featuredRace: "Kinabalu Stakes",
  },
  {
    id: "rd-006",
    date: "2026-05-24",
    displayDate: "24 May 2026",
    venue: "Tambalang Racecourse, Tuaran",
    raceCount: 6,
    distances: "1100M – 1600M",
    type: "Pony Racing",
    status: "completed",
  },
];

export const raceCards: RaceCard[] = [
  {
    id: "rc-001",
    club: "RSTC",
    label: "RSTC Race Card",
    url: "https://www.royalsabahturfclub.com.my/pdf/rstc-racecard.pdf",
    type: "pdf",
    colour: "blue",
  },
  {
    id: "rc-002",
    club: "HKJC",
    label: "HKJC Race Card",
    url: "https://racing.hkjc.com/racing/information/english/Racing/RaceCard.aspx",
    type: "external",
    colour: "blue",
  },
  {
    id: "rc-003",
    club: "SLTC",
    label: "Selangor STC Race Card",
    url: "https://www.selangorturfclub.com/my/racecards",
    type: "external",
    colour: "blue",
  },
  {
    id: "rc-004",
    club: "AUS",
    label: "Australian Race Book",
    url: "https://www.royalsabahturfclub.com.my/pdf/aus-racebook.pdf",
    type: "pdf",
    colour: "blue",
  },
];

export const raceResults: RaceResult[] = [
  {
    id: "rr-001",
    date: "2026-05-24",
    displayDate: "24 May 2026",
    venue: "Tambalang",
    highlights: [
      { race: 2, horseName: "Borneo Star", position: 1, time: "1:12.3" },
      { race: 4, horseName: "Tambalang Dream", position: 1, time: "1:08.7" },
      { race: 6, horseName: "Kinabalu Pride", position: 1, time: "1:15.1" },
    ],
    resultUrl: "https://www.royalsabahturfclub.com.my/result.php",
  },
  {
    id: "rr-002",
    date: "2026-05-10",
    displayDate: "10 May 2026",
    venue: "Tambalang",
    highlights: [
      { race: 1, horseName: "Golden Arrow", position: 1, time: "1:10.2" },
      { race: 3, horseName: "Sabah Spirit", position: 1, time: "1:14.8" },
      { race: 5, horseName: "Mount Kinabalu", position: 1, time: "1:09.5" },
    ],
    resultUrl: "https://www.royalsabahturfclub.com.my/result.php",
  },
];

export const raceAnalyses: RaceAnalysis[] = [
  {
    id: "ra-001",
    club: "SLTC",
    label: "Selangor Turf Club Race Analysis",
    url: "https://www.royalsabahturfclub.com.my/pdf/sltc-analysis.pdf",
  },
  {
    id: "ra-002",
    club: "PRTC",
    label: "Perak Race Analysis",
    url: "https://www.royalsabahturfclub.com.my/pdf/prtc-analysis.pdf",
  },
];

/* ── The Club ──────────────────────────────────────────────── */

export const historyTimeline: HistoryEvent[] = [
  {
    year: "1908",
    title: "Jesselton Turf Club Founded",
    description: "The Jesselton Turf Club was established during British North Borneo colonial rule, introducing organised horse racing to Sabah. Races were held on a modest track near the coast, with colonial officers and local enthusiasts gathering for weekend race meetings.",
  },
  {
    year: "1942–1945",
    title: "World War II Interruption",
    description: "Racing operations were suspended during the Japanese occupation of Borneo. The club's grounds were repurposed for military use, and many early records were lost during this period.",
  },
  {
    year: "1946",
    title: "Post-War Rebuilding",
    description: "After Sabah became a British Crown Colony, racing resumed. The club was reorganised as the North Borneo Turf Club, with expanded grounds and a growing membership of both expatriate and local racing enthusiasts.",
  },
  {
    year: "1963",
    title: "Sabah Joins Malaysia",
    description: "With the formation of Malaysia, the club entered a new era. North Borneo became Sabah, and the club began to modernise its operations while maintaining the traditions that made it a cornerstone of Sabah social life.",
  },
  {
    year: "1965",
    title: "Royal Charter — RSTC",
    description: "The club received the 'Royal' prefix, becoming the Royal Sabah Turf Club. This honour recognised the club's contributions to sport and community in Sabah. The 'R' was added by the Yang di-Pertuan Agong, making it one of only a few institutions in Sabah to carry the title.",
  },
  {
    year: "1970s",
    title: "Commingled Betting Era Begins",
    description: "RSTC began commingling betting pools with the Hong Kong Jockey Club, Singapore Turf Club, and Australian racing authorities. This brought international race betting to Sabah and significantly increased turnover and public interest in the sport.",
  },
  {
    year: "1990s",
    title: "Tambalang Racecourse Modernisation",
    description: "Major renovations at the Tuaran racecourse improved the grandstand, betting facilities, and track surface. The course became one of the best-maintained in the region, set against the dramatic backdrop of Mount Kinabalu.",
  },
  {
    year: "2000s",
    title: "Digital Challenges",
    description: "While other Malaysian turf clubs began digitising operations and launching websites with live data, RSTC continued to rely on printed materials and PDFs for race cards and results — a gap that persists to this day.",
  },
  {
    year: "2026",
    title: "A New Chapter",
    description: "RSTC begins exploring new ways to attract younger audiences, including crossover events with the Umamusume Pretty Derby franchise. The Kaamatan Cup marks the first collaboration between a Malaysian turf club and an anime gaming property.",
  },
];

export const committeeMembers: CommitteeMember[] = [
  { role: "Chairman", name: "Datuk Paduka Hj. Mastan Saman" },
  { role: "Deputy Chairman", name: "Datuk Thomas J. Gungkit" },
  { role: "Secretary", name: "Mr. Richard S. Gungkit" },
  { role: "Treasurer", name: "Mr. George T. Gungkit" },
  { role: "Committee Member", name: "Mr. Peter J. Gungkit" },
  { role: "Committee Member", name: "Mr. Johnny S. Gungkit" },
  { role: "Committee Member", name: "Mr. Michael T. Gungkit" },
];

export const venueInfo: VenueInfo = {
  name: "Tambalang Racecourse",
  address: "89150 Tuaran, Sabah, Malaysia",
  mapUrl: "https://www.google.com/maps/place/Tambalang+Racecourse",
  description: "Nestled in the Tuaran district with Mount Kinabalu as its backdrop, Tambalang Racecourse is the home of Bornean racing. The course features a turf track, a grandstand with covered seating, betting counters, and a function room available for private events.",
};

/* ── Own & Breed ───────────────────────────────────────────── */

export const stallions: Stallion[] = [
  {
    id: "st-001",
    name: "Northern Dancer Line",
    breed: "Thoroughbred",
    yob: 2018,
    color: "Bay",
    origin: "Australia",
    summary: "A descendant of the legendary Northern Dancer sire line, known for producing sprinters with exceptional early speed and stamina over middle distances.",
  },
  {
    id: "st-002",
    name: "Borneo Thunder",
    breed: "Mixed Breed",
    yob: 2020,
    color: "Chestnut",
    origin: "Malaysia",
    summary: "A locally bred stallion with strong Sabah bloodlines, known for producing hardy offspring well-suited to the Tambalang track conditions.",
  },
  {
    id: "st-003",
    name: "Kinabalu Storm",
    breed: "Thoroughbred",
    yob: 2017,
    color: "Dark Bay",
    origin: "New Zealand",
    summary: "Imported from New Zealand with proven staying ability. His progeny have excelled in longer distance races at Tambalang and Selangor.",
  },
  {
    id: "st-004",
    name: "Golden Horizon",
    breed: "Thoroughbred",
    yob: 2019,
    color: "Grey",
    origin: "Ireland",
    summary: "An Irish-bred stallion with a strong turf pedigree. His first crop of foals have shown promising form in pony and mixed breed racing.",
  },
  {
    id: "st-005",
    name: "Tuaran Express",
    breed: "Mixed Breed",
    yob: 2021,
    color: "Brown",
    origin: "Malaysia",
    summary: "A young locally bred stallion with impressive sprint speed. Early training reports suggest he may produce competitive two-year-olds.",
  },
];

export const pdfDocuments: PdfDocument[] = [
  {
    id: "pdf-001",
    title: "Breeding Regulations 2026",
    category: "breeding-regs",
    url: "https://www.royalsabahturfclub.com.my/pdf/breeding-regulations.pdf",
    description: "Official breeding regulations for the 2026 racing season, covering registration requirements, stud book procedures, and foal registration deadlines.",
  },
  {
    id: "pdf-002",
    title: "Rules of Racing",
    category: "rules",
    url: "https://www.royalsabahturfclub.com.my/pdf/rules-of-racing.pdf",
    description: "The complete rules of racing as governed by RSTC, including race conditions, jockey requirements, and stewards' powers.",
  },
  {
    id: "pdf-003",
    title: "Prohibited Substances",
    category: "prohibited",
    url: "https://www.royalsabahturfclub.com.my/pdf/prohibited-substances.pdf",
    description: "List of prohibited substances and medications, including testing procedures and penalties for violations.",
  },
];

/* ── Betting Guide ─────────────────────────────────────────── */

export const bettingTypes: BettingType[] = [
  {
    name: "Win",
    description: "Pick the horse that finishes first. The simplest and most popular bet in horse racing.",
    example: "You bet on Horse #3 to win. If Horse #3 finishes first, you collect!",
  },
  {
    name: "Place",
    description: "Pick a horse to finish first or second. Lower odds than a Win bet, but a better chance of collecting.",
    example: "You bet on Horse #5 to place. If Horse #5 finishes 1st or 2nd, you win.",
  },
  {
    name: "Quinella",
    description: "Pick two horses to finish first and second in any order. A popular exotic bet with good payouts.",
    example: "You box Horses #2 and #7. If they finish 1st and 2nd in either order, you win.",
  },
  {
    name: "Exacta",
    description: "Pick two horses to finish first and second in the exact order. Higher risk than Quinella, but pays more.",
    example: "You bet Horse #3 first, Horse #7 second. They must finish in that exact order.",
  },
  {
    name: "Trifecta",
    description: "Pick three horses to finish first, second, and third in exact order. High risk, high reward — popular with experienced punters.",
    example: "You bet 3-7-1. They must finish 1st, 2nd, 3rd in that exact order.",
  },
  {
    name: "Tierce",
    description: "Pick three horses to finish in the first three positions in any order. A Malaysian favourite with good pool sizes.",
    example: "You pick Horses #2, #5, #8. As long as they fill the top 3 spots in any order, you win.",
  },
];

export const comminglingDocuments: PdfDocument[] = [
  {
    id: "pdf-004",
    title: "HKJC Commingling Betting Rules",
    category: "commingling",
    url: "https://www.royalsabahturfclub.com.my/pdf/hkjc-commingling-rules.pdf",
    description: "Betting rules and pool information for Hong Kong Jockey Club commingled races at RSTC.",
  },
  {
    id: "pdf-005",
    title: "Australia/SRW Commingling Rules",
    category: "commingling",
    url: "https://www.royalsabahturfclub.com.my/pdf/aus-srw-rules.pdf",
    description: "Rules for Australian and SRW commingled race betting pools at RSTC outlets.",
  },
];

/* ── Feed Items ────────────────────────────────────────────── */

export const feedItems: FeedItem[] = [
  {
    id: "fi-001",
    category: "race",
    title: "Tambalang Race Day",
    date: "15 Jun 2026",
    description: "8 races · Mixed Breed & Thoroughbred · 1000M – 1800M",
    href: "/race-day",
    featured: true,
  },
  {
    id: "fi-002",
    category: "derby",
    title: "RSTC × Umamusume: Kaamatan Cup",
    date: "7 Jun 2026",
    description: "Harvest Festival Cup — cosplayers, starter gate racing & real horse racing!",
    href: "/derby",
    featured: true,
  },
  {
    id: "fi-003",
    category: "race",
    title: "Pony Racing Sunday",
    date: "29 Jun 2026",
    description: "6 races · Pony Racing · 1100M – 1600M",
    href: "/race-day",
  },
  {
    id: "fi-004",
    category: "club",
    title: "Heritage Walk — 118 Years of Racing",
    date: "Ongoing",
    description: "From the Jesselton Turf Club to the Royal Sabah Turf Club — discover our story since 1908.",
    href: "/the-club",
  },
  {
    id: "fi-005",
    category: "race",
    title: "Thoroughbred Meet",
    date: "13 Jul 2026",
    description: "8 races · Thoroughbred · 1000M – 1800M · Sabah Derby",
    href: "/race-day",
  },
  {
    id: "fi-006",
    category: "betting",
    title: "New to Betting? Start Here",
    date: "Guide",
    description: "Learn how commingling, pools, and race betting work across Malaysian and international turf clubs.",
    href: "/betting-guide",
  },
  {
    id: "fi-007",
    category: "own",
    title: "Stallion Registry Updated",
    date: "May 2026",
    description: "Browse the latest stallion entries and breeding regulations for the 2026 season.",
    href: "/own-and-breed",
  },
  {
    id: "fi-008",
    category: "results",
    title: "Race Results — 24 May 2026",
    date: "24 May 2026",
    description: "Borneo Star (Race 2) · Tambalang Dream (Race 4) — full results available.",
    href: "/race-day",
  },
];

/* ── Derby / Umamusume ─────────────────────────────────────── */

export const derbyEvents: DerbyEvent[] = [
  {
    id: "de-001",
    title: "RSTC Kaamatan Cup",
    subtitle: "Harvest Festival Cup",
    date: "2026-06-07",
    displayDate: "7 June 2026",
    venue: "Tambalang Racecourse, Tuaran",
    description: "A landmark crossover event bringing Umamusume Pretty Derby to the real racetrack. Experience the thrill of live horse racing alongside Umamusume cosplayer performances, photo opportunities, and special guest appearances. The Kaamatan Cup celebrates Sabah's Harvest Festival with a unique blend of tradition and pop culture.",
    activities: [
      "Exciting Real Horse Racing",
      "Take Pictures with Your Favourite Uma Cosplayer",
      "Uma Cosplayer Starter Gate Racing",
      "kemo★kyun Special Guest Performance",
      "Harvest Festival Cultural Activities",
    ],
    partners: ["kemo★kyun", "LIFT", "AniHobby", "HobbyCon", "Fluffy Pink Corner"],
    status: "upcoming",
    type: "crossover",
  },
];

export const bridgeContent: BridgeContent[] = [
  {
    id: "bc-001",
    umamusumeConcept: "Race Types (Tenno Sho, Takarazuka Kinen)",
    realRacingEquivalent: "Group/Graded Stakes Races",
    explanation: "The prestigious races in Umamusume — like the Tenno Sho and Takarazuka Kinen — are real Group 1 races run at real Japanese tracks. RSTC commingles with HKJC, meaning you can bet on these exact races from Tambalang!",
  },
  {
    id: "bc-002",
    umamusumeConcept: "Win, Place, Quinella Betting",
    realRacingEquivalent: "Same Bet Types at RSTC",
    explanation: "The betting formats you see in the game — Win, Place, Quinella, Exacta, Trifecta — work exactly the same way at RSTC. The odds and pool sizes differ, but the mechanics are identical.",
  },
  {
    id: "bc-003",
    umamusumeConcept: "Training & Breeding Horses",
    realRacingEquivalent: "Stallion Registry & Breeding Regulations",
    explanation: "In Umamusume, you train horses and manage their bloodlines. In real racing, stallions are registered with turf clubs and their breeding is regulated. RSTC maintains a stallion registry with detailed pedigree information.",
  },
  {
    id: "bc-004",
    umamusumeConcept: "Race Programs / Race Cards",
    realRacingEquivalent: "RSTC Race Card PDFs",
    explanation: "Those race programs you see in the anime, listing all runners and their stats? RSTC publishes real race cards for every race day. They're available as PDFs, listing each horse, jockey, weight, and form guide.",
  },
  {
    id: "bc-005",
    umamusumeConcept: "Race Strategy (pace, positioning)",
    realRacingEquivalent: "Race Analysis by Experts",
    explanation: "In Umamusume, strategy matters — frontrunners, stalkers, closers. Real racing analysts study the same factors. SLTC and PRTC publish race analysis PDFs that break down each runner's chances based on form, pace, and track conditions.",
  },
];
