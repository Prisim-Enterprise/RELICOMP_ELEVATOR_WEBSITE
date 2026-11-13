import type { HubSeoContent } from "./types";
import { paths } from "@/content/internalLinks";

export const blogHubSeo: HubSeoContent = {
  heading: "Elevator guides for buyers and building owners",
  lead:
    "Practical, survey-aware articles on cost, sizing, technology, installation, and AMC, written by a manufacturer serving Karnataka and Tamil Nadu.",
  body: [
    {
      type: "paragraph",
      text: "Most elevator buyers start with cost and size questions long before they compare cabin finishes. Our guides answer those planning questions with clear structure, internal links to product and service pages, and honest notes about what only a site survey can finalize.",
    },
    {
      type: "heading",
      level: 2,
      text: "Start here if you are pricing a home lift",
      id: "pricing",
    },
    {
      type: "paragraph",
      text: "Read the [home lift price in India 2026 guide](/blog/home-lift-price-in-india-2026) for the cost drivers and how to compare quotations, then the [home lift size guide](/blog/home-lift-size-guide) for the cabin, shaft, pit and headroom decisions that move the price before anyone quotes. Pair both with the [home elevators product page](/products/home-elevators) before requesting a quote.",
    },
    {
      type: "heading",
      level: 2,
      text: "If you are comparing installation or maintenance quotes",
      id: "ownership",
    },
    {
      type: "paragraph",
      text: "The [elevator installation cost guide](/blog/elevator-installation-cost-india) separates equipment from installation scope and lists the line items that usually arrive later as change orders. For the ownership years that follow, [lift AMC charges explained](/blog/lift-amc-charges-explained) sets out what drives the annual figure and which clauses to read before signing.",
    },
    {
      type: "heading",
      level: 2,
      text: "If you are choosing between elevator technologies",
      id: "technology",
    },
    {
      type: "paragraph",
      text: "[Hydraulic vs traction elevator](/blog/hydraulic-vs-traction-elevator) compares the two drives on headroom, pit, speed, travel, energy and power-failure behaviour, with machine-room-less traction placed between them. If you only need the definition, [what is an MRL elevator](/blog/what-is-an-mrl-elevator) answers it in a sentence and then covers the trade-offs.",
    },
    {
      type: "paragraph",
      text: "Guides are educational, not a substitute for engineering. When you are ready, use [contact](/contact) for a free survey so numbers and shaft assumptions match your building.",
    },
  ],
  faqs: [
    {
      question: "Are blog price figures a formal quotation?",
      answer:
        "No. Blog ranges are for planning and market education. Formal quotes follow site survey, specifications, and commercial approval.",
    },
    {
      question: "How often are guides updated?",
      answer:
        "We revise high-intent guides such as home lift pricing when market ranges or product guidance change materially. Check the published date on each post.",
    },
    {
      question: "Which guide should apartment societies read first?",
      answer:
        "Start with the [elevator installation cost guide](/blog/elevator-installation-cost-india) and [lift AMC charges explained](/blog/lift-amc-charges-explained) for ownership planning, then the [MRL](/products/mrl-elevators) or [traction elevator](/products/traction-elevators) product pages for equipment selection.",
    },
    {
      question: "Which guide helps most if my shaft already exists?",
      answer:
        "The [home lift size guide](/blog/home-lift-size-guide), because a retrofit is decided by the dimensions you already have: clear cabin, shaft, pit depth and headroom. Read it alongside [hydraulic vs traction](/blog/hydraulic-vs-traction-elevator), since headroom often rules out one of the two drives.",
    },
  ],
  related: [
    { href: paths.blogHomePrice, label: "Home lift price 2026", kind: "blog" },
    { href: paths.blogSizeGuide, label: "Home lift size guide", kind: "blog" },
    {
      href: paths.blogInstallationCost,
      label: "Elevator installation cost",
      kind: "blog",
    },
    {
      href: paths.blogAmcCharges,
      label: "Lift AMC charges explained",
      kind: "blog",
    },
    {
      href: paths.blogHydraulicVsTraction,
      label: "Hydraulic vs traction elevators",
      kind: "blog",
    },
    { href: paths.homeElevators, label: "Home elevators product", kind: "product" },
    { href: paths.contact, label: "Request a survey", kind: "page" },
  ],
};
