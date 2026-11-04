import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedPages } from "@/components/content/RelatedPages";
import { QuoteCTA } from "@/components/content/QuoteCTA";
import { InteractiveGallery } from "@/components/content/InteractiveGallery";
import { ProductDetailTabs } from "@/components/content/ProductDetailTabs";
import {
  PageHero,
  pageHeroBreadcrumbClass,
  pageHeroOutlineButtonClass,
} from "@/components/content/PageHero";
import { RichText } from "@/components/content/RichText";
import { StickyMobileCTA } from "@/components/content/StickyMobileCTA";
import type { ProductPageContent } from "@/content/types";
import { getProductGallerySlides } from "@/content/images";
import { buildFaqJsonLd, buildProductJsonLd } from "@/lib/seo/jsonld";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

type ProductPageTemplateProps = {
  content: ProductPageContent;
};

export function ProductPageTemplate({ content }: ProductPageTemplateProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: content.h1, href: content.seo.canonicalPath },
  ];

  const quoteHref =
    content.cta?.href ??
    `/contact?topic=${encodeURIComponent(content.slug)}&product=${encodeURIComponent(content.slug)}`;

  const faqLd = buildFaqJsonLd(content.faqs);
  const productLd = buildProductJsonLd(content);

  const heroSrc =
    typeof content.heroImage === "string"
      ? content.heroImage
      : content.heroImage;

  const gallerySlides = getProductGallerySlides(content.slug, {
    hero: heroSrc,
    heroAlt: content.heroAlt,
  });

  return (
    <div className="min-h-screen flex flex-col bg-background pb-20 lg:pb-0">
      <Header />
      <JsonLd data={productLd} />
      {faqLd && <JsonLd data={faqLd} />}

      <main className="flex-1">
        <PageHero fillViewport innerClassName="max-w-7xl pb-10 pt-4">
          <PageBreadcrumbs
            items={breadcrumbs}
            className={pageHeroBreadcrumbClass}
          />

          <div className="grid w-full min-w-0 items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] lg:gap-10 xl:gap-12">
            <div className="min-w-0">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/40 bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{content.primaryKeyword}</span>
              </div>
              <h1 className="mt-4 text-2xl font-extrabold tracking-tight break-words sm:text-3xl md:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                {content.h1}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
                <RichText
                  text={content.intro}
                  linkClassName="text-white underline decoration-primary underline-offset-4 hover:decoration-white"
                />
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full px-6 shadow-lg sm:w-auto sm:px-8"
                >
                  <Link href={quoteHref}>
                    {content.cta?.buttonLabel ?? "Get free quote"}
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
                    Call now
                  </a>
                </Button>
              </div>
            </div>

            <InteractiveGallery
              slides={gallerySlides}
              className="min-w-0 w-full lg:justify-self-stretch"
            />
          </div>
        </PageHero>

        {/* Interactive tabbed body */}
        <section className="container mx-auto max-w-5xl px-4 py-10 lg:py-14">
          <ProductDetailTabs
            slug={content.slug}
            body={content.body}
            specs={content.specs}
            sizeChart={content.sizeChart}
            faqs={content.faqs}
            quoteSlot={
              <QuoteCTA
                heading={content.cta?.heading}
                body={content.cta?.body}
                buttonLabel={content.cta?.buttonLabel}
                href={quoteHref}
                pageType="product"
                slug={content.slug}
                variant="banner"
              />
            }
          />

          <div className="mt-12">
            <RelatedPages
              links={content.related}
              fromSlug={content.slug}
              title="Explore related"
            />
          </div>
        </section>
      </main>

      <StickyMobileCTA
        href={quoteHref}
        pageType="product"
        slug={content.slug}
        label={content.cta?.buttonLabel ?? "Get free quote"}
      />
      <Footer />
    </div>
  );
}
