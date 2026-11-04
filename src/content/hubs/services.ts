import type { HubSeoContent } from "./types";
import { paths } from "@/content/internalLinks";

export const servicesHubSeo: HubSeoContent = {
  heading: "Elevator services: installation, AMC, modernization & manufacturing",
  lead:
    "Lifecycle support for new lifts and existing installations across Bangalore, Karnataka, and Tamil Nadu. Survey first, then a clear scope of work.",
  body: [
    {
      type: "paragraph",
      text: "Buying an elevator is only half the lifecycle. Relicomp’s service hub covers [elevator installation](/services/elevator-installation), [lift AMC and maintenance](/services/lift-amc-maintenance), [lift modernization](/services/lift-modernization), and [custom manufacturing](/services/custom-elevator-manufacturing). Each service page explains process, FAQs, and when to engage us.",
    },
    {
      type: "heading",
      level: 2,
      text: "New installations",
      id: "installation",
    },
    {
      type: "paragraph",
      text: "Installation starts with site assessment (shaft/pit, power, access), engineering layout, and a staged work process: Stage 1–3 material delivery and execution (tied to payments and site clearance), then QC & trial run (2 working days) and final handover within 2 weeks after QC. Full step timelines live on the [elevator installation](/services/elevator-installation) page. For cost context, read elevator installation cost in India.",
    },
    {
      type: "heading",
      level: 2,
      text: "AMC & maintenance",
      id: "amc",
    },
    {
      type: "paragraph",
      text: "Planned AMC reduces downtime and keeps safety systems inspected. Our [lift AMC service](/services/lift-amc-maintenance) is built for owners who want local response, not only a paper contract. Charges logic is explained in lift AMC charges explained.",
    },
    {
      type: "heading",
      level: 2,
      text: "Modernization & manufacturing",
      id: "modernization-manufacturing",
    },
    {
      type: "paragraph",
      text: "Older elevators can often be modernized. Controllers, doors, cabin interiors, safety devices without a full civil rebuild. Manufacturing support from Magadi helps when cabins or configurations are custom. Choose modernization when reliability or compliance is the issue; choose new product pages when traffic or capacity has outgrown the existing unit.",
    },
    {
      type: "list",
      items: [
        "Installation for new residential and commercial lifts",
        "Preventive AMC with breakdown response pathways",
        "Modernization packages for aging systems",
        "Custom manufacturing for non-standard cabins and duty",
      ],
    },
  ],
  faqs: [
    {
      question: "Do you offer AMC for elevators installed by other brands?",
      answer:
        "In many cases yes, after inspection. Scope depends on equipment condition, spare availability, and safety compliance. Contact us for a site assessment.",
    },
    {
      question: "How long does a typical home lift installation take?",
      answer:
        "Timelines vary with civil readiness, product type, and site access. The installation service page outlines the step path; a survey gives a project-specific schedule.",
    },
    {
      question: "What is included in lift modernization?",
      answer:
        "Modernization may include drive/controller upgrades, door systems, cabin refresh, and safety device updates. Exact scope is defined after inspection of the existing installation.",
    },
  ],
  related: [
    { href: paths.installation, label: "Elevator installation", kind: "service" },
    { href: paths.amc, label: "Lift AMC & maintenance", kind: "service" },
    { href: paths.modernization, label: "Lift modernization", kind: "service" },
    { href: paths.manufacturing, label: "Custom manufacturing", kind: "service" },
    { href: paths.productsHub, label: "Browse elevator products", kind: "product" },
    { href: paths.contact, label: "Book a service call", kind: "page" },
  ],
};
