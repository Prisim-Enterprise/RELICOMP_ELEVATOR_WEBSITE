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
import { getAllLocations } from "@/content/locations";
import { getLocationTheme } from "@/content/images";
import { isPublished } from "@/content/publish";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { ArrowRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { HubSeoSection } from "@/components/content/HubSeoSection";
import { locationsHubSeo } from "@/content/hubs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqJsonLd, buildWebPageJsonLd } from "@/lib/seo/jsonld";

export function generateMetadata(): Metadata {
  if (!isPublished("/locations")) {
    return buildComingSoonMetadata("Elevator Service Locations");
  }
  // Title omits the brand: the root layout template appends "| Relicomp Elevators".
  return buildStaticPageMetadata({
    title: "Service Locations in South India",
    description:
      "Relicomp elevator service across Karnataka & Tamil Nadu: Bangalore, Mysore and regional cities for home lifts, installation and AMC.",
    path: "/locations",
  });
}

export default function LocationsHubPage() {
  if (!isPublished("/locations")) {
    return (
      <ComingSoonPage
        title="Service locations"
        module="locations"
        path="/locations"
      />
    );
  }

  const items = getAllLocations();
  const faqLd = buildFaqJsonLd(locationsHubSeo.faqs);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero>
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Locations", href: "/locations" },
            ]}
            className={pageHeroBreadcrumbClass}
          />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Coverage
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Elevator service locations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Cities we actively serve across Karnataka and Tamil Nadu. With real
            branch context where we have offices, not cloned templates.
          </p>
        </PageHero>

        <section className="container mx-auto max-w-6xl px-4 py-12">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((loc) => {
              const live = isPublished(loc.seo.canonicalPath);
              const theme = getLocationTheme(loc.slug);
              return (
                <li key={loc.slug}>
                  <PublishAwareLink
                    href={loc.seo.canonicalPath}
                    className={cn(
                      "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300",
                      live &&
                        "hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                    )}
                  >
                    <ImagePlaceholder
                      label={`${loc.cityName} photo`}
                      aspect="video"
                      src={theme?.hero ?? null}
                      alt={`${loc.cityName} Relicomp elevator service location`}
                      className="rounded-none border-0 border-b"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-primary">
                        <MapPin className="h-3.5 w-3.5" />
                        {live
                          ? loc.hasVerifiedBranch
                            ? "Branch"
                            : "Service area"
                          : "Coming soon"}
                      </span>
                      <h2 className="mt-2 text-xl font-semibold group-hover:text-primary">
                        {loc.cityName}
                      </h2>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                        {loc.intro}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        {live ? "View location" : "Coming soon"}
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

        <HubSeoSection content={locationsHubSeo} slug="locations-hub" muted />
      </main>
      <Footer />
      <JsonLd
        data={buildWebPageJsonLd({
          path: "/locations",
          name: "Elevator Service Locations",
          description:
            "Where Relicomp Elevators installs and services lifts across Karnataka and Tamil Nadu, including Bangalore and Mysore.",
          speakableSelectors: ["h1", ".speakable-intro", ".faq-answer"],
        })}
      />
      {faqLd ? <JsonLd data={faqLd} /> : null}
    </div>
  );
}
