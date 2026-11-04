"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { ImagePlaceholder } from "@/components/content/ImagePlaceholder";
import {
  PageHero,
  pageHeroBreadcrumbClass,
  pageHeroGlassClass,
  pageHeroOutlineButtonClass,
} from "@/components/content/PageHero";
import {
  ProductHubFilters,
  type HubProductCard,
} from "@/components/content/ProductHubFilters";
import { Button } from "@/components/ui/button";
import { products } from "@/content/products";
import { productThemeImages } from "@/content/images";
import { getAllServices } from "@/content/services";
import { isPublished } from "@/content/publish";
import { PublishAwareLink } from "@/components/content/PublishAwareLink";
import { HubSeoSection } from "@/components/content/HubSeoSection";
import { WorkProcessGrid } from "@/components/content/WorkProcessGrid";
import { productsHubSeo } from "@/content/hubs";
import { QuoteCta } from "@/components/quote/QuoteCta";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";
import {
  WhatsAppCta,
  whatsappMessageFor,
} from "@/components/quote/WhatsAppCta";
import {
  ArrowRight,
  Factory,
  RefreshCw,
  Settings,
  Wrench,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

const productOrder = [
  "home-elevators",
  "hydraulic-elevators",
  "mrl-elevators",
  "traction-elevators",
  "goods-lifts-dumbwaiters",
  "capsule-glass-elevators",
] as const;

const categories: Record<string, HubProductCard["category"]> = {
  "home-elevators": "home",
  "hydraulic-elevators": "home",
  "mrl-elevators": "commercial",
  "traction-elevators": "commercial",
  "goods-lifts-dumbwaiters": "goods",
  "capsule-glass-elevators": "design",
};

const serviceIcons = {
  "elevator-installation": Settings,
  "lift-amc-maintenance": Wrench,
  "lift-modernization": RefreshCw,
  "custom-elevator-manufacturing": Factory,
} as const;

function asSrc(
  image: StaticImageData | string | undefined
): StaticImageData | string | null {
  return image ?? null;
}

export function ProductsHub() {
  const { openQuoteModal } = useQuoteModal();
  const installationLive = isPublished("/services/elevator-installation");
  const servicesHubLive = isPublished("/services");

  const hubProducts: HubProductCard[] = productOrder
    .map((slug) => {
      const p = products[slug];
      if (!p) return null;
      return {
        slug: p.slug,
        href: p.seo.canonicalPath,
        title: p.h1,
        keyword: p.primaryKeyword,
        intro: p.intro,
        image: asSrc(
          typeof p.heroImage === "string" ? p.heroImage : p.heroImage
        ),
        imageAlt: p.heroAlt,
        category: categories[slug] ?? "commercial",
      } satisfies HubProductCard;
    })
    .filter(Boolean) as HubProductCard[];

  const services = getAllServices();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHero innerClassName="pb-14">
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
            ]}
            className={pageHeroBreadcrumbClass}
          />
          <div className="grid w-full min-w-0 items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Interactive catalog
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Find the right elevator
              </h1>
              <p className="mt-4 max-w-xl text-lg text-white/75">
                Filter by use case, explore product pages with galleries and
                tabs, then request a site survey.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <QuoteCta source="products_hub_hero" size="lg">
                  Get free quote
                </QuoteCta>
                <Button
                  asChild
                  size="lg"
                  variant="heroOutline"
                  className={pageHeroOutlineButtonClass}
                >
                  <a href="#product-grid">Browse & filter</a>
                </Button>
              </div>
            </div>
            <div className="grid min-w-0 grid-cols-2 gap-3">
              <ImagePlaceholder
                label="Cabin"
                aspect="square"
                src={productThemeImages["home-elevators"].cabin}
                alt="Home elevator cabin interior"
                className={`${pageHeroGlassClass} border-white/15 bg-white/5`}
              />
              <ImagePlaceholder
                label="Install"
                aspect="square"
                src={productThemeImages["home-elevators"].install}
                alt="On-site home elevator installation"
                className={`mt-8 ${pageHeroGlassClass} border-white/15 bg-white/5`}
              />
            </div>
          </div>
        </PageHero>

        <section
          id="product-grid"
          className="scroll-mt-24 border-b border-border py-12 lg:py-16"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
              Products
            </h2>
            <p className="mb-8 text-muted-foreground">
              Tap a filter, then open a product for interactive specs and gallery.
            </p>
            <ProductHubFilters products={hubProducts} />
          </div>
        </section>

        <section
          id="installation-process"
          className="scroll-mt-24 border-b border-border bg-muted/40 py-12"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                  How we deliver
                </p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Work process at a glance
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Staged material delivery, execution, QC, and handover.
                  Timelines are in working days and depend on stage payments and
                  site clearance.
                  {installationLive
                    ? " Full detail on the installation service page."
                    : " Request a free quote for a project-specific schedule."}
                </p>
              </div>
              {installationLive ? (
                <PublishAwareLink
                  href="/services/elevator-installation"
                  className="inline-flex h-10 items-center justify-center gap-1 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Open installation service
                  <ArrowRight className="h-4 w-4" />
                </PublishAwareLink>
              ) : (
                <QuoteCta
                  source="products_hub_work_process"
                  size="default"
                  className="h-10 px-4 text-sm"
                >
                  Get Quote
                  <ArrowRight className="ml-1 h-4 w-4" />
                </QuoteCta>
              )}
            </div>

            <WorkProcessGrid />
          </div>
        </section>

        <section id="services" className="scroll-mt-24 py-12 lg:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Need service instead?
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Interactive service pages for install, AMC, modernization, manufacturing.
                </p>
              </div>
              {servicesHubLive ? (
                <PublishAwareLink
                  href="/services"
                  className="text-sm font-bold text-primary hover:underline"
                >
                  All services →
                </PublishAwareLink>
              ) : (
                <button
                  type="button"
                  className="text-sm font-bold text-primary hover:underline"
                  onClick={() => openQuoteModal("products_hub_all_services")}
                >
                  Get Quote →
                </button>
              )}
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => {
                const Icon =
                  serviceIcons[service.slug as keyof typeof serviceIcons] ??
                  Wrench;
                const live = isPublished(service.seo.canonicalPath);
                const cardClass = cn(
                  "group flex h-full flex-col rounded-2xl border border-border bg-gradient-to-b from-card to-muted/40 p-5 transition-all text-left w-full",
                  "hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                );

                if (live) {
                  return (
                    <li key={service.slug}>
                      <PublishAwareLink
                        href={service.seo.canonicalPath}
                        className={cardClass}
                      >
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold leading-snug group-hover:text-primary">
                          {service.h1}
                        </h3>
                        <p className="mt-2 flex-1 text-xs text-muted-foreground line-clamp-3">
                          {service.intro}
                        </p>
                      </PublishAwareLink>
                    </li>
                  );
                }

                return (
                  <li key={service.slug}>
                    <button
                      type="button"
                      className={cardClass}
                      onClick={() =>
                        openQuoteModal(`products_hub_service:${service.slug}`)
                      }
                    >
                      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold leading-snug group-hover:text-primary">
                        {service.h1}
                      </h3>
                      <p className="mt-2 flex-1 text-xs text-muted-foreground line-clamp-3">
                        {service.intro}
                      </p>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-primary">
                        Get Quote
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <HubSeoSection content={productsHubSeo} slug="products-hub" muted />

        <section className="bg-primary py-14 text-primary-foreground">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-extrabold">Ready to specify?</h2>
            <p className="mt-3 text-primary-foreground/90">
              Get a survey-led recommendation for your building.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <QuoteCta source="products_hub_final" size="lg" variant="secondary">
                Request a quote
              </QuoteCta>
              <WhatsAppCta
                source="products_hub_final_whatsapp"
                message={whatsappMessageFor("products_hub")}
                size="lg"
                variant="heroOutline"
              >
                Chat on WhatsApp
              </WhatsAppCta>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
