import { ContentBlocks } from "@/components/content/ContentBlocks";
import { FAQSection } from "@/components/content/FAQSection";
import { RelatedPages } from "@/components/content/RelatedPages";
import type { HubSeoContent } from "@/content/hubs/types";
import { cn } from "@/lib/utils";

type HubSeoSectionProps = {
  content: HubSeoContent;
  /** Analytics slug / page key for FAQ + related tracking */
  slug?: string;
  className?: string;
  /** Soft background band */
  muted?: boolean;
};

/**
 * Shared long-form SEO block for root hub pages: prose, FAQs, related links.
 */
export function HubSeoSection({
  content,
  slug,
  className,
  muted = false,
}: HubSeoSectionProps) {
  return (
    <section
      className={cn(
        "border-b border-border py-12 sm:py-14 lg:py-16",
        muted && "bg-muted/30",
        className
      )}
      aria-labelledby="hub-seo-heading"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-5xl">
          <h2
            id="hub-seo-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {content.heading}
          </h2>
          {content.lead ? (
            <p className="speakable-intro mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {content.lead}
            </p>
          ) : null}
          <div className="mt-8">
            <ContentBlocks blocks={content.body} />
          </div>
          <FAQSection faqs={content.faqs} slug={slug} pageType="hub" />
          <RelatedPages
            links={content.related}
            title="Explore next"
            fromSlug={slug ?? "hub"}
          />
        </div>
      </div>
    </section>
  );
}
