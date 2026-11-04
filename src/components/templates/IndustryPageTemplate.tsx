import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { FAQSection } from "@/components/content/FAQSection";
import { RelatedPages } from "@/components/content/RelatedPages";
import { QuoteCTA } from "@/components/content/QuoteCTA";
import { ImagePlaceholder } from "@/components/content/ImagePlaceholder";
import { HighlightCards } from "@/components/content/HighlightCards";
import {
  PageHero,
  pageHeroBreadcrumbClass,
  pageHeroGlassClass,
} from "@/components/content/PageHero";
import { RichText } from "@/components/content/RichText";
import type { IndustryPageContent, ServicePageContent } from "@/content/types";
import { getIndustryTheme } from "@/content/images";
import { buildFaqJsonLd, buildServiceJsonLd } from "@/lib/seo/jsonld";
import { Building2, Hospital, Hotel, Layers, Warehouse } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type IndustryPageTemplateProps = {
  content: IndustryPageContent;
};

function toServiceShape(content: IndustryPageContent): ServicePageContent {
  return {
    slug: content.slug,
    kind: "service",
    h1: content.h1,
    intro: content.intro,
    body: content.body,
    faqs: content.faqs,
    related: content.related,
    cta: content.cta,
    seo: content.seo,
    wordCountTarget: content.wordCountTarget,
    primaryKeyword: content.primaryKeyword,
  };
}

const industryMeta: Record<
  string,
  { icon: typeof Building2; accent: string; label: string }
> = {
  "apartments-residential": {
    icon: Layers,
    accent: "from-rose-600/20 to-transparent",
    label: "Residential",
  },
  "commercial-offices": {
    icon: Building2,
    accent: "from-sky-600/20 to-transparent",
    label: "Commercial",
  },
  hospitals: {
    icon: Hospital,
    accent: "from-emerald-600/20 to-transparent",
    label: "Healthcare",
  },
  "hotels-restaurants": {
    icon: Hotel,
    accent: "from-amber-600/20 to-transparent",
    label: "Hospitality",
  },
  "warehouses-industrial": {
    icon: Warehouse,
    accent: "from-slate-600/25 to-transparent",
    label: "Industrial",
  },
};

export function IndustryPageTemplate({ content }: IndustryPageTemplateProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: content.h1, href: content.seo.canonicalPath },
  ];

  const quoteHref =
    content.cta?.href ??
    `/contact?topic=${encodeURIComponent(content.slug)}`;

  const faqLd = buildFaqJsonLd(content.faqs);
  const serviceLd = buildServiceJsonLd(toServiceShape(content));
  const meta = industryMeta[content.slug] ?? {
    icon: Building2,
    accent: "from-primary/20 to-transparent",
    label: "Industry",
  };
  const Icon = meta.icon;
  const theme = getIndustryTheme(content.slug);

  const highlights = [
    {
      title: "Vertical-first planning",
      body: "We start from how your building actually moves people or materials, not a generic catalogue.",
    },
    {
      title: "Right product owner",
      body: "Clear links to the product pages that own commercial specs and keywords.",
    },
    {
      title: "Lifecycle support",
      body: "Installation, optional AMC, and modernization paths for long-lived assets.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <JsonLd data={serviceLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <main className="flex-1">
        <PageHero>
          <PageBreadcrumbs
            items={breadcrumbs}
            className={pageHeroBreadcrumbClass}
          />
          <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-2">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <Icon className="h-3.5 w-3.5 text-primary" />
                Industry · {meta.label}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight break-words sm:text-4xl lg:text-5xl">
                {content.h1}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                <RichText
                  text={content.intro}
                  linkClassName="text-white underline decoration-primary underline-offset-4 hover:decoration-white"
                />
              </p>
              <Button asChild size="lg" className="mt-8 rounded-full">
                <Link href={quoteHref}>
                  {content.cta?.buttonLabel ?? "Discuss your project"}
                </Link>
              </Button>
            </div>
            <div className="grid min-w-0 gap-3 sm:grid-cols-2">
              <ImagePlaceholder
                label={`${meta.label} use-case photo`}
                aspect="photo"
                src={theme?.hero ?? null}
                alt={`${content.h1} lobby with a Relicomp passenger elevator`}
                priority
                className={`sm:col-span-2 ${pageHeroGlassClass} border-white/15 bg-white/5`}
              />
              <ImagePlaceholder
                label="Lobby / core"
                aspect="video"
                src={theme?.lobby ?? null}
                alt={`${content.h1}: elevator lobby and core`}
                className={`${pageHeroGlassClass} border-white/15 bg-white/5`}
              />
              <ImagePlaceholder
                label="Service flow"
                aspect="video"
                src={theme?.service ?? null}
                alt={`${content.h1}: service elevator and materials flow`}
                className={`${pageHeroGlassClass} border-white/15 bg-white/5`}
              />
            </div>
          </div>
        </PageHero>

        <section className="border-b border-border bg-muted/30 py-10">
          <div className="container mx-auto max-w-6xl px-4">
            <HighlightCards items={highlights} />
          </div>
        </section>

        <div className="container mx-auto max-w-3xl px-4 py-12 lg:py-16">
          <ContentBlocks blocks={content.body} />
          <FAQSection
            faqs={content.faqs}
            slug={content.slug}
            pageType="industry"
          />
          <RelatedPages
            links={content.related}
            title="Recommended products & services"
            fromSlug={content.slug}
          />
          <QuoteCTA
            heading={content.cta?.heading}
            body={content.cta?.body}
            buttonLabel={content.cta?.buttonLabel}
            href={quoteHref}
            pageType="industry"
            slug={content.slug}
            variant="banner"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
