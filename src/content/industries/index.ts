import type { IndustryPageContent } from "../types";
import { assertIndustry } from "../validate";
import { isPublished } from "../publish";
import { apartmentsResidential } from "./apartments-residential";
import { commercialOffices } from "./commercial-offices";

export const industries: Record<string, IndustryPageContent> = {
  "apartments-residential": assertIndustry(apartmentsResidential),
  "commercial-offices": assertIndustry(commercialOffices),
};

export function getIndustry(slug: string): IndustryPageContent | null {
  return industries[slug] ?? null;
}

export function allIndustrySlugs(opts?: {
  indexableOnly?: boolean;
}): string[] {
  const slugs = Object.keys(industries);
  if (!opts?.indexableOnly) return slugs;
  return slugs.filter(
    (s) => !industries[s].seo.noIndex && isPublished(`/industries/${s}`)
  );
}

export function getAllIndustries(opts?: {
  indexableOnly?: boolean;
}): IndustryPageContent[] {
  return allIndustrySlugs(opts).map((slug) => industries[slug]);
}
