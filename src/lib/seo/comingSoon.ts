import type { Metadata } from "next";

/**
 * Metadata for Coming Soon routes. Visitors see the placeholder, and Google
 * is told not to index it until `published` is flipped for that URL.
 *
 * `follow: true` lets the crawler walk links on the placeholder back into
 * the live site.
 */
export function buildComingSoonMetadata(title: string): Metadata {
  return {
    title: `${title}. Coming Soon`,
    description:
      "This page is prepared for an upcoming Relicomp Elevators release. Contact us for details in the meantime.",
    robots: { index: false, follow: true },
  };
}
