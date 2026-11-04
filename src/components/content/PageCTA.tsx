"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { CtaBlock } from "@/content/types";
import { useQuoteModalOptional } from "@/components/quote/QuoteModalContext";

type PageCTAProps = {
  cta: CtaBlock;
  className?: string;
};

/** CTA block. Quote/contact destinations open the site quote modal when available. */
export function PageCTA({ cta, className }: PageCTAProps) {
  const quoteModal = useQuoteModalOptional();
  const isQuoteHref =
    cta.href === "/contact" ||
    cta.href.startsWith("/contact?") ||
    cta.href.includes("quote");

  return (
    <section
      className={
        className ??
        "my-12 rounded-xl border border-border bg-muted/40 p-6 sm:p-8"
      }
    >
      <h2 className="text-2xl font-semibold">{cta.heading}</h2>
      <p className="mt-2 text-muted-foreground max-w-2xl">{cta.body}</p>
      {isQuoteHref && quoteModal ? (
        <Button
          type="button"
          className="mt-6 rounded-full"
          onClick={() => quoteModal.openQuoteModal("page_cta")}
        >
          {cta.buttonLabel}
        </Button>
      ) : (
        <Button asChild className="mt-6 rounded-full">
          <Link href={cta.href}>{cta.buttonLabel}</Link>
        </Button>
      )}
    </section>
  );
}
