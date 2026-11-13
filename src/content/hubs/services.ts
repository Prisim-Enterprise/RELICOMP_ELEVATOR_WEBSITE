import type { HubSeoContent } from "./types";
import { paths } from "@/content/internalLinks";

/**
 * /services hub copy.
 *
 * The SEO audit of 2026-09-21 flagged this as the thinnest live page on the site
 * at 514 words, while it acts as the hub for four service pages and receives
 * internal link equity from the header, the footer and every service page. The
 * body below answers the questions a buyer actually arrives with - which service
 * do I need, who does what, what governs the work, what does it cost - rather
 * than padding, and routes each one to the page that sells it.
 */
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
      type: "paragraph",
      text: "We are a manufacturer-installer rather than a reseller: the same company designs the lift, builds it at our Magadi Road facility in Bengaluru, erects it on your site, and maintains it afterwards. That matters most when something needs fixing, because there is no gap between the party who sold the equipment and the party accountable for it.",
    },
    {
      type: "heading",
      level: 2,
      text: "Which service do you need?",
      id: "which-service",
    },
    {
      type: "paragraph",
      text: "Most enquiries resolve to one of four situations. Use whichever line describes your building and follow it to the page that covers the work in detail.",
    },
    {
      type: "component",
      name: "AMCComparisonTable",
      props: {
        title: "Matching your situation to a service",
        columns: ["Your situation", "The service", "What happens first"],
        rows: [
          [
            "New building, or a home with no lift yet",
            "Elevator installation",
            "Site assessment of shaft, pit, headroom, power and access",
          ],
          [
            "Working lift that needs keeping safe and available",
            "Lift AMC & maintenance",
            "Condition assessment, then a plan tier and response window",
          ],
          [
            "Old or unreliable lift, but the shaft is sound",
            "Lift modernization",
            "Inspection of drive, controller, doors and safety devices",
          ],
          [
            "Non-standard cabin, duty or dimension",
            "Custom manufacturing",
            "Engineering review against the space you actually have",
          ],
        ],
      },
    },
    {
      type: "heading",
      level: 2,
      text: "New installations",
      id: "installation",
    },
    {
      type: "paragraph",
      text: "Installation starts with site assessment (shaft/pit, power, access), engineering layout, and a staged work process: Stage 1–3 material delivery and execution (tied to payments and site clearance), then QC & trial run (2 working days) and final handover within 2 weeks after QC. Full step timelines live on the [elevator installation](/services/elevator-installation) page. For cost context, read [elevator installation cost in India](/blog/elevator-installation-cost-india).",
    },
    {
      type: "paragraph",
      text: "The cheapest installation is the one where our crew arrives to a shaft that is already correct. If you are still at drawing stage, bring us in before the RCC is frozen: shaft dimensions, pit depth and headroom are inexpensive to change on paper and expensive to change in concrete. The dimensions themselves are explained in the [home lift size guide](/blog/home-lift-size-guide).",
    },
    {
      type: "heading",
      level: 2,
      text: "AMC & maintenance",
      id: "amc",
    },
    {
      type: "paragraph",
      text: "Planned AMC reduces downtime and keeps safety systems inspected. Our [lift AMC service](/services/lift-amc-maintenance) is built for owners who want local response, not only a paper contract. Charges logic is explained in [lift AMC charges explained](/blog/lift-amc-charges-explained).",
    },
    {
      type: "paragraph",
      text: "Two things are worth separating when you compare maintenance offers. Office hours cover sales, surveys and new enquiries, Monday to Saturday, 9:30 AM to 6:30 PM. Emergency breakdown and passenger-release calls are handled by the breakdown support line outside those hours, with attendance windows that depend on your city and plan tier. A contract that commits to neither is not really a contract.",
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
      type: "paragraph",
      text: "The signal that modernization has become the right answer is usually economic rather than mechanical: the same subsystem failing repeatedly, spares arriving on long lead times from obsolete stock, or a controller that limits what can be adjusted. At that point an AMC is funding a problem instead of fixing it, and we will say so.",
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
    {
      type: "heading",
      level: 2,
      text: "What governs the work",
      id: "standards",
    },
    {
      type: "paragraph",
      text: "Three rulebooks apply to a lift in different places, and knowing which is which tells you what a cheap quote cannot legitimately leave out. The Bureau of Indian Standards IS 14665 series governs the machine, its erection and its testing. The National Building Code of India 2016, Part 8, Section 5 governs the shaft, the lobby and the building’s fire-safety provisions. In Karnataka, the Karnataka Lifts, Escalators and Passenger Conveyors Act, 2012 governs permission to erect and the licence to operate. The machine, the building, and the licence: full detail is on the [elevator installation](/services/elevator-installation) page.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where we work",
      id: "coverage",
    },
    {
      type: "paragraph",
      text: "Our head office and manufacturing are in Bengaluru, with branch offices at Jigani and Mysuru, and installations across Karnataka and Tamil Nadu. Response times are honest about distance: tell us your city when you enquire so we can confirm coverage and a realistic attendance window rather than a generic promise. See [Bangalore](/locations/bangalore) and [Mysore](/locations/mysore) for local coverage, or [all locations](/locations).",
    },
    {
      type: "heading",
      level: 2,
      text: "How we quote",
      id: "how-we-quote",
    },
    {
      type: "paragraph",
      text: "Every service here is quoted after a survey or a condition assessment, with scope separated into what sits in our scope and what remains yours. We do not publish fixed service rate cards, because a figure issued before anyone has seen the machine is a guess that gets corrected later as a change order. A free site visit is the fastest route to a number you can actually hold us to.",
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
    {
      question: "Are you open outside office hours?",
      answer:
        "Our offices are open Monday to Saturday, 9:30 AM to 6:30 PM, for sales, site surveys and new enquiries. Emergency breakdown and passenger-release calls are handled by the breakdown support line outside those hours; attendance windows depend on your city and AMC tier.",
    },
    {
      question: "Should I modernize my old lift or replace it?",
      answer:
        "Modernize when the shaft is sound and the problem is reliability, obsolete spares or compliance, since replacing the drive, controller, doors and safety devices avoids a civil rebuild. Replace when traffic or capacity has genuinely outgrown the equipment. An inspection settles which applies.",
    },
    {
      question: "Do you charge for a site survey?",
      answer:
        "No. Site visits and consultations are free across our service regions, and the survey is what lets us quote with scope separated rather than issue an estimate that changes later.",
    },
  ],
  related: [
    { href: paths.installation, label: "Elevator installation", kind: "service" },
    { href: paths.amc, label: "Lift AMC & maintenance", kind: "service" },
    { href: paths.modernization, label: "Lift modernization", kind: "service" },
    { href: paths.manufacturing, label: "Custom manufacturing", kind: "service" },
    {
      href: paths.blogInstallationCost,
      label: "Elevator installation cost guide",
      kind: "blog",
    },
    {
      href: paths.blogAmcCharges,
      label: "Lift AMC charges explained",
      kind: "blog",
    },
    { href: paths.productsHub, label: "Browse elevator products", kind: "product" },
    { href: paths.contact, label: "Book a service call", kind: "page" },
  ],
};
