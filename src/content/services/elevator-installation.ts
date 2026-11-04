import type { ServicePageContent } from "../types";
import { serviceImages } from "../images";

/**
 * /services/elevator-installation
 * Primary: elevator installation | home lift installation cost (support, not H1 steal from blog)
 * Target: 900–1,200 words + 6-step process
 */
export const elevatorInstallation: ServicePageContent = {
 slug: "elevator-installation",
 kind: "service",
 h1: "Elevator Installation Services",
 heroImage: serviceImages["elevator-installation"],
 heroAlt:
 "Relicomp technicians installing a glass home elevator in a Bangalore villa foyer",
 intro:
 "Relicomp provides end-to-end elevator installation for home elevators, passenger lifts, MRL systems, hydraulic residences, goods lifts, and capsule elevators. From site survey through manufacturing at Magadi and on-site commissioning, our teams install across Bangalore, Karnataka, and Tamil Nadu, with clear scope boundaries so civil, electrical, and equipment responsibilities stay transparent.",
 primaryKeyword: "elevator installation",
 wordCountTarget: [900, 1200],
 body: [
 {
 type: "heading",
 level: 2,
 text: "Professional elevator installation from a manufacturer",
 id: "overview",
 },
 {
 type: "paragraph",
 text: "Elevator installation is more than positioning a cabin in a shaft. It is the coordination of structure, power, safety systems, doors, and ride quality, finished with testing and documentation your family or facilities team can trust. Whether you are installing [home elevators](/products/home-elevators), [MRL elevators](/products/mrl-elevators), or [goods lifts](/products/goods-lifts-dumbwaiters), Relicomp pairs Magadi-built equipment with crews who understand Indian residential and commercial sites. Budget expectations differ by city and civil readiness. Our installation cost guide explains the line items, and a sensible handover includes a path into [lift AMC](/services/lift-amc-maintenance) once the car is in daily use.",
 },
 {
 type: "paragraph",
 text: "Whether you searched home elevator installation, elevator installation services, or need a full commercial passenger install, we start with feasibility, not a rushed booking amount.",
 },
 {
 type: "heading",
 level: 2,
 text: "What we install",
 id: "what-we-install",
 },
 {
 type: "list",
 items: [
 "Home elevators and villa lifts (including hydraulic lift for home)",
 "MRL and traction passenger lifts",
 "Goods lifts, dumbwaiters, and service elevators",
 "Capsule and glass elevators (with architectural coordination)",
 "Select modernization projects where installation interfaces with existing shafts",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "Our work process & timelines",
 id: "work-process",
 },
 {
 type: "paragraph",
 text: "Relicomp follows a staged work process after commercial order: material delivery and execution in three stages (subject to stage payments and site clearance), then QC, trial run, and final handover. Exact calendar dates depend on site readiness and payment milestones agreed in your quotation.",
 },
 {
 type: "component",
 name: "ProcessTimeline",
 props: { title: "Our work process" },
 },
 {
 type: "heading",
 level: 2,
 text: "Cost of elevator installation: what drives the number?",
 id: "cost-factors",
 },
 {
 type: "paragraph",
 text: "Cost of elevator installation and home lift installation cost are common planning searches. Installation labour is only one line: equipment package, number of stops, door systems, finishes, glass work, logistics, and how ready the shaft is all matter. Owner-scope civil (pit, walls, waterproofing) and electrical (dedicated supply, earthing) often sit outside the pure lift invoice.",
 },
 {
 type: "list",
 items: [
 "Elevator type and rated load",
 "Stops / travel height and floor irregularity",
 "Cabin and door package complexity",
 "Site access for materials in dense Bangalore localities",
 "Civil readiness on the promised date",
 "Optional ARD/UPS and premium finishes",
 "Testing, handover documentation, and initial warranty support",
 ],
 },
 {
 type: "paragraph",
 text: "For deep budgeting education, especially residential, read our Home Lift Price in Bangalore 2026 guide and the upcoming installation-cost article on the blog. This service page owns the transactional install conversation: how Relicomp runs the job and how to request a survey. We do not publish fixed public install fee cards until commercial rates are approved.",
 },
 {
 type: "callout",
 text: "Tip: Ask every bidder to separate equipment, installation labour, and owner civil/electrical exclusions. That is how you compare elevator installation companies fairly.",
 },
 {
 type: "heading",
 level: 2,
 text: "Home elevator installation specifics",
 id: "home-install",
 },
 {
 type: "paragraph",
 text: "Home elevator installation often means tighter shafts, occupied homes, and neighbour-sensitive working hours. We plan material movement, protect finishes, and sequence work around your civil contractor. Hydraulic, MRL, or compact traction choices are locked only after survey. See product pages for technology fit.",
 },
 {
 type: "heading",
 level: 2,
 text: "Owner checklist before install day",
 id: "checklist",
 },
 {
 type: "list",
 ordered: true,
 items: [
 "Shaft dimensions match approved drawings",
 "Pit waterproofing and drainage as specified",
 "Headroom and machine provisions clear of temporary debris",
 "Power supply and earthing ready per electrical note",
 "Safe access path for equipment and technicians",
 "Point of contact on site for daily coordination",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "Which standards and regulations apply to a lift in Karnataka?",
 id: "standards-compliance",
 },
 {
 type: "paragraph",
 text: "Three separate rulebooks govern a passenger lift in Karnataka, and they do different jobs. The Bureau of Indian Standards IS 14665 series covers the equipment itself: Part 1 sets outline dimensions, Part 2 is the code of practice for installation, operation and maintenance, Part 3 covers safety rules, Part 4 specifies components such as buffers, guide rails, safety gears and governors, and Part 5 is the inspection manual. The series was drafted by the Lift and Escalators Sectional Committee (ETD 25) and aligned with the European EN 81 norms.",
 },
 {
 type: "paragraph",
 text: "The National Building Code of India 2016, Part 8 Section 5 (Installation of Lifts, Escalators and Moving Walks) governs how the lift sits inside the building: shaft placement, recommended passenger lift dimensions, fire protection and machine provisions. The NBC is recommendatory in itself and becomes binding where a state or municipal authority adopts it into local building bye-laws, which is why it is enforced at plan-approval stage in Bengaluru and other Karnataka cities.",
 },
 {
 type: "paragraph",
 text: "Finally, the Karnataka Lifts, Escalators and Passenger Conveyors Act, 2012 (Karnataka Act No. 9 of 2013, in force from 20 January 2015 and amended in 2025) governs permission to operate. It requires that lifts be bought from a company on the roll of the Chief Inspector of Lifts, Escalators and Passenger Conveyors, and that the installation be licensed before use. Ask any supplier for their registration position under this Act before signing: it is the single check most owners skip.",
 },
 {
 type: "callout",
 text: "Owner tip: IS 14665 governs the machine, NBC 2016 Part 8 Section 5 governs the shaft and the building, and the Karnataka Lifts Act 2012 governs the licence to run it. A quote that addresses only the machine has answered one of the three.",
 },
 {
 type: "heading",
 level: 2,
 text: "After installation: AMC",
 id: "after-install",
 },
 {
 type: "paragraph",
 text: "The best elevator installation ends with a maintenance plan. Enrol in lift AMC at handover so preventive visits begin before small issues become breakdowns. See our Lift AMC & Maintenance service for plan tiers.",
 },
 {
 type: "heading",
 level: 2,
 text: "Where we install",
 id: "where",
 },
 {
 type: "paragraph",
 text: "Bangalore is a core install market, supported by Vijayanagar offices and Magadi manufacturing, with project work across Karnataka and Tamil Nadu. Share your city when you enquire so we confirm crew routing and timelines.",
 },
 ],
 faqs: [
 {
 question: "How long does elevator installation take?",
 answer:
 "After order and site clearance, Relicomp follows a staged work process: Stage 1 material in about 15 working days from 1st stage payment, Stage 1 execution about 20 working days from material arrival, Stage 2 material about 25 working days from 2nd stage payment, Stage 2 execution about 20 working days, Stage 3 material about 5 working days after Stage 2 completion, Stage 3 execution about 15 working days, then 2 days for QC and trial run, and final handover within 2 weeks after QC. Exact dates depend on payments and site readiness; your proposal includes a project-specific schedule.",
 },
 {
 question: "What is the cost of elevator installation in Bangalore?",
 answer:
 "Installation cost depends on elevator type, stops, access, and civil readiness, not a single national rate. Relicomp quotes after survey with scope separation. See our price guide for residential budgeting factors.",
 },
 {
 question: "Do you handle home elevator installation in Bangalore?",
 answer:
 "Yes. Home elevator installation across Bengaluru is a core Relicomp service, including hydraulic and other residential configurations after site assessment.",
 },
 {
 question: "Who is responsible for civil and electrical work?",
 answer:
 "Typically the owner’s civil/electrical contractors prepare the shaft and power to our drawings. We coordinate interfaces and install the elevator package. Exact boundaries are written in your quotation.",
 },
 {
 question: "Can you install elevators manufactured by others?",
 answer:
 "Our standard offer is Relicomp-manufactured systems with full accountability. Third-party equipment installs are assessed case-by-case and may not be accepted.",
 },
 ],
 related: [
    { href: "/products/mrl-elevators", label: "MRL elevators", kind: "product" },

 {
 href: "/services/lift-amc-maintenance",
 label: "Lift AMC after installation",
 kind: "service",
 },
 {
 href: "/services/custom-elevator-manufacturing",
 label: "Custom elevator manufacturing",
 kind: "service",
 },
 {
 href: "/services/lift-modernization",
 label: "Lift modernization",
 kind: "service",
 },
 {
 href: "/products/home-elevators",
 label: "Home elevators",
 kind: "product",
 },
 {
 href: "/blog/home-lift-price-in-india-2026",
 label: "Home lift price guide",
 kind: "blog",
 },
 {
 href: "/locations/bangalore",
 label: "Installations in Bangalore",
 kind: "location",
 },
 {
 href: "/contact",
 label: "Request installation survey",
 kind: "service",
 },
 ],
 cta: {
 heading: "Plan your elevator installation",
 body: "Share floors, elevator type, and city. Relicomp will schedule a site survey and a clear installation proposal with equipment and labour scope defined.",
 buttonLabel: "Request installation quote",
 href: "/contact?topic=elevator-installation&product=elevator-installation",
 },
 seo: {
 title: "Elevator Installation Services",
 description:
 "Elevator installation for home lifts, passenger & goods elevators. 6-step process, cost factors, Bangalore crews. Manufacturer install + AMC. Free survey.",
 canonicalPath: "/services/elevator-installation",
 ogImage: "/og/default.png",
 keywords: [
 "elevator installation",
 "cost of elevator installation",
 "home lift installation cost",
 "home elevator installation",
 "elevator installation services",
 "elevator installation companies",
 ],
 },
};
