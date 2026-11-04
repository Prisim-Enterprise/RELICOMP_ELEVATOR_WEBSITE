import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { FAQSection } from "@/components/content/FAQSection";
import { RelatedPages } from "@/components/content/RelatedPages";
import { QuoteCTA } from "@/components/content/QuoteCTA";
import { InteractiveGallery } from "@/components/content/InteractiveGallery";
import {
  PageHero,
  pageHeroBreadcrumbClass,
  pageHeroOutlineButtonClass,
} from "@/components/content/PageHero";
import { RichText } from "@/components/content/RichText";
import { ServiceProcessStepper } from "@/components/content/ServiceProcessStepper";
import { StickyMobileCTA } from "@/components/content/StickyMobileCTA";
import type { ServicePageContent } from "@/content/types";
import { getServiceGallerySlides } from "@/content/images";
import { buildFaqJsonLd, buildServiceJsonLd } from "@/lib/seo/jsonld";
import { installationSteps } from "@/content/installationSteps";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  MapPinned,
  Phone,
  Wrench,
} from "lucide-react";

type ServicePageTemplateProps = {
  content: ServicePageContent;
};

const serviceHighlights: Record<
  string,
  { title: string; body: string }[]
> = {
  "elevator-installation": [
    { title: "Survey first", body: "We size the job before quoting labour." },
    { title: "Clear scope", body: "Equipment vs civil vs electrical, written." },
    { title: "Handover pack", body: "Testing, docs, and optional AMC next." },
  ],
  "lift-amc-maintenance": [
    { title: "Plan tiers", body: "Essential to comprehensive visit models." },
    { title: "Local response", body: "KA & TN routes with real SLAs." },
    { title: "Parts clarity", body: "Know what is included vs chargeable." },
  ],
  "lift-modernization": [
    { title: "Assess first", body: "Modernize vs replace, honestly scoped." },
    { title: "Less downtime", body: "Phased work for occupied buildings." },
    { title: "Safety focus", body: "Controllers, doors, and critical systems." },
  ],
  "custom-elevator-manufacturing": [
    { title: "Magadi factory", body: "Custom cabins near Bengaluru." },
    { title: "One owner", body: "Build, install, and service under Relicomp." },
    { title: "Tight shafts", body: "Dimensions tuned to real architecture." },
  ],
};

export function ServicePageTemplate({ content }: ServicePageTemplateProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: content.h1, href: content.seo.canonicalPath },
  ];

  const quoteHref =
    content.cta?.href ??
    `/contact?topic=${encodeURIComponent(content.slug)}`;

  const faqLd = buildFaqJsonLd(content.faqs);
  const serviceLd = buildServiceJsonLd(content);

  const heroSrc =
    content.heroImage == null
      ? null
      : typeof content.heroImage === "string"
        ? content.heroImage
        : content.heroImage;

  const gallerySlides = getServiceGallerySlides(content.slug, {
    hero: heroSrc,
    heroAlt: content.heroAlt ?? content.h1,
  });

  const highlights =
    serviceHighlights[content.slug] ??
    [
      { title: "Scoped work", body: "Clear inclusions before you commit." },
      { title: "Regional crews", body: "Karnataka & Tamil Nadu coverage." },
      { title: "One brand", body: "Manufacturer-linked service path." },
    ];

  const showInstallStepper = content.slug === "elevator-installation";

  return (
    <div className="min-h-screen flex flex-col bg-background pb-20 lg:pb-0">
      <Header />
      <JsonLd data={serviceLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <main className="flex-1">
        <PageHero fillViewport innerClassName="pb-10 pt-4">
          <PageBreadcrumbs
            items={breadcrumbs}
            className={pageHeroBreadcrumbClass}
          />

          <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <Wrench className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">
                  Service · {content.primaryKeyword}
                </span>
              </div>
              <h1 className="mt-4 text-2xl font-extrabold tracking-tight break-words sm:text-3xl md:text-4xl lg:text-5xl">
                {content.h1}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                <RichText
                  text={content.intro}
                  linkClassName="text-white underline decoration-primary underline-offset-4 hover:decoration-white"
                />
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90">
                  <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />{" "}
                  Manufacturer-backed
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90">
                  <MapPinned className="h-4 w-4 shrink-0 text-primary" /> KA & TN
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90">
                  <Clock3 className="h-4 w-4 shrink-0 text-primary" /> Survey-led
                </span>
              </div>

              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full px-6 font-semibold shadow-lg sm:w-auto sm:px-8"
                >
                  <Link href={quoteHref}>
                    {content.cta?.buttonLabel ?? "Book this service"}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="heroOutline"
                  className={`w-full px-6 sm:w-auto sm:px-8 ${pageHeroOutlineButtonClass}`}
                >
                  <a href="tel:08065481856">
                    <Phone className="mr-2 h-4 w-4" />
                    080-6548 1856
                  </a>
                </Button>
              </div>
            </div>

            <InteractiveGallery
              slides={gallerySlides}
              className="min-w-0 w-full"
            />
          </div>
        </PageHero>

        {/* Interactive highlight cards */}
        <section className="border-b border-border bg-muted/30 py-8">
          <div className="container mx-auto max-w-5xl px-4">
            <ul className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <li
                  key={item.title}
                  className="group cursor-default rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <span className="text-xs font-bold text-primary">
                    0{i + 1}
                  </span>
                  <h2 className="mt-1 text-lg font-bold">{item.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="container mx-auto max-w-5xl px-4 py-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="min-w-0">
              {showInstallStepper ? (
                <ServiceProcessStepper
                  steps={installationSteps}
                  title="Interactive installation steps"
                  slug={content.slug}
                />
              ) : null}

              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <ContentBlocks blocks={content.body} />
              </div>

              <div className="mt-10">
                <FAQSection
                  faqs={content.faqs}
                  slug={content.slug}
                  pageType="service"
                />
              </div>

              <RelatedPages
                links={content.related}
                fromSlug={content.slug}
                title="Related services & products"
              />
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="space-y-4 rounded-3xl border-2 border-primary/20 bg-card p-5 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Book now
                </p>
                <h2 className="text-xl font-bold leading-snug">
                  {content.cta?.heading ?? "Talk to Relicomp"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {content.cta?.body ??
                    "Share elevator type, city, and timeline for a clear proposal."}
                </p>
                <Button asChild className="w-full rounded-full" size="lg">
                  <Link href={quoteHref}>
                    {content.cta?.buttonLabel ?? "Request quote"}
                  </Link>
                </Button>
                <a
                  href="tel:08065481856"
                  className="flex items-center justify-center gap-2 text-sm font-semibold hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  080-6548 1856
                </a>
              </div>
              <QuoteCTA
                heading="Prefer email first?"
                body="Use the contact form with your service topic pre-filled."
                buttonLabel="Open contact form"
                href={quoteHref}
                pageType="service"
                slug={content.slug}
                ctaId="service_side_form"
                variant="sidebar"
                className="mt-4"
              />
            </aside>
          </div>
        </div>
      </main>

      <StickyMobileCTA
        href={quoteHref}
        pageType="service"
        slug={content.slug}
        label={content.cta?.buttonLabel ?? "Book this service"}
      />
      <Footer />
    </div>
  );
}
