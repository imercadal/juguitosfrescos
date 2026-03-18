# Juice Store "Juguitos Frescos" website

Monorepo for the Juguitos Frescos web presence, a Next.js storefront paired with a Sanity Studio headless CMS.

## Structure

```
juguitos-frescos-app/
├── jugos/           # Next.js 15 frontend (storefront)
└── juguitos-cms/    # Sanity Studio (content management)
```

## Getting started

### Frontend (`jugos/`)

```bash
cd jugos
npm install
npm run dev     # http://localhost:3000
```

### CMS (`juguitos-cms/`)

```bash
cd juguitos-cms
npm install
npm run dev     # http://localhost:3333
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero cards linking to the three main sections |
| `/menu` | Products grouped by category, fetched from Sanity |
| `/artistas` | Featured artists listing |
| `/blog` | Blog index and individual post pages |

## Tech stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Styled Components
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

## Environment

The frontend reads from Sanity project `gu1ftuda`, dataset `production`. No `.env` setup is needed for read-only access; Sanity's public API is used directly.
