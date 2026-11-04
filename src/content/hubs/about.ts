import type { HubSeoContent } from "./types";
import { paths } from "@/content/internalLinks";

export const aboutHubSeo: HubSeoContent = {
  heading: "Manufacturer-led elevator company for South India",
  lead:
    "Relicomp Elevators Pvt. Ltd. combines in-house manufacturing in Magadi, Bengaluru with regional installation and AMC teams across Karnataka and Tamil Nadu.",
  body: [
    {
      type: "paragraph",
      text: "Relicomp was built for owners and builders who want one accountable partner for design, build, install, and service. Not a fragmented chain of vendors. Over [16+](/about) years we have completed [600+](/projects) elevator installations for homes, apartments, commercial towers, hospitals, hotels, and industrial facilities.",
    },
    {
      type: "heading",
      level: 2,
      text: "What “in-house manufacturing” means for your project",
      id: "manufacturing",
    },
    {
      type: "paragraph",
      text: "Our factory on Magadi Main Road supports [custom elevator manufacturing](/services/custom-elevator-manufacturing) with tighter control over cabin quality, delivery sequencing, and safety configuration. That matters when shaft dimensions, traffic pattern, or finishes are non-standard. Common on villa retrofits and mixed-use cores.",
    },
    {
      type: "heading",
      level: 2,
      text: "Safety, efficiency, and regional service",
      id: "safety-service",
    },
    {
      type: "paragraph",
      text: "Every system is specified with passenger safety as the baseline: automatic rescue concepts, door protection, overspeed and UCM-related protections as applicable to the product, and commissioning checks before handover. Energy-efficient lighting and drive choices reduce long-term operating cost for building owners.",
    },
    {
      type: "paragraph",
      text: "Service coverage spans [Bangalore](/locations/bangalore), [Mysore](/locations/mysore), Hassan, Udupi, Hospete, Kushalnagar, Chamarajanagara, Dindigul, and nearby towns. Branch offices in Vijayanagar, Jigani, and Mysuru keep site visits and AMC response practical. Not remote call-centre only.",
    },
    {
      type: "heading",
      level: 2,
      text: "Who we work with",
      id: "who-we-serve",
    },
    {
      type: "list",
      items: [
        "Homeowners planning [home elevators](/products/home-elevators) for villas and duplexes",
        "Apartment and commercial developers specifying [MRL](/products/mrl-elevators) or [traction](/products/traction-elevators) passenger lifts",
        "Hospitality and healthcare projects needing reliable passenger and service traffic",
        "Warehouses and factories needing [goods lifts](/products/goods-lifts-dumbwaiters)",
      ],
    },
    {
      type: "callout",
 text: "Recognized among India’s “Top 10 Elevators & Moving Stairways Manufacturers 2023” (Industry Today). Recognition supports our quality story, but every new site still starts with a free survey.",
    },
  ],
  faqs: [
    {
      question: "Where is Relicomp Elevators based?",
      answer:
        "Head office is in Vijayanagar, Bengaluru, with a manufacturing unit on Magadi Road and branch offices in Jigani and Mysuru. We serve projects across Karnataka and Tamil Nadu.",
    },
    {
      question: "Do you only sell elevators or also maintain them?",
      answer:
        "We handle the full lifecycle: manufacturing support, installation, modernization, and lift AMC/maintenance plans so owners have one brand for warranty and service.",
    },
    {
      question: "Can Relicomp handle both home and commercial elevators?",
      answer:
        "Yes. Product range covers residential home lifts, MRL and traction passenger elevators, hydraulic options, goods lifts/dumbwaiters, and capsule/glass elevators.",
    },
  ],
  related: [
    { href: paths.productsHub, label: "Elevator products", kind: "product" },
    { href: paths.projects, label: "Featured projects", kind: "page" },
    { href: paths.manufacturing, label: "Custom manufacturing", kind: "service" },
    { href: paths.locationsHub, label: "Service locations", kind: "location" },
    { href: paths.contact, label: "Contact Relicomp", kind: "page" },
  ],
};
