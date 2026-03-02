# ECOMASSAGE WELLNESS CYPRUS - PRD

## Original Problem Statement
Premium luxury single-page website for ECOMASSAGE WELLNESS CYPRUS — first EXOwave™ contactless massage studio in Cyprus, Limassol. Ultra-premium design ($50K look), trilingual (RU/EN/EL), 10 sections.

## Architecture
- **Backend**: FastAPI + MongoDB (lead form storage)
- **Frontend**: React + Tailwind CSS + Framer Motion + Shadcn UI
- **Deployment**: Kubernetes (preview at exomassage-cyprus.preview.emergentagent.com)

## User Personas
1. Russian-speaking expats in Limassol seeking wellness/massage
2. English-speaking tourists/residents
3. Greek-speaking locals

## Core Requirements
- Trilingual website (RU default, EN, EL)
- OPEN/CLOSED badge with Europe/Nicosia timezone
- 10 sections: Hero, About, How it Works, Services (8 tabs), Why Choose Us, Pricing, Testimonials, Lead Form, Location, Footer
- Floating WhatsApp button, scroll-to-top, mobile CTA bar
- Lead capture form saving to MongoDB
- All booking CTAs → Dikidi
- Video testimonials (5 real MP4 videos)
- Cookie consent (GDPR)

## What's Been Implemented (March 2, 2026)
- [x] Backend API: POST/GET /api/leads with validation
- [x] Full single-page website with 10 sections
- [x] Trilingual support (RU/EN/EL) with localStorage persistence
- [x] OPEN/CLOSED real-time badge (Europe/Nicosia timezone)
- [x] Sticky header with contact bar, navigation, language switcher
- [x] Hero section with animated particles, CTAs, trust badges
- [x] About section with animated stat counters
- [x] How it Works (3 steps with icons)
- [x] Services section (8 treatment tabs with conditions)
- [x] Why Choose Us (6 glassmorphism benefit cards)
- [x] Pricing (4 cards: trial free, single, subscription with 10/20 min toggle, children)
- [x] Video testimonials carousel (5 real videos)
- [x] Lead capture form with validation + success state
- [x] Location section with map, contacts, working hours
- [x] Footer with links, contacts, privacy policy modal
- [x] Floating WhatsApp button with pulse animation
- [x] Scroll-to-top button
- [x] Mobile CTA bar (hides over form section)
- [x] Cookie consent banner
- [x] Mobile responsive design

## Pricing Data
| Type | 10 min | 20 min |
|------|--------|--------|
| Single | €40 | €70 |
| 10 sessions | €35/s | €65/s |
| 14 sessions | €30/s | €55/s |
| 20 sessions | €27/s | €55/s |
| 30 sessions | €25/s | €45/s |
| Children | €20 | - |
| Trial | FREE (3 min) | - |

## Prioritized Backlog
### P0 (Done)
- All 10 sections implemented
- Trilingual support
- Lead form API

### P1 (Next)
- Telegram bot integration for form notifications
- SEO meta tags (title, description, OG tags) per language
- Real studio photos replacement

### P2
- Admin panel for leads management
- Google Analytics / Facebook Pixel integration
- Loading screen animation
- Performance optimization for 90+ Lighthouse
