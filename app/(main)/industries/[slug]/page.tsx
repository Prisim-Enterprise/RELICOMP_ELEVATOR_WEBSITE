import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allIndustrySlugs, getIndustry } from "@/content/industries";
import { IndustryPageTemplate } from "@/components/templates/IndustryPageTemplate";
import { ComingSoonPage } from "@/components/content/ComingSoonPage";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { isPublished } from "@/content/publish";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return allIndustrySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = getIndustry(params.slug);
  if (!industry) return {};
  if (!isPublished(industry.seo.canonicalPath)) {
    return buildComingSoonMetadata(industry.h1);
  }
  return buildMetadata(industry.seo);
}

export default function IndustrySlugPage({ params }: PageProps) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();
  if (!isPublished(industry.seo.canonicalPath)) {
    return (
      <ComingSoonPage
        title={industry.h1}
        module="industries"
        path={industry.seo.canonicalPath}
      />
    );
  }
  return <IndustryPageTemplate content={industry} />;
}
