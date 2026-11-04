import type { HubSeoContent } from "./types";
import { paths } from "@/content/internalLinks";

export const industriesHubSeo: HubSeoContent = {
  heading: "Elevator solutions by industry and building type",
  lead:
    "Traffic pattern, duty, and compliance differ by vertical. Use these industry pages to map your building type to the right Relicomp products and services.",
  body: [
    {
      type: "paragraph",
      text: "A hospital elevator brief is not a villa brief. Relicomp organizes guidance by industry so architects, builders, and facility managers can open the right product cluster without wading through the full catalog first.",
    },
    {
      type: "heading",
      level: 2,
      text: "Residential & apartments",
      id: "residential",
    },
    {
      type: "paragraph",
      text: "[Apartments & residential](/industries/apartments-residential) projects combine [home elevators](/products/home-elevators) for villas with multi-stop passenger lifts ([MRL](/products/mrl-elevators) or [traction](/products/traction-elevators)) for society cores. Noise, shaft efficiency, and AMC response matter as much as cabin finishes.",
    },
    {
      type: "heading",
      level: 2,
      text: "Offices, hotels & hospitals",
      id: "commercial-health",
    },
    {
      type: "paragraph",
      text: "[Commercial offices](/industries/commercial-offices) emphasize peak lobby handling and reliability. Hotels & restaurants often need guest lifts plus service or [dumbwaiter](/products/goods-lifts-dumbwaiters) paths. Hospitals prioritize wide, cleanable, high-availability passenger systems for patients and staff.",
    },
    {
      type: "heading",
      level: 2,
      text: "Warehouses & industrial",
      id: "industrial",
    },
    {
      type: "paragraph",
      text: "Warehouses & industrial sites specify [goods lifts](/products/goods-lifts-dumbwaiters) for load and door width first. Finishes are secondary to duty cycle, safety, and service access for production downtime risk.",
    },
    {
      type: "paragraph",
      text: "After you shortlist an industry, open linked product pages, then request a survey with building type, floors, and city so we can recommend capacity and drive correctly.",
    },
  ],
  faqs: [
    {
      question: "Which industry page should a villa owner use?",
      answer:
        "Start with apartments & residential for context, then go directly to home elevators or hydraulic elevators product pages for residential specifications.",
    },
    {
      question: "Do hospitals need different elevators than offices?",
      answer:
        "Often yes. Cabin size, duty, cleanliness, and reliability targets differ. Use the hospitals industry page and discuss stretcher/patient movement needs during survey.",
    },
    {
      question: "Can one project mix passenger and goods elevators?",
      answer:
        "Yes. Hotels, hospitals, and mixed-use buildings frequently separate passenger and goods/service traffic. We scope each duty stream independently.",
    },
  ],
  related: [
    { href: paths.residential, label: "Apartments & residential", kind: "industry" },
    { href: paths.commercial, label: "Commercial offices", kind: "industry" },
    { href: paths.productsHub, label: "All products", kind: "product" },
  ],
};
