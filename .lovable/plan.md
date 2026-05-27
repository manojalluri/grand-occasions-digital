## Convention Hall — Premium Luxury Site

Since you skipped the questions, I'm picking sensible defaults you can change anytime:

- **Venue placeholders**: "Aurelia Grand Convention" in "Hyderabad", phone/WhatsApp `+91 98XXX XXXXX`, email `hello@aureliagrand.com`. Easy to find-and-replace later.
- **Palette**: Champagne Gold on Charcoal (charcoal `#0e0e10`, ivory `#f5efe0`, gold accent `#c9a84c`).
- **Typography**: Instrument Serif (headings) + Work Sans (body).
- **Structure**: Long-scroll premium home page + 3 supporting routes (Gallery, Packages, Contact) so each is shareable and SEO-indexable.

## Pages & routes

```
/            Home (all sections below, single scroll)
/gallery     Full masonry gallery with category filters
/packages    Silver / Gold / Platinum + custom quote form
/contact     Map, inquiry form, hours, directions
```

Each route gets its own `head()` with unique title, description, og:title/description. Home gets `Event Venue` JSON-LD schema.

## Home page sections (in order)

1. **Cinematic Hero** — full-bleed image, serif headline "Where Grand Celebrations Become Timeless Memories", subhead, primary CTA `Book Venue` + secondary `View Gallery`, trust strip (events hosted / years / capacity / rating).
2. **About** — story, vision, hospitality philosophy, heritage badges.
3. **Venue Highlights** — premium feature cards (Banquet, Wedding, Reception, Corporate, Engagement, Birthday, Cultural, Exhibition) with seating/dining capacity.
4. **Why Choose Us** — 8 benefit tiles with gold line icons.
5. **Event Categories** — large visual cards (Weddings, Receptions, Engagements, Corporate, Birthdays, Cultural, Exhibitions).
6. **Amenities Showcase** — 16-item icon grid (AC, bridal rooms, VIP suites, catering, generator, sound, security, parking, etc.).
7. **Gallery Preview** — masonry sampler with `Explore Full Gallery` link to `/gallery`.
8. **Testimonials** — carousel with star ratings, name, event type, date.
9. **Virtual Tour** — 360°/drone/walkthrough placeholders with "Explore The Venue Before You Visit" CTA.
10. **Packages Preview** — Silver/Gold/Platinum cards + `Request Customized Package`.
11. **FAQ** — accordion, 8 questions from your brief.
12. **Contact & Booking** — inquiry form (event type, date, guest count), phone, WhatsApp, email, address, embedded Google Map (static image placeholder until you provide an API key).
13. **Footer** — quick links, categories, contact, socials, ratings.

**Sticky mobile bottom bar** (visible <md): Call · WhatsApp · Directions · Book — uses `tel:`, `https://wa.me/...`, `https://maps.google.com/?q=...` links.

## Visual & motion

- Charcoal base with ivory panels and gold hairline dividers; subtle grain texture.
- Glassmorphic cards over hero imagery; gold underline accents on serif headings.
- Smooth scroll-reveal (framer-motion fade/translate), hover lift on cards, image ken-burns on hero.
- Mobile-first breakpoints; cinematic 16:9 imagery downshifts to 4:5 on mobile.

## Technical

- TanStack Start file-based routes under `src/routes/` (`index.tsx`, `gallery.tsx`, `packages.tsx`, `contact.tsx`).
- Design tokens defined in `src/styles.css` (oklch): charcoal bg, ivory fg, gold primary, champagne muted; serif + sans font families wired via Google Fonts preconnect in `__root.tsx`.
- shadcn components reskinned: Button (gold variant), Card (glass variant), Accordion (FAQ), Carousel (testimonials), Dialog (lightbox), Form + zod for inquiry.
- Hero & section imagery generated with `imagegen` (premium tier for hero, fast for secondary) — wedding stage, banquet interior, exterior night-lit facade, bridal suite, dining hall, decor close-ups (~8 images, stored in `src/assets/`).
- SEO: per-route `head()`, `Event Venue` JSON-LD on home, semantic H1/H2, alt text, relative canonical paths, lazy-loaded gallery images.
- Inquiry form: client-side zod validation; on submit opens prefilled WhatsApp link (no backend needed). If you later want to store submissions, we enable Lovable Cloud.
- No backend in this pass — pure frontend, fast, Lighthouse-friendly.

## Out of scope this round (say the word to add)

- Real Google Maps embed (needs Maps connector)
- Lovable Cloud + DB-backed inquiry storage
- Real 360° tour embed (Matterport/Kuula link)
- Google Reviews live integration (needs Places API)
