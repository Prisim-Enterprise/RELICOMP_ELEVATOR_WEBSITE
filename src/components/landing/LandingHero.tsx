"use client";

import Image from "next/image";
import { Check, Phone, Star } from "lucide-react";
import { HomeLiftLeadForm } from "@/components/landing/HomeLiftLeadForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { brand } from "@/content/site";
import { landingImages } from "@/content/landing/images";
import { trackEvent } from "@/lib/analytics";

const PHONE_DISPLAY = "80374 04826";
const WHATSAPP_URL = `https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(
  "Hello Relicomp! I'm interested in a home elevator for my house in Bangalore."
)}`;

const TRUST_PROOF = [
  "600+ Installations",
  "16+ Years Experience",
  "Manufactured in Bangalore",
  "Factory Direct Pricing",
  "4–6 Week Installation",
] as const;

type LandingHeroProps = {
  onTelClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onGetQuote?: () => void;
};

export function LandingHero({ onTelClick, onGetQuote }: LandingHeroProps) {
  const scrollToVideo = () => {
    const el = document.getElementById("lp-video");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      trackEvent("cta_click", {
        cta_id: "hero_watch_video",
        page_type: "landing",
        slug: "home-elevators-bangalore",
        destination: "#lp-video",
      });
    }
  };

  return (
    <section className="hero on-dark" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="made-tag">Manufactured in Bengaluru</span>
          <h1>
            Home Elevators in Bangalore |{" "}
            <span className="accent">Manufactured Locally,</span> Built for Your
            Home
          </h1>
          <p className="sub">
            Elegant, compact home lifts for villas, duplexes and independent
            houses. Designed and manufactured at our own facility in Magadi,
            Bengaluru. Installed and serviced by our local team.
          </p>

          <div className="hero-rating" aria-label="Customer rating">
            <span className="hero-rating-stars" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="hero-star" fill="currentColor" />
              ))}
            </span>
            <span className="hero-rating-text">
              Rated by Bangalore homeowners
            </span>
          </div>

          <ul className="hero-proof" aria-label="Why homeowners trust Relicomp">
            {TRUST_PROOF.map((item) => (
              <li key={item}>
                <Check className="hero-proof-icon" strokeWidth={2.5} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* <div className="hero-media">
            <Image
              src={landingImages.luxuryCabinHomeElevators}
              alt="Luxury Relicomp home elevator cabin in a Bangalore villa"
              fill
              sizes="(max-width: 920px) 100vw, 42vw"
              priority
              className="hero-media-img"
            />
            <div className="hero-media-overlay" aria-hidden />
            <button
              type="button"
              className="hero-play"
              onClick={scrollToVideo}
              aria-label="Watch home elevator video"
            >
              <span className="hero-play-icon" aria-hidden>
                ▶
              </span>
              <span className="hero-play-label">
                Watch installation &amp; cabin tour
              </span>
            </button>
          </div> */}

          <div className="hero-ctas">
            <a
              className="btn btn-outline-light"
              href={`tel:${brand.phoneTel}`}
              onClick={onTelClick}
            >
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              className="btn btn-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("click_whatsapp", {
                  page: "home-elevators-bangalore",
                  source: "hero",
                })
              }
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <HomeLiftLeadForm source="hero_form" />
      </div>
    </section>
  );
}
