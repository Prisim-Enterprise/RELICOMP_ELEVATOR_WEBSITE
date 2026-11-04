import type { HubSeoContent } from "./types";
import { paths } from "@/content/internalLinks";

export const projectsHubSeo: HubSeoContent = {
  heading: "Elevator projects across Karnataka & Tamil Nadu",
  lead:
 "A practical portfolio of residential, commercial, and industrial installations, useful when you are benchmarking scope, not only aesthetics.",
  body: [
    {
      type: "paragraph",
      text: "Relicomp’s project work spans luxury villa [home elevators](/products/home-elevators) in Bangalore, multi-stop passenger lifts in apartment cores, hospital and hotel traffic systems, office towers, retail atria, and industrial [goods lifts](/products/goods-lifts-dumbwaiters). The grid above is a sample of install types we survey, manufacture for, and commission regularly.",
    },
    {
      type: "heading",
      level: 2,
      text: "Residential installations",
      id: "residential-projects",
    },
    {
      type: "paragraph",
      text: "Home and duplex lifts prioritize quiet ride quality, compact shaft packaging, and cabin finishes that match interiors. Apartment complexes typically need durable passenger elevators with clear duty rating for peak morning and evening traffic. Browse [apartments & residential industry guidance](/industries/apartments-residential) if you are specifying for a society or builder.",
    },
    {
      type: "heading",
      level: 2,
      text: "Commercial & institutional",
      id: "commercial-projects",
    },
    {
      type: "paragraph",
      text: "Offices, malls, hotels, and hospitals separate guest/patient traffic from service or goods paths where possible. [Traction elevators](/products/traction-elevators) and [MRL elevators](/products/mrl-elevators) are common passenger choices; hospitals also evaluate wider cabins and reliability under continuous use. See [commercial offices](/industries/commercial-offices), hospitals, and hotels & restaurants.",
    },
    {
      type: "heading",
      level: 2,
      text: "Industrial goods movement",
      id: "industrial-projects",
    },
    {
      type: "paragraph",
 text: "Factory and warehouse lifts are sized for load, door clear width, and duty cycle, not passenger aesthetics. Our goods lift and factory elevator projects in cities such as Dindigul and Hospete reflect that engineering-first approach. More context lives under warehouses & industrial.",
    },
    {
      type: "paragraph",
 text: "Want a similar outcome on your site? Share floors, city, and elevator type via [contact](/contact). We arrange a free survey and a scope that matches traffic and civil readiness.",
    },
  ],
  faqs: [
    {
      question: "Can I visit a similar Relicomp installation near my city?",
      answer:
        "Depending on privacy and access permissions, we can discuss relevant case types during consultation. Start with the city pages under Locations and request a survey so we can match product type to your building.",
    },
    {
      question: "Do project photos show exact models I will receive?",
      answer:
        "Portfolio images illustrate installation types and finishes. Your final cabin, capacity, and drive are specified after survey and commercial approval.",
    },
    {
      question: "Which cities appear most often in Relicomp projects?",
      answer:
        "Bangalore and Mysore lead volume, with active work across Hassan, Udupi, Hospete, Kushalnagar, Chamarajanagara, Dindigul, and surrounding towns in Karnataka and Tamil Nadu.",
    },
  ],
  related: [
    { href: paths.productsHub, label: "Match a product to your project", kind: "product" },
    { href: paths.installation, label: "Elevator installation process", kind: "service" },
    { href: paths.bangalore, label: "Bangalore elevator company", kind: "location" },
    { href: paths.mysore, label: "Mysore service area", kind: "location" },
    { href: paths.contact, label: "Start your project survey", kind: "page" },
  ],
};
