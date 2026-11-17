# Angel Partner Website (Next.js + Tailwind CSS, JavaScript)

Single landing page. Navbar links smooth-scroll to sections:
Home, How it works, About, For our team, FAQ, Contact.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where to change things
| What | File |
|---|---|
| Brand colors, fonts, shadows (one place) | `src/config/theme.js` |
| All text, highlighted words, image paths | `src/data/websiteData.js` |
| Page order | `src/app/page.js` |
| SEO title, description, JSON-LD | `src/app/layout.js` + `site` in `websiteData.js` |
| Logos | `public/logo/` |
| Images | `public/images/` (see `public/images/README.txt`) |

Highlight a word in any heading by wrapping it: `Earn on [[verified site visits]]`.

## Image reveal animation
Every image uses `ImageReveal`: a brand-color panel covers the image, slides left to right, then the image
appears. Cover color: `tone="forest"` or `tone="gold"`. Missing images show an "Add image" placeholder, so just
drop files into `public/images/` with the names listed in `public/images/README.txt`.

## Structure
```
src/
  app/            layout, page, robots, sitemap, globals.css
  config/         theme.js
  data/           websiteData.js
  lib/            icons.js (Lucide icon map)
  hooks/          useInView, useScrolled, useActiveSection
  components/
    layout/       Navbar, Footer
    sections/     HeroSection, HowItWorks, AboutSection, TeamSection, FAQSection, ContactSection
    ui/           Button, Container, Section, SectionHeading, RichText, FadeIn, ImageReveal, IconCard, PhoneMock, Logo
```

## Before going live
- Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`.
- Fill `site.contact` in `websiteData.js` (empty values stay hidden).
- Futura PT: add `FuturaPT-Light/Book/Medium.woff2` to `public/fonts/`. Until then Jost (a close look-alike) is used.
- Contact form: connect `onSubmit` in `ContactSection.jsx` to your API or CRM.
