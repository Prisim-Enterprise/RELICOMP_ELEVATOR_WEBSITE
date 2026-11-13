# Relicomp Elevators – Website

Marketing and lead-generation website for Relicomp Elevators (https://www.relicompelevator.com).

**Stack:** Next.js 14 (App Router), TypeScript, React, Tailwind CSS, shadcn/ui. Content is stored as typed TypeScript modules in `src/content/`, so no CMS or database is needed.

## Getting started

Requirements: Node.js 18.17+ (20 LTS recommended) and npm.

```sh
npm install   # no npm lockfile is committed; bun.lockb is present if you prefer `bun install`
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

Other commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build (also generates inline CSS via `scripts/build-inline-css.mjs`) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Type-check |

## Environment variables

Copy `.env.example` to `.env.local` for local work. On Vercel, add the same variables under Project → Settings → Environment Variables.

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE` | SMTP server used by the contact / lead forms |
| `SMTP_USER`, `SMTP_PASS` | SMTP login (use an app password for Gmail) |
| `SMTP_FROM` | "From" address on lead emails |
| `SMTP_TO` | Comma-separated recipients; every lead is delivered to all of them |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, e.g. `https://www.relicompelevator.com` (no trailing slash). Required in production: used for canonical URLs, sitemap, robots and structured data |

All SMTP values are server-side only and are never sent to the browser. Restart the dev server after changing them. Forms post to `app/api/send-email/route.ts`.

## Project structure

```
app/
  (main)/            Public pages (home, about, products, services, industries,
                     locations, blog, projects, contact, legal)
  lp/                Paid-ads landing page(s), outside the main layout
  api/send-email/    Contact / lead form endpoint (SMTP)
  sitemap.ts, robots.ts, llms.txt/   SEO and crawler files
middleware.ts        SEO-related redirects / headers
src/
  content/           All page copy, SEO metadata and FAQs (typed modules)
    publish.ts       Publish switchboard (see below)
    products/ services/ industries/ locations/ blog/ hubs/ landing/
  components/        UI, templates and shared sections
  views/             Page-level React views
  lib/seo/           Metadata and JSON-LD helpers
public/              Static assets
docs/                SEO audit report
scripts/             Build helpers
```

## Publishing and unpublishing pages

`src/content/publish.ts` is the single source of truth for which pages are live. The header, footer, sitemap, hub pages, slug routes and internal-link rendering all read from it.

- `modules.<name>.published` switches a whole section on or off (products, services, industries, locations, blog).
- Each page entry has `published` (live or "Coming Soon"), `inNav` (header dropdown) and `inFooter`.
- Links to unpublished or unregistered pages are rendered as non-clickable text and left out of the sitemap.

### Currently live

- **Products:** home, MRL, traction, hydraulic, goods and dumbwaiter, capsule and glass elevators
- **Services:** installation, custom manufacturing, AMC and maintenance, modernization
- **Industries:** apartments and residential, commercial and offices
- **Locations:** Bangalore, Mysore (Hassan is registered but unpublished - the draft is ~450 rendered words and would publish as a thin duplicate)
- **Blog:** Home Lift Price Guide (India 2026), Home Lift Size Guide, Elevator Installation Cost in India, Lift AMC Charges Explained, Hydraulic vs Traction Elevator, What Is an MRL Elevator?
- **Landing page:** `/lp/home-elevators-bangalore`

### Adding a new page

Using a new location as the example:

1. Create `src/content/locations/<slug>.ts`, following `bangalore.ts` or `hassan.ts` as a template.
2. Register it in `src/content/locations/index.ts`.
3. Add an entry to `modules.locations.pages` in `publish.ts` with `published: true`.
4. Run `npx tsc --noEmit` and `npm run build`. The page will be generated, listed in the sitemap and linked from the nav and footer according to its flags.

The same steps apply to blog posts, industries, products and services. The content types and validators are in `src/content/types.ts` and `src/content/validate.ts`. Shared internal link targets are in `src/content/internalLinks.ts`.

## SEO notes

- SEO pages are statically generated (SSG), so crawlers receive full HTML. Do not add `export const dynamic = "force-dynamic"` to marketing pages. Use it only where per-request data is genuinely needed (e.g. the thank-you page).
- Each route defines its own metadata, and structured data (Product, Service, FAQ, LocalBusiness, WebPage, BlogPosting) is generated from the content modules.
- The SEO audit reports are in `docs/seo-audit/`. Start with `seo-report-2026-11-13.md` (current state and score); the work that got there is recorded in `remediation-2026-11-12.md`.

### Rules that are easy to break

- **Titles must stay at or under 60 characters _including_ the brand.** The root layout appends `" | Relicomp Elevators"` (21 characters), so `seo.title` has a budget of 39. Never write the brand into `seo.title` yourself - that produces `"... | Relicomp | Relicomp Elevators"`.
- **Meta descriptions stay at or under 160 characters.**
- **Never hand-roll `export const metadata`.** Use `buildStaticPageMetadata` / `buildMetadata`, or the page silently loses its canonical, og:image and Twitter card. Three pages had drifted this way.
- **`robots.txt` comes from `app/robots.txt/route.ts` only.** Do not add `public/robots.txt` and do not re-add an `app/robots.ts` metadata route: files in `public/` are served ahead of app routes (a static copy silently shadows the dynamic one), and two robots routes conflict. The route states an explicit AI-crawler policy - everything allowed, split into training / AI-search / user-triggered blocks plus a `Content-Signal:` line. Each named group repeats `Disallow: /api/` on purpose: under RFC 9309 a crawler that matches its own group ignores the `*` group entirely, so dropping that line would give that one crawler *more* access than the default.
- **Bump `CONTENT_LAST_REVIEWED`** in `src/lib/seo/site.ts` when content is substantively revised. It drives sitemap `lastmod` and `WebPage.dateModified`; it is deliberately not the build time.
- **Registering a blog post is two steps:** add it to `src/content/blog/index.ts` *and* add a `published: true` entry in `modules.blog.pages` in `publish.ts`. Registry only means the route exists; publish controls live status and sitemap inclusion.
- **Headings descend one level at a time.** A card grid that introduces its own `h3`/`h4` titles needs a section heading above it; do not pick a heading tag for its type size, which is what produced the two skips fixed on 2026-11-13. Styling lives in `className`.
- **The sitemap carries no `priority` or `changefreq`.** Google ignores both. Do not add them back. `lastmod` comes from `CONTENT_LAST_REVIEWED`, never the build clock.
- **No INR prices anywhere** while `pricesApproved` is false. Product JSON-LD deliberately emits no `offers` node, and the guides explain cost drivers instead of quoting figures.

### Verifying SEO after a change

`npm run build && npm run start`, then check every sitemap URL for title length, description length, a single H1, canonical, og:image and JSON-LD validity. The last pass (2026-11-13) had 31 URLs clean: 0 titles over 60, 0 descriptions over 160, exactly one H1 each, 0 heading-level skips, 0 JSON-LD parse errors, 0 broken internal links, 31 distinct schema types.

For a second opinion, the bundled `seo-audit` skill runs a crawler against a server:

```bash
node .seo-prompt-master/tools/seo-audit.mjs --url https://www.relicompelevator.com --md report.md
```

To run it against a local build, rebuild with `NEXT_PUBLIC_SITE_URL` set to the local origin first - otherwise the sitemap emits production URLs and the crawl covers nothing. Delete `.next` before that rebuild and again afterwards: an incremental build keeps cached production canonicals on unchanged routes and the report reads them as mismatches.

## Deployment

The project is set up for Vercel (`vercel.json`): connect the repo, set the environment variables above, and deploy. For any other host, run `npm run build` then `npm run start`.

Domain: attach `www.relicompelevator.com` as the primary domain and redirect the apex domain and `relicompelevators.in` variants to it, so the canonical host matches `NEXT_PUBLIC_SITE_URL`.
