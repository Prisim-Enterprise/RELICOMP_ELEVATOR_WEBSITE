import type { RelatedLink } from "./types";

/**
 * Canonical internal destinations for cross-linking.
 * Use in content as markdown: [Home elevators](/products/home-elevators)
 */
export const paths = {
  homeElevators: "/products/home-elevators",
  hydraulicElevators: "/products/hydraulic-elevators",
  mrlElevators: "/products/mrl-elevators",
  tractionElevators: "/products/traction-elevators",
  goodsLifts: "/products/goods-lifts-dumbwaiters",
  capsuleElevators: "/products/capsule-glass-elevators",
  productsHub: "/products",
  installation: "/services/elevator-installation",
  amc: "/services/lift-amc-maintenance",
  modernization: "/services/lift-modernization",
  manufacturing: "/services/custom-elevator-manufacturing",
  servicesHub: "/services",
  bangalore: "/locations/bangalore",
  mysore: "/locations/mysore",
  locationsHub: "/locations",
  residential: "/industries/apartments-residential",
  commercial: "/industries/commercial-offices",
  blogHomePrice: "/blog/home-lift-price-in-india-2026",
  blogHub: "/blog",
  contact: "/contact",
  projects: "/projects",
  about: "/about",
} as const;

/** Shared related clusters for conversion-oriented end-of-page linking */
export const relatedClusters = {
  homeLiftBuyer: [
    {
      href: paths.homeElevators,
      label: "Home elevators product page",
      kind: "product",
    },
    {
      href: paths.hydraulicElevators,
      label: "Hydraulic elevators for homes",
      kind: "product",
    },
    {
      href: paths.blogHomePrice,
      label: "Home lift price guide 2026",
      kind: "blog",
    },
    {
      href: paths.installation,
      label: "Elevator installation service",
      kind: "service",
    },
    {
      href: paths.contact,
      label: "Request a free survey",
      kind: "service",
    },
  ] satisfies RelatedLink[],

  amcOwner: [
    {
      href: paths.amc,
      label: "Lift AMC & maintenance",
      kind: "service",
    },
    {
      href: paths.modernization,
      label: "Lift modernization",
      kind: "service",
    },
    {
      href: paths.bangalore,
      label: "Service in Bangalore",
      kind: "location",
    },
    {
      href: paths.contact,
      label: "Talk about AMC",
      kind: "service",
    },
  ] satisfies RelatedLink[],

  commercialBuyer: [
    {
      href: paths.mrlElevators,
      label: "MRL elevators",
      kind: "product",
    },
    {
      href: paths.tractionElevators,
      label: "Traction / passenger elevators",
      kind: "product",
    },
    {
      href: paths.goodsLifts,
      label: "Goods lifts & dumbwaiters",
      kind: "product",
    },
    {
      href: paths.installation,
      label: "Installation service",
      kind: "service",
    },
    {
      href: paths.contact,
      label: "Commercial project enquiry",
      kind: "service",
    },
  ] satisfies RelatedLink[],
};

/** Merge related lists without duplicate hrefs (first wins). */
export function mergeRelated(
  ...lists: RelatedLink[][]
): RelatedLink[] {
  const seen = new Set<string>();
  const out: RelatedLink[] = [];
  for (const list of lists) {
    for (const link of list) {
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      out.push(link);
    }
  }
  return out;
}
