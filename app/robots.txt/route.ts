import { SITE_URL } from "@/lib/seo/site";

export const dynamic = "force-static";

/**
 * Served at /robots.txt.
 *
 * History worth keeping: there used to be a hand-written `public/robots.txt`
 * alongside an `app/robots.ts` metadata route. Next.js serves `public/` ahead of
 * app metadata routes, so the static copy silently shadowed the dynamic one -
 * the `Host` directive never shipped and the `Sitemap` line was a hardcoded host
 * that could drift from SITE_URL. Both are gone; this route is the only source.
 *
 * Why a route handler rather than `app/robots.ts`: Next's typed
 * `MetadataRoute.Robots` can only emit User-agent/Allow/Disallow/Crawl-delay/
 * Sitemap/Host. It cannot emit `Content-Signal:`, and this file's whole purpose
 * is to state a position that the typed helper has no vocabulary for.
 *
 * ---------------------------------------------------------------------------
 * POLICY (business decision, 2026-11-13): everything is allowed, including AI
 * training. That was already the effective state - there has never been a
 * directive excluding any AI crawler - but it was the *default*, not a stated
 * choice. The difference matters: "no rule" and "allowed" look identical to a
 * crawler and completely different to anyone auditing the site, and AIPREF-aware
 * agents increasingly treat an absent signal as unresolved rather than as yes.
 *
 * Three decisions are separated below because they genuinely are three
 * different things, and a business can reasonably answer them differently:
 *
 *   1. AI training    - may the page be used to train a generative model?
 *   2. AI search      - may it be retrieved and cited in an AI answer?
 *   3. User-triggered - may an assistant fetch it because a person asked?
 *
 * To reverse any one of them later, change `Allow: /` to `Disallow: /` in that
 * block and flip the matching `Content-Signal` token. Reversing (1) alone is the
 * usual middle position: it keeps the brand citable in AI answers while
 * declining to feed model training. Do not reverse (2) or (3) without accepting
 * that Relicomp then stops appearing in ChatGPT, Claude, Perplexity and Gemini
 * answers, which is a traffic decision, not a technical one.
 *
 * Every group repeats `Disallow: /api/`. This is not redundancy: under the
 * robots.txt spec a crawler that matches its own group ignores the `*` group
 * entirely, so a named group without that line would hand that crawler broader
 * access than the default has.
 * ---------------------------------------------------------------------------
 */

/** Trains a generative model on the content. */
const AI_TRAINING = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Amazonbot",
  "Bytespider",
  "MistralAI-Training",
  "CCBot",
];

/** Builds an index used to answer questions, with a citation back here. */
const AI_SEARCH = [
  "OAI-SearchBot",
  "Claude-SearchBot",
  "PerplexityBot",
  "Meta-WebIndexer",
  "Amzn-SearchBot",
  "DuckAssistBot",
  "MistralAI-Index",
];

/** Fetches this page live because a person asked the assistant about it. */
const AI_USER = [
  "ChatGPT-User",
  "Claude-User",
  "Perplexity-User",
  "Meta-ExternalFetcher",
  "Amzn-User",
  "MistralAI-User",
];

const RULES = ["Allow: /", "Disallow: /api/"];

function group(agents: string[], comment: string, signal?: string): string {
  return [
    `# ${comment}`,
    ...agents.map((agent) => `User-agent: ${agent}`),
    ...(signal ? [`Content-Signal: ${signal}`] : []),
    ...RULES,
  ].join("\n");
}

export function GET() {
  const body = [
    "# Relicomp Elevators Pvt. Ltd.",
    `# ${SITE_URL}`,
    "#",
    "# Every crawler is allowed, AI crawlers included. This is a stated decision,",
    "# not an absent rule - see app/robots.txt/route.ts for what each block means",
    "# and how to reverse any one of them.",
    "",
    group(
      ["*"],
      "Default: search engines and everything not named below.",
      "search=yes, ai-input=yes, ai-train=yes"
    ),
    "",
    group(
      AI_TRAINING,
      "1. AI training - allowed.",
      "search=yes, ai-input=yes, ai-train=yes"
    ),
    "",
    group(
      AI_SEARCH,
      "2. AI search and retrieval - allowed. These are the crawlers that put Relicomp into AI answers.",
      "search=yes, ai-input=yes, ai-train=yes"
    ),
    "",
    group(
      AI_USER,
      "3. User-triggered fetching - allowed. A person asked an assistant about this page.",
      "search=yes, ai-input=yes, ai-train=yes"
    ),
    "",
    "# IETF AIPREF shared vocabulary (draft). Same answer, expressed in the token",
    "# that agents implementing AIPREF read instead of per-bot groups.",
    "User-agent: __usage_ai-training",
    ...RULES,
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    `Host: ${SITE_URL}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
