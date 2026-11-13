import type { BlogPostContent } from "../types";
import { assertBlog } from "../validate";
import { isPublished } from "../publish";
import { homeLiftPriceInIndia2026 } from "./home-lift-price-in-india-2026";
import { homeLiftSizeGuide } from "./home-lift-size-guide";
import { liftAmcChargesExplained } from "./lift-amc-charges-explained";
import { elevatorInstallationCostIndia } from "./elevator-installation-cost-india";
import { hydraulicVsTractionElevator } from "./hydraulic-vs-traction-elevator";
import { whatIsAnMrlElevator } from "./what-is-an-mrl-elevator";

/**
 * Blog registry: published blog posts.
 *
 * Order here is the order the hub lists them in, so keep the highest-intent
 * posts first: the price guide and the cost/size cluster carry the largest
 * search volume at the lowest difficulty in the keyword research.
 *
 * Registering a post is not the same as publishing it. `/blog/<slug>` must also
 * be an entry in `modules.blog.pages` in publish.ts with `published: true`,
 * otherwise the route renders Coming Soon and the post stays out of the sitemap.
 */
export const blogPosts: Record<string, BlogPostContent> = {
 "home-lift-price-in-india-2026": assertBlog(homeLiftPriceInIndia2026),
 "home-lift-size-guide": assertBlog(homeLiftSizeGuide),
 "elevator-installation-cost-india": assertBlog(elevatorInstallationCostIndia),
 "lift-amc-charges-explained": assertBlog(liftAmcChargesExplained),
 "hydraulic-vs-traction-elevator": assertBlog(hydraulicVsTractionElevator),
 "what-is-an-mrl-elevator": assertBlog(whatIsAnMrlElevator),
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
