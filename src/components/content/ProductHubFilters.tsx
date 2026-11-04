"use client";

import { useMemo, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { isPublished } from "@/content/publish";
import { PublishAwareLink } from "@/components/content/PublishAwareLink";

export type HubProductCard = {
  slug: string;
  href: string;
  title: string;
  keyword: string;
  intro: string;
  image?: StaticImageData | string | null;
  imageAlt: string;
  category: "home" | "commercial" | "goods" | "design";
};

const filters: { id: "all" | HubProductCard["category"]; label: string }[] = [
  { id: "all", label: "All" },
  { id: "home", label: "Home" },
  { id: "commercial", label: "Commercial" },
  { id: "goods", label: "Goods" },
  { id: "design", label: "Design" },
];

type ProductHubFiltersProps = {
  products: HubProductCard[];
};

export function ProductHubFilters({ products }: ProductHubFiltersProps) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const visible = useMemo(() => {
    const filtered =
      filter === "all"
        ? products
        : products.filter((p) => p.category === filter);

    // Published products first; keep original relative order within each group
    return [...filtered].sort((a, b) => {
      const aLive = isPublished(a.href) ? 0 : 1;
      const bLive = isPublished(b.href) ? 0 : 1;
      return aLive - bLive;
    });
  }, [filter, products]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => {
              setFilter(f.id);
              trackEvent("product_hub_filter", { filter: f.id });
            }}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              filter === f.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "border border-border bg-card text-foreground hover:border-primary/40"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => {
          const live = isPublished(product.href);
          return (
            <li key={product.slug}>
              <PublishAwareLink
                href={product.href}
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300",
                  live &&
                    "hover:-translate-y-1.5 hover:border-primary hover:shadow-xl"
                )}
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-500",
                        live && "group-hover:scale-110"
                      )}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-secondary/30 to-muted text-sm text-muted-foreground">
                      {product.keyword}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary-foreground/80">
                      {live ? product.keyword : "Coming soon"}
                    </p>
                    <h3 className="mt-0.5 line-clamp-2 text-lg font-bold text-white">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {product.intro}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                    {live ? "Explore product" : "Coming soon"}
                    {live ? (
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    ) : null}
                  </span>
                </div>
              </PublishAwareLink>
            </li>
          );
        })}
      </ul>

      {visible.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No products in this filter.
        </p>
      ) : null}
    </div>
  );
}
