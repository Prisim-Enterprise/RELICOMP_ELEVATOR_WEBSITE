"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics";

type StickyMobileCTAProps = {
  href: string;
  label?: string;
  pageType: string;
  slug: string;
};

export function StickyMobileCTA({
  href,
  label = "Get free quote",
  pageType,
  slug,
}: StickyMobileCTAProps) {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 hidden justify-center px-24 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:flex lg:hidden"
      role="region"
      aria-label="Request a quote"
    >
      {/*
        Mobile (< md): SiteMobileStickyBar already has Call / WhatsApp / Get Quote.
        Tablet (md–lg): compact pill between the corner FABs, not a full-bleed bar.
      */}
      <Button
        asChild
        className="pointer-events-auto h-12 w-auto max-w-[min(22rem,100%)] rounded-full px-6 font-semibold shadow-lg"
      >
        <Link
          href={href}
          onClick={() =>
            trackCtaClick({
              cta_id: "mobile_sticky_quote",
              page_type: pageType,
              slug,
              destination: href,
            })
          }
        >
          <span className="truncate">{label}</span>
        </Link>
      </Button>
    </div>
  );
}
