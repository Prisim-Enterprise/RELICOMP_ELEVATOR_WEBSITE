import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  PageHero,
  pageHeroBreadcrumbClass,
} from "@/components/content/PageHero";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import type { ContentModule } from "@/content/publish";
import { isPublished, modules } from "@/content/publish";

type ComingSoonPageProps = {
  /** Display title for the planned page */
  title: string;
  /** Optional module context for crumbs / copy */
  module?: ContentModule;
  /** Path that was requested (for breadcrumbs) */
  path: string;
};

const moduleCopy: Record<ContentModule, string> = {
  products: "product",
  services: "service",
  industries: "industry",
  locations: "location",
  blog: "guide",
};

/**
 * Shown for registry pages marked unpublished in `src/content/publish.ts`.
 * noindex until `published` is set, then the full page replaces this.
 */
export function ComingSoonPage({ title, module, path }: ComingSoonPageProps) {
  const kind = module ? moduleCopy[module] : "page";
  const hub =
    module && modules[module]
      ? { name: modules[module].hub.label, href: modules[module].hub.path }
      : null;
  const hubLive = hub ? isPublished(hub.href) : false;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageHero>
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              ...(hub && hubLive
                ? [{ name: hub.name, href: hub.href }]
                : []),
              { name: title, href: path },
            ]}
            className={pageHeroBreadcrumbClass}
          />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Coming soon
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            This {kind} page is prepared for launch and will go live in an
            upcoming release. Need details now? Our team can walk you through
            options on a site survey call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact">Talk to Relicomp</Link>
            </Button>
            {hub && hubLive ? (
              <Button
                asChild
                size="lg"
                variant="heroOutline"
                className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <Link href={hub.href}>Back to {hub.name}</Link>
              </Button>
            ) : (
              <Button
                asChild
                size="lg"
                variant="heroOutline"
                className="rounded-full border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="/">Go home</Link>
              </Button>
            )}
          </div>
        </PageHero>
      </main>
      <Footer />
    </div>
  );
}
