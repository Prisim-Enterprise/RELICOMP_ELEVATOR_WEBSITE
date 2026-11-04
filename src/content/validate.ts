import type {
 BlogPostContent,
 FAQ,
 IndustryPageContent,
 LocationPageContent,
 ProductPageContent,
 ServicePageContent,
} from "./types";

function assert(condition: unknown, message: string): asserts condition {
 if (!condition) {
 throw new Error(`[content] ${message}`);
 }
}

function assertFaqs(faqs: FAQ[], context: string, min = 3, max = 8) {
 assert(
 Array.isArray(faqs) && faqs.length >= min && faqs.length <= max,
 `${context}: faqs must have ${min}–${max} items (got ${faqs?.length ?? 0})`
 );
 for (const [i, faq] of faqs.entries()) {
 assert(faq.question?.trim(), `${context}: faqs[${i}].question is required`);
 assert(faq.answer?.trim(), `${context}: faqs[${i}].answer is required`);
 }
}

function assertSeo(
 seo: { title?: string; description?: string; canonicalPath?: string },
 context: string
) {
 assert(seo?.title?.trim(), `${context}: seo.title is required`);
 assert(seo?.description?.trim(), `${context}: seo.description is required`);
 assert(
 seo?.canonicalPath?.startsWith("/"),
 `${context}: seo.canonicalPath must start with /`
 );
}

/**
 * Lightweight runtime asserts at registry boundary (fails next build on invalid content).
 * Prefer over zod for zero new deps in foundation; swap to zod later if desired.
 */
export function assertProduct(content: ProductPageContent): ProductPageContent {
 const ctx = `product:${content.slug}`;
 assert(content.kind === "product", `${ctx}: kind must be product`);
 assert(content.slug?.trim(), `${ctx}: slug is required`);
 assert(content.h1?.trim(), `${ctx}: h1 is required`);
 assert(content.intro?.trim(), `${ctx}: intro is required`);
 assert(content.primaryKeyword?.trim(), `${ctx}: primaryKeyword is required`);
 assertSeo(content.seo, ctx);
 assertFaqs(content.faqs, ctx);
 assert(
 Array.isArray(content.specs),
 `${ctx}: specs array is required (may be empty only if intentional)`
 );
 if (content.priceRanges?.length && content.pricesApproved !== true) {
 // Allowed: show ranges with disclaimer, but JSON-LD must not emit AggregateOffer.
 // Soft warn only: templates use pricesApproved for schema.
 }
 return content;
}

export function assertService(content: ServicePageContent): ServicePageContent {
 const ctx = `service:${content.slug}`;
 assert(content.kind === "service", `${ctx}: kind must be service`);
 assert(content.slug?.trim(), `${ctx}: slug is required`);
 assert(content.h1?.trim(), `${ctx}: h1 is required`);
 assertSeo(content.seo, ctx);
 assertFaqs(content.faqs, ctx);
 return content;
}

export function assertLocation(
 content: LocationPageContent
): LocationPageContent {
 const ctx = `location:${content.slug}`;
 assert(content.kind === "location", `${ctx}: kind must be location`);
 assert(content.cityName?.trim(), `${ctx}: cityName is required`);
 assertSeo(content.seo, ctx);
 assertFaqs(content.faqs, ctx, 2, 8);

 // Publish checklist: ≥2 local proof types (soft gate for noIndex drafts)
 if (!content.seo.noIndex) {
 assert(
 Array.isArray(content.localProof) && content.localProof.length >= 2,
 `${ctx}: published locations need ≥2 localProof entries`
 );
 }

 if (content.hasVerifiedBranch) {
 const branch = content.localProof.find((p) => p.kind === "branch");
 assert(
 branch,
 `${ctx}: hasVerifiedBranch requires a localProof branch with NAP`
 );
 }

 return content;
}

export function assertIndustry(
 content: IndustryPageContent
): IndustryPageContent {
 const ctx = `industry:${content.slug}`;
 assert(content.kind === "industry", `${ctx}: kind must be industry`);
 assert(content.slug?.trim(), `${ctx}: slug is required`);
 assert(content.h1?.trim(), `${ctx}: h1 is required`);
 assert(content.intro?.trim(), `${ctx}: intro is required`);
 assertSeo(content.seo, ctx);
 assertFaqs(content.faqs, ctx, 2, 8);
 assert(
 Array.isArray(content.related) && content.related.length >= 1,
 `${ctx}: related product/service links required`
 );
 return content;
}

export function assertBlog(content: BlogPostContent): BlogPostContent {
 const ctx = `blog:${content.slug}`;
 assert(content.kind === "blog", `${ctx}: kind must be blog`);
 assert(content.slug?.trim(), `${ctx}: slug is required`);
 assert(content.h1?.trim(), `${ctx}: h1 is required`);
 assert(content.publishedAt?.trim(), `${ctx}: publishedAt is required`);
 assert(content.author?.trim(), `${ctx}: author is required`);
 assertSeo(content.seo, ctx);
 if (content.faqs?.length) {
 assertFaqs(content.faqs, ctx, 1, 12);
 }
 return content;
}

/** Rough word count from paragraph/list body blocks (warn helper for authors). */
export function countBodyWords(
 body: { type: string; text?: string; items?: string[] }[]
): number {
 let words = 0;
 for (const block of body) {
 if (block.type === "paragraph" || block.type === "heading" || block.type === "callout") {
 words += (block.text ?? "").trim().split(/\s+/).filter(Boolean).length;
 }
 if (block.type === "list" && block.items) {
 for (const item of block.items) {
 words += item.trim().split(/\s+/).filter(Boolean).length;
 }
 }
 }
 return words;
}
