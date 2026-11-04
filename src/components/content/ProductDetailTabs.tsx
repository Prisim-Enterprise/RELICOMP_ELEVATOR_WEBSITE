"use client";

import { useEffect, useMemo, useState } from "react";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { SpecsTable } from "@/components/content/SpecsTable";
import { SizeChart } from "@/components/content/SizeChart";
import { FAQSection } from "@/components/content/FAQSection";
import type { ContentBlock, FAQ, SpecRow } from "@/content/types";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ProductDetailTabsProps = {
  slug: string;
  body: ContentBlock[];
  specs: SpecRow[];
  sizeChart?: { headers: string[]; rows: string[][] };
  faqs: FAQ[];
  quoteSlot?: React.ReactNode;
};

type SectionItem = {
  id: string;
  label: string;
};

/**
 * Continuous product body: Overview → Specs → Sizes → FAQs → Quote.
 * Sticky nav jumps to sections; customers can also scroll through everything.
 */
export function ProductDetailTabs({
  slug,
  body,
  specs,
  sizeChart,
  faqs,
  quoteSlot,
}: ProductDetailTabsProps) {
  const sections = useMemo(() => {
    const items: SectionItem[] = [{ id: "product-overview", label: "Overview" }];
    if (specs?.length) items.push({ id: "product-specs", label: "Specs" });
    if (sizeChart) items.push({ id: "product-sizes", label: "Sizes" });
    if (faqs?.length) items.push({ id: "product-faqs", label: "FAQs" });
    if (quoteSlot) items.push({ id: "product-quote", label: "Get quote" });
    return items;
  }, [specs, sizeChart, faqs, quoteSlot]);

  const [active, setActive] = useState(sections[0]?.id ?? "product-overview");

  useEffect(() => {
    if (!sections.length) return;

    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      // Offset for fixed header + sticky section nav
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.6, 1] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    trackEvent("product_tab_change", { slug, tab: id.replace("product-", "") });
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  const navBtnClass = (id: string) =>
    cn(
      "shrink-0 rounded-xl px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:py-2.5 sm:text-sm",
      active === id
        ? "bg-primary text-primary-foreground shadow-sm"
        : "text-muted-foreground hover:bg-background hover:text-foreground"
    );

  // header (~6rem) + sticky nav (~3.25rem)  -  keep section titles clear of chrome
  const sectionClass =
    "scroll-mt-[9.5rem] border-t border-border/60 pt-10 first:border-t-0 first:pt-6";

  return (
    <div className="w-full">
      {/*
        Header is fixed: py-2 (0.5rem×2) + h-20 (5rem) ≈ 6rem.
        Stick nav just below it so it never tucks under the logo bar.
      */}
      <nav
        aria-label="Product sections"
        className="sticky top-24 z-40 -mx-1 border-b border-border/60 bg-background/95 px-1 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/90"
      >
        <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            className="inline-flex h-auto w-max min-w-full justify-start gap-1 rounded-2xl bg-muted/80 p-1.5"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                role="tab"
                aria-selected={active === section.id}
                aria-controls={section.id}
                className={navBtnClass(section.id)}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="mt-2 space-y-2">
        <section
          id="product-overview"
          aria-labelledby="product-overview-heading"
          className={sectionClass}
        >
          <h2 id="product-overview-heading" className="sr-only">
            Overview
          </h2>
          <ContentBlocks blocks={body} />
        </section>

        {specs?.length ? (
          <section
            id="product-specs"
            aria-labelledby="product-specs-nav-heading"
            className={sectionClass}
          >
            <h2 id="product-specs-nav-heading" className="sr-only">
              Specs
            </h2>
            <SpecsTable rows={specs} title="Technical specifications" />
          </section>
        ) : null}

        {sizeChart ? (
          <section
            id="product-sizes"
            aria-labelledby="product-sizes-heading"
            className={sectionClass}
          >
            <h2 id="product-sizes-heading" className="sr-only">
              Sizes
            </h2>
            <SizeChart
              headers={sizeChart.headers}
              rows={sizeChart.rows}
              title="Size & capacity guide"
            />
          </section>
        ) : null}

        {faqs?.length ? (
          <section
            id="product-faqs"
            aria-labelledby="product-faqs-nav-heading"
            className={sectionClass}
          >
            <h2 id="product-faqs-nav-heading" className="sr-only">
              FAQs
            </h2>
            <FAQSection faqs={faqs} slug={slug} pageType="product" />
          </section>
        ) : null}

        {quoteSlot ? (
          <section
            id="product-quote"
            aria-labelledby="product-quote-heading"
            className={sectionClass}
          >
            <h2 id="product-quote-heading" className="sr-only">
              Get quote
            </h2>
            {quoteSlot}
          </section>
        ) : null}
      </div>
    </div>
  );
}
