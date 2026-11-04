import type { StaticImageData } from "next/image";

export type FAQ = {
 question: string;
 answer: string;
};

export type SpecRow = {
 label: string;
 value: string;
};

export type PriceRangeRow = {
 /** e.g. "2-person home lift (2–3 stops)" */
 config: string;
 /** e.g. "₹8 – ₹12 lakh": only when commercially approved */
 rangeInr: string;
 notes?: string;
};

export type RelatedLink = {
 href: string;
 label: string;
 kind: "product" | "service" | "industry" | "location" | "blog" | "page";
};

export type SeoFields = {
 /** <title> without site suffix (layout template applies brand) */
 title: string;
 /** ~150–160 chars ideal */
 description: string;
 /** e.g. "/products/home-elevators" */
 canonicalPath: string;
 /** Public path only, e.g. "/og/home-elevators.png" */
 ogImage?: string;
 keywords?: string[];
 /** true → robots noindex and omit from the sitemap even after publish */
 noIndex?: boolean;
};

/** Discriminated component embeds: no Record<string, unknown> */
export type EmbeddedComponentBlock =
 | {
 type: "component";
 name: "PriceRangeTable";
 props: { rows: PriceRangeRow[] };
 }
 | {
 type: "component";
 name: "SizeChart";
 props: { headers: string[]; rows: string[][] };
 }
 | {
 type: "component";
 name: "SpecsTable";
 props: { rows: SpecRow[] };
 }
 | {
 type: "component";
 name: "AMCComparisonTable";
 /**
 * General-purpose comparison table (AMC plans, drive types, cabin classes).
 * `title` overrides the default heading so it can be reused beyond AMC.
 */
 props: { columns: string[]; rows: string[][]; title?: string };
 }
 | {
 type: "component";
 name: "ProcessTimeline";
 props?: { stepIds?: string[]; title?: string };
 };

export type ContentBlock =
 | { type: "paragraph"; text: string }
 | { type: "heading"; level: 2 | 3; text: string; id?: string }
 | { type: "list"; ordered?: boolean; items: string[] }
 | { type: "callout"; text: string }
 | EmbeddedComponentBlock;

export type CtaBlock = {
 heading: string;
 body: string;
 buttonLabel: string;
 href: string;
};

export type ProductPageContent = {
 slug: string;
 kind: "product";
 h1: string;
 heroImage: StaticImageData | string;
 heroAlt: string;
 intro: string;
 body: ContentBlock[];
 specs: SpecRow[];
 /** Omit until commercial approval */
 priceRanges?: PriceRangeRow[];
 /** Gates AggregateOffer in JSON-LD */
 pricesApproved?: boolean;
 sizeChart?: { headers: string[]; rows: string[][] };
 /** Runtime validated: 3–8 */
 faqs: FAQ[];
 related: RelatedLink[];
 cta?: CtaBlock;
 seo: SeoFields;
 wordCountTarget: [number, number];
 primaryKeyword: string;
};

export type ServicePageContent = {
 slug: string;
 kind: "service";
 h1: string;
 heroImage?: StaticImageData | string;
 heroAlt?: string;
 intro: string;
 body: ContentBlock[];
 faqs: FAQ[];
 related: RelatedLink[];
 cta?: CtaBlock;
 seo: SeoFields;
 wordCountTarget: [number, number];
 primaryKeyword: string;
};

export type IndustryPageContent = {
 slug: string;
 kind: "industry";
 h1: string;
 intro: string;
 body: ContentBlock[];
 faqs: FAQ[];
 related: RelatedLink[];
 cta?: CtaBlock;
 seo: SeoFields;
 wordCountTarget: [number, number];
 primaryKeyword: string;
};

export type LocalProof =
 | { kind: "project"; name: string; summary: string }
 | { kind: "sla"; text: string }
 | { kind: "faq"; question: string; answer: string }
 | {
 kind: "branch";
 nap: {
 streetAddress: string;
 addressLocality: string;
 postalCode?: string;
 telephone?: string;
 };
 };

export type LocationPageContent = {
 slug: string;
 kind: "location";
 h1: string;
 cityName: string;
 intro: string;
 body: ContentBlock[];
 localProof: LocalProof[];
 /** true only for verified branches (Bangalore, Mysuru) */
 hasVerifiedBranch: boolean;
 areaServed: string[];
 faqs: FAQ[];
 related: RelatedLink[];
 cta?: CtaBlock;
 seo: SeoFields;
 wordCountTarget: [number, number];
 primaryKeyword: string;
};

export type BlogPostContent = {
 slug: string;
 kind: "blog";
 h1: string;
 intro: string;
 body: ContentBlock[];
 publishedAt: string;
 updatedAt?: string;
 author: string;
 readingTimeMinutes: number;
 heroImage?: StaticImageData | string;
 heroAlt?: string;
 faqs?: FAQ[];
 related: RelatedLink[];
 cta?: CtaBlock;
 seo: SeoFields;
 wordCountTarget: [number, number];
 primaryKeyword: string;
};

export type PageContent =
 | ProductPageContent
 | ServicePageContent
 | IndustryPageContent
 | LocationPageContent
 | BlogPostContent;

export type BreadcrumbItem = {
 name: string;
 href: string;
};
