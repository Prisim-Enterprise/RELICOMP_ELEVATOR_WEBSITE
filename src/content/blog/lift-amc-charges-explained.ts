import type { BlogPostContent } from "../types";
import { serviceImages } from "../images";

/**
 * /blog/lift-amc-charges-explained
 *
 * Targets lift amc charges (320/SD 19), what is lift amc (20/SD 5) and the
 * elevator maintenance cost cluster. "lift amc" at SD 9 is the easiest
 * commercial keyword in the Ubersuggest set, so this post exists to support the
 * [lift AMC service page](/services/lift-amc-maintenance) rather than compete
 * with it: the service page sells the contract, this post explains the pricing.
 *
 * The services hub and the AMC service page both referenced "lift AMC charges
 * explained" as plain text before this file existed.
 *
 * Pricing convention: no INR figures. Relicomp quotes after assessing the
 * machine, and pricesApproved is false site-wide. Explain the drivers instead.
 *
 * Target: 1,000-1,200 words
 */
export const liftAmcChargesExplained: BlogPostContent = {
  slug: "lift-amc-charges-explained",
  kind: "blog",
  h1: "Lift AMC Charges Explained: What Drives Elevator Maintenance Cost",
  intro:
    "Lift AMC charges vary widely between two buildings on the same street, and the reason is almost never the vendor's margin. This guide explains what a lift AMC covers, which eight factors actually move the annual figure, how Essential, Standard and Comprehensive plans differ, and the clauses worth reading before you sign. Written for apartment associations, facility managers and homeowners comparing elevator maintenance quotes.",
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-12",
  author: "Relicomp Elevators",
  readingTimeMinutes: 8,
  heroImage: serviceImages["lift-amc-maintenance"],
  heroAlt:
    "Relicomp technician carrying out a scheduled lift maintenance inspection",
  primaryKeyword: "lift amc charges",
  wordCountTarget: [1000, 1200],
  body: [
    {
      type: "heading",
      level: 2,
      text: "What is a lift AMC?",
      id: "what-is-lift-amc",
    },
    {
      type: "paragraph",
      text: "A lift AMC, or Annual Maintenance Contract, is a service agreement under which an elevator maintenance company inspects, lubricates, adjusts and supports your lift on a defined schedule, and attends when something fails. The alternative is calling a vendor only after a breakdown, which costs less on paper and far more in practice: unplanned attendance is slower, spare parts are not staged, and the faults that cause entrapments are exactly the ones preventive visits catch early.",
    },
    {
      type: "paragraph",
      text: "An AMC is also a compliance instrument. A lift is safety-critical equipment with statutory obligations attached to its operation, and a documented maintenance history is what demonstrates those obligations are being met. For buildings in Karnataka, the Karnataka Lifts, Escalators and Passenger Conveyors Act, 2012 governs the licence to operate a lift, and inspection records are part of keeping that straightforward.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why there is no single lift AMC price",
      id: "no-single-price",
    },
    {
      type: "paragraph",
      text: "Any quotation that arrives before anyone has looked at your machine is a guess. Two elevators with identical person ratings can need very different maintenance effort depending on age, duty cycle, controller generation and whether spare parts are still manufactured. Relicomp prices an AMC after a condition assessment rather than publishing a single annual fee, and we would encourage the same scepticism about any competitor who does the opposite.",
    },
    {
      type: "callout",
      text: "Relicomp note: we do not publish fixed AMC rate cards. Share your lift type, stops, age and usage and we will assess the machine before quoting. The frameworks below help you compare any provider's offer on equal terms.",
    },
    {
      type: "heading",
      level: 2,
      text: "The eight factors that move lift AMC charges",
      id: "cost-factors",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Elevator type and drive: hydraulic, traction and machine-room-less systems have different service routines, consumables and specialist requirements",
        "Number of stops and travel: more landings means more door sets, and door systems are the highest-wear part of almost every lift",
        "Age and controller generation: older relay or early microprocessor controllers take longer to diagnose and may need obsolete spares",
        "Usage intensity: a lift in a 40-flat apartment block runs a different duty cycle from one in a private villa, and wear follows usage",
        "Original manufacturer: parts availability and documentation for a third-party machine affect both routine work and repair lead times",
        "Plan tier: visit frequency, reporting depth and breakdown response intensity are the main things you are buying",
        "Spares treatment: whether consumables and major components are included, capped or chargeable is often the largest single difference between quotes",
        "Location and response window: distance from the nearest service team affects realistic attendance times and therefore the cost of committing to them",
      ],
    },
    {
      type: "paragraph",
      text: "Of these, spares treatment and plan tier explain most of the spread between a cheap quote and a complete one. A low annual figure with every component chargeable at list price is frequently more expensive over three years than a higher figure with consumables included.",
    },
    {
      type: "heading",
      level: 2,
      text: "Essential, Standard and Comprehensive: what actually changes",
      id: "plan-tiers",
    },
    {
      type: "paragraph",
      text: "Most providers, Relicomp included, structure AMCs in tiers. The labels differ but the variables rarely do. Use the table below to interrogate any proposal, then rely on your signed agreement for the authoritative inclusions.",
    },
    {
      type: "component",
      name: "AMCComparisonTable",
      props: {
        title: "What changes between AMC tiers",
        columns: ["Variable", "Essential", "Standard", "Comprehensive"],
        rows: [
          [
            "Preventive visit frequency",
            "Baseline schedule",
            "More frequent",
            "Most frequent",
          ],
          [
            "Breakdown attendance",
            "Chargeable or limited",
            "Included within agreed window",
            "Priority response",
          ],
          [
            "Consumables (oil, grease, contacts)",
            "Usually chargeable",
            "Commonly included",
            "Included",
          ],
          [
            "Major components",
            "Chargeable",
            "Chargeable or capped",
            "Widest cover, read the exclusions",
          ],
          [
            "Reporting",
            "Visit record",
            "Visit record plus findings",
            "Documented condition reporting",
          ],
          [
            "Best suited to",
            "Newer lifts under warranty support",
            "Most apartment and office buildings",
            "High-usage or critical installations",
          ],
        ],
      },
    },
    {
      type: "paragraph",
      text: "Note what the table does not contain: prices. The tier you need depends on the machine and the building, and the right comparison is tier-for-tier against an identical scope. Full plan detail sits on the [lift AMC and maintenance](/services/lift-amc-maintenance) page.",
    },
    {
      type: "heading",
      level: 2,
      text: "Clauses worth reading before you sign",
      id: "clauses-to-read",
    },
    {
      type: "list",
      items: [
        "Response time: is an attendance window actually committed, and does it differ for entrapments versus non-urgent faults?",
        "Out-of-hours cover: office hours and breakdown availability are different services, so confirm which applies at night and on Sundays",
        "Spares: which parts are included, which are capped, which are at list price, and whose brand is used",
        "Exclusions: vandalism, water ingress, power quality, civil defects and obsolete parts are the usual carve-outs",
        "Escalation: who you call when a fault recurs, and what happens if it is not resolved",
        "Term and exit: notice period, annual revision basis, and what happens to your service records if you change provider",
        "Obsolescence: what the provider proposes when a part is no longer manufactured, since that is a modernization conversation, not a repair",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "When AMC stops being the right answer",
      id: "amc-vs-modernization",
    },
    {
      type: "paragraph",
      text: "There is a point where rising maintenance spend is really deferred capital cost. If the same subsystem fails repeatedly, if spares arrive on long lead times from obsolete stock, or if the controller limits what can be adjusted, an AMC is funding a problem rather than fixing it. [Lift modernization](/services/lift-modernization) replaces the drive, controller, doors or safety devices while retaining the shaft, and often costs less in a three-year view than escalating breakdown calls. We will say so when we see it.",
    },
    {
      type: "heading",
      level: 2,
      text: "Can you take over a lift installed by another company?",
      id: "third-party-lifts",
    },
    {
      type: "paragraph",
      text: "In most cases yes, after a condition assessment. The assessment exists to find safety defects that must be corrected before a standard maintenance schedule is meaningful, and to confirm that spares are obtainable. Occasionally a machine is outside practical support, and we would rather tell you that at assessment than discover it mid-contract. Coverage spans our [Bangalore](/locations/bangalore) and [Mysore](/locations/mysore) service regions, with attendance windows confirmed by city.",
    },
    {
      type: "heading",
      level: 2,
      text: "Summary",
      id: "summary",
    },
    {
      type: "paragraph",
      text: "Lift AMC charges are driven by the machine, not by a price list: type and drive, stops, age, usage, spares treatment and the response you need. Compare tier-for-tier on identical scope, read the spares and response clauses before the headline number, and treat a quote offered without an inspection as incomplete. Relicomp assesses the lift, then proposes a plan and a realistic attendance window for your city.",
    },
  ],
  faqs: [
    {
      question: "What are typical lift AMC charges in Bangalore?",
      answer:
        "There is no dependable typical figure, because elevator type, stops, age, usage and spares treatment change the number substantially. Ask every provider to quote the same tier with the same spares scope for your specific machine, which is the only comparison that means anything.",
    },
    {
      question: "What is included in a lift AMC?",
      answer:
        "At minimum, scheduled preventive visits with documented checks, lubrication and adjustment, plus an agreed path for breakdown attendance. Consumables, major components and response commitments vary by tier, so those three items are what to compare between quotes.",
    },
    {
      question: "Is AMC compulsory for a lift?",
      answer:
        "Maintaining a lift in safe working order is a statutory obligation on the owner, and in Karnataka the operation of a lift is governed by the Karnataka Lifts, Escalators and Passenger Conveyors Act, 2012. An AMC is the practical way most owners meet that duty and keep the inspection record that demonstrates it.",
    },
    {
      question: "How often should a lift be serviced?",
      answer:
        "Frequency should follow usage and equipment rather than a single rule: a high-traffic apartment lift needs more frequent attention than a lightly used home lift. Your AMC tier sets the schedule, and door systems are usually the component that justifies the frequency.",
    },
    {
      question: "Why is one AMC quote so much cheaper than another?",
      answer:
        "Usually spares and response. A low annual fee with every component chargeable at list price, and no committed attendance window, often costs more across three years than a higher fee with consumables included. Compare the exclusions, not the headline.",
    },
    {
      question: "Do you offer AMC for lifts of other brands?",
      answer:
        "Often yes, after a condition assessment that checks for safety defects and confirms spare-part availability. Send your lift type, stops, age and city through the [contact form](/contact?topic=lift-amc) and we will confirm whether we can support it.",
    },
  ],
  related: [
    {
      href: "/services/lift-amc-maintenance",
      label: "Lift AMC & maintenance",
      kind: "service",
    },
    {
      href: "/services/lift-modernization",
      label: "Lift modernization",
      kind: "service",
    },
    {
      href: "/industries/apartments-residential",
      label: "Apartments & residential",
      kind: "industry",
    },
    {
      href: "/locations/bangalore",
      label: "Bangalore service coverage",
      kind: "location",
    },
    {
      href: "/blog/home-lift-price-in-india-2026",
      label: "Home lift price guide 2026",
      kind: "blog",
    },
    {
      href: "/contact",
      label: "Request an AMC proposal",
      kind: "page",
    },
  ],
  cta: {
    heading: "Get an AMC proposal for your lift",
    body: "Share the elevator type, number of stops, approximate age and your city. We will assess the machine and propose a plan tier with a realistic attendance window, with spares treatment stated in writing.",
    buttonLabel: "Request an AMC proposal",
    href: "/contact?topic=lift-amc",
  },
  seo: {
    title: "Lift AMC Charges Explained",
    description:
      "What drives lift AMC charges: elevator type, stops, age, usage and spares. Compare plan tiers and the clauses to read before signing.",
    canonicalPath: "/blog/lift-amc-charges-explained",
    ogImage: "/og/default.png",
    keywords: [
      "lift amc charges",
      "lift amc",
      "what is lift amc",
      "elevator maintenance cost",
      "lift amc cost in bangalore",
      "elevator maintenance services",
    ],
  },
};
