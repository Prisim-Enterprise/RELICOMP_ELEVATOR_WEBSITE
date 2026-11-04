import type { LocationPageContent } from "../types";
import { brand, branches, openingHours } from "../site";

export const mysore: LocationPageContent = {
 slug: "mysore",
 kind: "location",
 h1: "Elevator Company in Mysore: Relicomp Elevators",
 cityName: "Mysuru",
 intro:
 "Relicomp serves Mysuru (Mysore) with a local branch office and full elevator capabilities: home lifts, passenger elevators, goods and dumbwaiter systems, installation, and lift AMC. If you are searching for an elevator company in Mysore or home lift Mysore support with a real address and service path, our Madhuvana Layout branch anchors regional work across the heritage city and surrounding corridors.",
 primaryKeyword: "elevator company in mysore",
 wordCountTarget: [600, 800],
 hasVerifiedBranch: true,
 areaServed: [
 "Mysuru city",
 "Vijayanagar",
 "Gokulam",
 "Hebbal",
 "Kuvempunagar",
 "Industrial outskirts",
 "Near-ring road residential projects",
 ],
 localProof: [
 {
 kind: "branch",
 nap: {
 streetAddress: branches.mysuru.streetAddress,
 addressLocality: branches.mysuru.addressLocality,
 postalCode: branches.mysuru.postalCode,
 telephone: branches.mysuru.telephone,
 },
 },
 {
 kind: "sla",
 text: "Branch-supported surveys for Mysuru home and commercial enquiries; coordination with Bengaluru manufacturing at Magadi for custom cabins. Typical first response within 24 hours on working days for qualified leads.",
 },
 {
 kind: "project",
 name: "Heritage-city residential & hospitality installs",
 summary:
 "Villa and low-rise residential lifts, hospitality service elevators, and maintenance coverage for clients who need local attendance without depending only on a distant call centre.",
 },
 ],
 body: [
 {
 type: "heading",
 level: 2,
 text: "Why Mysuru projects need local elevator support",
 id: "why",
 },
 {
 type: "paragraph",
 text: "Mysuru’s mix of heritage precincts, expanding residential layouts, and hospitality properties creates elevator needs that differ from pure metro towers. Home lift Mysore enquiries often involve villa retrofits and new duplexes, where [home elevators](/products/home-elevators) are the usual starting brief, while hotels need guest cars plus kitchen service paths and institutions need reliable passenger service with clear [lift AMC](/services/lift-amc-maintenance). Relicomp’s Mysuru branch supports survey and [installation](/services/elevator-installation) without treating the city as a second-class outstation stop.",
 },
 {
 type: "heading",
 level: 2,
 text: "What we offer in Mysore",
 id: "offer",
 },
 {
 type: "list",
 items: [
 "Home elevators and hydraulic lift for home configurations",
 "Passenger / MRL lifts for multi-storey residential and commercial",
 "Goods lifts and dumbwaiters for hospitality and logistics",
 "Elevator installation and lift modernization assessments",
 "Lift AMC and breakdown support under contract",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "Which elevator suits a Mysuru building?",
 id: "choosing",
 },
 {
 type: "paragraph",
 text: "Most Mysuru briefs fall into three groups. Independent houses and duplexes across layouts such as Vijayanagar, Kuvempunagar and Srirampura usually need a two to four stop home lift, where shaft width decides the cabin: roughly 700-900 mm clear for a 2-person car and 1100-1400 mm for a 4-person car. Apartment and commercial blocks in the taller pockets near the Ring Road typically need traction or MRL packaging, because rise and traffic rise together. Hotels and hospitality properties near the palace precinct almost always need two separate paths, a guest passenger car and a goods lift or dumbwaiter for kitchen and housekeeping, so that service movement never shares a car with guests.",
 },
 {
 type: "paragraph",
 text: "Retrofits deserve special mention, because a large share of Mysuru home-lift work is adding a lift to a house that was not designed for one. That usually means building a new shaft in a stairwell void or an external shaft against the rear elevation, and it makes the site survey more important than the product choice. Headroom at the top floor, pit depth below the lowest stop, and a clean route to bring material in are the three things that most often change a Mysuru retrofit design after the first visit.",
 },
 {
 type: "heading",
 level: 2,
 text: "Regulatory position in Karnataka",
 id: "compliance",
 },
 {
 type: "paragraph",
 text: "Mysuru installations fall under the Karnataka Lifts, Escalators and Passenger Conveyors Act, 2012, which has applied statewide since 20 January 2015 and was amended in 2025. It requires that a lift be purchased from a company on the roll of the Chief Inspector of Lifts, Escalators and Passenger Conveyors, and that the installation be licensed before it carries passengers. Equipment is separately governed by the BIS IS 14665 series, and shaft and building provisions by the National Building Code of India 2016, Part 8 Section 5, as adopted into local bye-laws. Ask for the registration position of any supplier you shortlist in Mysuru, not only their price.",
 },
 {
 type: "heading",
 level: 2,
 text: "Response times and service coverage",
 id: "coverage",
 },
 {
 type: "paragraph",
 text: `The reason Relicomp keeps a Madhuvana Layout branch rather than running Mysuru from Bengaluru is attendance time. A breakdown call answered from a local branch reaches most Mysuru addresses the same working day, whereas an outstation visit from Bengaluru is roughly 150 km each way and usually becomes a next-day attendance. For buildings under AMC this is the difference that matters most, and it is why coverage is quoted from the branch rather than as a distant add-on. Office hours are Monday to Saturday, ${openingHours.opens} to ${openingHours.closes}, and survey visits across Mysuru are free.`,
 },
 {
 type: "heading",
 level: 2,
 text: "Branch address",
 id: "address",
 },
 {
 type: "paragraph",
 text: `Relicomp Branch Office, Mysuru: ${branches.mysuru.streetAddress}, ${branches.mysuru.addressLocality} ${branches.mysuru.postalCode}. Phone: ${brand.phoneDisplay}. Manufacturing support from Magadi, Bengaluru, for custom cabin work.`,
 },
 {
 type: "heading",
 level: 2,
 text: "How to start",
 id: "start",
 },
 {
 type: "list",
 ordered: true,
 items: [
 "Share floors, lift type interest, and Mysuru locality",
 "Book a site survey via the branch / contact form",
 "Review configuration and scope-separated quotation",
 "Install and optionally enrol in AMC",
 ],
 },
 ],
 faqs: [
 {
 question: "Do you have an office in Mysore?",
 answer:
 "Yes. Relicomp has a branch at Madhuvana Layout, Srirampura 2nd Stage, Mysuru. Contact us for directions and survey scheduling.",
 },
 {
 question: "Do you install home lifts in Mysore?",
 answer:
 "Yes. Home lift and residential elevator projects across Mysuru are in scope, with manufacturing support from our Magadi facility.",
 },
 {
 question: "Can I get lift AMC in Mysore?",
 answer:
 "AMC is available for contracted elevators in our service regions including Mysuru. Share machine details for a proposal.",
 },
 ],
 related: [
 { href: "/locations/bangalore", label: "Bangalore location", kind: "location" },
 { href: "/products/home-elevators", label: "Home elevators", kind: "product" },
 { href: "/services/lift-amc-maintenance", label: "Lift AMC", kind: "service" },
 { href: "/services/elevator-installation", label: "Installation", kind: "service" },
 { href: "/contact", label: "Contact Mysore team", kind: "service" },
 ],
 cta: {
 heading: "Talk to Relicomp in Mysuru",
 body: "Share your locality, floors, and lift type. We will arrange a survey through our Mysore branch network.",
 buttonLabel: "Request Mysore survey",
 href: "/contact?topic=mysore&city=Mysuru",
 },
 seo: {
 title: "Elevator Company in Mysore",
 description:
 "Elevator company in Mysore with local branch. Home lifts, passenger elevators, goods lifts, installation & AMC. Madhuvana Layout office. Free survey.",
 canonicalPath: "/locations/mysore",
 ogImage: "/og/default.png",
 keywords: [
 "elevator company in mysore",
 "lift service in mysore",
 "home lift mysore",
 ],
 },
};
