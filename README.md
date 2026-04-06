# Inventra

**The Intelligent OS for African Commerce**

Inventra is a Next.js marketing website for the Inventra platform — an AI, AR, and VR-powered inventory intelligence system built for African businesses.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animations | Framer Motion 12 |
| Fonts | Syne · DM Sans · Space Mono (Google Fonts via `next/font`) |
| Icons | Lucide React |
| Theme | `next-themes` (dark / light) |

---

## Project Structure

```
app/
  layout.tsx              — Root layout, metadata, OG, fonts, ThemeProvider
  page.tsx                — Home page (all landing sections)
  globals.css             — CSS variables (dark + light), keyframes, utility classes
  icon.svg                — Branded SVG favicon
  opengraph-image.tsx     — Auto-generated OG image (1200×630) via ImageResponse
  sitemap.ts              — Auto-generated sitemap.xml
  robots.ts               — Auto-generated robots.txt
  blog/
    page.tsx              — Blog index with featured post + grid
    [slug]/
      page.tsx            — Individual article page (SSG via generateStaticParams)
      BlogArticleClient.tsx — Client component with animations
  docs/page.tsx           — Documentation page with live search
  careers/page.tsx        — Open roles + company values
  contact/page.tsx        — Contact form + office locations
  early-access/page.tsx   — Early access signup form
  privacy/page.tsx        — Privacy policy
  terms/page.tsx          — Terms of service

components/
  navbar.tsx              — Fixed, auto-hiding navbar with mobile menu + theme toggle
  footer.tsx              — Site footer
  hero-section.tsx        — Hero with animated dashboard UI
  problem-section.tsx     — Problem framing
  shift-section.tsx       — The shift section
  product-section.tsx     — Product overview
  how-it-works.tsx        — Step-by-step explainer
  ai-engine.tsx           — AI Intelligence feature section
  ar-experience.tsx       — AR feature section
  vr-dashboard.tsx        — VR Hub feature section
  social-proof.tsx        — Testimonials + logos
  use-cases.tsx           — Industry use cases
  competitive.tsx         — Comparison table
  pricing-section.tsx     — Pricing plans
  final-cta-section.tsx   — Bottom CTA
  theme-provider.tsx      — next-themes wrapper
  theme-toggle.tsx        — Sun/Moon toggle button

lib/
  blog-data.ts            — Shared blog post data (slugs, content, metadata)
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Key Pages

| Route | Purpose |
|---|---|
| `/` | Main landing page |
| `/early-access` | Early access signup (first 500 founders) |
| `/blog` | Blog index |
| `/blog/[slug]` | Individual article |
| `/docs` | Documentation with live search |
| `/careers` | Open roles |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## SEO & Metadata

- **OG image** — Auto-generated at `/opengraph-image` via `next/og` `ImageResponse`
- **Sitemap** — Auto-generated at `/sitemap.xml` via `app/sitemap.ts`
- **Robots** — Auto-generated at `/robots.txt` via `app/robots.ts`
- **Per-page metadata** — Each page exports its own `metadata` object
- **Favicon** — Branded SVG at `app/icon.svg`

---

## Forms

Both the `/contact` and `/early-access` forms currently store state locally and show a success screen on submit. To make them functional, wire them to an email/form service (e.g. [Resend](https://resend.com), [Formspree](https://formspree.io), or a Next.js API route).

---

## Deployment

The site is designed to deploy on [Vercel](https://vercel.com). Push to `main` and connect the repo — zero configuration needed.

Update `BASE` in `app/layout.tsx` and `app/sitemap.ts` to match your production domain before deploying.
