"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { brand } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { usePathname } from "next/navigation";

type SiteMobileStickyBarProps = {
  onGetQuote: (source?: string) => void;
};

const WHATSAPP_MESSAGE =
  "Hello Relicomp Elevators! I visited your website and I'm interested in your elevator solutions (home, MRL, hydraulic, installation & AMC). Could you please share more details and a quote?";

export function SiteMobileStickyBar({ onGetQuote }: SiteMobileStickyBarProps) {
  const pathname = usePathname();

  // Landing pages already have their own sticky bar.
  if (pathname?.startsWith("/lp")) return null;

  const whatsappUrl = `https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  const handleTelClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    trackEvent("click_call", {
      page_type: "site",
      source: "mobile_sticky_bar",
      page: pathname || "",
    });
    const telUrl = `tel:${brand.phoneTel}`;
    const w = window as unknown as {
      gtag_report_conversion?: (u: string) => void;
    };
    if (w.gtag_report_conversion) {
      w.gtag_report_conversion(telUrl);
    } else {
      window.location.href = telUrl;
    }
  };

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden"
            role="region"
      aria-label="Quick actions"
    >
      <div className="pointer-events-auto grid  grid-cols-[1fr_1fr_1.35fr] gap-2 border-t border-border bg-background/98 p-2 shadow-[0_8px_32px_rgba(15,15,15,0.12)] backdrop-blur-md sm:mx-auto">
        <a
          href={`tel:${brand.phoneTel}`}
          onClick={handleTelClick}
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border bg-background text-xs font-bold text-foreground shadow-sm"
          aria-label="Call us"
        >
          <Phone className="h-4 w-4 text-primary" aria-hidden />
          Call
        </a>
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("click_whatsapp", {
              page_type: "site",
              source: "mobile_sticky_bar",
              page: pathname || "",
            })
          }
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-xs font-bold text-white"
          aria-label="WhatsApp us"
        >
          <WhatsAppIcon className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-xl bg-primary text-xs font-bold text-primary-foreground shadow-sm"
          onClick={() => {
            trackEvent("cta_click", {
              cta_id: "mobile_sticky_get_quote",
              page_type: "site",
              slug: pathname || "",
              destination: "quote_modal",
              source: "mobile_sticky_bar",
            });
            onGetQuote("mobile_sticky_bar");
          }}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}
