# SEO audit — http://localhost:3150

_Generated 2026-11-12T12:24:01.255Z · 31 pages fetched, full sitemap coverage · seo-audit 2.2.0_

## SEO Score: 98/100 (31 pages fetched, full sitemap coverage)

31 pages scored · 0 capped at 60 by a P1 · site-level penalty 1.

| Severity | Count | Meaning |
|---|---:|---|
| P1 | 0 | Crawl or index blocker — the page may not be indexed at all |
| P2 | 6 | Indexed but misrepresented |
| P3 | 7 | Hygiene |

### Where the points went (`docs/11` rows)

| Category | P1 | P2 | P3 | ≈ points lost |
|---|---:|---:|---:|---:|
| Indexability & crawl foundation | 0 | 0 | 3 | 1.1 |
| Rendering & mobile parity | 0 | 0 | 0 | 0 |
| Structured data | 0 | 6 | 0 | 1.2 |
| Metadata quality | 0 | 0 | 0 | 0 |
| Internationalization | 0 | 0 | 0 | 0 |
| Headings, semantics & links | 0 | 0 | 3 | 0.2 |
| Images | 0 | 0 | 0 | 0 |

Core Web Vitals are not in this number: they come from CrUX field data, not from fetching a page (`docs/05`).

## GEO Score: 60/100 (provisional — automated) · capped at 60 by a GEO blocker

| Category | Points | / Max | Basis |
|---|---:|---:|---|
| AI crawler configuration | 0 | 20 | no explicit AI-crawler position in robots.txt |
| Extractable rendering | 20 | 20 | 31/31 pages carry their own subject in the raw HTML |
| Extractable content structure _(heuristic)_ | 15 | 15 | 31/31 pages have ≥2 h2/h3 and a list or table (heuristic — whether sections lead with a direct answer needs a reader) |
| Entity authority | 20 | 20 | homepage: Organization entity, 5 sameAs link(s), WebSite node — About page and author bylines still need a human check |
| Classic-SEO prerequisite | 15 | 15 | round(SEO Score 98 × 0.15) |
| No wasted/counterproductive GEO effort _(heuristic)_ | 10 | 10 | not measurable by fetching pages — awarded provisionally; verify no unsourced 'AI SEO' tactics were shipped |

Caveat: these are technical SEO/GEO readiness scores, not a ranking or traffic guarantee. Off-page factors — backlinks, content quality, competition — are out of scope and are not measured here.

## Crawler access (robots.txt, resolved per RFC 9309)

| Crawler | Kind | Used by | Homepage | Rule group |
|---|---|---|---|---|
| Googlebot | Search engine | Google (and Brave, which follows Googlebot rules) | ✅ allowed | `*` |
| Bingbot | Search engine | Bing, plus DuckDuckGo and Yahoo results (largely Bing-sourced) and Copilot answers built on Bing | ✅ allowed | `*` |
| YandexBot | Search engine | Yandex | ✅ allowed | `*` |
| Applebot | Search engine | Apple — Siri, Spotlight, Safari Suggestions | ✅ allowed | `*` |
| DuckDuckBot | Search engine | DuckDuckGo's own crawler | ✅ allowed | `*` |
| Baiduspider | Search engine | Baidu | ✅ allowed | `*` |
| Yeti | Search engine | Naver | ✅ allowed | `*` |
| SeznamBot | Search engine | Seznam | ✅ allowed | `*` |
| OAI-SearchBot | AI search / answers | ChatGPT search | ✅ allowed | `*` |
| ChatGPT-User | AI, user-triggered | ChatGPT, fetching on a user's request | ✅ allowed | `*` |
| GPTBot | AI training | OpenAI model training | ✅ allowed | `*` |
| Claude-SearchBot | AI search / answers | Claude search | ✅ allowed | `*` |
| Claude-User | AI, user-triggered | Claude, fetching on a user's request | ✅ allowed | `*` |
| ClaudeBot | AI training | Anthropic model training | ✅ allowed | `*` |
| PerplexityBot | AI search / answers | Perplexity search index | ✅ allowed | `*` |
| Perplexity-User | AI, user-triggered | Perplexity, fetching on a user's request | ✅ allowed | `*` |
| Google-Extended | AI training | Gemini training & grounding (not Search) | ✅ allowed | `*` |
| Applebot-Extended | AI training | Apple model training (not Siri/Spotlight) | ✅ allowed | `*` |
| Meta-ExternalAgent | AI training | Meta model training | ✅ allowed | `*` |
| Meta-WebIndexer | AI search / answers | Meta AI search results and citations | ✅ allowed | `*` |
| Meta-ExternalFetcher | AI, user-triggered | Meta AI, fetching on a user's request (may bypass robots.txt) | ✅ allowed | `*` |
| Amazonbot | AI training | Amazon products and services; may train Amazon AI models | ✅ allowed | `*` |
| Amzn-SearchBot | AI search / answers | Alexa and Amazon search experiences (not AI training) | ✅ allowed | `*` |
| Amzn-User | AI, user-triggered | Alexa, fetching on a user's request | ✅ allowed | `*` |
| CCBot | AI training | Common Crawl (feeds many models) | ✅ allowed | `*` |
| Bytespider | AI training | ByteDance model training | ✅ allowed | `*` |
| DuckAssistBot | AI search / answers | DuckDuckGo AI answers | ✅ allowed | `*` |
| MistralAI-User | AI, user-triggered | Mistral Vibe, fetching on a user's request | ✅ allowed | `*` |
| MistralAI-Index | AI search / answers | Mistral search index (not AI training) | ✅ allowed | `*` |
| MistralAI-Training | AI training | Mistral model training | ✅ allowed | `*` |

Allowing or blocking an AI crawler is a policy decision (`docs/10`), not a defect. Blocking a search engine is a defect unless someone decided it.

## Findings

### P1 — blockers

None.

### P2 — misrepresentation (6)

- **`Product` has none of `offers`, `review` or `aggregateRating`. Google requires at least one before the markup is eligible for anything.**
  - `/products/home-elevators`, `/products/goods-lifts-dumbwaiters`, `/products/hydraulic-elevators`, `/products/mrl-elevators`, `/products/traction-elevators`, `/products/capsule-glass-elevators`
  - Rule: `docs/08` · Structured data

### P3 — hygiene (7)

- **robots.txt takes no explicit position on AI crawlers. Training, AI-search and user-triggered fetching are three different decisions; defaulting silently is not one of them.**
  - `/robots.txt`
  - Rule: `docs/10` · GEO (AI search readiness)
- **`<priority>` / `<changefreq>` are ignored by Google. They only make the file bigger.**
  - `http://localhost:3150/sitemap.xml`
  - Rule: `docs/06` · Indexability & crawl foundation
- **Canonical points elsewhere (https://www.relicompelevator.com). Intentional for a variant; a bug if this page should stand on its own.**
  - `/`
  - Rule: `docs/01` · Indexability & crawl foundation
- **Heading level jumps from h2 to h4 ("Material delivery"). Headings are structure, not type size.**
  - `/products`
  - Rule: `docs/04` · Headings, semantics & links
- **Canonical points elsewhere (https://www.relicompelevator.com/contact). Intentional for a variant; a bug if this page should stand on its own.**
  - `/contact`
  - Rule: `docs/01` · Indexability & crawl foundation
- **Heading level jumps from h1 to h3 ("Vertical-first planning"). Headings are structure, not type size.**
  - `/industries/apartments-residential`, `/industries/commercial-offices`
  - Rule: `docs/04` · Headings, semantics & links


## Pages fetched

- `/` — 200 — Elevator Company in Bangalore & Mysore | Relicomp Elevators
- `/about` — 200 — About Us: Elevator Manufacturer | Relicomp Elevators
- `/products` — 200 — Elevator Products & Lift Types | Relicomp Elevators
- `/projects` — 200 — Elevator Projects Portfolio | Relicomp Elevators
- `/contact` — 200 — Contact Us | Relicomp Elevators
- `/blog` — 200 — Elevator Guides: Price, Size & AMC | Relicomp Elevators
- `/services` — 200 — Elevator Services & Lift AMC | Relicomp Elevators
- `/locations` — 200 — Service Locations in South India | Relicomp Elevators
- `/industries` — 200 — Elevator Solutions by Industry | Relicomp Elevators
- `/privacy-policy` — 200 — Privacy Policy | Relicomp Elevators
- `/terms-of-service` — 200 — Terms of Service | Relicomp Elevators
- `/products/home-elevators` — 200 — Home Elevators & Lifts in Bangalore | Relicomp Elevators
- `/products/goods-lifts-dumbwaiters` — 200 — Goods Lifts & Dumbwaiters | Relicomp Elevators
- `/products/hydraulic-elevators` — 200 — Hydraulic Lifts for Homes | Relicomp Elevators
- `/products/mrl-elevators` — 200 — MRL Elevators: Machine Room Less | Relicomp Elevators
- `/products/traction-elevators` — 200 — Traction Elevators & Passenger Lifts | Relicomp Elevators
- `/products/capsule-glass-elevators` — 200 — Capsule Lifts & Glass Elevators | Relicomp Elevators
- `/services/lift-amc-maintenance` — 200 — Lift AMC & Elevator Maintenance | Relicomp Elevators
- `/services/elevator-installation` — 200 — Elevator Installation Services | Relicomp Elevators
- `/services/lift-modernization` — 200 — Lift Modernization & Retrofit | Relicomp Elevators
- `/services/custom-elevator-manufacturing` — 200 — Custom Elevator Manufacturing | Relicomp Elevators
- `/locations/bangalore` — 200 — Lift Companies in Bangalore | Relicomp Elevators
- `/locations/mysore` — 200 — Elevator Company in Mysore | Relicomp Elevators
- `/industries/apartments-residential` — 200 — Lifts for Apartments & Residential | Relicomp Elevators
- `/industries/commercial-offices` — 200 — Commercial Elevators for Offices | Relicomp Elevators
- `/blog/home-lift-price-in-india-2026` — 200 — Home Lift Price in Bangalore 2026 | Relicomp Elevators
- `/blog/home-lift-size-guide` — 200 — Home Lift Size Guide: Cabin & Shaft | Relicomp Elevators
- `/blog/elevator-installation-cost-india` — 200 — Elevator Installation Cost in India | Relicomp Elevators
- `/blog/lift-amc-charges-explained` — 200 — Lift AMC Charges Explained | Relicomp Elevators
- `/blog/hydraulic-vs-traction-elevator` — 200 — Hydraulic vs Traction Elevator | Relicomp Elevators
- `/blog/what-is-an-mrl-elevator` — 200 — What Is an MRL Elevator? | Relicomp Elevators
