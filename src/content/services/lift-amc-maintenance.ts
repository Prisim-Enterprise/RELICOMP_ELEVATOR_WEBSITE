import type { ServicePageContent } from "../types";
import { serviceImages } from "../images";

/**
 * /services/lift-amc-maintenance
 * Primary: elevator maintenance services + lift amc (SD 9 quick win)
 * Target: 900–1,200 words + AMC plan comparison table
 */
export const liftAmcMaintenance: ServicePageContent = {
 slug: "lift-amc-maintenance",
 kind: "service",
 h1: "Lift AMC & Elevator Maintenance Services",
 heroImage: serviceImages["lift-amc-maintenance"],
 heroAlt:
 "Relicomp technicians performing scheduled lift AMC maintenance on a passenger elevator",
 intro:
 "Keep every landing safe and every ride reliable with Relicomp lift AMC and elevator maintenance services. We provide scheduled preventive maintenance, breakdown support, and transparent service agreements for home elevators, passenger lifts, goods lifts, and dumbwaiters across Bangalore and our Karnataka & Tamil Nadu service regions.",
 primaryKeyword: "lift amc",
 wordCountTarget: [900, 1200],
 body: [
 {
 type: "heading",
 level: 2,
 text: "What is a lift AMC?",
 id: "what-is-lift-amc",
 },
 {
 type: "paragraph",
 text: "A lift AMC (Annual Maintenance Contract) is a service agreement under which a qualified elevator maintenance company inspects, lubricates, adjusts, and supports your lift on a defined schedule, and responds when something fails. Instead of calling vendors ad hoc after a breakdown, you lock in preventive visits, documented checks, and a clear path for spare parts and emergency attendance. What those visits usually cost is unpacked in lift AMC charges explained. If the machine is not yet on site, start with [elevator installation](/services/elevator-installation); if it is old but the shaft is sound, [lift modernization](/services/lift-modernization) may be a better conversation than endless breakdown calls.",
 },
 {
 type: "paragraph",
 text: "For homeowners, AMC protects a high-value residential asset and family safety. For apartments, hotels, hospitals, and warehouses, it reduces downtime, supports compliance culture, and keeps passenger or goods traffic moving. Relicomp acts as a lift AMC service provider for equipment we install and, where assessed feasible, for select existing installations after a condition survey.",
 },
 {
 type: "heading",
 level: 2,
 text: "Why elevator maintenance matters",
 id: "why-maintenance",
 },
 {
 type: "paragraph",
 text: "Elevators are electromechanical systems under daily stress: door cycles, guide friction, electrical noise, dust, humidity, and occasional misuse. Without structured elevator maintenance, small issues, door shoe wear, weak door locks, noisy rollers, controller faults, become stoppages that strand users or halt kitchen and warehouse logistics.",
 },
 {
 type: "list",
 items: [
 "Safety: interlocks, brakes, and overload behaviour need periodic verification",
 "Uptime: preventive work reduces surprise breakdowns during peak hours",
 "Lifecycle cost: early part replacement is cheaper than major failures",
 "Ride quality: smooth, quiet travel is a maintenance outcome, not luck",
 "Documentation: visit logs help property managers and audits",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "What Relicomp elevator maintenance services include",
 id: "whats-included",
 },
 {
 type: "paragraph",
 text: "Our elevator maintenance services are built around preventive routines plus responsive support. Exact inclusions depend on the AMC plan you choose, but a typical programme covers:",
 },
 {
 type: "list",
 items: [
 "Scheduled inspection visits at the agreed frequency",
 "Cleaning, lubrication, and adjustment of mechanical assemblies in scope",
 "Door operation checks and safety circuit verification",
 "Controller and landing equipment visual/functional checks",
 "Breakdown attendance as defined in the contract (with response targets)",
 "Guidance on spares: stocked common parts vs indent items",
 "Handover notes after major interventions",
 ],
 },
 {
 type: "paragraph",
 text: "AMC is not a blank cheque for every upgrade or civil repair. Shaft waterproofing, vandalism damage, third-party misuse, and major modernisation works are usually scoped separately, your agreement will spell out exclusions so lift AMC charges stay transparent.",
 },
 {
 type: "component",
 name: "AMCComparisonTable",
 props: {
 columns: ["Feature", "Essential", "Standard", "Comprehensive"],
 rows: [
 [
 "Preventive visit frequency",
 "Quarterly",
 "Bi-monthly",
 "Monthly",
 ],
 [
 "Breakdown support",
 "Business hours",
 "Extended hours",
 "Priority / 24×7 intent*",
 ],
 [
 "Safety & door checks",
 "Included",
 "Included",
 "Included + deeper audit notes",
 ],
 [
 "Minor adjustments & lubrication",
 "Included",
 "Included",
 "Included",
 ],
 [
 "Spares handling",
 "Chargeable parts",
 "Preferential parts process",
 "Priority parts + planning support",
 ],
 [
 "Visit reporting",
 "Basic log",
 "Written visit summary",
 "Detailed log + trend notes",
 ],
 [
 "Best for",
 "Low-traffic home lifts",
 "Most residences & small commercial",
 "High-use passenger / commercial",
 ],
 ],
 },
 },
 {
 type: "paragraph",
 text: "*Response windows depend on city, traffic, and technician availability. Bangalore-core and nearby service cities generally see faster attendance than remote sites. Final SLAs are written into your contract.",
 },
 {
 type: "heading",
 level: 2,
 text: "Lift AMC charges: what drives the cost?",
 id: "amc-charges",
 },
 {
 type: "paragraph",
 text: "Lift AMC charges are not a single national rate. Elevator maintenance cost reflects equipment type (home hydraulic vs MRL passenger vs goods lift), number of floors, age and condition, traffic intensity, brand of critical components, and whether the building is in Bangalore or another service town.",
 },
 {
 type: "paragraph",
 text: "Searches for lift AMC cost in Bangalore and lift AMC near me usually mean: “Who will actually show up, and what will yearly service cost for my lift?” Relicomp prices AMC after understanding the machine, often via a short condition check, rather than quoting a blind online number that ignores spares risk.",
 },
 {
 type: "list",
 items: [
 "Elevator type & stops: more landings and heavier duty raise effort",
 "Age & history: older units or poor past maintenance need denser visits",
 "Usage: hotel, hospital, and warehouse lifts work harder than villa lifts",
 "Spares model: comprehensive contracts may treat parts differently than essential plans",
 "Location: travel time and density of our technician routes affect coverage",
 ],
 },
 {
 type: "paragraph",
 text: "We do not publish fixed public AMC fee cards here until commercial rates are approved for the website. Request a quote with your lift type, floors, city, and preferred plan; we will propose lift AMC charges with clear inclusions and exclusions.",
 },
 {
 type: "heading",
 level: 2,
 text: "Lift AMC near me: Bangalore & regional coverage",
 id: "near-me-coverage",
 },
 {
 type: "paragraph",
 text: "Relicomp provides elevator maintenance company support from the Bengaluru region with branches and project history across Karnataka and Tamil Nadu. If you are comparing lift AMC vendors or lift AMC service providers, ask who holds your spares relationship, how visits are logged, and what happens after hours, not only who offers the lowest annual fee.",
 },
 {
 type: "paragraph",
 text: "Home elevators, passenger lifts, goods lifts, and dumbwaiters all need different attention patterns. A kitchen dumbwaiter in a busy restaurant is not maintained like a quiet two-stop villa lift; we match the plan to the duty cycle.",
 },
 {
 type: "heading",
 level: 2,
 text: "AMC after installation vs taking over an existing lift",
 id: "new-vs-existing",
 },
 {
 type: "paragraph",
 text: "If Relicomp installs your elevator, enrolling in AMC at handover is the smoothest path: our team already knows the machine, shaft conditions, and as-built details. For elevators installed by others, we may accept AMC after a paid or survey-based assessment. Safety-critical defects must be addressed before a standard maintenance contract starts.",
 },
 {
 type: "heading",
 level: 2,
 text: "How to enrol",
 id: "how-to-enrol",
 },
 {
 type: "list",
 ordered: true,
 items: [
 "Share lift type, floors, make/model if known, and city",
 "Select a preferred plan tier (Essential / Standard / Comprehensive)",
 "Schedule a condition review if the lift is not a Relicomp install",
 "Receive a written AMC proposal with visit frequency and exclusions",
 "Activate service and receive your maintenance calendar",
 ],
 },
 {
 type: "paragraph",
 text: "For residential buyers still specifying a new home elevator, plan AMC into ownership cost from day one. See our home elevators page and price guide for equipment context, then add maintenance as a line item in your lifecycle budget.",
 },
 ],
 faqs: [
 {
 question: "What is lift AMC?",
 answer:
 "Lift AMC is an Annual Maintenance Contract for elevators: scheduled preventive visits, adjustments, and agreed breakdown support from an elevator maintenance company so the lift stays safe and available through the year.",
 },
 {
 question: "How much are lift AMC charges in Bangalore?",
 answer:
 "Lift AMC cost in Bangalore depends on elevator type, stops, age, usage, and plan tier. Relicomp quotes after understanding your machine rather than advertising a single fixed fee. Share your lift details via the contact form for a proposal.",
 },
 {
 question: "Do you offer lift AMC near me outside Bangalore?",
 answer:
 "We support maintenance across our Karnataka and Tamil Nadu service regions. Response times vary by location. Tell us your city when you enquire so we can confirm coverage and realistic attendance windows.",
 },
 {
 question: "What is the difference between Essential, Standard, and Comprehensive AMC?",
 answer:
 "Visit frequency, reporting depth, and breakdown support intensity increase from Essential to Comprehensive. The comparison table on this page summarises typical differences; your signed agreement is the authority for inclusions and spares treatment.",
 },
 {
 question: "Can Relicomp maintain a lift installed by another company?",
 answer:
 "Often yes, after a condition assessment. Safety defects may need correction before a standard AMC starts. We will advise honestly if the installation is outside practical support.",
 },
 ],
 related: [
    { href: "/services/lift-modernization", label: "Modernization", kind: "service" },
    { href: "/locations/mysore", label: "Mysore", kind: "location" },

 {
 href: "/services/elevator-installation",
 label: "Elevator installation",
 kind: "service",
 },
 {
 href: "/products/home-elevators",
 label: "Home elevators",
 kind: "product",
 },
 {
 href: "/locations/bangalore",
 label: "AMC & elevators in Bangalore",
 kind: "location",
 },
 {
 href: "/products/hydraulic-elevators",
 label: "Hydraulic elevators",
 kind: "product",
 },
 {
 href: "/products/goods-lifts-dumbwaiters",
 label: "Goods lifts & dumbwaiters",
 kind: "product",
 },
 {
 href: "/blog/home-lift-price-in-india-2026",
 label: "Home lift price guide (ownership context)",
 kind: "blog",
 },
 {
 href: "/contact",
 label: "Request an AMC quote",
 kind: "service",
 },
 {
 href: "/products",
 label: "Products & services hub",
 kind: "product",
 },
 ],
 cta: {
 heading: "Get a lift AMC proposal",
 body: "Tell us your elevator type, floors, city, and preferred plan. Relicomp will confirm coverage and share transparent lift AMC charges with clear inclusions, so maintenance is planned, not improvised.",
 buttonLabel: "Request AMC quote",
 href: "/contact?topic=amc&product=lift-amc-maintenance",
 },
 seo: {
 title: "Lift AMC & Elevator Maintenance Services",
 description:
 "Lift AMC and elevator maintenance services in Bangalore & South India. Preventive visits, breakdown support, plan comparison. Relicomp AMC service provider. Request a quote.",
 canonicalPath: "/services/lift-amc-maintenance",
 ogImage: "/og/default.png",
 keywords: [
 "lift amc",
 "elevator maintenance services",
 "lift amc charges",
 "elevator maintenance",
 "lift amc near me",
 "elevator maintenance company",
 "lift amc cost in bangalore",
 ],
 },
};
