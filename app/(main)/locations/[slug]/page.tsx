import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allLocationSlugs, getLocation } from "@/content/locations";
import { LocationPageTemplate } from "@/components/templates/LocationPageTemplate";
import { ComingSoonPage } from "@/components/content/ComingSoonPage";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { isPublished } from "@/content/publish";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return allLocationSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const location = getLocation(params.slug);
  if (!location) return {};
  if (!isPublished(location.seo.canonicalPath)) {
    return buildComingSoonMetadata(location.h1);
  }
  return buildMetadata(location.seo);
}

export default function LocationSlugPage({ params }: PageProps) {
  const location = getLocation(params.slug);
  if (!location) notFound();
  if (!isPublished(location.seo.canonicalPath)) {
    return (
      <ComingSoonPage
        title={location.h1}
        module="locations"
        path={location.seo.canonicalPath}
      />
    );
  }
  return <LocationPageTemplate content={location} />;
}
