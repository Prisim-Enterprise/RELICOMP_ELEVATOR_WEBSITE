import type { ProductPageContent } from "../types";
import { productImages } from "../images";

/**
 * /products/goods-lifts-dumbwaiters
 * Dual primary: dumbwaiter (3,600/14) + goods lift (2,400/16)
 * H2 sections: Goods Lifts / Dumbwaiters / Service Lifts
 * Target: 1,200–1,500 words: all keywords SD ≤19
 */
export const goodsLiftsDumbwaiters: ProductPageContent = {
 slug: "goods-lifts-dumbwaiters",
 kind: "product",
 h1: "Goods Lifts, Dumbwaiters & Service Lifts: Manufacturers in Bangalore",
 heroImage: productImages["goods-lifts-dumbwaiters"],
 heroAlt:
 "Industrial goods lift and commercial dumbwaiter cabin for material handling",
 intro:
 "Relicomp manufactures goods lifts, dumbwaiter lifts, and service elevators for hotels, restaurants, hospitals, warehouses, and multi-level commercial buildings. From kitchen dumbwaiters that move food safely between floors to heavy-duty industrial goods lifts and hydraulic goods lift options for factories, we design load, cabin size, and duty cycle around your workflow, with production support from our Magadi facility near Bengaluru.",
 primaryKeyword: "dumbwaiter",
 wordCountTarget: [1200, 1500],
 pricesApproved: false,
 specs: [
 {
 label: "Product range",
 value: "Goods lifts, dumbwaiters, service / utility lifts",
 },
 {
 label: "Typical loads (goods)",
 value: "Light commercial to industrial duty (project-rated)",
 },
 {
 label: "Dumbwaiter class",
 value: "Food / document / medical supply trays (site-rated kg)",
 },
 {
 label: "Drive options",
 value: "Hydraulic goods lift, traction / drum as per rise & load",
 },
 {
 label: "Stops",
 value: "2–multiple floors (kitchen, store, ward, loading bay)",
 },
 {
 label: "Cabin construction",
 value: "MS / SS interiors; wipe-clean finishes for F&B and healthcare",
 },
 {
 label: "Door options",
 value: "Collapsible, vertical bi-parting, swing, or auto as specified",
 },
 {
 label: "Safety",
 value: "Interlocks, overload sensing, controlled travel, emergency stop",
 },
 {
 label: "Use environments",
 value: "Hotels, restaurants, hospitals, warehouses, retail back-of-house",
 },
 {
 label: "Manufacturing",
 value: "Relicomp Magadi facility: custom dimensions available",
 },
 ],
 sizeChart: {
 headers: [
 "Type",
 "Typical use",
 "Size focus",
 "Planning note",
 ],
 rows: [
 [
 "Dumbwaiter",
 "Kitchen / pantry / pharmacy",
 "Compact shaft; tray/cabin clear openings",
 "Match tray size & dish-cart clearance",
 ],
 [
 "Service lift",
 "Housekeeping / staff supplies",
 "Mid cabin; staff-safe controls",
 "Separate from guest passenger traffic",
 ],
 [
 "Goods lift",
 "Warehouse / store / factory",
 "Platform & door clear for pallets/trolleys",
 "Rated load & floor loading first",
 ],
 [
 "Hydraulic goods",
 "Low–mid rise heavy loads",
 "Pit / machine provisions per design",
 "Ideal where machine room trade-offs fit",
 ],
 ],
 },
 body: [
 {
 type: "heading",
 level: 2,
 text: "Goods lifts for commercial & industrial material movement",
 id: "goods-lifts",
 },
 {
 type: "paragraph",
 text: "A goods lift (freight-oriented elevator) moves materials, trolleys, packing, and equipment between floors where passenger elevators are the wrong tool, wrong duty, wrong cabin, or wrong hygiene zoning. Warehouse and industrial sites prioritise rated load, door clear width, floor strength, and frequent start–stop cycles; hotels and restaurants often need cleaner service lifts and dumbwaiters for kitchen and linen paths. Relicomp engineers both from our Magadi factory and can survey [Bangalore](/locations/bangalore) industrial belts, including the Jigani branch corridor, before [installation](/services/elevator-installation).",
 },
 {
 type: "paragraph",
 text: "Relicomp designs goods lifts for warehouses, factories, multi-level stores, and back-of-house logistics. We size the platform for your largest regular load (pallet, roll-cage, drum, or equipment), then engineer guides, doors, and drive selection to that duty. Hydraulic goods lift configurations are often chosen for low- to mid-rise buildings with heavy loads and controlled speed needs; traction or other arrangements may suit higher rises or specific shaft constraints.",
 },
 {
 type: "paragraph",
 text: "As goods lift manufacturers with an in-house Magadi production base, we can customise cabin height, door arrangement, and finishes (including wipe-clean stainless for food-adjacent zones) rather than forcing a one-size catalogue box into your building.",
 },
 {
 type: "list",
 items: [
 "Warehouse & industrial floors: bulk stock and equipment between levels",
 "Retail stockrooms: carton and trolley movement away from customer lifts",
 "Manufacturing mezzanines: parts and jigs with clear load ratings",
 "Healthcare logistics: linen, waste segregation paths (where specified separately from sterile flows)",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "Dumbwaiter lifts for kitchens, F&B and compact vertical service",
 id: "dumbwaiters",
 },
 {
 type: "paragraph",
 text: "A dumbwaiter (dumbwaiter lift) is a small service elevator for food trays, crockery, documents, medicines, or light parcels, not for passengers. High-search demand for “dumbwaiter” and “dumbwaiter lift” comes largely from hotels, restaurants, cloud kitchens, clubs, and multi-level homes with pantry service.",
 },
 {
 type: "paragraph",
 text: "Dumbwaiter lift size is defined by tray or cart dimensions, not by passenger cabin standards. Too-small openings create breakage and slow service; oversized shafts waste core area. Relicomp surveys kitchen workflow, pass, wash-up, storage, and serving floors, before freezing clear opening and cabin volume. SS interiors, smooth corners, and easy-clean surfaces matter as much as rated kilograms for F&B projects.",
 },
 {
 type: "paragraph",
 text: "Typical dumbwaiter applications include multi-level restaurants, hotel room-service pantries, banquet kitchen to hall connections, hospital pharmacy supply runs, and villa pantry service. Controls can be simple call-and-send with clear floor indication so staff do not misuse the unit as a passenger lift.",
 },
 {
 type: "list",
 items: [
 "Hotel & restaurant kitchen-to-floor food service",
 "Banquet and multi-outlet F&B vertical logistics",
 "Clinic / pharmacy light goods between storeys",
 "Clubhouses and banquet halls with basement kitchens",
 "Select residential pantry service (non-passenger)",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "Service lifts: staff and utility movement",
 id: "service-lifts",
 },
 {
 type: "paragraph",
 text: "Service lifts sit between pure dumbwaiters and full passenger elevators. They support housekeeping trolleys, laundry, F&B support, and staff logistics while keeping guest passenger elevators free. In hotels and hospitals, a dedicated service lift reduces cross-traffic, protects finishes in lobby lifts, and supports hygiene zoning when planned with architects.",
 },
 {
 type: "paragraph",
 text: "Relicomp scopes service lifts with durable cabins, practical door clearances for trolleys, and control logic that matches operational SOPs. Where a project needs both a small dumbwaiter for trays and a larger service or goods lift for bulk, we plan them as a coordinated vertical logistics set, not competing afterthoughts.",
 },
 {
 type: "heading",
 level: 2,
 text: "Hydraulic goods lift & drive selection",
 id: "hydraulic-goods-lift",
 },
 {
 type: "paragraph",
 text: "Hydraulic goods lift systems are frequently specified for industrial and commercial low-rise material handling: heavy loads, moderate travel, and robust everyday use. Selection still depends on pit/headroom, machine room or power pack placement, duty cycle, and power availability. Traction solutions may be preferred for taller rises or where hydraulic provisions are impractical.",
 },
 {
 type: "paragraph",
 text: "We do not force one drive type onto every goods lift RFQ. After load and floor data are clear, we recommend the arrangement that balances capital cost, civil impact, energy use, and maintainability in your city.",
 },
 {
 type: "heading",
 level: 2,
 text: "Goods lift manufacturers in Bangalore: why manufacture matters",
 id: "manufacturers-bangalore",
 },
 {
 type: "paragraph",
 text: "Searching for goods lift manufacturers or goods lift manufacturers in Bangalore usually means you want accountability beyond a trading invoice: drawings that fit Indian site conditions, custom cabin work, and a service team that can reach the site after handover. Relicomp combines Magadi manufacturing with Bengaluru-area offices and regional installation coverage across Karnataka and Tamil Nadu.",
 },
 {
 type: "paragraph",
 text: "Manufacturer-led projects make mid-build changes, door hand, SS upgrade, extra stop, more controllable than pure import-and-install models. For dumbwaiters and goods lifts, those changes are common once kitchen consultants or warehouse operators walk the mock layout.",
 },
 {
 type: "heading",
 level: 2,
 text: "Pricing approach (no fixed catalogue rates online)",
 id: "pricing",
 },
 {
 type: "paragraph",
 text: "Goods lift and dumbwaiter pricing depends on rated load, stops, cabin size, door type, drive, finishes (especially SS), and civil readiness. Industrial goods lift packages differ substantially from compact kitchen dumbwaiters. Relicomp issues project quotations after survey and load confirmation, without publishing fixed public INR bands until commercial ranges are approved for the website.",
 },
 {
 type: "paragraph",
 text: "For a fair comparison between vendors, share the same load, stops, clear opening, and finish assumptions with every bidder, and ask them to separate equipment, installation, and owner-scope civil/electrical works.",
 },
 {
 type: "heading",
 level: 2,
 text: "How a Relicomp project runs",
 id: "process",
 },
 {
 type: "list",
 ordered: true,
 items: [
 "Operations survey: load, tray/trolley sizes, floors, peak usage",
 "GA-oriented design: shaft, doors, drive, finishes",
 "Manufacturing: custom cabin and assemblies at Magadi",
 "Installation & testing: alignment, safety checks, staff handover",
 "Optional AMC: preventive maintenance for continuous commercial use",
 ],
 },
 {
 type: "heading",
 level: 2,
 text: "Industries we support",
 id: "industries",
 },
 {
 type: "paragraph",
 text: "Hotels and restaurants rely on dumbwaiter lifts for speed of service; warehouses and factories rely on industrial goods lifts for throughput; hospitals need controlled utility movement. Dedicated industry landing pages will expand these stories; until then, this product page is the commercial owner for dumbwaiter and goods lift keywords, use the contact form with your sector and load brief.",
 },
 {
 type: "heading",
 level: 2,
 text: "Next step",
 id: "next-step",
 },
 {
 type: "paragraph",
 text: "Tell us whether you need a kitchen dumbwaiter, a service lift, or a full goods lift, and share floors, approximate load, and city. We will recommend a configuration, discuss installation sequencing, and quote with clear scope boundaries from a Bangalore-region manufacturer.",
 },
 ],
 faqs: [
 {
 question: "What is the difference between a dumbwaiter and a goods lift?",
 answer:
 "A dumbwaiter is a small non-passenger lift for trays, food, documents, or light parcels, common in kitchens and pantries. A goods lift is built for heavier materials, trolleys, or industrial loads with larger platforms and higher rated capacity. Service lifts sit between them for staff utility traffic.",
 },
 {
 question: "What dumbwaiter lift size do I need for a restaurant?",
 answer:
 "Size follows your largest regular tray or cart and the dishware you move at peak service, not a generic brochure box. We measure openings, shaft, and workflow between kitchen and service floors before freezing dumbwaiter lift size.",
 },
 {
 question: "Do you supply hydraulic goods lifts?",
 answer:
 "Yes. Hydraulic goods lift options are available where load, rise, and site provisions suit hydraulics. We may recommend alternative drives for taller rises or constrained machine spaces after survey.",
 },
 {
 question: "Are you goods lift manufacturers in Bangalore?",
 answer:
 "Relicomp manufactures and installs from the Bengaluru region (including Magadi facility support) with project coverage across Karnataka and Tamil Nadu. We act as manufacturers for custom goods and dumbwaiter solutions, not only as resellers.",
 },
 {
 question: "Can one project include both a dumbwaiter and a goods lift?",
 answer:
 "Yes. Many hotels and hospitals specify a compact dumbwaiter for F&B or pharmacy trays plus a larger goods or service lift for bulk logistics. We can design them as a coordinated set with shared civil planning.",
 },
 ],
 related: [
    { href: "/services/elevator-installation", label: "Installation", kind: "service" },

 {
 href: "/products/home-elevators",
 label: "Home elevators (passenger residential)",
 kind: "product",
 },
 {
 href: "/products",
 label: "All elevator products",
 kind: "product",
 },
 {
 href: "/services/lift-amc-maintenance",
 label: "Lift AMC for commercial lifts",
 kind: "service",
 },
 {
 href: "/contact",
 label: "Request a goods / dumbwaiter quote",
 kind: "service",
 },
 {
 href: "/projects",
 label: "Installation projects",
 kind: "page",
 },
 {
 href: "/blog/home-lift-price-in-india-2026",
 label: "Home lift price guide (residential)",
 kind: "blog",
 },
 ],
 cta: {
 heading: "Specify your goods lift or dumbwaiter",
 body: "Share load or tray size, number of floors, sector (hotel, warehouse, hospital, restaurant), and city. Relicomp will propose a manufacturer-built configuration and a survey-led quote.",
 buttonLabel: "Request a quote",
 href: "/contact?topic=goods-lifts-dumbwaiters&product=goods-lifts-dumbwaiters",
 },
 seo: {
 title: "Goods Lifts & Dumbwaiters",
 description:
 "Goods lifts, dumbwaiters and service elevators for hotels, warehouses and industry. Hydraulic options from a Bangalore manufacturer.",
 canonicalPath: "/products/goods-lifts-dumbwaiters",
 ogImage: "/og/default.png",
 keywords: [
 "dumbwaiter",
 "goods lift",
 "dumbwaiter lift",
 "goods lift manufacturers",
 "hydraulic goods lift",
 "industrial goods lift",
 "dumbwaiter lift size",
 "goods lift manufacturers in bangalore",
 ],
 },
};
