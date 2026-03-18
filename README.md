# Juice Store "Juguitos Frescos" website

Monorepo for the Juguitos Frescos web presence, a Next.js storefront paired with a Sanity Studio headless CMS.

## Demo
[Demo video](https://vimeo.com/1169690307)
[Live Site](https://juguitosfrescos.com)

## Structure

```
juguitosfrescos/
├── web/           # Next.js 15 frontend (storefront)
└── studio/        # Sanity Studio (content management)
```

## Installation
Clone the monorepo:

```bash
git clone https://github.com/imercadal/juguitosfrescos.git
```

Install dependencies for each side of the app:

### Frontend (`web/`)

```bash
cd web
npm install
npm run dev     # http://localhost:3000
```

### CMS (`studio/`)

```bash
cd studio
npm install
npm run dev     # http://localhost:3333
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero cards linking to the three main sections |
| `/menu` | Products grouped by category, fetched from Sanity |
| `/artistas` | Featured artists on the physical store |
| `/blog` | Blog index and individual post pages |

## Features
- **"A tu gusto" customizable section** — dedicated menu area for juices and coffees with dual pricing (base and with milk), fruit availability notices, extras, and extractos
- **Header quick-access bar** — links to WhatsApp, Google Maps location, and an accessible business-hours modal (keyboard-navigable, Escape to close)
- **Blog with rich content** — Portable Text rendering, author attribution with avatar, and per-post OpenGraph metadata for social sharing
- **Incremental Static Regeneration** — menu and artist pages revalidate every 30 seconds so content stays fresh without redeployment
- **Production security headers** — CSP with Sanity CDN allowlist, HSTS, X-Frame-Options, Referrer-Policy, and Permissions-Policy
- **Accessible UI** — semantic HTML, ARIA labels, focus management, and full keyboard navigation throughout
- **Branded error pages** — custom 404 and error boundary pages in Spanish, styled to match the site
- **Store admin has independent editing access** for all products, artists, and blog posts via Sanity Studio


## Tech stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS 4
- **CMS**: Sanity Studio v3
- **Data fetching**: GROQ queries with 30s revalidation directly from Sanity's CDN — no custom backend
- **Fonts**: Shantell Sans (body), LifelogoEasy (display/logo)

## Content types (Sanity)

| Schema | Description |
|---|---|
| `menuCategory` | Menu sections — groups products into categories |
| `menuItem` | Standard menu products |
| `flexibleItem` | "A tu gusto" customizable products with base/milk pricing |
| `ingredient` | Individual ingredients (type, availability) |
| `post` | Blog posts with Portable Text body |
| `author` | Blog post authors |
| `artist` | Featured artists shown on the physical store page |

## Tools
Built with the assistance of [Claude](https://claude.ai) (Anthropic).  

## Environment

The frontend reads from Sanity project `gu1ftuda`, dataset `production`. No `.env` setup is needed for read-only access; Sanity's public API is used directly.
