import type { ProductPageContent } from "../types";
import { assertProduct } from "../validate";
import { isPublished } from "../publish";
import { homeElevators } from "./home-elevators";
import { goodsLiftsDumbwaiters } from "./goods-lifts-dumbwaiters";
import { hydraulicElevators } from "./hydraulic-elevators";
import { mrlElevators } from "./mrl-elevators";
import { tractionElevators } from "./traction-elevators";
import { capsuleGlassElevators } from "./capsule-glass-elevators";

/**
 * Product registry. Modules are registered as content PRs land.
 * generateStaticParams / sitemap use helpers below.
 */
export const products: Record<string, ProductPageContent> = {
  "home-elevators": assertProduct(homeElevators),
  "goods-lifts-dumbwaiters": assertProduct(goodsLiftsDumbwaiters),
  "hydraulic-elevators": assertProduct(hydraulicElevators),
  "mrl-elevators": assertProduct(mrlElevators),
  "traction-elevators": assertProduct(tractionElevators),
  "capsule-glass-elevators": assertProduct(capsuleGlassElevators),
};

export type ProductSlug = keyof typeof products;

export function getProduct(slug: string): ProductPageContent | null {
  return products[slug] ?? null;
}

export function allProductSlugs(opts?: {
  indexableOnly?: boolean;
}): string[] {
  const slugs = Object.keys(products);
  if (!opts?.indexableOnly) return slugs;
  return slugs.filter(
    (s) => !products[s].seo.noIndex && isPublished(`/products/${s}`)
  );
}
