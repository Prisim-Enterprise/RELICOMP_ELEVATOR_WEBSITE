# SEO remediation — 12 November 2026

Work done against `seo-audit-relicompelevator-com-2026-09-21.pdf` (combined score 26/30
at the time of that audit), plus defects found during this pass that the audit could not
have seen because the pages concerned were still placeholders when it ran.

Verified against a local production build (`npm run build && npm run start`) with every
sitemap URL crawled. Nothing here is a guess about what the live site does.

---

## 1. Audit recommendations closed

| Audit item | Priority | What was done |
| --- | --- | --- |
| Publish the drafted articles | Medium / High impact | Only 1 of the 6 articles the audit saw existed in this handover. The 5 missing ones were written and published: home lift size guide, elevator installation cost, lift AMC charges explained, hydraulic vs traction, what is an MRL elevator. |
| Clarify the 24/7 claim | Medium | Office hours (Mon–Sat 09:30–18:30) and breakdown availability are now stated as two different services, in one shared constant (`availability` in `src/content/site.ts`) rendered on `/contact`, the `/services` hub and as an FAQ on the AMC page. The wording cannot drift from the `openingHoursSpecification` schema. |
| Attach certificate numbers or soften the claims | Medium | Softened, honestly. Two of the three cards on `/about` cited **issuers that do not exist** ("ISO Certification Body", "National Safety Authority"); ISO itself certifies nobody. They now state the published standards the equipment is actually built to — IS 14665, NBC 2016 Part 8 Section 5, Karnataka Lifts Act 2012 — all verifiable, and already cited on the installation page. A `TODO(business)` records exactly what to send to restore a real certification card. |
| Expand `/services` from 514 words | Medium | Now ~1,080 rendered words. Added a situation-to-service routing table, civil-readiness guidance, the office-hours/breakdown distinction, the three-rulebook section, service coverage and how quoting works. No padding. |
| WebPage + Speakable on product detail pages | Low | Added to all six, giving them parity with the hubs. `.speakable-intro` was added to the product hero intro so the selector resolves to a real element. |

## 2. Defects found in this pass (not in the audit)

The audit measured 17 live pages. Several pages have been published since, and none of
them had been held to the standards the audit set. These were all live and wrong:

- **`public/robots.txt` was shadowing `app/robots.ts`.** Next.js serves `public/` ahead of
  app metadata routes, so the dynamic route had never once been served: the `Host`
  directive never shipped and the `Sitemap` line was a hardcoded host that could drift
  from `NEXT_PUBLIC_SITE_URL`. The static file is deleted and the route is now the
  single source of truth, and also disallows `/api/`. (On 13 November the route
  moved from `app/robots.ts` to `app/robots.txt/route.ts` so it could also state
  an explicit AI-crawler policy — see `seo-report-2026-11-13.md`.)
- **Four titles over the 60-character limit** the audit had driven to zero:
  `/industries/apartments-residential` (69), `/industries/commercial-offices` (64),
  `/services/lift-amc-maintenance` (61), `/services/lift-modernization` (70).
- **Four pages with the brand suffix duplicated** — the exact defect the audit reported as
  fixed on 0 pages: `/industries/commercial-offices`, `/services/lift-modernization`,
  `/privacy-policy`, `/terms-of-service` all wrote the brand into their own title while the
  root layout appended it again.
- **Eight meta descriptions over 160 characters**, including the pre-existing price guide
  at 175 and `/services/lift-amc-maintenance` at 173.
- **`/privacy-policy` and `/terms-of-service` hand-rolled their metadata**, so they had no
  canonical, no og:image and no JSON-LD. This is the same defect class the audit found on
  `/about`, `/contact`, `/products` and `/projects`. Both now route through
  `buildStaticPageMetadata` and emit a WebPage node.
- **`/contact` was the thinnest live page (~224 words) and the only live page with no
  FAQPage schema.** Six genuinely useful contact FAQs were added — opening hours, whether
  surveys are charged for, what to include in an enquiry, which office to call, response
  time, coverage outside Karnataka. The hours answer reads from the same `availability`
  constant as the schema.
- **The prebuild script could not run on Windows.** `scripts/build-inline-css.mjs` called
  `node_modules/.bin/tailwindcss` through `execSync`, which is a shell script on POSIX and
  a `.cmd` on Windows, and broke on any path containing a space. It now resolves
  Tailwind's CLI entry with `require.resolve` and runs it via `execFileSync` with no shell.
  `npm run build` previously failed on any Windows checkout.
- **`CertificatesPublications` defaulted a missing year to `"2023"`**, silently stamping a
  wrong year on any entry without one. The badge is now conditional.

## 3. Internal linking

The audit reported dead-end FAQ answers as closed. Five more plain-text references to
pages that *do* exist were still not linked, and three referred to articles that did not
exist at all. All are now real links:

- `"companion home lift size guide"` and `"our size guide"` (price guide) → the new size guide
- `"elevator installation cost in India"` (`/services` hub) → the new installation cost guide
- `"lift AMC charges explained"` (`/services` hub and the AMC service page) → the new AMC guide
- Plain-text mentions of the live price guide on `/locations/bangalore`,
  `/products/home-elevators`, `/products/hydraulic-elevators`,
  `/services/elevator-installation` and `/services/lift-amc-maintenance` → linked
- The `/blog` hub was still written for a single post; it now routes readers into the
  pricing, ownership and technology clusters.

## 4. Verified result

31 sitemap URLs, crawled against a production build:

- 0 titles over 60 characters (longest 59)
- 0 meta descriptions over 160 characters (longest 160)
- Exactly one H1 per page
- Self-referencing canonical on every page, matching its sitemap form
- og:image on every page
- 0 JSON-LD parse errors; **31 distinct schema types** (30 at audit time)
- 0 broken internal links across 37 distinct internal targets
- Sitemap 26 → 31 URLs; `robots.txt` now serves the dynamic route with `Host` declared
- `CONTENT_LAST_REVIEWED` bumped to 2026-11-12, so `lastmod` and `dateModified` tell the truth

## 5. Still open — these need business input, not code

| Item | Why it is not done | What to send |
| --- | --- | --- |
| Named team / Person schema | The audit's single biggest remaining GEO gain. `src/content/team.ts`, `TeamSection` and `buildTeamPersonJsonLd` are all wired and dormant behind an empty array. Nothing renders until real people are supplied — **inventing staff would be a far worse signal than having none.** | Name, role, years in the industry, a 1–3 sentence verifiable bio, formal qualifications, and consent for each person. Optionally a photo and LinkedIn URL. |
| `relicompelevators.in` DNS | A DNS change on your side, not a code change. The domain has MX records but no A record, so the email address published in your Organization and LocalBusiness schema sits on a domain search engines cannot connect to your website. The brand entity stays split. | Point an A record, or a 301, from the `.in` domain to the `.com` site. The mailbox is unaffected. |
| Product prices | `pricesApproved` is `false` by your decision, so Product JSON-LD correctly emits no `offers` node and the guides explain cost drivers instead of quoting figures. The `AggregateOffer` code path exists and is gated. | A commercial decision plus `priceRanges` per product. Nothing to build. |
| Real ISO / safety certification | See §1. Currently stated as standards compliance rather than a certificate. | Standard (e.g. ISO 9001:2015), the accredited certification body, certificate number, expiry. |
| Google Business Profile | Not a code item. On-site review markup is discounted by Google as self-serving, so the profile is the only route to SERP stars. | Claim and maintain it actively. |
| `/locations/hassan` | Registered but unpublished. The draft is ~450 rendered words and would publish as a thin duplicate of Bangalore/Mysore, which the keyword research explicitly warns against. | Local proof for Hassan: projects done there, the service team, response times. Then flip `published: true`. |
| `"ISO Certified"` badge on the ads landing page | `src/components/landing/LandingTrustBadges.tsx` still asserts this. Left alone deliberately: it is live Google Ads creative and changing it is a commercial call, not an SEO one. | Confirm it is substantiated, or soften it as `/about` now is. |

## 6. Known caveat, deliberately not changed

FAQ answers are mounted by Radix only when a visitor opens an accordion item, so
`.faq-answer` elements are not in the server-rendered HTML and the `.faq-answer` selector
in `SpeakableSpecification` resolves to nothing until then. This was tested: adding
`forceMount` does put the text in the HTML, but Radix then stops applying `hidden`, so
every answer renders expanded unless the closed state is hidden in CSS — which costs the
expand/collapse animation on all 29 FAQ pages. Not worth it, because every answer is
already published in full in the FAQPage JSON-LD on the same page, which is what search
and answer engines actually consume. The reasoning is recorded in `FAQSection.tsx`.
