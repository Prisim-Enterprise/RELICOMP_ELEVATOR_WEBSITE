import type { BlogPostContent } from "../types";
import { assertBlog } from "../validate";
import { isPublished } from "../publish";
import { homeLiftPriceInIndia2026 } from "./home-lift-price-in-india-2026";

/**
 * Blog registry: published blog posts.
 */
export const blogPosts: Record<string, BlogPostContent> = {
 "home-lift-price-in-india-2026": assertBlog(homeLiftPriceInIndia2026),
};

export function getBlogPost(slug: string): BlogPostContent | null {
 return blogPosts[slug] ?? null;
}

export function allBlogSlugs(opts?: { indexableOnly?: boolean }): string[] {
 const slugs = Object.keys(blogPosts);
 if (!opts?.indexableOnly) return slugs;
 return slugs.filter(
  (s) => !blogPosts[s].seo.noIndex && isPublished(`/blog/${s}`)
 );
}

export function getAllBlogPosts(opts?: {
 indexableOnly?: boolean;
}): BlogPostContent[] {
 return allBlogSlugs(opts).map((slug) => blogPosts[slug]);
}
