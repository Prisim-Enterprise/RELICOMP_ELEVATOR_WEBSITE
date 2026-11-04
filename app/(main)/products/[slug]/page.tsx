import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allProductSlugs, getProduct } from "@/content/products";
import { ProductPageTemplate } from "@/components/templates/ProductPageTemplate";
import { ComingSoonPage } from "@/components/content/ComingSoonPage";
import { buildProductMetadata } from "@/lib/seo/metadata";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { isPublished } from "@/content/publish";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return allProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  const path = product.seo.canonicalPath;
  if (!isPublished(path)) {
    return buildComingSoonMetadata(product.h1);
  }
  return buildProductMetadata(product.seo);
}

export default function ProductSlugPage({ params }: PageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  if (!isPublished(product.seo.canonicalPath)) {
    return (
      <ComingSoonPage
        title={product.h1}
        module="products"
        path={product.seo.canonicalPath}
      />
    );
  }
  return <ProductPageTemplate content={product} />;
}
