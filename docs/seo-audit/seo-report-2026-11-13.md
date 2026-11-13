# relicompelevator.com — SEO report

**Date:** 13 November 2026
**Measured against:** a clean production build (`rm -rf .next && npm run build && npm run start`), all 31 sitemap URLs crawled
**Supersedes:** `audit-2026-11-12.md` for the GEO figure only; everything else in that document still stands.

---

## Score

Two rubrics are in play and they are not interchangeable. The first is the
bundled `seo-audit` tool, which measures what a crawler can see from outside.
The second is the judged rubric the September baseline used, which also counts
what a crawler cannot see.

### Tool score — `seo-audit` 2.2.0, automated

| | 12 Nov (live) | 12 Nov (build) | **13 Nov (build)** |
|---|---:|---:|---:|
| SEO | 97 / 100 | 98 / 100 | **99 / 100** |
| GEO | 60 / 100 | 60 / 100 | **100 / 100** |
| P1 blockers | 0 | 0 | **0** |
| P2 | 6 | 6 | **6** |
| P3 | 9 | 7 | **0** |
| Pages crawled | 26 | 31 | **31** |

Every finding the tool can still raise is closed except one, and that one needs a
commercial decision rather than code (see *What is left*).

### Judged score — the September rubric

| Dimension | Sept 21 | Received state | 12 Nov | **13 Nov** |
|---|---|---|---|---|
| SEO | 7 | 7 | 9 | **9.5** |
| GEO | 6 | 6 | 8 | **8.5** |
| AEO | 7 | 8 | 9 | **9** |
| **Combined** | **26/30** | **21/30** | **26/30** | **27/30** |

The two rubrics disagree about GEO, and the disagreement is the honest part.
The tool awards 100 because every GEO signal it can measure by fetching a page
is now present. The judged score moves only half a point, because the largest
GEO gap on this site — no named humans standing behind safety-critical
equipment — is not something a crawler can detect, and it is unchanged.
**A 100 from the tool is not a finished site. It is a finished checklist.**

---

## What changed today

### 1. An explicit AI-crawler policy

`app/robots.ts` was replaced by `app/robots.txt/route.ts`, which states the
site's AI-crawler policy explicitly instead of leaving it to the default.

**No crawler's access changed.** All 30 crawlers the tool resolves were allowed
before and are allowed now. The difference is that 22 of them now match a group
that names them rather than falling through to `*`: the file says what the
business decided, instead of merely not forbidding anything.

The policy separates three decisions that are genuinely different, because a
business can reasonably answer them differently later:

| Block | Question it answers | Today |
|---|---|---|
| AI training | May the page train a generative model? | Allowed |
| AI search | May it be retrieved and cited in an AI answer? | Allowed |
| User-triggered | May an assistant fetch it because a person asked? | Allowed |

Each block carries `Content-Signal: search=yes, ai-input=yes, ai-train=yes`
(contentsignals.org), and the file also declares the IETF AIPREF token
`User-agent: __usage_ai-training`. Anthropic has honoured AIPREF since 30 Oct
2026 and Google has said it intends to in early 2027, so the same answer is now
expressed three ways: per-bot groups, `Content-Signal`, and AIPREF.

Two implementation details that are easy to break later:

- **Every named group repeats `Disallow: /api/`.** Under RFC 9309 a crawler that
  matches its own group ignores the `*` group completely. A named group without
  that line would hand that one crawler *broader* access than the default has.
- **The route is a handler, not `app/robots.ts`.** Next's typed
  `MetadataRoute.Robots` can only emit User-agent / Allow / Disallow /
  Crawl-delay / Sitemap / Host. It has no vocabulary for `Content-Signal`, which
  is the whole point of the file.

Reversing any one block later is a two-line change, documented in the route's
own header. The usual middle position — decline training, keep AI citation — is
`Disallow: /` plus `ai-train=no` in block 1 only.

### 2. The three hygiene findings

All three P3s are closed, taking SEO from 98 to 99.

**`h2 → h4` on `/products`** (`WorkProcessGrid.tsx`). The stage cards label their
group with "Stage 1" / "Kickoff & first fit", but both were `<p>` elements, so the
step titles beneath them were the first heading under the section's `h2` — and they
were `h4`. The stage subtitle is now an `h3`, which gives h2 → h3 → h4 and describes
the page as it actually reads. Tailwind's preflight zeroes heading margins and
inherits font-size, so with the same classes this renders **pixel-identically**:
verified in the browser at 14px / weight 600 / margin-top 2px, exactly as the `<p>`
measured.

**`h1 → h3` on both industry pages** (`IndustryPageTemplate.tsx`). The card band
under the hero had no heading at all, so its `h3` card titles sat directly beneath
the `h1`. The real problem was the missing section label, not the tag, so the band
now has the `h2` it was always missing: *"How we approach commercial projects"* /
*"How we approach residential projects"*, derived from the industry label. **This is
the one visible change in today's work** — a new section heading in the site's
standard `text-2xl font-bold sm:text-3xl` style, on `/industries/commercial-offices`
and `/industries/apartments-residential`. It also adds a little weight to the two
thinnest pages on the site.

**`<priority>` / `<changefreq>` removed from the sitemap** (`app/sitemap.ts`). Google
ignores both and has said so for years; Bing treats priority as a hint it mostly
disregards. Removing them also removes a recurring review argument about whether
`/products` deserves 0.9 or 0.85 — a number that changes nothing. `lastmod` stays,
because engines do use it while it is honest, and this one comes from
`CONTENT_LAST_REVIEWED` rather than the build clock.

### Why GEO moved 60 → 100, not 60 → 80

The earlier estimate of roughly 80 was wrong, and the arithmetic is worth
correcting. GEO was never scoring 80 raw: the six categories came to 80 **with
AI crawler configuration already counted at 0 of 20**, and the rubric then
capped the total at 60 because an unanswered AI policy is a GEO blocker.
Stating the policy earned the missing 20 *and* lifted the cap, so the move was
the full 40 points.

| Category | Max | 12 Nov | 13 Nov |
|---|---:|---:|---:|
| AI crawler configuration | 20 | 0 | **20** |
| Extractable rendering | 20 | 20 | 20 |
| Extractable content structure | 15 | 15 | 15 |
| Entity authority | 20 | 20 | 20 |
| Classic-SEO prerequisite | 15 | 15 | 15 |
| No wasted GEO effort | 10 | 10 | 10 |
| **Raw total** | **100** | **80** | **100** |
| Cap applied | | 60 | none |

---

## Current state, measured

| Signal | Sept 21 | Now |
|---|---|---|
| Indexable pages | 17 | 31 |
| Placeholder pages in nav | 11 | 1 (`/locations/hassan`) |
| Total indexable words | 18,152 | 32,232 |
| Titles over 60 chars | 0 of 17 | 0 of 31 (longest 59) |
| Meta descriptions over 160 | 0 | 0 (longest 160) |
| Pages missing og:image | 0 | 0 |
| Images with empty or missing alt | 0 | 0 of 168 |
| Question-phrased headings | 87 | 221 |
| FAQ Q&A pairs in schema | — | 134 across 29 pages |
| Comparison tables with `thead` | 2 | 18 |
| Distinct schema types | 30 | 31 |
| JSON-LD parse errors | 0 | 0 |
| Broken internal links | — | 0 across 37 targets |
| Heading-level skips | — | 0 across 31 pages |
| Sitemap URLs | 19 | 31, 0 noindex leakage |
| AI crawlers resolving to a named group | 0 of 22 | **22 of 22** |
| Published blog guides | 0 live | 6 live |

A finding from yesterday's run has been settled rather than carried forward.
Two "canonical points elsewhere" P3s on `/` and `/contact` were an artefact of
an incremental build: those two routes were unchanged, so Next served them from
cache with their production canonicals while the rest of the site had been
rebuilt against a localhost origin. Today's run was done after deleting
`.next`, and both findings are gone. Production was never affected.

---

## What is left

### P2 — six pages, one defect (the only finding left)

`Product` schema on all six product pages carries none of `offers`, `review` or
`aggregateRating`. Google requires at least one of the three before Product
markup is eligible for **anything**, so the markup is currently inert: emitted,
parsed without error, and ignored.

The legitimate fix is approved price ranges, which switches on the
`AggregateOffer` path that already exists and is gated behind `pricesApproved`.

The illegitimate fix, for the record, is attaching the company-wide 4.5/5
`AggregateRating` to each product. Google requires a product rating to be about
that product. Doing it would clear the finding, raise the score, and be
non-compliant markup — so it has not been done, and should not be.

This is now the **third** place a pricing decision is the blocker: Product
schema eligibility, the cost keyword cluster (*home elevator lift cost* 6,600 /
SD 14, *home lift price* 5,400 / SD 13), and the featured snippet for cost
questions. One commercial decision unlocks all three.

### P3 — none

All three were fixed today; see *What changed today* above.

### Noticed while fixing — reviewed, kept as is

`IndustryPageTemplate.tsx` renders a highlight card titled **"Right product owner"**
whose body reads *"Clear links to the product pages that own commercial specs and
keywords."* That is internal SEO vocabulary on a customer-facing page, and adding a
section heading above the band has made it more prominent rather than less. It is
visible today on both live industry pages.

**Raised on 13 November and deliberately kept.** Rewriting it is a marketing-copy
decision, it was put to the business, and the answer was to leave it. Not an open
item — do not re-raise it as a defect. If it is ever revisited, something like *"The
right product, named"* / *"Every recommendation links to the product page with the
full specification, so nothing is left vague"* would say the same thing without the
word "keywords".

### Not code — these need business input

Unchanged from `remediation-2026-11-12.md` §5, and still the only route past 27/30:

1. **Named team** — `team.ts`, `TeamSection` and `buildTeamPersonJsonLd` are wired and dormant behind an empty array. Largest single GEO gain. Inventing staff would be far worse than having none.
2. **Approved price ranges** — see P2 above.
3. **`relicompelevators.in` DNS** — point an A record or a 301 at the `.com` site.
4. **A real certificate** — standard, accredited body, number, expiry, then `hasCredential` on the Organization node.
5. **Google Business Profile** — the only route to SERP stars, since on-site review markup is discounted as self-serving.
6. **Local proof** for the six named cities that have no landable page.

---

## Deployment note

`NEXT_PUBLIC_SITE_URL` must be `https://www.relicompelevator.com` on Vercel.
`robots.txt`, the sitemap, every canonical and every JSON-LD `@id` is generated
from it, and the static `robots.txt` that used to mask a wrong value is gone.
Check `/robots.txt` after deploying: it should open with the Relicomp comment
header and list the named AI-crawler groups.

Raw tool output for this run: `tool-reports/seo-prompt-master-localbuild-2026-11-13.md`.
