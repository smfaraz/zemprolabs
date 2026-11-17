# Zemprolabs website

Static marketing site for Zemprolabs, built with [Astro](https://astro.build) and Tailwind CSS v4. Every page is pre-rendered HTML for fast loads and good SEO.

## Commands

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

## Where things live

| Path | What |
|---|---|
| `src/data/site.ts` | Company name, email, phones, address, nav |
| `src/data/services.ts` | Service pillars and every service page's copy, FAQs and SEO meta |
| `src/data/work.ts` | Case studies (copy, media, links, related services) |
| `src/pages/` | Routes: home, services, work, about, careers, contact, thank-you, 404 |
| `src/components/` | Header, footer, work cards, FAQ, form shell |
| `src/styles/global.css` | Design tokens (colours, fonts) and shared styles |
| `src/assets/images/` | Images (auto-optimised to WebP at build) |
| `public/videos/work/` | Case-study videos |

To add a case study, add an entry to `src/data/work.ts`; the page, card, sitemap entry and structured data are generated automatically. Same for services in `src/data/services.ts`.

## Forms

Contact and careers forms submit to [Web3Forms](https://web3forms.com), which emails each submission to the inbox you registered.

1. Create a free account at web3forms.com with the inbox that should receive enquiries.
2. Copy the access key into `.env` as `PUBLIC_WEB3FORMS_KEY=...` (see `.env.example`).
3. Add the same variable in Vercel → Project → Settings → Environment Variables, then redeploy.

## Deploy

Hosted on Vercel (framework preset: Astro). `vercel.json` sets clean URLs, security headers, caching and redirects from the old site's routes.
