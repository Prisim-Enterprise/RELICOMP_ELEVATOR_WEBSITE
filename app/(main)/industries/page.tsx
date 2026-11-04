import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { ImagePlaceholder } from "@/components/content/ImagePlaceholder";
import {
  PageHero,
  pageHeroBreadcrumbClass,
} from "@/components/content/PageHero";
import { ComingSoonPage } from "@/components/content/ComingSoonPage";
import { PublishAwareLink } from "@/components/content/PublishAwareLink";
import { getAllIndustries } from "@/content/industries";
import { getIndustryTheme } from "@/content/images";
import { isPublished } from "@/content/publish";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HubSeoSection } from "@/components/content/HubSeoSection";
import { industriesHubSeo } from "@/content/hubs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqJsonLd } from "@/lib/seo/jsonld";

export function generateMetadata(): Metadata {
  if (!isPublished("/industries")) {
    return buildComingSoonMetadata("Elevator Solutions by Industry");
  }
  return buildStaticPageMetadata({
    title: "Elevator Solutions by Industry",
    description:
      "Elevators for apartments, offices, hospitals, hotels, and warehouses. Relicomp industry solutions with product links, planning notes, and free consultation.",
    path: "/industries",
  });
}

export default function IndustriesHubPage() {
  if (!isPublished("/industries")) {
    return (
      <ComingSoonPage
        title="Solutions by industry"
        module="industries"
        path="/industries"
      />
    );
  }

  const items = getAllIndustries();
  const faqLd = buildFaqJsonLd(industriesHubSeo.faqs);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero>
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Industries", href: "/industries" },
            ]}
            className={pageHeroBreadcrumbClass}
          />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Industries
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Solutions by industry
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Vertical-specific elevator planning for apartments, offices,
            hospitals, hotels, and industrial sites, with clear links to product
            pages that own commercial keywords.
          </p>
        </PageHero>

        <section className="container mx-auto max-w-6xl px-4 py-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((industry) => {
              const live = isPublished(industry.seo.canonicalPath);
              const theme = getIndustryTheme(industry.slug);
              return (
                <li key={industry.slug}>
                  <PublishAwareLink
                    href={industry.seo.canonicalPath}
                    className={cn(
                      "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300",
                      live &&
                        "hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                    )}
                  >
                    <ImagePlaceholder
                      label="Industry photo"
                      aspect="video"
                      src={theme?.hero ?? null}
                      alt={`${industry.h1} photo`}
                      className="rounded-none border-0 border-b"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="text-lg font-semibold leading-snug group-hover:text-primary">
                        {industry.h1}
                      </h2>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                        {industry.intro}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        {live ? "View industry" : "Coming soon"}
                        {live ? (
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        ) : null}
                      </span>
                    </div>
                  </PublishAwareLink>
                </li>
              );
            })}
          </ul>
        </section>

        <HubSeoSection content={industriesHubSeo} slug="industries-hub" muted />
      </main>
      <Footer />
      {faqLd ? <JsonLd data={faqLd} /> : null}
    </div>
  );
}
