# RSTC Website Rebuild - Work Log

## Project: Royal Sabah Turf Club (RSTC) Website Rebuild
## Date: 2026-06-07

### Summary
Rebuilt the RSTC website using Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui components with a MURA-inspired dark-blue professional aesthetic.

### Files Created/Modified

1. **`src/app/globals.css`** — Updated color theme variables to match MURA-inspired palette:
   - Primary: #0052CC (royal blue)
   - Secondary: #1E3A8A (dark navy)
   - Accent: #3B82F6 (slate blue)
   - Custom RSTC brand color variables
   - Custom scrollbar styling for dark sections

2. **`src/app/layout.tsx`** — Updated metadata for RSTC:
   - Title: "Royal Sabah Turf Club - Home of Bornean Racing"
   - Description and keywords updated
   - OpenGraph and Twitter card metadata

3. **`src/components/rstc/header.tsx`** — Sticky navigation header:
   - Royal blue (#0052CC) background
   - Crown icon with RSTC branding
   - Full desktop navigation with DropdownMenu dropdowns for all sections
   - Mobile hamburger menu using Sheet component
   - "Join Us" CTA button
   - Navigation structure: HOME, VISIT US, RACING, RACE ANALYSIS, RESULTS, BREEDING, APPRENTICE PROGRAM, ABOUT US, PHOTO GALLERY, COMMINGLING

4. **`src/components/rstc/hero-carousel.tsx`** — Hero carousel section:
   - 8 slides with gradient backgrounds and event text overlays
   - embla-carousel with Autoplay plugin (5s interval)
   - Manual prev/next controls with styled buttons
   - Dots indicator with active state animation
   - Decorative background circles pattern
   - Bottom gradient fade for seamless transition

5. **`src/components/rstc/welcome-section.tsx`** — Welcome section:
   - "WELCOME TO RSTC" heading with decorative underline
   - Descriptive paragraph about RSTC heritage
   - 4 Race Card links (RSTC, HKJC, SLTC, AUS) in responsive grid
   - Each card has unique accent color, icon, and hover effects
   - Location badge at bottom
   - SectionReveal and StaggerReveal framer-motion animations

6. **`src/components/rstc/content-grid.tsx`** — Main content grid:
   - Dark navy (#1E3A8A) background
   - 3 glass-effect cards: Racing, Apprentice Program, Breeding
   - Each card with icon, description, and sub-links
   - Subtle hover glow and elevation effects
   - StaggerReveal animation

7. **`src/components/rstc/bornean-racing.tsx`** — Home of Bornean Racing section:
   - White background with Mountain icon
   - Large centered heading and descriptive paragraph
   - YouTube link button and "Learn Our History" button
   - SectionReveal animation

8. **`src/components/rstc/social-section.tsx`** — Social media section:
   - Dark navy background
   - Facebook, YouTube, Instagram icons with brand-colored hover effects
   - Links to official RSTC social media accounts
   - StaggerReveal animation

9. **`src/components/rstc/footer.tsx`** — Footer:
   - Dark (#111827) background
   - Copyright: ©2024-2026 Royal Sabah Turf Club
   - Disclaimer and Privacy Policy links

10. **`src/components/rstc/motion.tsx`** — Reusable framer-motion animation components:
    - SectionReveal: Fade in from below on scroll
    - StaggerReveal: Staggered children animations
    - StaggerItem: Individual stagger child

11. **`src/app/page.tsx`** — Main page assembling all components with min-h-screen flex layout

### Technical Decisions
- Used `Crown` icon instead of `Horse` (not available in lucide-react) for RSTC branding
- Used `Trophy` icon for the Racing content card
- Used `xl:` breakpoint for desktop nav to ensure it fits properly
- Installed `embla-carousel-autoplay` for carousel auto-play functionality
- Custom scrollbar styling added for mobile nav and dark sections

### Lint & Build Status
- ✅ ESLint: No errors
- ✅ Dev server: Compiling successfully on port 3000
- ✅ Page loads with 200 status code
