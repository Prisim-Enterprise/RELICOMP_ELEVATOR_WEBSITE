import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allServiceSlugs, getService } from "@/content/services";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { ComingSoonPage } from "@/components/content/ComingSoonPage";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { isPublished } from "@/content/publish";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildInstallationHowToJsonLd } from "@/lib/seo/jsonld";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return allServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  if (!isPublished(service.seo.canonicalPath)) {
    return buildComingSoonMetadata(service.h1);
  }
  return buildMetadata(service.seo);
}

export default function ServiceSlugPage({ params }: PageProps) {
  const service = getService(params.slug);
  if (!service) notFound();
  if (!isPublished(service.seo.canonicalPath)) {
    return (
      <ComingSoonPage
        title={service.h1}
        module="services"
        path={service.seo.canonicalPath}
      />
    );
  }
  // The staged work process is only documented on the installation page, so the
  // HowTo is scoped to it rather than emitted on every service.
  const howTo =
    service.slug === "elevator-installation"
      ? buildInstallationHowToJsonLd({
          name: "How a Relicomp elevator installation runs",
        })
      : null;

  return (
    <>
      {howTo ? <JsonLd data={howTo} /> : null}
      <ServicePageTemplate content={service} />
    </>
  );
}
