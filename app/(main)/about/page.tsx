import type { Metadata } from "next";
import About from "@/views/About";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutHubSeo } from "@/content/hubs";
import { leadership } from "@/content/team";
import { buildStaticPageMetadata } from "@/lib/seo/metadata";
import {
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  buildTeamPersonJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo/jsonld";

// Title omits the brand: the root layout template appends "| Relicomp Elevators".
export const metadata: Metadata = buildStaticPageMetadata({
  title: "About Us: Elevator Manufacturer",
  description:
    "Relicomp Elevators Pvt. Ltd: elevator manufacturer in Bangalore with a Magadi factory, 16+ years and 600+ installs across Karnataka & Tamil Nadu.",
  path: "/about",
});

export default function AboutPage() {
  const faqLd = buildFaqJsonLd(aboutHubSeo.faqs);
  const people = buildTeamPersonJsonLd(leadership);

  return (
    <>
      <JsonLd data={buildOrganizationJsonLd()} />
      <JsonLd
        data={buildWebPageJsonLd({
          path: "/about",
          name: "About Relicomp Elevators",
          description:
            "Who Relicomp Elevators are: in-house manufacturing on Magadi Road, Bengaluru, 16+ years of work and 600+ installations across Karnataka and Tamil Nadu.",
          speakableSelectors: ["h1", ".speakable-intro"],
        })}
      />
      {people.map((person, i) => (
        <JsonLd key={`person-${i}`} data={person} />
      ))}
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <About />
    </>
  );
}
