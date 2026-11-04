import type { MetadataRoute } from "next";
import { CONTENT_LAST_REVIEWED, SITE_URL } from "@/lib/seo/site";
import { allProductSlugs } from "@/content/products";
import { allBlogSlugs, getBlogPost } from "@/content/blog";
import { allServiceSlugs } from "@/content/services";
import { allLocationSlugs } from "@/content/locations";
import { allIndustrySlugs } from "@/content/industries";
import { isPublished } from "@/content/publish";
const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.85 },
  { path: "/locations", changeFrequency: "weekly", priority: 0.85 },
  { path: "/industries", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Deliberate review date, not build time: stamping `new Date()` on every deploy
  // told crawlers the whole site changed whenever anything was redeployed.
  const now = new Date(CONTENT_LAST_REVIEWED);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.filter(
    ({ path }) => isPublished(path)
  ).map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const products: MetadataRoute.Sitemap = allProductSlugs({
    indexableOnly: true,
  }).map((slug) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const services: MetadataRoute.Sitemap = allServiceSlugs({
    indexableOnly: true,
  }).map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locations: MetadataRoute.Sitemap = allLocationSlugs({
    indexableOnly: true,
  }).map((slug) => ({
    url: `${SITE_URL}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const industries: MetadataRoute.Sitemap = allIndustrySlugs({
    indexableOnly: true,
  }).map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts: MetadataRoute.Sitemap = allBlogSlugs({
    indexableOnly: true,
  }).map((slug) => {
    const post = getBlogPost(slug);
    return {
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: post?.updatedAt
        ? new Date(post.updatedAt)
        : post?.publishedAt
          ? new Date(post.publishedAt)
          : now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    };
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
