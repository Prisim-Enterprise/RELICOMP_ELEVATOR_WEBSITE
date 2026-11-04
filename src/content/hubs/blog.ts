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
      text: "Read the [home lift price in India 2026 guide](/blog/home-lift-price-in-india-2026) for planning ranges. Pair it with the [home elevators product page](/products/home-elevators) before requesting a quote.",
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
        "Installation cost and AMC charges guides help ownership planning; product pages for MRL or traction elevators cover equipment selection.",
    },
  ],
  related: [
    { href: paths.blogHomePrice, label: "Home lift price 2026", kind: "blog" },
    { href: paths.homeElevators, label: "Home elevators product", kind: "product" },
    { href: paths.contact, label: "Request a survey", kind: "page" },
  ],
};
