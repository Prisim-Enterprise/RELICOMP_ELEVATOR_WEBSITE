import type { ProductPageContent } from "../types";
import { productImages } from "../images";

/**
 * /products/home-elevators
 * Primary: home elevator | Cost keywords support (no AggregateOffer until pricesApproved)
 * Target: 1,800–2,200 words
 */
export const homeElevators: ProductPageContent = {
    slug: "home-elevators",
    kind: "product",
    h1: "Home Elevators in Bangalore: Compact Residential Lifts for Villas & Apartments",
    heroImage: productImages["home-elevators"],
    heroAlt:
        "Modern home elevator cabin installed in a multi-storey residential villa",
    intro:
        "Relicomp designs and manufactures home elevators (home lifts) for Indian villas, duplexes, and low-rise residences. Whether you need a 2-person cabin for daily convenience or a 4-person family lift with a wheelchair-friendly footprint, we engineer compact shafts, quiet rides, and safety systems built for residential use, with manufacturing support from our Magadi facility and installation teams across Karnataka and Tamil Nadu.",
    primaryKeyword: "home elevator",
    wordCountTarget: [1800, 2200],
    pricesApproved: false,
    // No priceRanges until Relicomp commercial SME approves INR bands
    specs: [
        { label: "Capacity options", value: "2-person / 3-person / 4-person (residential)" },
        { label: "Typical stops", value: "2–5 floors (project-dependent)" },
        { label: "Drive types", value: "Hydraulic, MRL traction, or compact traction (site-led)" },
        { label: "Cabin finishes", value: "SS, laminate, glass panels, custom interiors" },
        { label: "Noise profile", value: "Residential-grade quiet operation" },
        { label: "Civil impact", value: "Minimal shaft & pit where feasible" },
        { label: "Power", value: "Single/three-phase options per design" },
        { label: "Safety", value: "Interlocks, overload, emergency lowering / rescue readiness" },
        { label: "Service", value: "Installation + optional AMC across service regions" },
        { label: "Manufacturing", value: "Relicomp Magadi facility, Bengaluru" },
    ],
    sizeChart: {
        headers: [
            "Configuration",
            "Typical persons",
            "Cabin clear (indicative)",
            "Shaft notes",
        ],
        rows: [
            [
                "Compact 2-person",
                "2",
                "~700–900 mm clear (layout dependent)",
                "Ideal for retrofits & tight stair voids",
            ],
            [
                "Standard 3-person",
                "3",
                "~900–1100 mm clear (layout dependent)",
                "Common for villas & duplexes",
            ],
            [
                "Family 4-person",
                "4",
                "~1100–1400 mm clear (layout dependent)",
                "Better for wheelchair / stroller use cases",
            ],
            [
                "Through-type / glass",
                "2–4",
                "Custom",
                "Architectural openings; survey required",
            ],
        ],
    },
    body: [
        {
            type: "heading",
            level: 2,
            text: "What is a home elevator?",
            id: "what-is-a-home-elevator",
        },
        {
            type: "paragraph",
            text: "A home elevator (also searched as home lift, residential elevator, or villa lift) is a passenger lift engineered for private residences rather than high-traffic commercial towers. Compared with building elevators, residential units prioritise compact shaft size, lower noise, attractive cabin finishes, and simpler civil works so they fit into existing or new homes with less disruption. Many villas start with a [hydraulic elevator](/products/hydraulic-elevators) for two to four stops; others need a wider cabin once clear shaft width is measured on site, since a 2-person car needs roughly 700-900 mm against 1100-1400 mm for a 4-person car. Relicomp manufactures these units and can [install](/services/elevator-installation) them across [Bangalore](/locations/bangalore) and our wider service regions after a site survey.",
        },
        {
            type: "paragraph",
            text: "Homeowners typically choose a home lift for ageing-in-place, multi-level living with children, luggage and groceries between floors, or accessibility after injury or mobility changes. Relicomp builds residential elevators as a manufacturer, not only a dealer, so cabin dimensions, finishes, and drive selection can be tailored at our Magadi manufacturing base.",
        },
        {
            type: "heading",
            level: 2,
            text: "Who should consider a home lift?",
            id: "who-should-consider",
        },
        {
            type: "list",
            items: [
                "Villa and duplex owners adding floors or finishing a multi-storey home",
                "Families planning for elderly parents or long-term accessibility",
                "Homes where stairs are steep, frequent, or difficult with shopping and luggage",
                "Luxury residences wanting a quiet, design-led cabin as a lifestyle upgrade",
                "Small apartment or townhouse projects where a compact residential elevator is planned in the shaft",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "2-person vs 4-person home lifts",
            id: "2-vs-4-person",
        },
        {
            type: "paragraph",
            text: "Capacity is one of the first decisions on any home elevator project. A 2-person home lift suits narrow shafts, stairwell retrofits, and light daily use. A 4-person (or “family”) cabin is preferred when two adults with shopping bags, a child, or a wheelchair-user must travel together. Mid options (around 3 persons / ~250–300 kg class depending on design) balance footprint and usability.",
        },
        {
            type: "paragraph",
            text: "Larger cabins need more shaft plan area and sometimes deeper pits or higher overhead. That is why Relicomp always starts with a site survey: we measure available shaft, stair void, headroom, and structural constraints before locking capacity. “Small home lift” searches often map to compact 2-person systems; “4 person home lift” projects need explicit accessibility and door clearances checked early.",
        },
        {
            type: "heading",
            level: 2,
            text: "Home lift size & shaft planning",
            id: "size-and-shaft",
        },
        {
            type: "paragraph",
            text: "Home lift size is not a single standard dimension. Cabin clear width and depth, door opening, pit depth, and overhead clearance all interact with your architecture. Indian homes often require creative layouts, through-type entrances, glass façades, or tight internal shafts beside the staircase.",
        },
        {
            type: "paragraph",
            text: "Use the size chart on this page as a planning starting point only. Final home lift sizes are confirmed after survey drawings. If you are comparing manufacturers, ask for shaft GA (general arrangement) drawings for your exact floor-to-floor heights rather than relying on brochure “typical” sizes alone.",
        },
        {
            type: "callout",
            text: "Need a deeper size walkthrough? See our Home Lift Size Guide on the blog for passenger capacity vs footprint trade-offs. For pricing drivers, open the Home Lift Price in Bangalore 2026 guide linked below.",
        },
        {
            type: "heading",
            level: 2,
            text: "Drive options: hydraulic, traction & MRL for homes",
            id: "drive-options",
        },
        {
            type: "paragraph",
            text: "Residential elevators may use hydraulic systems, machine-room-less (MRL) traction, or compact traction arrangements depending on floors, speed needs, machine room availability, and budget. Hydraulic home lifts are common for low-rise homes and can offer smooth starts with familiar serviceability. MRL and traction solutions save machine-room volume and suit many new-build villas.",
        },
        {
            type: "paragraph",
            text: "There is no universal “best” drive for every Indian home. Low-rise duplexes often suit hydraulic or compact systems; taller villas may benefit from traction/MRL efficiency. Relicomp recommends the drive after reviewing floors, duty cycle, power availability, and long-term AMC practicality, not marketing labels alone.",
        },
        {
            type: "heading",
            level: 2,
            text: "Home elevator lift cost: what actually drives the price?",
            id: "cost-drivers",
        },
        {
            type: "paragraph",
            text: "Searches for home elevator lift cost, home lift price, cost of home lift in Bangalore, and affordable home lift all point to the same buyer intent: understand budget before committing. Relicomp does not publish fixed catalogue prices online because every residential elevator is site-specific. Two homes with the “same” 3-person brief can differ substantially once shaft, glass work, finishes, and civil readiness are priced.",
        },
        {
            type: "paragraph",
            text: "Typical cost drivers include:",
        },
        {
            type: "list",
            items: [
                "Number of stops / travel height and floor-to-floor variation",
                "Rated load (2 / 3 / 4 person) and cabin internal volume",
                "Drive technology (hydraulic vs MRL/traction) and controller brand tier",
                "Door type (automatic centre-opening, telescopic, manual where allowed)",
                "Cabin aesthetics: stainless grades, mirrors, glass walls, flooring, lighting",
                "Glass shaft or panoramic / capsule-style treatment",
                "Civil works: pit, headroom, shaft walls, scaffolding, waterproofing",
                "Electrical readiness: earthing, dedicated supply, UPS / ARD options",
                "Logistics, floor access for equipment, and city of installation",
                "AMC / warranty package selected at handover",
            ],
        },
        {
            type: "paragraph",
            text: "Home lift installation cost is often misunderstood as only the equipment invoice. In practice, civil preparation, electrical, and finishing around the shaft can form a meaningful share of the total project. Ask for a line-item quotation that separates equipment, installation labour, and owner-scope civil/electrical works so you can compare manufacturers fairly.",
        },
        {
            type: "paragraph",
            text: "For a full planning narrative, including how to compare quotes and which free upgrades are rarely free, read our dedicated guide: Home Lift Price in Bangalore (2026). That article owns deep informational intent for cost research; this product page focuses on choosing and specifying a Relicomp residential elevator.",
        },
        {
            type: "heading",
            level: 2,
            text: "Affordable home lift options without cutting safety",
            id: "affordable-options",
        },
        {
            type: "paragraph",
            text: "“Affordable home lift” should never mean compromising interlocks, overload protection, or certified components. Cost control usually comes from right-sizing capacity, choosing standard cabin packages instead of full custom glass architecture, optimising shaft geometry early (before RCC is complete), and selecting a drive appropriate to rise rather than over-specifying commercial speeds.",
        },
        {
            type: "paragraph",
            text: "Relicomp can propose value-engineered residential configurations for 2–3 stop homes while keeping rescue and safety systems intact. If your project is in Bangalore or nearby service cities, local installation and AMC response also reduce long-term ownership friction compared with pure import-only supply models.",
        },
        {
            type: "heading",
            level: 2,
            text: "Home lift in Bangalore & our service regions",
            id: "bangalore-and-regions",
        },
        {
            type: "paragraph",
            text: "Home lift Bangalore projects are a core Relicomp segment, from whitefield villas to west and south Bengaluru duplexes. We also support projects across Karnataka and Tamil Nadu with site surveys, installation crews, and maintenance. Factory proximity at Magadi Road helps with component control and custom cabin work.",
        },
        {
            type: "paragraph",
            text: "If you are comparing lift companies in Bangalore, evaluate manufacturing capability, local spares, AMC response time, and documented installations, not brochure capacity alone. Relicomp has 16+ years in the industry and 600+ installations across our regions.",
        },
        {
            type: "heading",
            level: 2,
            text: "Installation journey for a residential elevator",
            id: "installation-journey",
        },
        {
            type: "paragraph",
            text: "A typical Relicomp home elevator project moves through survey and feasibility, design & GA drawings, manufacturing, on-site installation, testing, and handover. Timelines vary with civil readiness: homes with a prepared shaft move faster than retrofits that need structural modification.",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Site survey & assessment: shaft, pit, overhead, power, access",
                "Design & customisation: capacity, cabin, finishes, technical layout",
                "Manufacturing: cabin and key assemblies at Magadi facility",
                "On-site installation: mechanical, electrical, and interface with civil works",
                "Quality checks & trial runs: safety and ride quality verification",
                "Handover: documentation, usage briefing, optional AMC enrolment",
            ],
        },
        {
            type: "paragraph",
            text: "Detailed process and cost-factor discussion for installation services will live on our elevator installation service page as it launches. Until then, request a survey from the contact form and our team will outline a project-specific plan.",
        },
        {
            type: "heading",
            level: 2,
            text: "Safety, compliance & everyday usability",
            id: "safety",
        },
        {
            type: "paragraph",
            text: "Residential elevators must feel simple for every family member, including guests and elders. We design around clear door openings where the layout allows, intuitive car operating panels, emergency communication options as specified, and smooth, low-jerk motion suitable for homes. Overload sensing, door interlocks, and emergency lowering / rescue readiness are part of a proper residential specification, not optional extras to strip for a low quote.",
        },
        {
            type: "heading",
            level: 2,
            text: "Why choose Relicomp for your home elevator",
            id: "why-relicomp",
        },
        {
            type: "list",
            items: [
                "Manufacturer mindset: custom dimensions and cabin design from Magadi facility",
                "Full lifecycle: design, supply, installation, and maintenance pathways",
                "Regional presence across Karnataka & Tamil Nadu with multi-branch support",
                "600+ installations and 16+ years of elevator industry experience",
                "Honest scoping: we separate equipment, installation, and owner civil scope in discussions",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "Next steps",
            id: "next-steps",
        },
        {
            type: "paragraph",
            text: "Share your floors, preferred capacity (2-person or 4-person), city, and whether the shaft is new-build or retrofit. We will recommend a home elevator configuration, discuss indicative investment after survey, and plan installation around your civil schedule. For pure budget research, start with the 2026 price guide; for a firm proposal, book a free site survey.",
        },
    ],
    faqs: [
        {
            question: "What is the cost of a home lift in Bangalore?",
            answer:
                "Home lift price depends on stops, capacity (2–4 person), drive type, cabin finishes, glass work, and civil/electrical readiness. Relicomp provides project-specific quotations after a site survey rather than a single catalogue rate. See our Home Lift Price in Bangalore 2026 guide for planning factors, then request a quote for your home.",
        },
        {
            question: "What size home lift do I need for a villa?",
            answer:
                "Most villas start with 2–4 person residential elevators. Compact 2-person units fit tighter shafts; 4-person cabins suit family use and better accessibility. Final home lift sizes require shaft measurements, door clearances, and floor heights from a survey.",
        },
        {
            question: "Can a home elevator be installed in an existing house?",
            answer:
                "Yes, many projects are retrofits into stair voids or purpose-built light shafts. Feasibility depends on structure, pit/overhead options, and access for equipment. A survey confirms whether a small home lift layout is realistic without major redesign.",
        },
        {
            question: "How long does home elevator installation take?",
            answer:
                "After manufacturing, on-site installation and testing often span several weeks depending on floors, civil readiness, and finishes. Overall project time from order to handover also includes design and factory build. Your proposal will include a schedule for your site.",
        },
        {
            question: "Do you install home lifts in Bangalore?",
            answer:
 "Yes. Home lift Bangalore installations are a core Relicomp offering. See our [Bangalore location page](/locations/bangalore), Hennur, and Jigani coverage, plus Magadi manufacturing. Start with a [free survey](/contact?topic=home-elevators&product=home-elevators).",
        },
    ],
    related: [
        {
            href: "/blog/home-lift-price-in-india-2026",
            label: "Home Lift Price in Bangalore (2026 Guide)",
            kind: "blog",
        },
        {
            href: "/products/goods-lifts-dumbwaiters",
            label: "Goods lifts & dumbwaiters",
            kind: "product",
        },
        {
            href: "/products",
            label: "All elevator products",
            kind: "product",
        },
        {
            href: "/products/hydraulic-elevators",
            label: "Hydraulic lift for home",
            kind: "product",
        },
        {
            href: "/locations/bangalore",
            label: "Home lifts in Bangalore",
            kind: "location",
        },
        {
            href: "/industries/apartments-residential",
            label: "Apartment & residential projects",
            kind: "industry",
        },
        {
            href: "/services/elevator-installation",
            label: "Elevator installation",
            kind: "service",
        },
        {
            href: "/services/lift-amc-maintenance",
            label: "Lift AMC & maintenance",
            kind: "service",
        },
        {
            href: "/services/custom-elevator-manufacturing",
            label: "Custom manufacturing",
            kind: "service",
        },
        {
            href: "/contact",
            label: "Request a free site survey",
            kind: "service",
        },
        {
            href: "/projects",
            label: "See installation projects",
            kind: "page",
        },
    ],
    cta: {
        heading: "Plan your home elevator with Relicomp",
        body: "Tell us your floors, preferred 2- or 4-person capacity, and city. We will schedule a free site survey and share a configuration-led quotation, no one-size catalogue pricing.",
        buttonLabel: "Request a quote",
        href: "/contact?topic=home-elevators&product=home-elevators",
    },
    seo: {
        title: "Home Elevators & Lifts in Bangalore",
        description:
            "Home elevators for villas & residences: 2–4 person options, size guidance, installation by a manufacturer. Bangalore & South India. Free site survey & quote.",
        canonicalPath: "/products/home-elevators",
        ogImage: "/og/default.png",
        keywords: [
            "home elevator",
            "home lift",
            "home lift price",
            "residential elevator",
            "small home lift",
            "home lift bangalore",
            "affordable home lift",
        ],
    },
};
