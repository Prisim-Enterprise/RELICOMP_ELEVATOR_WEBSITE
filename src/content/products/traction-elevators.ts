import type { ProductPageContent } from "../types";
import { productImages } from "../images";

/**
 * /products/traction-elevators
 * Primary: traction elevator; owns passenger lift commercial intent
 * Target: 1,000–1,300 words
 */
export const tractionElevators: ProductPageContent = {
    slug: "traction-elevators",
    kind: "product",
    h1: "Traction Elevators & Passenger Lifts",
    heroImage: productImages["traction-elevators"],
    heroAlt:
        "Electric traction passenger lift for commercial and residential buildings",
    intro:
        "Traction elevators, also known as electric traction passenger lifts, are the workhorses of multi-storey buildings: offices, apartment towers, hotels, and institutions that need reliable, frequent passenger service. Relicomp designs, manufactures, and installs traction and passenger lift systems with Magadi production support and installation teams across Bangalore, Karnataka, and Tamil Nadu.",
    primaryKeyword: "traction elevator",
    wordCountTarget: [1000, 1300],
    pricesApproved: false,
    specs: [
        {
            label: "Type",
            value: "Electric traction elevator / passenger lift",
        },
        {
            label: "Traffic",
            value: "Designed for frequent passenger use and higher duty cycles",
        },
        {
            label: "Machine room",
            value: "MR (machine room) or MRL packaging depending on project",
        },
        {
            label: "Capacity",
            value: "From residential passenger class to commercial loads (project-rated)",
        },
        {
            label: "Speed",
            value: "Specified to rise and traffic analysis",
        },
        {
            label: "Cabin",
            value: "Durable passenger finishes; custom architectural options",
        },
        {
            label: "Doors",
            value: "Centre-opening / telescopic automatic doors as specified",
        },
        {
            label: "Safety",
            value: "Interlocks, overload, rescue readiness per design code practice",
        },
        {
            label: "Service",
            value: "Installation + optional comprehensive AMC",
        },
        {
            label: "Related",
            value: "See MRL page for machine room less packaging",
        },
    ],
    sizeChart: {
        headers: [
            "Configuration",
            "Typical persons",
            "Planning focus",
        ],
        rows: [
            [
                "Residential passenger",
                "6–8 (example class)",
                "Lobby aesthetics; moderate traffic",
            ],
            [
                "Office passenger lift",
                "8–13+ (example class)",
                "Peak-hour handling; door width",
            ],
            [
                "Hotel / institutional",
                "Project-specific",
                "Luggage, accessibility, zoning",
            ],
            [
                "Stretcher-capable (where required)",
                "Hospital-oriented",
                "Clear cabin & door for medical logistics",
            ],
        ],
    },
    body: [
        {
            type: "heading",
            level: 2,
            text: "What is a traction elevator?",
            id: "what-is-traction",
        },
        {
            type: "paragraph",
            text: "A traction elevator moves the car with a traction machine and suspension means (ropes or belts), typically balanced by a counterweight. Electric traction elevators dominate mid- and high-rise passenger service because they scale with height and traffic better than many low-rise [hydraulic elevators](/products/hydraulic-elevators). On modern cores without a full machine room, the same traction duty is often packaged as an [MRL elevator](/products/mrl-elevators). Relicomp surveys traffic, rise, and access before [installation](/services/elevator-installation) so the machine choice matches how the building will actually be used.",
        },
        {
            type: "paragraph",
            text: "In India, buyers often search passenger lift and passenger lift manufacturers when they mean the same commercial elevator category. This page is Relicomp’s commercial owner for traction elevator and passenger lift intent; home-only villa projects may start on our home elevators or hydraulic pages instead.",
        },
        {
            type: "heading",
            level: 2,
            text: "Passenger lift applications",
            id: "passenger-applications",
        },
        {
            type: "list",
            items: [
                "Apartment and residential towers",
                "Commercial offices and IT campuses",
                "Hotels and hospitality cores",
                "Educational and institutional buildings",
                "Mixed-use developments with public lobbies",
            ],
        },
        {
            type: "paragraph",
            text: "Passenger lift dimensions and passenger lift size are never one brochure number. Rated load, door clear opening, cabin internal width/depth, and accessibility needs drive the shaft. We size from traffic and architectural constraints, then freeze GA drawings with your design team.",
        },
        {
            type: "heading",
            level: 2,
            text: "Traction elevator vs hydraulic",
            id: "vs-hydraulic",
        },
        {
            type: "paragraph",
            text: "Traction elevator vs hydraulic is a frequent comparison. Hydraulic solutions excel in many low-rise homes and some goods applications. Traction (including MRL packaging) typically wins when rises grow, speeds increase, or passenger traffic is continuous through the day. Energy, machine room strategy, and AMC skill sets differ, choose after engineering review, not internet myths.",
        },
        {
            type: "component",
            name: "AMCComparisonTable",
            props: {
                title: "Traction vs hydraulic: how they compare",
                columns: ["Consideration", "Traction elevator", "Hydraulic elevator"],
                rows: [
                    [
                        "Best-suited rise",
                        "Taller rises and multi-storey buildings",
                        "Low-rise homes and buildings",
                    ],
                    [
                        "Traffic pattern",
                        "Continuous passenger traffic through the day",
                        "Intermittent, light residential use",
                    ],
                    [
                        "Speed",
                        "Higher travel speeds available",
                        "Lower speeds, smooth starts",
                    ],
                    [
                        "Drive method",
                        "Ropes or belts with counterweight",
                        "Fluid power, no counterweight",
                    ],
                    [
                        "Machine room",
                        "Machine room, or MRL packaging inside the shaft",
                        "Compact power pack, no overhead machine room",
                    ],
                    [
                        "Typical buildings",
                        "Apartments, offices, hotels",
                        "Villas, duplexes, some goods applications",
                    ],
                ],
            },
        },
        {
            type: "heading",
            level: 2,
            text: "Machine room vs MRL packaging",
            id: "mr-vs-mrl",
        },
        {
            type: "paragraph",
            text: "Traction elevators can be delivered with a traditional machine room or as machine room less (MRL) systems. If your architect wants to eliminate the roof machine room, see our dedicated MRL elevators page. If high duty or specific access standards favour a machine room, we design classic MR traction layouts.",
        },
        {
            type: "heading",
            level: 2,
            text: "Passenger lift manufacturers: Relicomp approach",
            id: "manufacturers",
        },
        {
            type: "paragraph",
            text: "As passenger lift manufacturers with in-house manufacturing support, we align cabin finishes, door packages, and control interfaces to Indian project realities. Bangalore and regional installation teams keep survey-to-handover accountable. For city-level company context, visit our Bangalore location page.",
        },
        {
            type: "heading",
            level: 2,
            text: "Specification checklist",
            id: "checklist",
        },
        {
            type: "list",
            ordered: true,
            items: [
                "Number of stops and floor-to-floor heights",
                "Peak passenger demand or residential unit count",
                "Preferred door type and clear opening",
                "Accessibility / stretcher requirements if any",
                "Machine room vs MRL preference",
                "Cabin finish level and lobby design language",
                "AMC expectations after handover",
            ],
        },
        {
            type: "heading",
            level: 2,
            text: "Pricing note",
            id: "pricing",
        },
        {
            type: "paragraph",
            text: "Passenger and traction elevator pricing is project-specific. We issue quotations after survey and traffic assumptions, without fixed public INR bands until commercially approved for the website.",
        },
        {
            type: "heading",
            level: 2,
            text: "Next steps",
            id: "next-steps",
        },
        {
            type: "paragraph",
            text: "Send building type, floors, and city. Relicomp will propose a passenger lift configuration, discuss MR vs MRL, and schedule a technical survey.",
        },
    ],
    faqs: [
        {
            question: "What is the difference between a traction elevator and a passenger lift?",
            answer:
                "In practice they often describe the same commercial category: a passenger-carrying elevator using traction technology. “Passenger lift” emphasises use; “traction elevator” emphasises drive type. Relicomp treats this page as the commercial home for both intents.",
        },
        {
            question: "What passenger lift size do I need?",
            answer:
                "Passenger lift size depends on rated load, door clearances, and accessibility needs, not a single standard. Share traffic and architectural constraints for a proper cabin and shaft recommendation.",
        },
        {
            question: "Traction elevator vs hydraulic: which is better?",
            answer:
                "Neither is universally better. Hydraulic suits many low-rise homes; traction suits taller rises and heavier passenger traffic. We recommend after reviewing floors and duty cycle.",
        },
        {
            question: "Do you manufacture passenger lifts in Bangalore?",
            answer:
                "Yes. Relicomp manufactures and installs passenger / traction elevators with Magadi facility support and Bengaluru-region teams.",
        },
        {
            question: "Is MRL a type of traction elevator?",
            answer:
                "Yes. MRL is typically a traction elevator packaged without a separate full machine room. See our MRL elevators page for space-saving details.",
        },
    ],
    related: [

        {
            href: "/products/mrl-elevators",
            label: "MRL elevators",
            kind: "product",
        },
        {
            href: "/products/hydraulic-elevators",
            label: "Hydraulic elevators",
            kind: "product",
        },
        {
            href: "/products/capsule-glass-elevators",
            label: "Capsule & glass elevators",
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
            href: "/contact",
            label: "Request a passenger lift quote",
            kind: "service",
        },
    ],
    cta: {
        heading: "Specify your passenger / traction elevator",
        body: "Share floors, building type, and city. We will recommend capacity, MR vs MRL packaging, and a survey-led quotation.",
        buttonLabel: "Request a quote",
        href: "/contact?topic=traction-elevators&product=traction-elevators",
    },
    seo: {
        title: "Traction Elevators & Passenger Lifts",
        description:
            "Traction elevators and passenger lifts for apartments, offices and hotels. Sizes, traction vs hydraulic, and manufacturer installation.",
        canonicalPath: "/products/traction-elevators",
        ogImage: "/og/default.png",
        keywords: [
            "traction elevator",
            "passenger lift",
            "passenger lift manufacturers",
            "passenger lift dimensions",
            "passenger lift size",
            "traction elevator vs hydraulic",
            "electric traction elevator",
        ],
    },
};
