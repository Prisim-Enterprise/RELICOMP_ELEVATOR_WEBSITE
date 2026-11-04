import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContentBlocks } from "@/components/content/ContentBlocks";
import { FAQSection } from "@/components/content/FAQSection";
import { RelatedPages } from "@/components/content/RelatedPages";
import { QuoteCTA } from "@/components/content/QuoteCTA";
import { MediaFrame } from "@/components/content/MediaFrame";
import { ReadingProgress } from "@/components/content/ReadingProgress";
import { InPageNav } from "@/components/content/InPageNav";
import { RichText } from "@/components/content/RichText";
import type { BlogPostContent } from "@/content/types";
import { buildBlogPostingJsonLd, buildFaqJsonLd } from "@/lib/seo/jsonld";
import { tocFromBody } from "@/lib/content/toc";
import { BookOpen, Clock, User } from "lucide-react";

type BlogPostTemplateProps = {
  content: BlogPostContent;
};

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function BlogPostTemplate({ content }: BlogPostTemplateProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: content.h1, href: content.seo.canonicalPath },
  ];

  const quoteHref =
    content.cta?.href ??
    `/contact?topic=${encodeURIComponent(content.slug)}`;

  const articleLd = buildBlogPostingJsonLd(content);
  const faqLd = content.faqs?.length ? buildFaqJsonLd(content.faqs) : null;
  const toc = tocFromBody(content.body, 10);

  const heroSrc =
    content.heroImage == null
      ? null
      : typeof content.heroImage === "string"
        ? content.heroImage
        : content.heroImage;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ReadingProgress />
      <Header />
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <main className="flex-1">
        <article>
          {/* Plain editorial header  -  no dark PageHero textures on post pages */}
          <header className="border-b border-border bg-background pt-28">
            <div className="container mx-auto max-w-6xl px-4 pb-10">
              <PageBreadcrumbs items={breadcrumbs} className="mb-6" />
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <BookOpen className="h-3.5 w-3.5" />
                Guide
              </div>
              <h1 className="mt-4 max-w-4xl text-3xl font-extrabold tracking-tight break-words text-foreground sm:text-5xl sm:leading-[1.15]">
                {content.h1}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {content.author}
                </span>
                <time dateTime={content.publishedAt}>
                  {formatDate(content.publishedAt)}
                </time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {content.readingTimeMinutes} min read
                </span>
              </div>
              <p className="mt-6 max-w-3xl border-l-4 border-primary pl-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <RichText text={content.intro} />
              </p>
              <div className="mt-8 max-w-5xl overflow-hidden rounded-2xl border border-border">
                <MediaFrame
                  src={heroSrc}
                  alt={content.heroAlt ?? content.h1}
                  placeholderLabel="Featured guide image"
                  aspect="wide"
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  // caption="Featured image placeholder for this guide"
                />
              </div>
            </div>
          </header>

          <div className="container mx-auto max-w-6xl px-4 py-10 lg:py-14">
            <div className="mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
              <div className="min-w-0 rounded-3xl border border-border/60 bg-card p-6 shadow-sm sm:p-10">
                <ContentBlocks blocks={content.body} />
                {content.faqs?.length ? (
                  <FAQSection
                    faqs={content.faqs}
                    slug={content.slug}
                    pageType="blog"
                  />
                ) : null}
                <RelatedPages
                  links={content.related}
                  fromSlug={content.slug}
                  title="Keep reading"
                />
                <QuoteCTA
                  href={quoteHref}
                  pageType="blog"
                  slug={content.slug}
                  heading={
                    content.cta?.heading ?? "Talk to Relicomp about your project"
                  }
                  body={
                    content.cta?.body ??
                    "Whether you need a home lift price estimate or a full installation plan, our Bangalore team can help."
                  }
                  buttonLabel={content.cta?.buttonLabel}
                  variant="card"
                />
              </div>

              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <InPageNav items={toc} title="In this guide" />
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
