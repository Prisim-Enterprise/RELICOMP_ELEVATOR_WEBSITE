import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { FAQSection } from "@/components/content/FAQSection";
import { RelatedPages } from "@/components/content/RelatedPages";
import { QuoteCTA } from "@/components/content/QuoteCTA";
import { ImagePlaceholder } from "@/components/content/ImagePlaceholder";
import {
  PageHero,
  pageHeroBreadcrumbClass,
  pageHeroGlassClass,
} from "@/components/content/PageHero";
import { RichText } from "@/components/content/RichText";
import type { LocationPageContent, LocalProof } from "@/content/types";
import { getLocationTheme } from "@/content/images";
import { buildFaqJsonLd, buildLocalBusinessJsonLd } from "@/lib/seo/jsonld";
import { MapPin, Clock, Building2, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type LocationPageTemplateProps = {
  content: LocationPageContent;
};

function LocalProofSection({ proofs }: { proofs: LocalProof[] }) {
  if (!proofs?.length) return null;

  return (
    <section className="my-10" aria-labelledby="local-proof-heading">
      <h2
        id="local-proof-heading"
        className="mb-6 border-l-4 border-primary pl-4 text-2xl font-bold tracking-tight"
      >
        Local presence & proof
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {proofs.map((proof, i) => {
          if (proof.kind === "branch") {
            return (
              <li
                key={i}
                className="group flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Branch / office</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {proof.nap.streetAddress}
                    <br />
                    {proof.nap.addressLocality}
                    {proof.nap.postalCode
                      ? ` ${proof.nap.postalCode}`
                      : ""}
                    {proof.nap.telephone ? (
                      <>
                        <br />
                        Tel: {proof.nap.telephone}
                      </>
                    ) : null}
                  </p>
                </div>
              </li>
            );
          }
          if (proof.kind === "sla") {
            return (
              <li
                key={i}
                className="group flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Service response</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {proof.text}
                  </p>
                </div>
              </li>
            );
          }
          if (proof.kind === "project") {
            return (
              <li
                key={i}
                className="group flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">{proof.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {proof.summary}
                  </p>
                </div>
              </li>
            );
          }
          if (proof.kind === "faq") {
            return (
              <li
                key={i}
                className="group flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">{proof.question}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {proof.answer}
                  </p>
                </div>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </section>
  );
}

export function LocationPageTemplate({ content }: LocationPageTemplateProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: content.cityName, href: content.seo.canonicalPath },
  ];

  const quoteHref =
    content.cta?.href ??
    `/contact?topic=${encodeURIComponent(content.slug)}&city=${encodeURIComponent(content.cityName)}`;

  const faqLd = buildFaqJsonLd(content.faqs);
  const localLd = buildLocalBusinessJsonLd(content);
  const theme = getLocationTheme(content.slug);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <JsonLd data={localLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <main className="flex-1">
        <PageHero>
          <PageBreadcrumbs
            items={breadcrumbs}
            className={pageHeroBreadcrumbClass}
          />
          <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-2">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {content.cityName}
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
              {content.areaServed?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {content.areaServed.slice(0, 8).map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              )}
              <Button asChild size="lg" className="mt-8 rounded-full">
                <Link href={quoteHref}>
                  {content.cta?.buttonLabel ?? `Contact ${content.cityName}`}
                </Link>
              </Button>
            </div>
            <div className="min-w-0 space-y-3">
              <ImagePlaceholder
                label={`${content.cityName} project / map photo`}
                aspect="photo"
                src={theme?.hero ?? null}
                alt={`${content.cityName} home elevator project`}
                priority
                className={`${pageHeroGlassClass} border-white/15 bg-white/5`}
              />
              <div className="grid grid-cols-2 gap-3">
                <ImagePlaceholder
                  label="Branch / site"
                  aspect="video"
                  src={theme?.branch ?? null}
                  alt={`${content.cityName} Relicomp branch or manufacturing site`}
                  className={`${pageHeroGlassClass} border-white/15 bg-white/5`}
                />
                <ImagePlaceholder
                  label="Install photo"
                  aspect="video"
                  src={theme?.install ?? null}
                  alt={`${content.cityName} elevator installation`}
                  className={`${pageHeroGlassClass} border-white/15 bg-white/5`}
                />
              </div>
            </div>
          </div>
        </PageHero>

        <div className="container mx-auto max-w-6xl px-4 py-12 lg:py-16">
          <LocalProofSection proofs={content.localProof} />
          <ContentBlocks blocks={content.body} />
          <FAQSection
            faqs={content.faqs}
            slug={content.slug}
            pageType="location"
          />
          <RelatedPages links={content.related} fromSlug={content.slug} />
          <QuoteCTA
            heading={content.cta?.heading}
            body={content.cta?.body}
            buttonLabel={content.cta?.buttonLabel}
            href={quoteHref}
            pageType="location"
            slug={content.slug}
            variant="banner"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
