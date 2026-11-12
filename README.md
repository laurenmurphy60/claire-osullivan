# Claire O'Sullivan

The official website of professional baseball player Claire O'Sullivan.
Built with Next.js 15 (App Router), TypeScript and Tailwind CSS, deployed on Vercel.

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Project structure

```
src/
  design-system/          Page-agnostic foundations
    tokens.css            ← all colour, type, spacing and motion tokens
    motion.css            Keyframes, reveal states, reduced-motion handling
    components/           Button, Eyebrow, SectionHeading, Placeholder,
                          Reveal, baseball motifs, icons
  content/site.ts         ← all copy and placeholder content
  components/
    layout/               Header, Footer, Wordmark
    home/                 Homepage sections (Hero, Experience, Coaching,
                          NextUp, Social)
    PageHeader.tsx        Shared inner-page header
  app/                    Routes: /, /about, /career, /coaching, /contact
public/images/            Photography
```

Tailwind (`tailwind.config.ts`) maps onto the CSS variables in
`tokens.css`, so change a value there and every component updates.

## Before launch

- **Hero photograph**: add the supplied pitching image at
  `public/images/claire-osullivan-hero.jpg`. Until then a labelled
  placeholder renders. Tune the crop with `hero.image.objectPosition` in
  `src/content/site.ts`.
- **Placeholders**: anything in `[square brackets]` or marked with a
  "Placeholder" tag is unverified dummy content. That includes stats, teams,
  timeline, competitions, media, sponsors, the Instagram handle and URL, and
  the contact email.
- **Domain**: `metadataBase` uses Vercel's production URL. Swap in the
  custom domain in `src/app/layout.tsx` when there is one.

## Deploying

Push to `main`; Vercel builds automatically. No environment variables are required.
