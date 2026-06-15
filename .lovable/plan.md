# THE LOCKER ROOM — Landing Page Plan

A single-page premium e-commerce landing in strict Swiss/International Typographic Style. Static marketing site only (no cart/auth backend) — CTAs are visual.

## Design system (src/styles.css)
- Colors: primary green `#2E7D32`, dark green `#1B5E20`, white `#FFFFFF`, light gray `#F5F5F5`, black `#212121`. Background white, green as accent.
- Type: Inter Tight (display, bold uppercase) + Inter (body) via `<link>` in `__root.tsx`, registered as `--font-display` / `--font-sans` in `@theme`.
- Grid: 12-col Swiss grid, generous whitespace, hairline 1px black/10 dividers, no shadows/gradients/glass.

## Route & structure
- Replace `src/routes/index.tsx` placeholder with the full landing page; update `head()` with title "The Locker Room — Original Football Jerseys" and meta description.
- Compose page from focused section components in `src/components/locker/`:
  - `SiteHeader.tsx` (sticky, minimal, logo + nav + icons)
  - `Hero.tsx` (full-vh asymmetric grid, label/headline/sub/CTAs/trust list left, jersey image + floating product card right)
  - `Trust.tsx` (3-col with numerals 01/02/03)
  - `Collections.tsx` (4 large image cards w/ hover zoom)
  - `BestSellers.tsx` (product grid: image, club, season, authentic badge, price, add-to-cart)
  - `WhyUs.tsx` (editorial statement + 4-stat grid)
  - `VintageSpotlight.tsx` (large editorial image + copy + CTA)
  - `Testimonials.tsx` (minimal review cards)
  - `Newsletter.tsx` (large type + email input + CTA)
  - `SiteFooter.tsx` (4 columns + social + copyright)

## Imagery
Generate jerseys/editorial photos via imagegen (premium-product photography, neutral backgrounds, Swiss editorial feel) into `src/assets/`:
- hero jersey, vintage spotlight, 4 collection covers, ~4 best-seller product shots. All imported as ES6 modules with descriptive alt text.

## Interactions
- Sticky header with subtle border on scroll.
- Smooth scroll, hover image zoom (scale 1.03), button underline reveal, fade/slide-in on section enter via small CSS (no framer dependency added).

## Copy
Use the Indonesian/English copy from the brief verbatim.

## Out of scope
No cart logic, no auth, no Lovable Cloud — pure presentation. Can be wired later.
