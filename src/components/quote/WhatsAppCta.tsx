"use client";

import * as React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { brand } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Relicomp Elevators! I visited your website and I'm interested in your elevator solutions (home, MRL, hydraulic, installation & AMC). Could you please share more details and a quote?";

type WhatsAppCtaProps = Omit<ButtonProps, "onClick" | "asChild"> & {
  /** Pre-filled WhatsApp chat message */
  message?: string;
  /** Analytics source */
  source?: string;
  children?: React.ReactNode;
  /** Show WhatsApp icon before label (default true) */
  showIcon?: boolean;
};

/**
 * Secondary CTA: opens WhatsApp with a custom pre-filled message.
 * Pair with QuoteCta when two CTAs are shown side by side.
 */
export function WhatsAppCta({
  message = DEFAULT_WHATSAPP_MESSAGE,
  source = "whatsapp_cta",
  children = "Chat on WhatsApp",
  className,
  variant = "outline",
  size = "lg",
  showIcon = true,
  ...props
}: WhatsAppCtaProps) {
  const pathname = usePathname();
  const href = `https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn("rounded-full", className)}
      {...props}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("click_whatsapp", {
            source,
            page: pathname || "",
            page_type: "site",
          })
        }
      >
        {showIcon ? (
          <WhatsAppIcon className="mr-2 h-4 w-4 shrink-0 text-[#25D366]" />
        ) : null}
        {children}
      </a>
    </Button>
  );
}

/** Context-aware default messages for dual-CTA pairs. */
export function whatsappMessageFor(context: string): string {
  const map: Record<string, string> = {
    home_hero:
      "Hello Relicomp! I want a free quote for an elevator. Please share options and a site visit.",
    home_final:
      "Hello Relicomp! I'd like to speak with an expert about elevator solutions for my building.",
    about_hero:
      "Hello Relicomp! I visited the About page and would like to discuss elevator options with your team.",
    about_final:
      "Hello Relicomp! I'd like to talk to an expert about your elevators and services.",
    projects_hero:
      "Hello Relicomp! I saw your projects and want a similar elevator solution. Please share a quote.",
    projects_final:
      "Hello Relicomp! Ready to start a project. Please share next steps and a free quote.",
    products_hub:
      "Hello Relicomp! I'm looking at your elevator products and need pricing / recommendation.",
    services_hub:
      "Hello Relicomp! I need elevator service / installation / AMC support. Please advise.",
  };
  return map[context] ?? DEFAULT_WHATSAPP_MESSAGE;
}
