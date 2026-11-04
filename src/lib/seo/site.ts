/**
 * Single source of truth for the site's absolute origin.
 * Production canonical (user decision 2026-07-11): https://www.relicompelevator.com
 * Always prefer NEXT_PUBLIC_SITE_URL; never hardcode a different host in sitemap vs layout.
 */

const DEFAULT_SITE_URL = "https://www.relicompelevator.com";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (raw) return raw;

  if (process.env.NODE_ENV === "production") {
    // Host is decided; fall back so builds do not break before env is set on Vercel.
    // Ops should still set NEXT_PUBLIC_SITE_URL explicitly (see .env.example).
    console.warn(
      "[seo] NEXT_PUBLIC_SITE_URL is not set; using default canonical host:",
      DEFAULT_SITE_URL
    );
  }

  return DEFAULT_SITE_URL;
}

export const SITE_URL = resolveSiteUrl();
export const SITE_NAME = "Relicomp Elevators";
export const SITE_LEGAL_NAME = "Relicomp Elevators Pvt. Ltd.";

/**
 * Date the marketing content was last substantively reviewed (YYYY-MM-DD).
 *
 * Used for sitemap `lastmod` and WebPage `dateModified`. Previously both were
 * stamped with `new Date()` at build time, which meant every redeploy claimed
 * every page had changed - a freshness signal search engines learn to ignore.
 * Bump this deliberately when content is actually revised.
 */
export const CONTENT_LAST_REVIEWED = "2026-09-21";

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
