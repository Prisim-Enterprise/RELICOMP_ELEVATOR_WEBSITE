"use client";

import Image from "next/image";
import relicompLogoWhite from "@/assets/relicomp-logo-white.webp";
import { brand } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

const PHONE_DISPLAY = "80374 04826";

type LandingHeaderProps = {
  onGetQuote: (source?: string) => void;
};

function handleTelClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  trackEvent("click_call", {
    page: "home-elevators-bangalore",
    source: "landing_header",
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

export function LandingHeader({ onGetQuote }: LandingHeaderProps) {
  return (
    <header className="lp-header">
      <div className="nav">
        <span className="brand" aria-label="Relicomp Elevators">
          <Image
            src={relicompLogoWhite}
            alt=""
            width={38}
            height={38}
            className="h-13 w-13 object-contain"
            priority
          />
          RELICOMP <em>ELEVATORS</em>
        </span>

        <div className="nav-actions">

          <a
            className="nav-call"
            href={`tel:${brand.phoneTel}`}
            onClick={handleTelClick}
          >
            Call Us: {PHONE_DISPLAY}
          </a>
          <button
            type="button"
            className="btn btn-brass btn-sm"
            onClick={() => {
              trackEvent("cta_click", {
                cta_id: "header_get_quote",
                page_type: "landing",
                slug: "home-elevators-bangalore",
                destination: "quote_form",
                source: "header_get_price",
              });
              onGetQuote("header_get_price");
            }}
          >
            Get My Price
          </button>
        </div>
      </div>
    </header>
  );
}
