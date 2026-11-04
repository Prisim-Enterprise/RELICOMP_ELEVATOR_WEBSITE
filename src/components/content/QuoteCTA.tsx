"use client";

import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";
import {
  WhatsAppCta,
  whatsappMessageFor,
} from "@/components/quote/WhatsAppCta";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { brand } from "@/content/site";

type QuoteCTAProps = {
  heading?: string;
  body?: string;
  buttonLabel?: string;
  /** Legacy prop  -  /contact opens the quote modal; other URLs are not used for the primary button. */
  href?: string;
  pageType: string;
  slug: string;
  ctaId?: string;
  className?: string;
  variant?: "card" | "banner" | "sidebar";
};

export function QuoteCTA({
  heading = "Get a free site survey & quote",
  body = "Share your floors, shaft availability, and preferred capacity. Our team will recommend the right lift and an accurate installation plan.",
  buttonLabel = "Request a quote",
  pageType,
  slug,
  ctaId = "quote_primary",
  className,
  variant = "card",
}: QuoteCTAProps) {
  const { openQuoteModal } = useQuoteModal();

  const openModal = () => {
    trackCtaClick({
      cta_id: ctaId,
      page_type: pageType,
      slug,
      destination: "quote_modal",
    });
    openQuoteModal(`${pageType}:${slug}:${ctaId}`);
  };

  if (variant === "sidebar") {
    return (
      <aside
        className={cn(
          "rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/10 to-card p-5 shadow-sm",
          className
        )}
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Next step
        </p>
        <h2 className="mt-2 text-lg font-semibold leading-snug">{heading}</h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {body}
        </p>
        <Button
          type="button"
          className="mt-4 w-full rounded-full"
          onClick={openModal}
        >
          {buttonLabel}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
        <a
          href={`tel:${brand.phoneTel}`}
          className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-foreground hover:text-primary"
        >
          <Phone className="h-4 w-4" />
          {brand.phoneDisplay}
        </a>
      </aside>
    );
  }

  if (variant === "banner") {
    return (
      <section
        className={cn(
          "relative my-12 overflow-hidden rounded-3xl bg-charcoal px-6 py-10 text-white sm:px-10",
          className
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.45),transparent_55%)]" />
        <div className="relative max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
          <p className="mt-3 text-white/80 leading-relaxed">{body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              type="button"
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90"
              onClick={openModal}
            >
              {buttonLabel}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <WhatsAppCta
              source={`${pageType}_${slug}_banner_whatsapp`}
              message={whatsappMessageFor(`${pageType}_banner`)}
              size="lg"
              variant="heroOutline"
            >
              Chat on WhatsApp
            </WhatsAppCta>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "my-12 overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.08] via-background to-muted/40 p-6 shadow-sm sm:p-8",
        className
      )}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
        </div>
        <Button
          type="button"
          size="lg"
          className="shrink-0 rounded-full"
          onClick={openModal}
        >
          {buttonLabel}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
