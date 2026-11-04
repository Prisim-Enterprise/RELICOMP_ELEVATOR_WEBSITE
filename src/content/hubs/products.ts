import type { HubSeoContent } from "./types";
import { paths } from "@/content/internalLinks";

export const productsHubSeo: HubSeoContent = {
  heading: "Elevator products for homes, commercial buildings & industry",
  lead:
    "A manufacturer catalog for South India: choose by use case, then open a product page for specs, planning ranges, and FAQs before you request a survey.",
  body: [
    {
      type: "paragraph",
      text: "Relicomp’s product hub is the starting point when you need a [home elevator](/products/home-elevators), passenger lift, [goods lift or dumbwaiter](/products/goods-lifts-dumbwaiters), or architectural [capsule/glass elevator](/products/capsule-glass-elevators). Each product page owns its commercial keywords in depth; this hub helps you shortlist the right category quickly.",
    },
    {
      type: "heading",
      level: 2,
      text: "Home & low-rise residential",
      id: "home-residential",
    },
    {
      type: "paragraph",
      text: "[Home elevators](/products/home-elevators) focus on compact shafts, quiet travel, and cabin personalization for villas and duplexes. [Hydraulic elevators](/products/hydraulic-elevators) remain a strong option for low- to mid-rise homes where smooth starts and load capacity matter. For budget planning, size the shaft first: a 2-person home lift typically needs around 700-900 mm of clear shaft width, a 3-person around 900-1100 mm, and a 4-person cabin around 1100-1400 mm, all layout dependent. That footprint drives the civil work, and the civil work drives the quote.",
    },
    {
      type: "heading",
      level: 2,
      text: "Mid-rise passenger elevators",
      id: "passenger",
    },
    {
      type: "paragraph",
      text: "[MRL (machine-room-less) elevators](/products/mrl-elevators) save machine-room space and suit many apartment and boutique commercial cores. [Traction elevators](/products/traction-elevators) handle higher capacity and frequent use in office towers and taller residential blocks. Compare drive types in hydraulic vs traction and what is an MRL elevator.",
    },
    {
      type: "heading",
      level: 2,
      text: "Goods, service & design-forward units",
      id: "goods-design",
    },
    {
      type: "paragraph",
      text: "Material handling uses [goods lifts and dumbwaiters](/products/goods-lifts-dumbwaiters) with clear duty and door width requirements. When the elevator is a visual centerpiece, [capsule and glass elevators](/products/capsule-glass-elevators) combine panoramic design with traction or MRL drive options.",
    },
    {
      type: "heading",
      level: 2,
      text: "After you pick a product",
      id: "next-steps",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Open the product page for specs, FAQs, and planning tables",
        "Review [installation](/services/elevator-installation) and [AMC](/services/lift-amc-maintenance) services",
        "Request a free site survey from [contact](/contact) with floors, city, and preferred type",
      ],
    },
  ],
  faqs: [
    {
      question: "How do I choose between home elevator and hydraulic home lift?",
      answer:
        "Both serve residential low-rise use. Hydraulic systems often suit smooth low-speed travel and certain pit/headroom conditions; other home elevator packages may use compact traction or MRL approaches. Survey confirms which package fits your shaft and floors.",
    },
    {
      question: "Are online elevator prices final?",
      answer:
        "No. Published ranges are for planning only. Final quotes depend on stops, capacity, cabin finishes, shaft/civil readiness, and safety configuration after site survey.",
    },
    {
      question: "Do you install and maintain products you manufacture?",
      answer:
        "Yes. Relicomp supports installation, modernization, and AMC so ownership stays with one regional manufacturer brand.",
    },
    {
      question: "Which product page should apartment builders open first?",
      answer:
        "Start with MRL elevators or traction elevators depending on rise, traffic, and machine-room constraints, then review the apartments industry page for residential-core planning notes.",
    },
  ],
  related: [
    { href: paths.homeElevators, label: "Home elevators", kind: "product" },
    { href: paths.goodsLifts, label: "Goods lifts & dumbwaiters", kind: "product" },
    { href: paths.mrlElevators, label: "MRL elevators", kind: "product" },
    { href: paths.servicesHub, label: "Elevator services", kind: "service" },
    { href: paths.blogHomePrice, label: "Home lift price guide", kind: "blog" },
    { href: paths.contact, label: "Get a free quote", kind: "page" },
  ],
};
