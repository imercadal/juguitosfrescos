# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a monorepo with two separate apps:
- `web/` — Next.js 15 frontend/storefront
- `studio/` — Sanity Studio headless CMS

## Commands

### Frontend (`web/`)
```bash
npm run dev      # Start Next.js dev server
npm run build    # Production build
npm run lint     # Run ESLint
```

### CMS (`studio/`)
```bash
npm run dev      # Start Sanity Studio dev server
npm run build    # Build Sanity Studio
npm run deploy   # Deploy Sanity Studio to hosted URL
```

## Architecture

### Data Flow
The frontend fetches content directly from Sanity's API using GROQ queries — no custom backend layer exists. The Sanity client is configured in `web/sanity/client.ts` with project ID `gu1ftuda` and dataset `production` hardcoded directly.

### Content Types
Sanity schemas are defined in `studio/schemaTypes/`:
- `postType.ts` — blog posts with Portable Text body
- `authorType.ts` — blog post authors
- `menuCategoryType.ts` — menu sections (fields: `nombre`, `identificador` slug, `orden`, `seccion` boolean — "A tu gusto?")
- `menuItemType.ts` — individual menu products (fields: `name`, `slug`, `price`, `description`, `image`, `category` reference, `available`)
- `flexibleItemType.ts` — menu products for customizable section A tu gusto, with additional fields (fields: `name`, `slug`, `precioBase`, `precioConLeche`, `description`, `image`, `orden`,`category` reference, `available`)
- `ingredientType` - each ingredient, fields: `ingredient`, `identificador`, `tipo` (multiple selection), `available` (boolean).
- `artistType` - each artist featured (fields: `name`, `bio`, `avatar` image, `orden`); rendered on `/artistas` via `ArtistsList.tsx` — shows empty-state message if no artists are returned

### Frontend Pages (Next.js App Router)
- `/` — Home with hero cards linking to the three main sections
- `/menu` — Products grouped by category, fetched from Sanity CMS
- `/artistas` — Featured artists listing
- `/blog` — Blog index + `/blog/[slug]` dynamic routes

### Key Patterns
- **Server components** fetch from Sanity directly (e.g., `PostsList`, `MenuPage` are async)
- **GROQ queries** with 30-second revalidation in server components; menu queries are in `web/sanity/queries/menu.ts`, artists queries in `web/sanity/queries/artists.ts`
- **Menu category field names** in Sanity use Spanish (`nombre`, `identificador`, `orden`); GROQ queries alias them back to English (`title`, `slug`) so frontend types are unaffected
- **Two-section menu layout**: the `/menu` page renders an **"A tu gusto"** section (flexible items, handled by `AtuGustoCmsSection` in `ProductList.tsx`) and an **inferior section** (regular `menuItem` categories). Categories with `seccion: true` in Sanity belong to "A tu gusto" and are filtered out of the inferior section.
- **`seccion` field** is fetched raw (no alias) and used only for filtering — unlike `nombre`/`identificador`, it is not aliased in GROQ queries
- **Portable Text** rendered via `@portabletext/react` for blog post bodies
- **Images** use `@sanity/image-url` builder + Next.js `<Image>` with `cdn.sanity.io` configured as a remote pattern

### Styling
- Tailwind CSS 4 with custom oklch color palette: `greenDark`, `greenLight`, `yellowLight`, `yellowDark`, `orangeDark`, `orangeLight`
- Custom fonts: Shantell Sans (body, via Google Fonts), LifelogoEasy (display/logo)
- Reusable `.card` and `.cardTitle` classes defined with `@layer` in `web/styles/globals.css`
- Styled-components is also installed (used alongside Tailwind)

### Security Headers
Defined in `web/next.config.ts`. All headers are gated behind `NODE_ENV === 'production'` — the `headers()` function returns `[]` in dev to avoid MIME type errors from the Next.js dev server serving CSS as `text/plain` under `nosniff`. Active headers in production: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`, `Content-Security-Policy`.

### Path Aliases
In `web/`, the `@/*` alias maps to the project root (`tsconfig.json`).
