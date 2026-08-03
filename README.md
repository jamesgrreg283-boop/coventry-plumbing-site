# coventryplumbing247

Lead-generation and introduction website for emergency plumbing enquiries across Coventry and nearby Warwickshire.

## Stack

- React 19 + Vite 8
- Client SPA with **build-time prerender** for every indexable route (meaningful HTML for crawlers)
- Deployed on Vercel

## Scripts

- `npm run dev` — local development
- `npm run build` — production build + prerender (`scripts/prerender.mjs`)
- `npm run preview` — preview `dist/`

## SEO notes

- Route metadata lives in `src/seoConfig.js`
- Landing body copy in `src/serviceLandingContent.js`
- Ads conversion `AW-18098618469/99svCK61hK1cEOWAjLZD` fires on telephone link clicks only
- Do not invent reviews, ratings, arrival times or job counts
