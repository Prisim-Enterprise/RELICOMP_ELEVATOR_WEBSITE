import type { Metadata } from "next";
import TermsOfService from "@/views/TermsOfService";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { buildWebPageJsonLd } from "@/lib/seo/jsonld";

/**
 * Routed through the shared metadata builder for the same reason as
 * /privacy-policy: the hand-rolled version doubled the brand suffix, emitted no
 * og:image and declared no canonical. The title omits the brand on purpose -
 * the root layout template appends it exactly once.
 */
export const metadata: Metadata = buildStaticPageMetadata({
  title: "Terms of Service",
  description:
    "Terms governing use of the Relicomp Elevators website and services, including products, intellectual property and governing law.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          path: "/terms-of-service",
          name: "Terms of Service",
          description:
            "Terms governing the use of the Relicomp Elevators website and services.",
        })}
      />
      <TermsOfService />
    </>
  );
}
