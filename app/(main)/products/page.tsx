import type { Metadata } from "next";
import { ProductsHub } from "@/components/templates/ProductsHub";
import { LegacyHashRedirect } from "@/components/content/LegacyHashRedirect";
import { ComingSoonPage } from "@/components/content/ComingSoonPage";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { isPublished } from "@/content/publish";
import { JsonLd } from "@/components/seo/JsonLd";
import { productsHubSeo } from "@/content/hubs";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { buildFaqJsonLd, buildWebPageJsonLd } from "@/lib/seo/jsonld";

export function generateMetadata(): Metadata {
  if (!isPublished("/products")) {
    return buildComingSoonMetadata("Elevator Products & Services");
  }
  // Title omits the brand: the root layout template appends "| Relicomp Elevators".
  return buildStaticPageMetadata({
    title: "Elevator Products & Lift Types",
    description:
      "Home, hydraulic, MRL, traction, goods and capsule elevators from a Bangalore manufacturer serving Karnataka & Tamil Nadu. Free site survey.",
    path: "/products",
  });
}

export default function ProductsPage() {
  if (!isPublished("/products")) {
    return (
      <ComingSoonPage
        title="Elevator Products & Services"
        module="products"
        path="/products"
      />
    );
  }

  const faqLd = buildFaqJsonLd(productsHubSeo.faqs);

  return (
    <>
      <LegacyHashRedirect />
      <JsonLd
        data={buildWebPageJsonLd({
          path: "/products",
          name: "Elevator Products & Lift Types",
          description:
            "Home, hydraulic, MRL, traction, goods and capsule elevators built and installed by Relicomp Elevators.",
          speakableSelectors: ["h1", ".speakable-intro"],
        })}
      />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <ProductsHub />
    </>
  );
}
