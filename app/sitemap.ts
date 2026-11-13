import type { MetadataRoute } from "next";
import { CONTENT_LAST_REVIEWED, SITE_URL } from "@/lib/seo/site";
import { allProductSlugs } from "@/content/products";
import { allBlogSlugs, getBlogPost } from "@/content/blog";
import { allServiceSlugs } from "@/content/services";
import { allLocationSlugs } from "@/content/locations";
import { allIndustrySlugs } from "@/content/industries";
import { isPublished } from "@/content/publish";

/**
 * No `changefreq` or `priority`.
 *
 * Google ignores both outright, and has said so for years; Bing treats priority
 * as a hint it mostly disregards. They are not harmful, they are just bytes
 * nobody reads - and they invite a pointless argument at review time about
 * whether /products deserves 0.9 or 0.85, a number that changes nothing.
 *
 * `lastmod` is kept because engines do use it - but only while it is honest.
 * It comes from CONTENT_LAST_REVIEWED (and a post's own updatedAt), not from
 * the build clock, so a redeploy that changes no content does not claim every
 * page changed. Stamping build time here is the fastest way to teach a crawler
 * to ignore the field entirely.
 */

const STATIC_ROUTES = [
  "/",
  "/about",
  "/products",
  "/projects",
  "/contact",
  "/blog",
  "/services",
  "/locations",
  "/industries",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Deliberate review date, not build time: stamping `new Date()` on every deploy
  // told crawlers the whole site changed whenever anything was redeployed.
  const now = new Date(CONTENT_LAST_REVIEWED);

  const entry = (path: string, lastModified: Date = now) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
  });

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.filter((path) =>
    isPublished(path)
  ).map((path) => entry(path));

  const products: MetadataRoute.Sitemap = allProductSlugs({
    indexableOnly: true,
  }).map((slug) => entry(`/products/${slug}`));

  const services: MetadataRoute.Sitemap = allServiceSlugs({
    indexableOnly: true,
  }).map((slug) => entry(`/services/${slug}`));

  const locations: MetadataRoute.Sitemap = allLocationSlugs({
    indexableOnly: true,
  }).map((slug) => entry(`/locations/${slug}`));

  const industries: MetadataRoute.Sitemap = allIndustrySlugs({
    indexableOnly: true,
  }).map((slug) => entry(`/industries/${slug}`));

  const posts: MetadataRoute.Sitemap = allBlogSlugs({
    indexableOnly: true,
  }).map((slug) => {
    const post = getBlogPost(slug);
    const updated = post?.updatedAt ?? post?.publishedAt;
    return entry(`/blog/${slug}`, updated ? new Date(updated) : now);
  });

  return [
    ...staticEntries,
    ...products,
    ...services,
    ...locations,
    ...industries,
    ...posts,
  ];
}
