import type { ProductPageContent } from "../types";
import { productImages } from "../images";

/**
 * /products/mrl-elevators
 * Primary: mrl elevator | Include What is MRL? + MRL vs MR
 * Target: 1,000–1,300 words
 */
export const mrlElevators: ProductPageContent = {
 slug: "mrl-elevators",
 kind: "product",
 h1: "MRL Elevators: Machine Room Less Lifts",
 heroImage: productImages["mrl-elevators"],
 heroAlt:
 "Machine room less MRL elevator installation for modern mid-rise buildings",
 intro:
 "MRL elevators (machine room less lifts) free valuable floor area by integrating the drive into the shaft or adjacent space, ideal for apartments, boutique hotels, and low- to mid-rise commercial buildings. Relicomp designs and installs MRL elevator systems as a manufacturer with Magadi production support, serving Bangalore and projects across Karnataka and Tamil Nadu.",
 primaryKeyword: "mrl elevator",
 wordCountTarget: [1000, 1300],
 pricesApproved: false,
 specs: [
 {
 label: "Full name",
 value: "Machine Room Less (MRL) traction elevator",
 },
 {
 label: "Machine room",
 value: "Not required: drive integrated in shaft / overhead design",
 },
 {
 label: "Typical applications",
 value: "Apartments, boutique hotels, offices, mid-rise residential",
 },
 {
 label: "Drive",
 value: "Gearless / geared traction with counterweight (design-specific)",
 },
 {
 label: "Ride quality",
 value: "Quiet, efficient operation for frequent passenger use",
 },
 {
 label: "Energy",
 value: "Efficient traction duty vs oversized legacy hydraulic on taller rises",
 },
 {
 label: "Cabin",
 value: "Custom finishes; SS, glass accents, architectural interiors",
 },
 {
 label: "Safety",
 value: "Interlocks, overload, rescue provisions per specification",
 },
 {
 label: "Service",
 value: "Installation + optional lift AMC",
 },
 {
 label: "Manufacturing",
 value: "Relicomp Magadi facility: custom dimensions available",
 },
 ],
 body: [
 {
 type: "heading",
 level: 2,
 text: "What is an MRL elevator?",
 id: "what-is-mrl",
 },
 {
 type: "paragraph",
 text: "An MRL elevator is a machine room less lift: the traction machine and control equipment are arranged so a separate full machine room above or beside the shaft is not required. That recovers rentable area on the roof or upper floor and simplifies architectural massing for many modern buildings, especially [apartments](/industries/apartments-residential) and [commercial offices](/industries/commercial-offices) where every square metre counts. If you are new to the packaging, start with our plain-language guide on what an MRL elevator is; if you already know you need traction duty, compare traditional [traction elevators](/products/traction-elevators) with MRL on access and service design.",
 },
 {
 type: "paragraph",
 text: "Searches for “what is an mrl elevator” and “machine room less lift” reflect buyers comparing space savings against traditional machine-room (MR) traction designs. MRL is still a passenger elevator, rated load, doors, safety gear, and ride comfort remain first-class requirements, not a compromise product.",
 },
 {
 type: "heading",
 level: 2,
 text: "MRL elevator vs machine-room (MR) traction",
 id: "mrl-vs-mr",
 },
 {
 type: "paragraph",
 text: "Both MRL and classic MR traction elevators use ropes/belts and a traction machine with a counterweight. The difference is packaging:",
 },
 {
 type: "list",
 items: [
 "MR traction: dedicated machine room for equipment access and some maintenance layouts",
 "MRL: machine integrated into shaft/overhead design; access procedures defined in the maintenance plan",
 "Space: MRL frees machine-room volume for architecture or revenue space",
 "Service: both need trained technicians; MRL access paths must be planned at design stage",
 "Application: mid-rise residential and commercial often favour MRL; some high-duty towers still specify traditional rooms",
 ],
 },
 {
 type: "paragraph",
 text: "Relicomp helps architects and owners choose MRL vs MR after reviewing floors, traffic, overhead constraints, and long-term AMC practicality, not slogans alone.",
 },
 {
 type: "heading",
 level: 2,
 text: "MRL elevator vs hydraulic",
 id: "mrl-vs-hydraulic",
 },
 {
 type: "paragraph",
 text: "Hydraulic systems remain strong for many low-rise home elevators. MRL traction typically suits taller travel, higher duty cycles, and buildings that want machine-room-free passenger service. Energy profile, speed, civil provisions, and maintenance differ. For villa-scale hydraulic lift for home projects, see our hydraulic elevators page; for multi-storey passenger buildings, MRL is often on the shortlist.",
 },
 {
 type: "component",
 name: "AMCComparisonTable",
 props: {
 title: "MRL vs MR traction vs hydraulic: how they compare",
 columns: ["Consideration", "MRL traction", "MR traction", "Hydraulic"],
 rows: [
 [
 "Machine room",
 "Not required; drive integrated in shaft or overhead",
 "Dedicated machine room required",
 "Compact power pack, no overhead machine room",
 ],
 [
 "Best-suited rise",
 "Low to mid-rise passenger buildings",
 "Mid-rise to high-duty towers",
 "Low-rise homes and buildings",
 ],
 [
 "Typical application",
 "Apartments, boutique hotels, offices",
 "High-duty towers and heavy traffic cores",
 "Villas, duplexes, low-rise residential",
 ],
 [
 "Space impact",
 "Frees machine-room volume for architecture or revenue space",
 "Machine-room volume is given over to equipment",
 "No machine room, but pit and power-pack space needed",
 ],
 [
 "Service access",
 "Access paths must be planned at design stage",
 "Conventional access via the machine room",
 "Familiar serviceability for low-rise duty",
 ],
 [
 "Drive",
 "Gearless or geared traction with counterweight",
 "Traction machine with counterweight",
 "Fluid power, no counterweight",
 ],
 ],
 },
 },
 {
 type: "heading",
 level: 2,
 text: "Where MRL elevators work best",
 id: "use-cases",
 },
 {
 type: "list",
 items: [
 "Apartment and residential towers with limited roof machine-room appetite",
 "Boutique hotels and serviced apartments",
 "Office floors where every square metre counts",
 "Mixed-use mid-rise projects with architectural roofscapes",
 "Modernisations where converting to MRL is evaluated case-by-case",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "MRL elevator manufacturers: why manufacture matters",
 id: "manufacturers",
 },
 {
 type: "paragraph",
 text: "Choosing MRL elevator manufacturers is about drawings, shaft interfaces, and service, not only a brand badge. Relicomp manufactures with Magadi support and installs with local teams in Bangalore and regional cities, so cabin dimensions and finishes can be tailored while installation and AMC stay accountable.",
 },
 {
 type: "heading",
 level: 2,
 text: "MRL elevator price in Bangalore (planning)",
 id: "price",
 },
 {
 type: "paragraph",
 text: "MRL elevator price in Bangalore depends on capacity, speed, stops, door type, finishes, and shaft readiness. We do not publish fixed public INR cards here until commercial ranges are approved. Request a survey-led quotation with floor count and traffic assumptions for a realistic figure.",
 },
 {
 type: "heading",
 level: 2,
 text: "Next steps",
 id: "next-steps",
 },
 {
 type: "paragraph",
 text: "Share floors, expected passengers per five minutes (or residential unit count), and city. We will recommend MRL vs alternatives, outline shaft GA needs, and propose installation plus optional AMC.",
 },
 ],
 faqs: [
 {
 question: "What is an MRL elevator?",
 answer:
 "An MRL (machine room less) elevator is a traction passenger lift that does not need a separate full machine room, the drive is integrated into the shaft design. It saves building space while remaining a full passenger elevator.",
 },
 {
 question: "Is MRL better than hydraulic for homes?",
 answer:
 "It depends on floors and duty. Many low-rise homes suit hydraulic; taller or higher-use residential buildings may favour MRL traction. Relicomp recommends after survey.",
 },
 {
 question: "Do MRL elevators need more maintenance access planning?",
 answer:
 "Yes. Because equipment sits in the shaft package, safe access routes and AMC procedures must be designed in. We cover this in handover and maintenance agreements.",
 },
 {
 question: "Are you MRL elevator manufacturers in Bangalore?",
 answer:
 "Relicomp manufactures and installs MRL elevators with Magadi facility support and Bengaluru-region teams. Contact us for project-specific manufacturing scope.",
 },
 {
 question: "What affects MRL elevator price in Bangalore?",
 answer:
 "Stops, capacity, speed, doors, cabin finishes, and civil readiness. We quote after understanding the building rather than offering a single online price.",
 },
 ],
 related: [
    { href: "/industries/commercial-offices", label: "Commercial offices", kind: "industry" },
    { href: "/services/elevator-installation", label: "Installation", kind: "service" },

 {
 href: "/products/traction-elevators",
 label: "Traction & passenger lifts",
 kind: "product",
 },
 {
 href: "/products/hydraulic-elevators",
 label: "Hydraulic lift for home",
 kind: "product",
 },
 {
 href: "/products/home-elevators",
 label: "Home elevators",
 kind: "product",
 },
 {
 href: "/services/lift-amc-maintenance",
 label: "Lift AMC",
 kind: "service",
 },
 {
 href: "/locations/bangalore",
 label: "Bangalore elevators",
 kind: "location",
 },
 {
 href: "/contact",
 label: "Request an MRL quote",
 kind: "service",
 },
 ],
 cta: {
 heading: "Specify an MRL elevator for your building",
 body: "Share floors, traffic, and city. Relicomp will confirm machine room less suitability and provide a survey-led quotation.",
 buttonLabel: "Request a quote",
 href: "/contact?topic=mrl-elevators&product=mrl-elevators",
 },
 seo: {
 title: "MRL Elevators: Machine Room Less",
 description:
 "MRL elevators (machine room less lifts) for apartments & mid-rise buildings. What is MRL, MRL vs MR & hydraulic. Relicomp manufacturers. Free survey.",
 canonicalPath: "/products/mrl-elevators",
 ogImage: "/og/default.png",
 keywords: [
 "mrl elevator",
 "machine room less lift",
 "mrl elevator manufacturers",
 "what is an mrl elevator",
 "mrl elevator vs hydraulic",
 "mrl elevator price in Bangalore",
 ],
 },
};
