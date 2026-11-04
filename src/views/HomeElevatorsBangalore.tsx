"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image, { type StaticImageData } from "next/image";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingMobileStickyBar } from "@/components/landing/LandingMobileStickyBar";
import { LandingTrustBar } from "@/components/landing/LandingTrustBar";
// import { LandingTrustBadges } from "@/components/landing/LandingTrustBadges";
// import { LandingSegments } from "@/components/landing/LandingSegments";
// import { LandingVideo } from "@/components/landing/LandingVideo";
import { LandingWhyChoose } from "@/components/landing/LandingWhyChoose";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { brand, priceDisclaimer } from "@/content/site";
import { homeElevatorBangaloreFaqs } from "@/content/landing/home-elevators-bangalore";
import { landingImages } from "@/content/landing/images";
import { trackEvent } from "@/lib/analytics";
import { Phone } from "lucide-react";
import { InstallationBentoGallery } from "@/components/landing/InstallationBentoGallery";
import TestimonialsSection from "@/components/TestimonialsSection";

const LandingQuoteModal = dynamic(
  () =>
    import("@/components/landing/LandingQuoteModal").then(
      (m) => m.LandingQuoteModal
    ),
  { ssr: false }
);

const LandingPromoModal = dynamic(
  () =>
    import("@/components/landing/LandingPromoModal").then(
      (m) => m.LandingPromoModal
    ),
  { ssr: false }
);

const PHONE_DISPLAY = "80374 04826";
const WHATSAPP_URL = `https://wa.me/${brand.whatsappE164}?text=${encodeURIComponent(
  "Hello Relicomp! I'm interested in a home elevator for my house in Bangalore."
)}`;

const PROMO_DISMISS_KEY = "relicomp_blr_lift_promo_dismissed";

const LIFT_TYPES: {
  title: string;
  description: string;
  chips: string[];
  image: StaticImageData;
  alt: string;
}[] = [
  {
    title: "MRL (Machine-Room-Less) Home Elevators in Bangalore",
    description:
      "No machine room needed. Ideal for new villa construction.",
    chips: ["Space-saving", "Smooth gearless drive", "Low headroom"],
    image: landingImages.mrlHomeElevators,
    alt: "Machine-room-less home elevator cabin by Relicomp",
  },
  {
    title: "Hydraulic Home Lifts in Bangalore",
    description:
      "Quiet, smooth ride. Ideal for retrofitting into existing homes.",
    chips: ["Minimal pit", "Single-phase option", "Silent operation"],
    image: landingImages.hydraulicHomeLifts,
    alt: "Hydraulic home lift installation for residential use",
  },
  {
    title: "Glass Lifts for Bangalore Homes",
    description: "For tight plots and 30×40 sites, from about a 3′×3′ footprint.",
    chips: ["2–3 passengers", "Fits in stairwell void", "Duplex-friendly"],
    image: landingImages.compactSmallHomeLifts,
    alt: "Compact glass home lift beside a wooden staircase in a villa",
  },
  {
    title: "Luxury Cabin Home Elevators",
    description:
      "Custom SS, glass and wood-finish cabins to match your interiors.",
    chips: ["Custom finishes", "Glass doors", "Designer lighting"],
    image: landingImages.luxuryCabinHomeElevators,
    alt: "Luxury glass panoramic home elevator cabin",
  },
];

const PRICE_FACTORS = [
  {
    title: "Stops & travel height",
    body: "G+1 to G+6. Every extra stop adds guide rails, landing doors and travel.",
  },
  {
    title: "Drive type",
    body: "MRL gearless or hydraulic, chosen to suit your pit depth, headroom and power supply.",
  },
  {
    title: "Cabin & finishes",
    body: "SS, glass or wood-finish cabins, door type, lighting and automation options.",
  },
  {
    title: "Site & civil work",
    body: "New construction with a ready shaft costs less than a retrofit into an existing home.",
  },
] as const;

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Free Site Visit",
    body: "Our engineer measures your space and understands your needs. We will visit you within 48 hours anywhere in Bangalore.",
  },
  {
    step: "2",
    title: "Design & Quote",
    body: "Cabin options, drive type, and a transparent itemised quote. No hidden costs.",
  },
  {
    step: "3",
    title: "Manufacturing",
    body: "Built at our Magadi facility with quality checks at every stage of production.",
  },
  {
    step: "4",
    title: "Installation & Handover",
    body: "Professional installation, safety testing, training, and warranty + AMC support.",
  },
] as const;

function handleTelClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  trackEvent("click_call", {
    page: "home-elevators-bangalore",
    number: brand.phoneDisplay,
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

function handleWhatsAppClick() {
  trackEvent("click_whatsapp", { page: "home-elevators-bangalore" });
}

function useScrollDepthTracking() {
  const fired = useRef({ d50: false, d90: false });

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      if (!fired.current.d50 && pct >= 50) {
        fired.current.d50 = true;
        trackEvent("scroll_depth", {
          percent: 50,
          page: "home-elevators-bangalore",
        });
      }
      if (!fired.current.d90 && pct >= 90) {
        fired.current.d90 = true;
        trackEvent("scroll_depth", {
          percent: 90,
          page: "home-elevators-bangalore",
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

const HomeElevatorsBangalore = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [promoModalOpen, setPromoModalOpen] = useState(false);
  const [quoteSource, setQuoteSource] = useState("modal");
  useScrollDepthTracking();

  const openQuoteModal = useCallback((source: string) => {
    setQuoteSource(source);
    setQuoteModalOpen(true);
  }, []);

  const scrollToLeadForm = useCallback(
    (sourceOrEvent?: string | React.SyntheticEvent) => {
      const source =
        typeof sourceOrEvent === "string" ? sourceOrEvent : "scroll_cta";

      const el = document.getElementById("lead-form");
      if (!el) {
        openQuoteModal(source);
        return;
      }

      const rect = el.getBoundingClientRect();
      const formOffscreen =
        rect.bottom < 80 || rect.top > window.innerHeight - 80;

      if (formOffscreen && window.matchMedia("(max-width: 920px)").matches) {
        openQuoteModal(source);
        return;
      }

      const headerOffset = 78;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });

      trackEvent("cta_click", {
        cta_id: "scroll_to_lead_form",
        page_type: "landing",
        slug: "home-elevators-bangalore",
        destination: "#lead-form",
        source,
      });
    },
    [openQuoteModal]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(PROMO_DISMISS_KEY)) return;

    const timer = window.setTimeout(() => {
      if (window.scrollY < 500) return;
      setPromoModalOpen(true);
      trackEvent("promo_modal_auto", {
        page: "home-elevators-bangalore",
      });
    }, 45000);

    return () => window.clearTimeout(timer);
  }, []);

  const dismissPromo = (open: boolean) => {
    if (!open) {
      sessionStorage.setItem(PROMO_DISMISS_KEY, "1");
    }
    setPromoModalOpen(open);
  };

  return (
    <div className="pb-[72px] lg:pb-0">
      <LandingHeader onGetQuote={scrollToLeadForm} />

      <main>
        <LandingHero
          onTelClick={handleTelClick}
          onGetQuote={scrollToLeadForm}
        />

        <LandingTrustBar />
        {/* <LandingTrustBadges /> */}
        {/* <LandingSegments /> */}

        {/* Intent */}
        <section className="intent">
          <div className="wrap inner">
            <p className="eyebrow">
              <span className="btn-dot">G</span>Why a home lift
            </p>
            <h2>A Lift for Your Home Is No Longer a Luxury</h2>
            <p className="lead">
              More Bangalore families are adding home elevators. For elderly
              parents, for convenience in G+2 and G+3 homes, and for resale
              value. Modern home lifts need as little as 3′×3′ of space, run on
              single-phase power, and can be installed in existing homes without
              major civil work. If you&apos;re building or renovating in
              Bangalore, this is the right time to plan your lift.
            </p>
          </div>
        </section>

        {/* Types */}
        <section className="types">
          <div className="wrap">
            <div className="sec-head center">
              <p className="eyebrow">
                <span className="btn-dot">1</span>Home lift types
              </p>
              <h2>Choose the Right Home Lift for Your Space</h2>
            </div>
            <div className="cards">
              {LIFT_TYPES.map((lift, i) => (
                <article className="card" key={lift.title}>
                  <div className="card-img">
                    <Image
                      src={lift.image}
                      alt={lift.alt}
                      fill
                      sizes="(max-width: 820px) 100vw, 50vw"
                      priority={i < 2}
                      loading={i < 2 ? undefined : "lazy"}
                    />
                  </div>
                  <div className="card-body">
                    <h3>{lift.title}</h3>
                    <p>{lift.description}</p>
                    <div className="chips">
                      {lift.chips.map((chip) => (
                        <span key={chip}>{chip}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => scrollToLeadForm("lift_type_card")}
                    >
                      Get Quote
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Price */}
        <section className="price on-dark" id="price">
          <div className="wrap">
            <div className="sec-head center">
              <p className="eyebrow">
                <span className="btn-dot">2</span>Price guidance
              </p>
              <h2>How Much Does a Home Elevator Cost in Bangalore?</h2>
              <p className="lead">
                No two homes price the same. We share an itemised, all-inclusive
                figure for your exact configuration after a free site visit.
              </p>
            </div>
            <div className="price-table-wrap p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {PRICE_FACTORS.map((factor) => (
                  <div key={factor.title}>
                    <h3 className="mb-1.5 text-[1.05rem] font-semibold">
                      {factor.title}
                    </h3>
                    <p className="m-0 text-[0.95rem] leading-relaxed text-[var(--steel)]">
                      {factor.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="price-note">
              Pricing is shared directly with homeowners after a free site
              visit. Tell us your floors and site details and you&apos;ll get a
              written quote, usually the same day. Quotes include installation
              for standard configurations, and EMI options are available.{" "}
              {priceDisclaimer}
            </p>
            <div className="cta-line">
              <button
                type="button"
                className="btn btn-brass"
                onClick={() => scrollToLeadForm("price_section")}
              >
                Get my price →
              </button>
            </div>
          </div>
        </section>

        <LandingWhyChoose onGetQuote={scrollToLeadForm} />

        {/* <LandingVideo /> */}

        {/* Projects */}
        <section className="projects">
          <div className="wrap">
            <div className="sec-head center">
              <p className="eyebrow">
                <span className="btn-dot">3</span>Proof of work
              </p>
              <h2>Recent Home Elevator Installations in Bangalore</h2>
            </div>
            <p className="mx-auto mb-8 max-w-xl text-center text-[0.95rem] leading-relaxed text-[#6b7787]">
              Real installs across Bangalore: villas, duplexes, and retrofits.
              Featured shot first; tap any photo for full-screen view.
            </p>
            <InstallationBentoGallery />
          </div>
        </section>

        <TestimonialsSection
          title="What Bangalore homeowners say"
          subtitle="Real Google reviews from homeowners who chose Relicomp for home elevators: quality install, smooth ride, and support after handover."
          hideFooterCtas
          muted
        />

        {/* Process */}
        <section className="process">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">
                <span className="btn-dot">4</span>How it works
              </p>
              <h2>From Enquiry to Installation in 4 Simple Steps</h2>
            </div>
            <div className="steps">
              {PROCESS_STEPS.map((s) => (
                <div className="step" key={s.step}>
                  <div className="num">{s.step}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
            <div className="timeline-chip">
              ⏱ Typical delivery & installation: 4–6 weeks from order
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="areas">
          <div className="wrap">
            <p className="eyebrow">
              <span className="btn-dot">5</span>Service areas
            </p>
            <h2 style={{ marginBottom: 18 }}>
              Home Elevator Installation Across Bangalore
            </h2>
            <p>
              We install and service home elevators across{" "}
              <strong>
                Whitefield, Sarjapur Road, JP Nagar, Jayanagar, Banashankari,
                Yelahanka, Hebbal, RR Nagar, Vijayanagar, Electronic City, HSR
                Layout and Kanakapura Road
              </strong>{" "}
              and all of Karnataka through our Mysore, Hassan and Udupi teams.
              Wherever your home is, a Relicomp engineer is nearby.
            </p>
          </div>
        </section>

        {/* FAQ  -  final objections before convert CTA */}
        <section className="faq" id="faqs">
          <div className="wrap">
            <div className="sec-head center">
              <p className="eyebrow">
                <span className="btn-dot">6</span>FAQs
              </p>
              <h2>Still Deciding? Common Questions from Bangalore Homeowners</h2>
              <p className="lead">
                Answers that clear space, cost, retrofit and power-cut concerns
                before you book a free site visit.
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="faq-list"
              defaultValue="faq-0"
            >
              {homeElevatorBangaloreFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-[var(--line)] first:border-t"
                >
                  <AccordionTrigger
                    className="py-[22px] text-left text-[1.02rem] font-semibold text-[var(--ink)] hover:no-underline"
                    onClick={() =>
                      trackEvent("faq_open", {
                        question: faq.question.slice(0, 120),
                        slug: "home-elevators-bangalore",
                        page_type: "landing",
                      })
                    }
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-[22px] text-[0.96rem] leading-relaxed text-[var(--body)]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="faq-cta">
              <p>Questions answered? Get a free site visit and exact price.</p>
              <button
                type="button"
                className="btn btn-brass"
                onClick={() => scrollToLeadForm("faq_section")}
              >
                Book Free Site Visit
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final on-dark">
          <div className="wrap">
            <h2>Ready to Add a Lift to Your Home?</h2>
            <p>
              Book a free site visit. Our Bangalore engineer will assess your
              space and give you an exact quote.
            </p>
            <div className="btns">
              <button
                type="button"
                className="btn btn-brass"
                onClick={() => scrollToLeadForm("final_cta")}
              >
                Book Free Site Visit
              </button>
              <a
                className="btn btn-whatsapp"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                className="btn btn-outline-light"
                href={`tel:${brand.phoneTel}`}
                onClick={handleTelClick}
              >
                <Phone className="h-4 w-4" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} Relicomp Elevators Pvt. Ltd. · Made in
            Magadi, Bengaluru
          </span>
          <span>
            <a href={`tel:${brand.phoneTel}`} onClick={handleTelClick}>
              {PHONE_DISPLAY}
            </a>{" "}
            · Home Elevators · Bengaluru
          </span>
        </div>
      </footer>

      <LandingMobileStickyBar onGetPrice={scrollToLeadForm} />

      <LandingQuoteModal
        open={quoteModalOpen}
        onOpenChange={setQuoteModalOpen}
        source={quoteSource}
      />

      <LandingPromoModal
        open={promoModalOpen}
        onOpenChange={dismissPromo}
        onGetPrice={() => openQuoteModal("promo_modal")}
      />
    </div>
  );
};

export default HomeElevatorsBangalore;
