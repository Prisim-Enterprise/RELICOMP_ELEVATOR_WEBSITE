import type { Metadata } from "next";
import Index from "@/views/Index";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeHubSeo } from "@/content/hubs";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import {
  buildFaqJsonLd,
  buildHeadOfficeLocalBusinessJsonLd,
  buildOrganizationJsonLd,
  buildReviewsJsonLd,
  buildWebPageJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/seo/jsonld";

// Title omits the brand: the root layout template appends "| Relicomp Elevators".
export const metadata: Metadata = buildStaticPageMetadata({
  title: "Elevator Company in Bangalore & Mysore",
  description:
    "Elevator manufacturer in Bangalore & Mysore. Home lifts, MRL, traction, hydraulic and goods lifts. 16+ years, 600+ installs. Free site survey.",
  path: "/",
});

export default function HomePage() {
  const faqLd = buildFaqJsonLd(homeHubSeo.faqs);

  return (
    <>
      <JsonLd data={buildOrganizationJsonLd()} />
      <JsonLd data={buildWebSiteJsonLd()} />
      <JsonLd data={buildHeadOfficeLocalBusinessJsonLd()} />
      <JsonLd
        data={buildWebPageJsonLd({
          path: "/",
          name: "Elevator Company in Bangalore & Mysore",
          description:
            "Manufacturer-led elevators for homes, commercial buildings and industry across Karnataka and Tamil Nadu.",
          speakableSelectors: ["h1", ".speakable-intro", ".faq-answer"],
        })}
      />
      {buildReviewsJsonLd().map((review, i) => (
        <JsonLd key={`review-${i}`} data={review} />
      ))}
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <Index />
    </>
  );
}
