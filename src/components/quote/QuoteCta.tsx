"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";
import { trackEvent } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type QuoteCtaProps = Omit<ButtonProps, "onClick"> & {
  /** Analytics source for the quote modal */
  source?: string;
  children?: React.ReactNode;
};

/**
 * Primary CTA that opens the site-wide quote modal instead of navigating to /contact.
 */
export function QuoteCta({
  source = "quote_cta",
  children = "Get Quote",
  className,
  variant = "default",
  size = "lg",
  ...props
}: QuoteCtaProps) {
  const { openQuoteModal } = useQuoteModal();
  const pathname = usePathname();

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn("rounded-full", className)}
      onClick={() => {
        trackEvent("cta_click", {
          cta_id: source,
          page_type: "site",
          slug: pathname || "",
          destination: "quote_modal",
          source,
        });
        openQuoteModal(source);
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
