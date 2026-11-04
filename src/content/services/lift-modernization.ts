import type { ServicePageContent } from "../types";
import { serviceImages } from "../images";

/**
 * /services/lift-modernization
 * Primary: lift modernization: low volume, high ticket
 * Target: 700–900 words
 */
export const liftModernization: ServicePageContent = {
 slug: "lift-modernization",
 kind: "service",
 h1: "Lift Modernization & Elevator Retrofit",
 heroImage: serviceImages["lift-modernization"],
 heroAlt:
 "Relicomp crew modernizing a commercial passenger elevator in an office lobby",
 intro:
 "Ageing elevators do not always need full replacement. Relicomp lift modernization and commercial elevator retrofit services upgrade safety, controllers, doors, cabins, and ride quality, often with less downtime and civil disruption than a complete rip-out. We assess traction elevator modernization and related packages for buildings across Bangalore and our service regions.",
 primaryKeyword: "lift modernization",
 wordCountTarget: [700, 900],
 body: [
 {
 type: "heading",
 level: 2,
 text: "When modernization beats full replacement",
 id: "when",
 },
 {
 type: "paragraph",
 text: "Lift modernization makes sense when the shaft and structure are sound but components are unreliable, non-compliant with current expectations, noisy, slow, or spare-parts scarce. Commercial elevator retrofit projects in offices and apartments often target controllers, door operators, car interiors, and safety circuits first, preserving rails and structure where inspection allows. Visit history from a [lift AMC](/services/lift-amc-maintenance) contract usually shows whether repair is still rational, or whether a cleaner path is a new [traction](/products/traction-elevators) or [MRL](/products/mrl-elevators) package in the same well.",
 },
 {
 type: "paragraph",
 text: "If the machine, rails, or shaft geometry are fundamentally wrong for today’s traffic, we will recommend replacement instead of forcing a cosmetic upgrade. Honest scoping protects capital budgets.",
 },
 {
 type: "heading",
 level: 2,
 text: "What we can modernize",
 id: "scope",
 },
 {
 type: "list",
 items: [
 "Controller and electrical upgrades for reliability and diagnostics",
 "Door operators and landing door equipment",
 "Cabin interiors, COP/LOP fixtures, and lighting",
 "Safety gear and interlock refreshes as assessment allows",
 "Traction elevator modernization packages (machine/control as scoped)",
 "Select hydraulic system refreshes for low-rise units",
 "Partial aesthetic upgrades for lobbies and car finishes",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "Our retrofit approach",
 id: "approach",
 },
 {
 type: "list",
 ordered: true,
 items: [
 "Condition survey: document failures, age, brand, traffic",
 "Risk & feasibility report: modernize vs replace recommendation",
 "Scope package: phased options if the building must stay partly operational",
 "Implementation: coordinated shutdown windows with facility managers",
 "Testing & handover: updated documentation and AMC offer",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "Benefits of a well-planned modernization",
 id: "benefits",
 },
 {
 type: "list",
 items: [
 "Improved safety behaviour and user confidence",
 "Fewer breakdowns and clearer fault diagnostics",
 "Better ride comfort and door reliability",
 "Extended asset life without full civil rebuild",
 "Updated cabin appearance for tenants and guests",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "Commercial elevator retrofit notes",
 id: "commercial",
 },
 {
 type: "paragraph",
 text: "Offices and multi-tenant buildings need communication plans: which car is offline when, how freight and accessibility are handled, and who approves overtime work. Relicomp plans retrofit windows with building management so commercial elevator retrofit work does not become a surprise for tenants.",
 },
 {
 type: "heading",
 level: 2,
 text: "After modernization",
 id: "after",
 },
 {
 type: "paragraph",
 text: "Pair upgrades with a lift AMC so new components receive preventive care from day one. If the survey shows replacement is smarter, we can transition into a new elevator installation and manufacturing path instead.",
 },
 ],
 faqs: [
 {
 question: "What is lift modernization?",
 answer:
 "Lift modernization upgrades critical elevator systems, controls, doors, safety, cabin, while reusing sound structure and rails where feasible, improving reliability without a full shaft rebuild.",
 },
 {
 question: "Is modernization cheaper than a new elevator?",
 answer:
 "Often, when the shaft and primary structure are healthy. If major mechanical systems must all change, replacement can be cleaner. We recommend after a condition survey.",
 },
 {
 question: "Can you modernize traction elevators?",
 answer:
 "Yes. Traction elevator modernization is a common package, controllers, doors, and related systems scoped to the existing installation.",
 },
 {
 question: "How long is the elevator out of service?",
 answer:
 "Depends on scope. Small cabin or fixture upgrades are shorter; controller and door packages need planned multi-day windows. We provide a schedule before work starts.",
 },
 ],
 related: [
 {
 href: "/services/elevator-installation",
 label: "New elevator installation",
 kind: "service",
 },
 {
 href: "/services/lift-amc-maintenance",
 label: "Lift AMC",
 kind: "service",
 },
 {
 href: "/products/traction-elevators",
 label: "Traction elevators",
 kind: "product",
 },
 {
 href: "/products/mrl-elevators",
 label: "MRL elevators",
 kind: "product",
 },
 {
 href: "/contact",
 label: "Request modernization survey",
 kind: "service",
 },
 ],
 cta: {
 heading: "Assess your lift for modernization",
 body: "Share building type, elevator age/make if known, and city. Relicomp will propose a condition survey and a modernize-vs-replace recommendation.",
 buttonLabel: "Request assessment",
 href: "/contact?topic=lift-modernization&product=lift-modernization",
 },
 seo: {
 title: "Lift Modernization & Elevator Retrofit | Relicomp",
 description:
 "Lift modernization and commercial elevator retrofit: controllers, doors, cabins, traction upgrades. Survey-led scope. Bangalore & South India. Request assessment.",
 canonicalPath: "/services/lift-modernization",
 ogImage: "/og/default.png",
 keywords: [
 "lift modernization",
 "commercial elevator retrofit",
 "traction elevator modernization",
 ],
 },
};
