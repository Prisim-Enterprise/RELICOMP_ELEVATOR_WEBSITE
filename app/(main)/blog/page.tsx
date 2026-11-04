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
import { getAllBlogPosts } from "@/content/blog";
import { isPublished } from "@/content/publish";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { ArrowRight, Clock } from "lucide-react";
import { HubSeoSection } from "@/components/content/HubSeoSection";
import { blogHubSeo } from "@/content/hubs";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqJsonLd } from "@/lib/seo/jsonld";

export function generateMetadata(): Metadata {
  if (!isPublished("/blog")) {
    return buildComingSoonMetadata("Elevator Guides & Resources");
  }
  return buildStaticPageMetadata({
    title: "Elevator Guides: Price, Size, AMC & Technology",
    description:
      "Practical elevator guides on home lift price, sizes, installation cost, AMC charges, hydraulic vs traction, and MRL technology from Relicomp Elevators, Bengaluru.",
    path: "/blog",
  });
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function BlogIndexPage() {
  if (!isPublished("/blog")) {
    return (
      <ComingSoonPage
        title="Elevator guides & resources"
        module="blog"
        path="/blog"
      />
    );
  }

  const posts = getAllBlogPosts().sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const faqLd = buildFaqJsonLd(blogHubSeo.faqs);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero>
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
            ]}
            className={pageHeroBreadcrumbClass}
          />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Resources
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Elevator guides & resources
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Practical planning notes on home lift price, sizing, installation
            cost, AMC, and technology from a manufacturer serving Karnataka and
            Tamil Nadu.
          </p>
        </PageHero>

        <section className="container mx-auto max-w-6xl px-4 py-12">
          <ul className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => {
              const live = isPublished(post.seo.canonicalPath);
              return (
                <li key={post.slug}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                    <ImagePlaceholder
                      label="Guide cover"
                      aspect="video"
                      src={post.heroImage ?? null}
                      alt={post.heroAlt ?? `${post.h1} cover`}
                      className="rounded-none border-0 border-b"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
                        <Clock className="h-3.5 w-3.5" />
                        {live
                          ? `${formatDate(post.publishedAt)} · ${post.readingTimeMinutes} min`
                          : "Coming soon"}
                      </p>
                      <h2 className="mt-3 text-xl font-semibold leading-snug group-hover:text-primary">
                        <PublishAwareLink href={post.seo.canonicalPath}>
                          {post.h1}
                        </PublishAwareLink>
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.intro}
                      </p>
                      <PublishAwareLink
                        href={post.seo.canonicalPath}
                        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                      >
                        {live ? "Read guide" : "Coming soon"}
                        {live ? (
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        ) : null}
                      </PublishAwareLink>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        <HubSeoSection content={blogHubSeo} slug="blog-hub" muted />
      </main>
      <Footer />
      {faqLd ? <JsonLd data={faqLd} /> : null}
    </div>
  );
}
