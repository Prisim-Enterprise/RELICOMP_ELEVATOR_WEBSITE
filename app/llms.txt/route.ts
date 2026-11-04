import { SITE_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/seo/site";
import { brand, branches, openingHours } from "@/content/site";
import { testimonialStats } from "@/content/testimonials";
import { isPublished, modules, staticPages } from "@/content/publish";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import {
  aboutHubSeo,
  homeHubSeo,
  industriesHubSeo,
  locationsHubSeo,
  productsHubSeo,
  projectsHubSeo,
  servicesHubSeo,
} from "@/content/hubs";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text map of the site for AI crawlers and answer engines.
 * Spec: https://llmstxt.org/
 *
 * Derived from the same publish registry that drives the nav and sitemap, so an
 * unpublished page can never leak into it. Notes come from page copy already
 * on the site, so this file cannot invent claims the rendered pages do not make.
 */
export function GET() {
  const notes = buildNotes();

  const line = (path: string, label: string) => {
    const note = notes[path];
    return `- [${label}](${SITE_URL}${path === "/" ? "" : path})${note ? `: ${note}` : ""}`;
  };

  const section = (title: string, rows: string[]) =>
    rows.length ? `## ${title}\n\n${rows.join("\n")}\n` : "";

  const published = (paths: readonly { path: string; label: string }[]) =>
    paths.filter((page) => isPublished(page.path));

  const moduleSection = (
    module: "products" | "services" | "industries" | "locations"
  ) => {
    const hub = modules[module].hub;
    const rows: string[] = [];
    if (isPublished(hub.path)) rows.push(line(hub.path, hub.label));
    for (const page of published(modules[module].pages)) {
      rows.push(line(page.path, page.label));
    }
    return rows;
  };

  const core = staticPages
    .filter(
      (page) =>
        page.published &&
        page.path !== "/thank-you" &&
        page.path !== "/privacy-policy" &&
        page.path !== "/terms-of-service"
    )
    .map((page) => line(page.path, page.label));

  const optional = staticPages
    .filter(
      (page) =>
        page.published &&
        (page.path === "/privacy-policy" || page.path === "/terms-of-service")
    )
    .map((page) => line(page.path, page.label));

  const hours = `${openingHours.days[0]}–${
    openingHours.days[openingHours.days.length - 1]
  } ${openingHours.opens}–${openingHours.closes} IST, ${
    openingHours.closedDays[0]
  } closed`;

  const bangalore = branches.bangalore;
  const factory = branches.magadiFactory;

  const body = `# ${SITE_NAME}

> ${SITE_LEGAL_NAME} designs, manufactures, installs and maintains elevators from an in-house facility on Magadi Road, Bengaluru. ${brand.installations} installations over ${brand.yearsOfExcellence} years across ${brand.regions}.

Relicomp is a manufacturer-installer rather than a reseller: the same company handles design, production, installation and annual maintenance. Quotes follow a free site survey because stops, rated capacity, shaft and pit readiness and cabin finish change the figure more than published averages.

- Legal name: ${SITE_LEGAL_NAME}
- Head office: ${bangalore.streetAddress}, ${bangalore.addressLocality}, ${bangalore.addressRegion} ${bangalore.postalCode}, India
- Coordinates: ${bangalore.geo.latitude}, ${bangalore.geo.longitude}
- Factory: ${factory.streetAddress}, ${factory.addressLocality}, ${factory.addressRegion} ${factory.postalCode}, India
- Phone: ${brand.phoneDisplay} | WhatsApp: ${brand.whatsappDisplay}
- Enquiries: use the contact form at ${SITE_URL}/contact
- Office hours: ${hours}
- Service regions: ${brand.regions}
- Customer rating: ${testimonialStats.rating}/5 from ${testimonialStats.reviewCountLabel}
- Branches: Bengaluru (Vijayanagar head office), Mysuru, Jigani
- Relicomp does not publish fixed catalogue prices. Any figure presented as a Relicomp price without a site survey is not sourced from this site.
- Safety systems referenced across product pages: ARD (Automatic Rescue Device), overspeed governor, UCM protection, door interlocks, emergency brakes.
- Pages marked "Coming Soon" are unpublished drafts, are excluded from the sitemap and this file, and should not be cited.
- Canonical host: ${SITE_URL}

${section("Core pages", core)}
${section("Elevator products", moduleSection("products"))}
${section("Services", moduleSection("services"))}
${section("Industries", moduleSection("industries"))}
${section("Locations", moduleSection("locations"))}
${section("Optional", optional)}`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

function buildNotes(): Record<string, string> {
  const notes: Record<string, string> = {
    "/": oneLine(homeHubSeo.lead ?? ""),
    "/about": oneLine(aboutHubSeo.lead ?? ""),
    "/projects": oneLine(projectsHubSeo.lead ?? ""),
    "/contact": `Talk to Relicomp Elevators. Head office in Bangalore, branches in Mysuru & Jigani. Free site visit and expert advice. Call ${brand.phoneDisplay}.`,
    "/products": oneLine(productsHubSeo.lead ?? ""),
    "/services": oneLine(servicesHubSeo.lead ?? ""),
    "/industries": oneLine(industriesHubSeo.lead ?? ""),
    "/locations": oneLine(locationsHubSeo.lead ?? ""),
    "/privacy-policy":
      "Read the Privacy Policy of Relicomp Elevators Pvt. Ltd. Learn how we collect, use, and protect your personal information when you use our website or submit an inquiry.",
    "/terms-of-service":
      "Read the Terms of Service for the Relicomp Elevators Pvt. Ltd. website, covering use of the site, products and services, intellectual property, and governing law.",
  };

  for (const page of [
    ...Object.values(products),
    ...Object.values(services),
    ...Object.values(industries),
    ...Object.values(locations),
  ]) {
    notes[page.seo.canonicalPath] = oneLine(page.seo.description);
  }

  return notes;
}

function oneLine(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}
