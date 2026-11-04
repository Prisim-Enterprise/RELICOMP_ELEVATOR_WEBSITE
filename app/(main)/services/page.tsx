import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { ImagePlaceholder } from "@/components/content/ImagePlaceholder";
import {
  PageHero,
  pageHeroBreadcrumbClass,
  pageHeroGlassClass,
} from "@/components/content/PageHero";
import { ServiceHubCards } from "@/components/content/ServiceHubCards";
import { ComingSoonPage } from "@/components/content/ComingSoonPage";
import { PublishAwareLink } from "@/components/content/PublishAwareLink";
import { getAllServices } from "@/content/services";
import { serviceThemeImages } from "@/content/images";
import { isPublished } from "@/content/publish";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { Button } from "@/components/ui/button";
import { HubSeoSection } from "@/components/content/HubSeoSection";
import { servicesHubSeo } from "@/content/hubs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqJsonLd, buildWebPageJsonLd } from "@/lib/seo/jsonld";
import { QuoteCta } from "@/components/quote/QuoteCta";

export function generateMetadata(): Metadata {
  if (!isPublished("/services")) {
    return buildComingSoonMetadata("Elevator Services");
  }
  // Title omits the brand: the root layout template appends "| Relicomp Elevators".
  return buildStaticPageMetadata({
    title: "Elevator Services & Lift AMC",
    description:
      "Relicomp elevator services: installation, custom manufacturing, lift AMC and modernization across Bangalore, Karnataka & Tamil Nadu. Free survey.",
    path: "/services",
  });
}

export default function ServicesHubPage() {
  if (!isPublished("/services")) {
    return (
      <ComingSoonPage
        title="Elevator Services"
        module="services"
        path="/services"
      />
    );
  }

  const items = getAllServices().map((s) => ({
    slug: s.slug,
    href: s.seo.canonicalPath,
    title: s.h1,
    keyword: s.primaryKeyword,
    intro: s.intro,
  }));
  const faqLd = buildFaqJsonLd(servicesHubSeo.faqs);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero>
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
            ]}
            className={pageHeroBreadcrumbClass}
          />
          <div className="grid w-full min-w-0 items-end gap-8 lg:grid-cols-2">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Interactive services
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight break-words sm:text-4xl md:text-5xl">
                Lifecycle support that moves
              </h1>
              <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">
                Select a service on the left, preview details, then open the
                full interactive page with steppers, galleries, and booking.
              </p>
              <QuoteCta
                source="services_hub_book_call"
                size="lg"
                className="mt-8 w-full px-6 font-semibold shadow-lg sm:w-auto sm:px-8"
              >
                Book a service call
              </QuoteCta>
            </div>
            <div className="grid min-w-0 grid-cols-2 gap-3">
              <ImagePlaceholder
                label="Field team"
                aspect="square"
                src={serviceThemeImages["elevator-installation"].team}
                alt="Relicomp elevator installation field team"
                className={`${pageHeroGlassClass} border-white/15 bg-white/5`}
              />
              <ImagePlaceholder
                label="On site"
                aspect="square"
                src={serviceThemeImages["elevator-installation"].process}
                alt="On-site Relicomp elevator installation work"
                className={`mt-6 ${pageHeroGlassClass} border-white/15 bg-white/5`}
              />
            </div>
          </div>
        </PageHero>

        <section className="container mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
            Choose a service
          </h2>
          <ServiceHubCards services={items} />
        </section>

        <HubSeoSection content={servicesHubSeo} slug="services-hub" muted />

        <section className="border-t border-border bg-muted/40 py-12">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-bold">Looking for products?</h2>
            <p className="mt-2 text-muted-foreground">
              Filter elevators by home, commercial, goods, or design.
            </p>
            <Button asChild className="mt-6 rounded-full">
              <PublishAwareLink href="/products">Browse products</PublishAwareLink>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={buildWebPageJsonLd({
          path: "/services",
          name: "Elevator Services & Lift AMC",
          description:
            "Installation, custom manufacturing, lift AMC and modernization delivered by Relicomp Elevators across Karnataka and Tamil Nadu.",
          speakableSelectors: ["h1", ".speakable-intro", ".faq-answer"],
        })}
      />
      {faqLd ? <JsonLd data={faqLd} /> : null}
    </div>
  );
}
