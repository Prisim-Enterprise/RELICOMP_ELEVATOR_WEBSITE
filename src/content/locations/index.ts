import type { LocationPageContent } from "../types";
import { assertLocation } from "../validate";
import { isPublished } from "../publish";
import { bangalore } from "./bangalore";
import { mysore } from "./mysore";
import { hassan } from "./hassan";

export const locations: Record<string, LocationPageContent> = {
  bangalore: assertLocation(bangalore),
  mysore: assertLocation(mysore),
  hassan: assertLocation(hassan),
};

export type LocationSlug = keyof typeof locations;

export function getLocation(slug: string): LocationPageContent | null {
  return locations[slug] ?? null;
}

export function allLocationSlugs(opts?: {
  indexableOnly?: boolean;
}): string[] {
  const slugs = Object.keys(locations);
  if (!opts?.indexableOnly) return slugs;
  return slugs.filter(
    (s) => !locations[s].seo.noIndex && isPublished(`/locations/${s}`)
  );
}

export function getAllLocations(opts?: {
  indexableOnly?: boolean;
}): LocationPageContent[] {
  return allLocationSlugs(opts).map((slug) => locations[slug]);
}
