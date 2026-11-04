import type { HubSeoContent } from "./types";
import { paths } from "@/content/internalLinks";

export const locationsHubSeo: HubSeoContent = {
  heading: "Elevator service locations across Karnataka & Tamil Nadu",
  lead:
    "City pages for surveys, installation, and AMC, starting with Bangalore and Mysore, plus active service towns with real regional context.",
  body: [
    {
      type: "paragraph",
      text: "Local SEO for elevators is about response time and site familiarity, not cloned city copy. Relicomp lists locations we actively serve, with verified branch NAP where we have offices, and service-area pages for towns covered by regional teams.",
    },
    {
      type: "heading",
      level: 2,
      text: "Bangalore & Mysore hubs",
      id: "hubs",
    },
    {
      type: "paragraph",
      text: "[Bangalore](/locations/bangalore) is our densest market for [home lifts](/products/home-elevators), commercial passenger elevators, goods lifts, and AMC. Head office (Vijayanagar), Jigani branch, and Magadi manufacturing support projects across the metro. [Mysore](/locations/mysore) has dedicated branch context for residential and commercial work in and around the city.",
    },
    {
      type: "heading",
      level: 2,
      text: "Other cities we serve",
      id: "other-cities",
    },
    {
      type: "paragraph",
 text: "Open the [Hassan](/locations/hassan) page for local details on elevator company and home lift service in that market. Each page is written for genuine planning, not as a thin duplicate of Bangalore content.",
    },
    {
      type: "list",
      items: [
        "Free site surveys for new installs in covered cities",
        "Installation teams coordinated from regional hubs",
        "AMC and breakdown support with local routing",
        "Manufacturer-backed recommendations from Magadi production",
      ],
    },
    {
      type: "paragraph",
 text: "Not sure if your pin code is covered? [Contact us](/contact) with city and project type. We will confirm feasibility and schedule.",
    },
  ],
  faqs: [
    {
      question: "Do you install home elevators outside Bangalore?",
      answer:
        "Yes. We install across multiple Karnataka and Tamil Nadu cities listed on this directory, subject to site access and commercial feasibility after survey.",
    },
    {
      question: "Where should I call for Bangalore projects?",
      answer:
        "Use the Contact page for the Bengaluru head office number and WhatsApp. The Bangalore location page also summarizes NAP and local focus areas.",
    },
    {
      question: "Is Magadi the factory or a showroom?",
      answer:
        "Magadi Road hosts manufacturing support for Relicomp elevators. Customer meetings typically start via contact/survey; factory visits can be arranged when relevant to the project.",
    },
  ],
  related: [
    { href: paths.bangalore, label: "Bangalore elevators", kind: "location" },
    { href: paths.mysore, label: "Mysore elevators", kind: "location" },
    { href: paths.homeElevators, label: "Home elevators", kind: "product" },
    { href: paths.amc, label: "Lift AMC service", kind: "service" },
    { href: paths.contact, label: "Contact / survey", kind: "page" },
  ],
};
