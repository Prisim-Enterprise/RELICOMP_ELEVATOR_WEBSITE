import type { Metadata } from "next";
import PrivacyPolicy from "@/views/PrivacyPolicy";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { buildWebPageJsonLd } from "@/lib/seo/jsonld";

/**
 * This page used to hand-roll its metadata, which cost it three things the rest
 * of the site has: the brand was written into the title and then appended again
 * by the root layout template ("... | Relicomp Elevators | Relicomp Elevators"),
 * there was no og:image, and there was no canonical. Routing it through the
 * shared builder fixes all three, exactly as /about and /contact were fixed in
 * the 2026-09-21 remediation. The title here omits the brand on purpose.
 */
export const metadata: Metadata = buildStaticPageMetadata({
  title: "Privacy Policy",
  description:
    "How Relicomp Elevators Pvt. Ltd. collects, uses and protects your personal information when you use this website or submit an enquiry.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          path: "/privacy-policy",
          name: "Privacy Policy",
          description:
            "How Relicomp Elevators collects, uses and protects your personal information.",
        })}
      />
      <PrivacyPolicy />
    </>
  );
}
