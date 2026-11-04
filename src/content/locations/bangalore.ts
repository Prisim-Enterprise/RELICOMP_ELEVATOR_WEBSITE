import type { LocationPageContent } from "../types";
import { brand, branches } from "../site";

/**
 * /locations/bangalore
 * Primary: lift companies in bangalore
 * Target: 1,000–1,400 words: verified NAP + local proof (not thin doorway)
 */
export const bangalore: LocationPageContent = {
 slug: "bangalore",
 kind: "location",
 h1: "Lift Companies in Bangalore: Relicomp Elevators",
 cityName: "Bengaluru",
 intro:
 "Looking for lift companies in Bangalore that manufacture, install, and maintain elevators, not only resell brochures? Relicomp Elevators is a Bengaluru-region elevator company with head office in Vijayanagar, a Magadi manufacturing facility, branch presence at Jigani, and 16+ years delivering home lifts, passenger elevators, goods lifts, and AMC across the city and wider South India.",
 primaryKeyword: "lift companies in bangalore",
 wordCountTarget: [1000, 1400],
 hasVerifiedBranch: true,
 areaServed: [
 "Bengaluru",
 "Whitefield",
 "Electronic City",
 "Yelahanka",
 "Sarjapur",
 "Mysuru road corridor",
 "Magadi road corridor",
 "Jigani / Anekal",
 "Greater Bengaluru residential & commercial projects",
 ],
 localProof: [
 {
 kind: "branch",
 nap: {
 streetAddress: branches.bangalore.streetAddress,
 addressLocality: branches.bangalore.addressLocality,
 postalCode: branches.bangalore.postalCode,
 telephone: branches.bangalore.telephone,
 },
 },
 {
 kind: "branch",
 nap: {
 streetAddress: branches.magadiFactory.streetAddress,
 addressLocality: "Magadi Road, Bengaluru",
 postalCode: branches.magadiFactory.postalCode,
 telephone: branches.magadiFactory.telephone,
 },
 },
 {
 kind: "sla",
 text: "Free site surveys across Bengaluru for qualified home and commercial lift enquiries; typical first response within 24 hours on working days. AMC and breakdown attendance prioritised for contracted sites in core city routes.",
 },
 {
 kind: "project",
 name: "Residential & commercial installations citywide",
 summary:
 "600+ installations across Karnataka & Tamil Nadu with a strong Bengaluru base, villas, low-rise residences, commercial back-of-house lifts, and goods/dumbwaiter projects supported from local teams.",
 },
 ],
 body: [
 {
 type: "heading",
 level: 2,
 text: "Why Bangalore property owners choose a local elevator company",
 id: "why-local",
 },
 {
 type: "paragraph",
 text: "Bengaluru’s housing stock mixes independent villas, gated communities, low-rise apartments, and dense commercial corridors. Elevator work here is rarely “drop a catalogue cabin and leave.” Shaft constraints, retrofit stair voids, power realities, and the need for after-sales [lift AMC](/services/lift-amc-maintenance) make local manufacturers more practical than distant trading desks. North-side homes often start with a [home elevator](/products/home-elevators) conversation, including Hennur, while industrial belts around Jigani lean toward [goods lifts](/products/goods-lifts-dumbwaiters) and service elevators.",
 },
 {
 type: "paragraph",
 text: "Relicomp combines city sales offices with manufacturing at Magadi Main Road, so home lift Bangalore projects, hydraulic residential elevators, and goods lift work can be coordinated without every special part waiting on an opaque import chain.",
 },
 {
 type: "heading",
 level: 2,
 text: "What we supply and install in Bengaluru",
 id: "what-we-supply",
 },
 {
 type: "list",
 items: [
 "Home elevators & home lifts for villas and duplexes",
 "Hydraulic lift for home configurations where low-rise duty fits",
 "Goods lifts, dumbwaiters, and service lifts for F&B and logistics",
 "Passenger / commercial elevators scoped to building traffic",
 "Lift AMC and elevator maintenance for contracted sites",
 "Custom cabin manufacturing for architectural finishes",
 ],
 },
 {
 type: "paragraph",
 text: "Explore detailed product pages for home elevators, hydraulic elevators, and goods lifts & dumbwaiters. Each page owns its commercial keywords; this location page helps you evaluate Relicomp as one of the lift companies in Bangalore with real addresses and service capacity.",
 },
 {
 type: "heading",
 level: 2,
 text: "Lift manufacturers in Bangalore: Magadi factory advantage",
 id: "manufacturers",
 },
 {
 type: "paragraph",
 text: "Searches for lift manufacturers in Bangalore and goods lift manufacturers in Bangalore often separate factories from pure dealers. Relicomp’s Magadi facility supports cabin and component work with quality control closer to the installation city. That matters when dimensions change mid-project, as they often do after the first site walk.",
 },
 {
 type: "paragraph",
 text: "Being a manufacturer does not remove the need for good installation discipline. Our process still runs survey → design → manufacture → install → test → handover, with optional AMC so the relationship continues after the last trial run.",
 },
 {
 type: "heading",
 level: 2,
 text: "Home lift Bangalore: villas, duplexes & accessibility",
 id: "home-lift-blr",
 },
 {
 type: "paragraph",
 text: "Home lift Bangalore demand is driven by multi-level living, ageing parents, and luxury convenience. We size 2- and 4-person options, discuss hydraulic vs other drives, and price only after seeing the shaft. For cost education, use the 2026 home lift price guide; for product fit, use the home elevators page; for a firm quote, book a Bengaluru survey.",
 },
 {
 type: "heading",
 level: 2,
 text: "Best elevator company in Bangalore: how to compare",
 id: "how-to-compare",
 },
 {
 type: "paragraph",
 text: "“Best elevator company in Bangalore” is a search phrase, not a trophy we can award ourselves. What you can verify:",
 },
 {
 type: "list",
 items: [
 "Physical offices and factory you can visit (Vijayanagar HQ, Jigani, Magadi)",
 "Clear scope on quotations, equipment vs civil vs electrical",
 "Safety devices and rescue provisions not stripped for a low bid",
 "AMC options with realistic response expectations",
 "Relevant project experience for homes vs goods vs hospitality",
 "Willingness to share GA thinking before you pay a large booking amount",
 ],
 },
 {
 type: "paragraph",
 text: `Relicomp publishes ${brand.yearsOfExcellence} years of industry work and ${brand.installations} installations across our regions. Call ${brand.phoneDisplay} or submit the contact form with your area name (Whitefield, Indiranagar, JP Nagar, Yelahanka, Sarjapur, etc.) so we route the right survey team.`,
 },
 {
 type: "heading",
 level: 2,
 text: "Service areas & response",
 id: "service-areas",
 },
 {
 type: "paragraph",
 text: "We regularly serve projects across greater Bengaluru, north, south, east, and west corridors, plus connected industrial belts such as Jigani. Exact AMC response times depend on contract tier and traffic; core-city contracted lifts generally receive faster attendance than far-peripheral sites. Lift AMC cost in Bangalore is quoted per machine after we know type, stops, and age. See our AMC service page for plan structure.",
 },
 {
 type: "heading",
 level: 2,
 text: "Our Bengaluru addresses",
 id: "addresses",
 },
 {
 type: "paragraph",
 text: `Head office: ${branches.bangalore.streetAddress}, ${branches.bangalore.addressLocality} ${branches.bangalore.postalCode}. Factory: ${branches.magadiFactory.streetAddress}, ${branches.magadiFactory.postalCode}. Jigani branch: ${branches.jigani.streetAddress}, ${branches.jigani.postalCode}. Phone: ${brand.phoneDisplay}.`,
 },
 {
 type: "heading",
 level: 2,
 text: "How to start a project in Bangalore",
 id: "how-to-start",
 },
 {
 type: "list",
 ordered: true,
 items: [
 "Send floors, lift type interest (home / hydraulic / goods / dumbwaiter), and locality",
 "Book a free site survey for qualified enquiries",
 "Review configuration options and scope-separated quotation",
 "Manufacture and install to an agreed civil-ready schedule",
 "Enrol in lift AMC for ongoing elevator maintenance",
 ],
 },
 ],
 faqs: [
 {
 question: "Which lift companies in Bangalore also manufacture elevators?",
 answer:
 "Relicomp operates manufacturing support at Magadi Main Road, Bengaluru, alongside city sales offices, so we are structured as a manufacturer-installer, not only a trading desk. Always verify factory and service capability when you compare vendors.",
 },
 {
 question: "Do you install home lifts in Bangalore?",
 answer:
 "Yes. Home lift Bangalore projects for villas and residences are a core segment, including hydraulic lift for home configurations where appropriate. Request a survey with your locality and floor count.",
 },
 {
 question: "Where is Relicomp’s head office in Bangalore?",
 answer:
 "Head office: #7, 2nd Floor, S.V. Arcade, Income Tax Layout, Chandra Layout, Vijayanagar, Bengaluru 560040. Factory on Magadi Main Road; additional branch at Jigani.",
 },
 {
 question: "What is lift AMC cost in Bangalore?",
 answer:
 "AMC cost depends on elevator type, stops, age, and plan tier. See our Lift AMC & Maintenance page for plan structure, then request a Bangalore-specific proposal for your machine.",
 },
 {
 question: "Are you goods lift manufacturers in Bangalore?",
 answer:
 "Yes, we manufacture and install goods lifts and dumbwaiters with Bengaluru-region production and service. Visit the goods lifts & dumbwaiters product page for technical detail.",
 },
 ],
 related: [
    { href: "/services/elevator-installation", label: "Installation", kind: "service" },

 {
 href: "/products/home-elevators",
 label: "Home elevators",
 kind: "product",
 },
 {
 href: "/products/hydraulic-elevators",
 label: "Hydraulic lift for home",
 kind: "product",
 },
 {
 href: "/products/goods-lifts-dumbwaiters",
 label: "Goods lifts & dumbwaiters",
 kind: "product",
 },
 {
 href: "/services/lift-amc-maintenance",
 label: "Lift AMC Bangalore",
 kind: "service",
 },
 {
 href: "/blog/home-lift-price-in-india-2026",
 label: "Home lift price guide",
 kind: "blog",
 },
 {
 href: "/locations/mysore",
 label: "Mysore branch",
 kind: "location",
 },
 {
 href: "/locations",
 label: "All service locations",
 kind: "location",
 },
 {
 href: "/contact",
 label: "Contact Relicomp Bangalore",
 kind: "service",
 },
 ],
 cta: {
 heading: "Talk to Relicomp in Bangalore",
 body: "Share your locality, floors, and lift type. We will arrange a site survey and a clear proposal from a Bengaluru elevator manufacturer with local service capacity.",
 buttonLabel: "Request Bangalore survey",
 href: "/contact?topic=bangalore&city=Bangalore",
 },
 seo: {
 title: "Lift Companies in Bangalore",
 description:
 "Lift companies in Bangalore: Relicomp makes and installs home lifts, hydraulic and goods lifts, plus AMC. Vijayanagar HQ, Magadi factory.",
 canonicalPath: "/locations/bangalore",
 ogImage: "/og/default.png",
 keywords: [
 "lift companies in bangalore",
 "home lift bangalore",
 "lift manufacturers in bangalore",
 "best elevator company in bangalore",
 "goods lift manufacturers in bangalore",
 "lift amc cost in bangalore",
 ],
 },
};
