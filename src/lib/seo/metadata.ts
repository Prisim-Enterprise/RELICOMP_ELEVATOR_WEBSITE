import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, absoluteUrl } from "./site";
import type { SeoFields } from "@/content/types";

/**
 * Build Next.js Metadata from typed SEO fields.
 * Titles should omit the brand suffix: root layout template applies "%s | Relicomp Elevators".
 */
export function buildMetadata(
 seo: SeoFields,
 extras?: Partial<Metadata>
): Metadata {
 const url = absoluteUrl(seo.canonicalPath);
 const ogImagePath = seo.ogImage ?? "/og/default.png";
 const ogImageUrl = absoluteUrl(ogImagePath);

 return {
 title: seo.title,
 description: seo.description,
 // `keywords` is deliberately not emitted: the <meta name="keywords"> tag has been
 // ignored by every major engine since 2009. SeoFields.keywords is retained as
 // editorial intent for writers, not as output.
 alternates: {
 canonical: seo.canonicalPath,
 },
 openGraph: {
 type: "website",
 locale: "en_IN",
 url,
 siteName: SITE_NAME,
 title: seo.title,
 description: seo.description,
 images: [
 {
 url: ogImageUrl,
 width: 1200,
 height: 630,
 alt: seo.title,
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: seo.title,
 description: seo.description,
 images: [ogImageUrl],
 },
 robots: seo.noIndex
 ? { index: false, follow: false }
 : { index: true, follow: true },
 ...extras,
 };
}

export function buildProductMetadata(seo: SeoFields): Metadata {
 return buildMetadata(seo);
}

export function buildBlogMetadata(
 seo: SeoFields,
 opts?: { publishedAt?: string; modifiedAt?: string }
): Metadata {
 return buildMetadata(seo, {
 openGraph: {
 type: "article",
 locale: "en_IN",
 url: absoluteUrl(seo.canonicalPath),
 siteName: SITE_NAME,
 title: seo.title,
 description: seo.description,
 publishedTime: opts?.publishedAt,
 modifiedTime: opts?.modifiedAt ?? opts?.publishedAt,
 images: [
 {
 url: absoluteUrl(seo.ogImage ?? "/og/default.png"),
 width: 1200,
 height: 630,
 alt: seo.title,
 },
 ],
 },
 });
}

/** Helper for static marketing pages that do not use content modules yet. */
export function buildStaticPageMetadata(input: {
 title: string;
 description: string;
 path: string;
 noIndex?: boolean;
 ogImage?: string;
}): Metadata {
 return buildMetadata({
 title: input.title,
 description: input.description,
 canonicalPath: input.path,
 ogImage: input.ogImage,
 noIndex: input.noIndex,
 });
}

export { SITE_URL, SITE_NAME };
