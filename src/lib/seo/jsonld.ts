import {
 CONTENT_LAST_REVIEWED,
 SITE_LEGAL_NAME,
 SITE_NAME,
 SITE_URL,
 absoluteUrl,
} from "./site";
import type {
 BlogPostContent,
 BreadcrumbItem,
 FAQ,
 LocationPageContent,
 ProductPageContent,
 ServicePageContent,
} from "@/content/types";
import { brand, branches, openingHours, socialLinks } from "@/content/site";
import { installationSteps } from "@/content/installationSteps";
import { testimonials, testimonialStats } from "@/content/testimonials";
import type { TeamMember } from "@/content/team";

type JsonLdObject = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const HQ_ID = `${SITE_URL}/#localbusiness`;

/** PostalAddress for the registered head office. */
function hqAddress(): JsonLdObject {
 return {
 "@type": "PostalAddress",
 streetAddress: branches.bangalore.streetAddress,
 addressLocality: branches.bangalore.addressLocality,
 addressRegion: branches.bangalore.addressRegion,
 postalCode: branches.bangalore.postalCode,
 addressCountry: branches.bangalore.addressCountry,
 };
}

/** Mon-Sat 09:30-18:30 as a schema.org OpeningHoursSpecification. */
function openingHoursSpec(): JsonLdObject[] {
 return [
 {
 "@type": "OpeningHoursSpecification",
 dayOfWeek: [...openingHours.days],
 opens: openingHours.opens,
 closes: openingHours.closes,
 },
 {
 "@type": "OpeningHoursSpecification",
 dayOfWeek: [...openingHours.closedDays],
 opens: "00:00",
 closes: "00:00",
 },
 ];
}

/**
 * AggregateRating from the Google review figures the business publishes on-site.
 * Source of truth is `testimonialStats`, so the markup can never drift from the
 * number rendered in the testimonials strip.
 */
export function buildAggregateRatingJsonLd(): JsonLdObject | null {
 const ratingValue = Number.parseFloat(testimonialStats.rating);
 const reviewCount = Number.parseInt(
 testimonialStats.reviewCountLabel.replace(/[^0-9]/g, ""),
 10
 );
 if (!Number.isFinite(ratingValue) || !Number.isFinite(reviewCount)) return null;

 return {
 "@type": "AggregateRating",
 ratingValue: String(ratingValue),
 reviewCount: String(reviewCount),
 bestRating: "5",
 worstRating: "1",
 };
}

/** Individual Review nodes built from the real, attributed testimonials. */
export function buildReviewsJsonLd(): JsonLdObject[] {
 return testimonials.map((t) => ({
 "@type": "Review",
 author: { "@type": "Person", name: t.name },
 reviewRating: {
 "@type": "Rating",
 ratingValue: String(t.rating),
 bestRating: "5",
 worstRating: "1",
 },
 reviewBody: t.quote,
 ...(t.source ? { publisher: { "@type": "Organization", name: "Google" } } : {}),
 itemReviewed: { "@id": ORG_ID },
 }));
}

export function buildOrganizationJsonLd(): JsonLdObject {
 const rating = buildAggregateRatingJsonLd();

 return {
 "@context": "https://schema.org",
 "@type": "Organization",
 "@id": ORG_ID,
 name: SITE_NAME,
 legalName: SITE_LEGAL_NAME,
 url: SITE_URL,
 telephone: brand.phoneTel,
 logo: {
 "@type": "ImageObject",
 url: absoluteUrl(brand.logoPath),
 width: brand.logoWidth,
 height: brand.logoHeight,
 },
 image: absoluteUrl("/og/default.png"),
 address: hqAddress(),
 areaServed: [
 { "@type": "State", name: "Karnataka" },
 { "@type": "State", name: "Tamil Nadu" },
 ],
 contactPoint: [
 {
 "@type": "ContactPoint",
 contactType: "sales",
 telephone: brand.phoneTel,
 areaServed: "IN",
 availableLanguage: ["en", "kn", "hi", "ta"],
 },
 {
 "@type": "ContactPoint",
 contactType: "customer support",
 telephone: brand.phoneTel,
 areaServed: "IN",
 availableLanguage: ["en", "kn", "hi", "ta"],
 },
 ],
 sameAs: Object.values(socialLinks).filter(Boolean),
 ...(rating ? { aggregateRating: rating } : {}),
 };
}

/**
 * LocalBusiness node for the Vijayanagar head office.
 * Used on the homepage and /contact, which are the pages most likely to be
 * surfaced for brand and "near me" queries. Coordinates come from the Google
 * Business Profile place link in `branches.bangalore.mapUrl`.
 */
export function buildHeadOfficeLocalBusinessJsonLd(): JsonLdObject {
 const rating = buildAggregateRatingJsonLd();

 return {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "@id": HQ_ID,
 name: SITE_NAME,
 legalName: SITE_LEGAL_NAME,
 description: `Elevator manufacturer and installer in Bengaluru. Home lifts, passenger, goods and capsule elevators, installation and AMC across ${brand.regions}.`,
 url: SITE_URL,
 telephone: brand.phoneTel,
 image: absoluteUrl("/og/default.png"),
 logo: absoluteUrl(brand.logoPath),
 priceRange: "$$",
 currenciesAccepted: "INR",
 address: hqAddress(),
 geo: {
 "@type": "GeoCoordinates",
 latitude: branches.bangalore.geo.latitude,
 longitude: branches.bangalore.geo.longitude,
 },
 hasMap: branches.bangalore.mapUrl,
 openingHoursSpecification: openingHoursSpec(),
 areaServed: [
 { "@type": "State", name: "Karnataka" },
 { "@type": "State", name: "Tamil Nadu" },
 ],
 sameAs: Object.values(socialLinks).filter(Boolean),
 parentOrganization: { "@id": ORG_ID },
 ...(rating ? { aggregateRating: rating } : {}),
 };
}

/**
 * Person nodes for named staff, tied back to the Organization.
 * Returns [] when no real people are configured, so nothing fabricated can ship.
 */
export function buildTeamPersonJsonLd(
 people: readonly TeamMember[]
): JsonLdObject[] {
 return people.map((p) => ({
 "@context": "https://schema.org",
 "@type": "Person",
 "@id": `${absoluteUrl("/about")}#${p.id}`,
 name: p.name,
 jobTitle: p.role,
 worksFor: { "@id": ORG_ID },
 ...(p.bio ? { description: p.bio } : {}),
 ...(p.image ? { image: absoluteUrl(p.image) } : {}),
 ...(p.credentials?.length
 ? {
 hasCredential: p.credentials.map((c) => ({
 "@type": "EducationalOccupationalCredential",
 name: c,
 })),
 }
 : {}),
 ...(p.expertise?.length ? { knowsAbout: [...p.expertise] } : {}),
 ...(p.sameAs?.length ? { sameAs: [...p.sameAs] } : {}),
 }));
}

/** ContactPage node so /contact resolves as the brand's contact entity. */
export function buildContactPageJsonLd(): JsonLdObject {
 return {
 "@context": "https://schema.org",
 "@type": "ContactPage",
 "@id": `${absoluteUrl("/contact")}#contactpage`,
 url: absoluteUrl("/contact"),
 name: `Contact ${SITE_NAME}`,
 description: `Talk to ${SITE_NAME} about elevator supply, installation and AMC across ${brand.regions}.`,
 mainEntity: { "@id": ORG_ID },
 isPartOf: { "@id": `${SITE_URL}/#website` },
 };
}

/**
 * HowTo for the published installation work process.
 * Driven by `installationSteps` so the markup and the on-page timeline cannot diverge.
 */
export function buildInstallationHowToJsonLd(opts?: {
 name?: string;
 description?: string;
 url?: string;
}): JsonLdObject | null {
 if (!installationSteps?.length) return null;
 const url = opts?.url ?? absoluteUrl("/services/elevator-installation");

 return {
 "@context": "https://schema.org",
 "@type": "HowTo",
 name: opts?.name ?? "How a Relicomp elevator installation runs",
 description:
 opts?.description ??
 "The staged work process Relicomp Elevators follows from material delivery through execution, testing and handover.",
 url,
 totalTime: "P60D",
 supply: [
 { "@type": "HowToSupply", name: "Elevator car, doors, guide rails and controller" },
 ],
 tool: [{ "@type": "HowToTool", name: "Relicomp installation crew and lifting equipment" }],
 step: installationSteps.map((s, i) => ({
 "@type": "HowToStep",
 position: i + 1,
 name: s.title,
 text: s.description,
 url: `${url}#${s.id}`,
 })),
 };
}

/**
 * SpeakableSpecification: flags the sections a voice assistant should read.
 * Applied to the page's WebPage node rather than emitted standalone.
 */
export function speakableSpec(cssSelectors: string[]): JsonLdObject {
 return {
 "@type": "SpeakableSpecification",
 cssSelector: cssSelectors,
 };
}

/** WebPage node carrying speakable hints, tied to the site + org graph. */
export function buildWebPageJsonLd(input: {
 path: string;
 name: string;
 description: string;
 speakableSelectors?: string[];
 dateModified?: string;
}): JsonLdObject {
 const url = absoluteUrl(input.path);
 return {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "@id": `${url}#webpage`,
 url,
 name: input.name,
 description: input.description,
 isPartOf: { "@id": `${SITE_URL}/#website` },
 about: { "@id": ORG_ID },
 inLanguage: "en-IN",
 dateModified: input.dateModified ?? CONTENT_LAST_REVIEWED,
 ...(input.speakableSelectors?.length
 ? { speakable: speakableSpec(input.speakableSelectors) }
 : {}),
 };
}

export function buildWebSiteJsonLd(): JsonLdObject {
 return {
 "@context": "https://schema.org",
 "@type": "WebSite",
 "@id": `${SITE_URL}/#website`,
 name: SITE_NAME,
 url: SITE_URL,
 publisher: { "@id": `${SITE_URL}/#organization` },
 inLanguage: "en-IN",
 };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdObject {
 return {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: items.map((item, index) => ({
 "@type": "ListItem",
 position: index + 1,
 name: item.name,
 item: absoluteUrl(item.href),
 })),
 };
}

export function buildFaqJsonLd(faqs: FAQ[]): JsonLdObject | null {
 if (!faqs?.length) return null;
 return {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqs.map((faq) => ({
 "@type": "Question",
 name: faq.question,
 acceptedAnswer: {
 "@type": "Answer",
 text: faq.answer,
 },
 })),
 };
}

export function buildServiceJsonLd(service: ServicePageContent): JsonLdObject {
 const url = absoluteUrl(service.seo.canonicalPath);
 const image =
   service.heroImage == null
     ? undefined
     : typeof service.heroImage === "string"
       ? absoluteUrl(service.heroImage)
       : service.heroImage.src
         ? absoluteUrl(service.heroImage.src)
         : undefined;

 return {
 "@context": "https://schema.org",
 "@type": "Service",
 name: service.h1,
 description: service.seo.description,
 serviceType: service.primaryKeyword,
 provider: { "@id": ORG_ID },
 areaServed: {
 "@type": "AdministrativeArea",
 name: "Karnataka and Tamil Nadu, India",
 },
 url,
 ...(image ? { image } : {}),
 };
}

/**
 * LocalBusiness for location pages.
 * Street PostalAddress only when hasVerifiedBranch + branch localProof exist.
 * Other cities should use areaServed without fake street NAP.
 */
export function buildLocalBusinessJsonLd(
 location: LocationPageContent
): JsonLdObject {
 const url = absoluteUrl(location.seo.canonicalPath);
 const branchProof = location.localProof.find((p) => p.kind === "branch");

 const rating = buildAggregateRatingJsonLd();

 const data: JsonLdObject = {
 "@context": "https://schema.org",
 "@type": "LocalBusiness",
 "@id": `${url}#localbusiness`,
 name: `${SITE_NAME}: ${location.cityName}`,
 description: location.seo.description,
 url,
 telephone: brand.phoneTel,
 image: absoluteUrl("/og/default.png"),
 logo: absoluteUrl(brand.logoPath),
 priceRange: "$$",
 currenciesAccepted: "INR",
 openingHoursSpecification: openingHoursSpec(),
 areaServed: location.areaServed.map((name) => ({
 "@type": "City",
 name,
 })),
 sameAs: Object.values(socialLinks).filter(Boolean),
 parentOrganization: { "@id": ORG_ID },
 ...(rating ? { aggregateRating: rating } : {}),
 };

 if (location.hasVerifiedBranch && branchProof?.kind === "branch") {
 data.address = {
 "@type": "PostalAddress",
 streetAddress: branchProof.nap.streetAddress,
 addressLocality: branchProof.nap.addressLocality,
 postalCode: branchProof.nap.postalCode,
 addressRegion: "Karnataka",
 addressCountry: "IN",
 };
 if (branchProof.nap.telephone) {
 data.telephone = branchProof.nap.telephone;
 }
 // Only the Vijayanagar head office has verified coordinates; never guess others.
 if (
 branchProof.nap.streetAddress === branches.bangalore.streetAddress
 ) {
 data.geo = {
 "@type": "GeoCoordinates",
 latitude: branches.bangalore.geo.latitude,
 longitude: branches.bangalore.geo.longitude,
 };
 data.hasMap = branches.bangalore.mapUrl;
 }
 }

 return data;
}

/**
 * Product schema with conditional AggregateOffer.
 * Never emit offers unless pricesApproved === true and priceRanges exist.
 */
export function buildProductJsonLd(product: ProductPageContent): JsonLdObject {
 const url = absoluteUrl(product.seo.canonicalPath);
 const image =
 typeof product.heroImage === "string"
 ? absoluteUrl(product.heroImage)
 : product.heroImage?.src
 ? absoluteUrl(product.heroImage.src)
 : undefined;

 const data: JsonLdObject = {
 "@context": "https://schema.org",
 "@type": "Product",
 name: product.h1,
 description: product.seo.description,
 brand: {
 "@type": "Brand",
 name: SITE_NAME,
 },
 url,
 ...(image ? { image } : {}),
 };

 if (
 product.pricesApproved === true &&
 product.priceRanges &&
 product.priceRanges.length > 0
 ) {
 const parsed = product.priceRanges
 .map((row) => parseInrRange(row.rangeInr))
 .filter((r): r is { low: number; high: number } => r !== null);

 if (parsed.length > 0) {
 const lowPrice = Math.min(...parsed.map((p) => p.low));
 const highPrice = Math.max(...parsed.map((p) => p.high));
 data.offers = {
 "@type": "AggregateOffer",
 priceCurrency: "INR",
 lowPrice: String(lowPrice),
 highPrice: String(highPrice),
 offerCount: product.priceRanges.length,
 url,
 };
 }
 }

 return data;
}

export function buildBlogPostingJsonLd(post: BlogPostContent): JsonLdObject {
 const url = absoluteUrl(post.seo.canonicalPath);
 return {
 "@context": "https://schema.org",
 "@type": "BlogPosting",
 headline: post.h1,
 description: post.seo.description,
 datePublished: post.publishedAt,
 dateModified: post.updatedAt ?? post.publishedAt,
 author: {
 "@type": "Organization",
 name: post.author || SITE_NAME,
 },
 publisher: {
 "@type": "Organization",
 name: SITE_NAME,
 url: SITE_URL,
 },
 mainEntityOfPage: url,
 url,
 inLanguage: "en-IN",
 };
}

/**
 * Parse rough INR ranges like "₹8 – ₹12 lakh" or "800000-1200000".
 * Returns null if unparseable: then no AggregateOffer.
 */
function parseInrRange(
 rangeInr: string
): { low: number; high: number } | null {
 const cleaned = rangeInr.replace(/,/g, "").toLowerCase();
 const lakh = cleaned.includes("lakh") || cleaned.includes("lac");
 const numbers = cleaned.match(/(\d+(?:\.\d+)?)/g);
 if (!numbers || numbers.length < 2) return null;

 let low = parseFloat(numbers[0]);
 let high = parseFloat(numbers[1]);
 if (Number.isNaN(low) || Number.isNaN(high)) return null;

 if (lakh) {
 low *= 100_000;
 high *= 100_000;
 }

 if (low > high) [low, high] = [high, low];
 return { low, high };
}
