import type { Metadata } from "next";
import Projects from "@/views/Projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { projectsHubSeo } from "@/content/hubs";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import { buildFaqJsonLd, buildWebPageJsonLd } from "@/lib/seo/jsonld";

// Title omits the brand: the root layout template appends "| Relicomp Elevators".
export const metadata: Metadata = buildStaticPageMetadata({
  title: "Elevator Projects Portfolio",
  description:
    "Elevator projects across Karnataka & Tamil Nadu: villa home lifts, apartment and hospital passenger elevators, hotels and industrial goods lifts. 600+ installs.",
  path: "/projects",
});
export default function ProjectsPage() {
  const faqLd = buildFaqJsonLd(projectsHubSeo.faqs);

  return (
    <>
      <JsonLd
        data={buildWebPageJsonLd({
          path: "/projects",
          name: "Elevator Projects Portfolio",
          description:
            "Residential, commercial and industrial elevator installations delivered across Karnataka and Tamil Nadu.",
          speakableSelectors: ["h1", ".speakable-intro"],
        })}
      />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <Projects />
    </>
  );
}
