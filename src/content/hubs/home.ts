import type { HubSeoContent } from "./types";
import { paths } from "@/content/internalLinks";

export const homeHubSeo: HubSeoContent = {
  heading: "Elevator company in Bangalore & Mysore you can plan with",
  lead:
    "Relicomp Elevators designs, manufactures, installs, and maintains passenger and goods lifts across Karnataka and Tamil Nadu. With survey-led recommendations, not one-size price lists.",
  body: [
    {
      type: "paragraph",
      text: "If you are comparing an [elevator company in Bangalore](/locations/bangalore), Mysore, or a service town nearby, the useful question is not only “who sells lifts?” It is who owns design, manufacturing quality, installation method, and long-term [lift AMC](/services/lift-amc-maintenance) under one accountable team. Relicomp Elevators Pvt. Ltd. has delivered [600+ installations](/projects) over [16+ years](/about) for homes, apartments, offices, hospitals, hotels, and industrial sites.",
    },
    {
      type: "heading",
      level: 2,
      text: "What we manufacture and install",
      id: "what-we-build",
    },
    {
      type: "paragraph",
      text: "Buyers usually start with use case. [Home elevators](/products/home-elevators) and [hydraulic elevators for homes](/products/hydraulic-elevators) fit villas and duplexes where shaft space and noise matter. [MRL elevators](/products/mrl-elevators) and [traction elevators](/products/traction-elevators) serve mid-rise residential and commercial cores. [Goods lifts and dumbwaiters](/products/goods-lifts-dumbwaiters) move material in kitchens, warehouses, and factories. [Capsule and glass elevators](/products/capsule-glass-elevators) add architectural presence where visibility is part of the brief.",
    },
    {
      type: "list",
      items: [
        "Residential: compact home lifts, hydraulic options, duplex accessibility",
        "Commercial: passenger lifts for offices, malls, hotels, and hospitals",
        "Industrial: goods elevators sized for load, door width, and duty cycle",
        "Lifecycle: [installation](/services/elevator-installation), modernization, and planned AMC",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How a Relicomp project typically runs",
      id: "project-path",
    },
    {
      type: "paragraph",
      text: "We begin with a free site survey. Floors, shaft or pit feasibility, power, and traffic pattern. Engineering then proposes elevator type, cabin size, finishes, and safety configuration. Manufacturing support from our Magadi facility keeps quality and timelines under one brand. Installation follows a defined path; after handover, AMC keeps response local across our Karnataka and Tamil Nadu coverage.",
    },
    {
      type: "paragraph",
      text: "Planning cost? Four variables move an elevator quote more than anything else: the number of stops, rated capacity, shaft and pit readiness, and cabin finish. A two-stop villa lift and a six-stop apartment traction lift are different machines with different civil work, so brochure averages rarely survive contact with a real site. Relicomp quotes after a free survey for exactly that reason.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where we serve",
      id: "where-we-serve",
    },
    {
      type: "paragraph",
      text: "Primary hubs include [Bangalore](/locations/bangalore), [Mysore](/locations/mysore), Hassan, Udupi, Hospete, Kushalnagar, Chamarajanagara, and Dindigul, with branch context in Vijayanagar, Jigani, and Mysuru. See the full [locations directory](/locations) for city-level pages and contact details.",
    },
  ],
  faqs: [
    {
      question: "Is Relicomp an elevator manufacturer or only a dealer?",
      answer:
        "Relicomp Elevators designs and manufactures elevators with an in-house unit on Magadi Road, Bengaluru, and installs and maintains systems across Karnataka and Tamil Nadu. You get manufacturer-led engineering with regional service teams.",
    },
    {
      question: "Which elevator is right for a home or villa?",
      answer:
        "Most villas and duplexes evaluate home elevators or hydraulic home lifts for compact shafts and smooth low-rise travel. Final choice depends on floors, pit/headroom, load, and finishes. Start on the home elevators product page or request a free survey.",
    },
    {
      question: "Do you provide AMC after installation?",
      answer:
        "Yes. Relicomp lift AMC plans cover scheduled preventive visits, breakdown response, safety-device checks on the overspeed governor, ARD and door interlocks, and wear-part replacement. AMC is handled by our own regional crews in Karnataka and Tamil Nadu rather than subcontracted, and cover can start as soon as the warranty period ends. Call 8037404826 to scope a plan for your building.",
    },
    {
      question: "How do I get a realistic price for a home lift in Bangalore?",
      answer:
        "Book a free site survey: a realistic figure depends on the number of stops, rated capacity, shaft or pit readiness, cabin finishes and the safety package you choose. These move the final quote far more than published averages, which is why Relicomp quotes after survey rather than from a brochure price list. A survey visit across Bangalore is free and carries no obligation.",
    },
  ],
  related: [
    {
      href: paths.homeElevators,
      label: "Home elevators",
      kind: "product",
    },
    {
      href: paths.productsHub,
      label: "All elevator products",
      kind: "product",
    },
    {
      href: paths.servicesHub,
      label: "Installation, AMC & services",
      kind: "service",
    },
    {
      href: paths.bangalore,
      label: "Elevators in Bangalore",
      kind: "location",
    },
    {
      href: paths.blogHomePrice,
      label: "Home lift price guide 2026",
      kind: "blog",
    },
    {
      href: paths.contact,
      label: "Request a free site survey",
      kind: "page",
    },
  ],
};
