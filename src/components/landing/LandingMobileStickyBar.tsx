"use client";

import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { brand } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

type LandingMobileStickyBarProps = {
  onGetPrice: (source?: string) => void;
};

function handleTelClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  trackEvent("click_call", {
    page: "home-elevators-bangalore",
    source: "mobile_sticky_bar",
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
}

export function LandingMobileStickyBar({
  onGetPrice,
}: LandingMobileStickyBarProps) {
  const whatsappUrl = `https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(
    "Hello Relicomp! I'm interested in a home elevator for my house in Bangalore."
  )}`;

  return (
    <div
      className="lp-sticky-bar"
      style={{ paddingBottom: "max(0.4rem, env(safe-area-inset-bottom))" }}
      role="region"
      aria-label="Quick actions"
    >
      <div className="lp-sticky-bar-inner">
        <a
          href={`tel:${brand.phoneTel}`}
          onClick={handleTelClick}
          className="lp-sticky-call"
          aria-label="Call us"
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span>Call</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("click_whatsapp", {
              page: "home-elevators-bangalore",
              source: "mobile_sticky_bar",
            })
          }
          className="lp-sticky-wa"
          aria-label="WhatsApp us"
        >
          <WhatsAppIcon className="h-4 w-4" aria-hidden />
          <span>WhatsApp</span>
        </a>
        <button
          type="button"
          className="lp-sticky-quote"
          onClick={() => {
            trackEvent("cta_click", {
              cta_id: "mobile_sticky_get_price",
              page_type: "landing",
              slug: "home-elevators-bangalore",
              destination: "quote_form",
              source: "mobile_sticky_bar",
            });
            onGetPrice("mobile_sticky_bar");
          }}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
}
