"use client";

import type { RelatedLink } from "@/content/types";
import { trackEvent } from "@/lib/analytics";
import { isPublished } from "@/content/publish";
import { PublishAwareLink } from "@/components/content/PublishAwareLink";
import { cn } from "@/lib/utils";

type RelatedPagesProps = {
  links: RelatedLink[];
  title?: string;
  fromSlug?: string;
};

const kindLabel: Record<RelatedLink["kind"], string> = {
  product: "Product",
  service: "Service",
  industry: "Industry",
  location: "Location",
  blog: "Guide",
  page: "Page",
};

export function RelatedPages({
  links,
  title = "Related resources",
  fromSlug = "",
}: RelatedPagesProps) {
  // Hide unpublished destinations  -  only show live "Explore next" cards
  const liveLinks = (links ?? []).filter((link) => isPublished(link.href));

  if (!liveLinks.length) return null;

  return (
    <section className="my-10" aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-semibold mb-4">
        {title}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {liveLinks.map((link) => (
          <li key={link.href}>
            <PublishAwareLink
              href={link.href}
              className={cn(
                "flex flex-col rounded-lg border border-border bg-card p-4 transition-colors",
                "hover:border-primary/50 hover:bg-accent/40"
              )}
              onClick={() =>
                trackEvent("related_link_click", {
                  from: fromSlug,
                  to: link.href,
                  kind: link.kind,
                })
              }
            >
              <span className="text-xs font-medium uppercase tracking-wide text-primary">
                {kindLabel[link.kind]}
              </span>
              <span className="mt-1 font-medium text-foreground">
                {link.label}
              </span>
            </PublishAwareLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
