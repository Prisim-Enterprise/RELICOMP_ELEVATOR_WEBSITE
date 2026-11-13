import type { Metadata } from "next";
import { Suspense } from "react";
import Contact from "@/views/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { brand } from "@/content/site";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { contactFaqs } from "@/content/contactFaqs";
import {
  buildContactPageJsonLd,
  buildFaqJsonLd,
  buildHeadOfficeLocalBusinessJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo/jsonld";

export const dynamic = "force-dynamic";

// Title omits the brand: the root layout template appends "| Relicomp Elevators".
export const metadata: Metadata = buildStaticPageMetadata({
  title: "Contact Us",
  description: `Talk to Relicomp Elevators. Head office in Bangalore, branches in Mysuru & Jigani. Free site visit and expert advice. Call ${brand.phoneDisplay}.`,
  path: "/contact",
});

export default function ContactPage() {
  // Same faqs object the view renders, so the markup cannot drift from the page.
  const faqLd = buildFaqJsonLd(contactFaqs);

  return (
    <>
      <JsonLd data={buildContactPageJsonLd()} />
      <JsonLd data={buildHeadOfficeLocalBusinessJsonLd()} />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <JsonLd
        data={buildWebPageJsonLd({
          path: "/contact",
          name: "Contact Relicomp Elevators",
          description:
            "Phone, WhatsApp, email and head-office address for Relicomp Elevators, plus branch locations in Mysuru and Jigani.",
          speakableSelectors: ["h1", ".speakable-contact", ".faq-answer"],
        })}
      />
      {/* BreadcrumbList is emitted by <PageBreadcrumbs> inside the Contact view. */}
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-muted">
            <p className="text-muted-foreground">Loading contact form…</p>
          </div>
        }
      >
        <Contact />
      </Suspense>
    </>
  );
}
