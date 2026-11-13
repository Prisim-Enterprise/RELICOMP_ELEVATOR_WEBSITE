import type { BlogPostContent } from "../types";
import { productImages } from "../images";

/**
 * /blog/what-is-an-mrl-elevator
 *
 * Targets the definitional cluster: what is an mrl elevator (20/SD 10),
 * machine room less lift pros and cons, mrl elevator price in Bangalore
 * (~10/SD 4). Low volume, near-zero competition, and strongly
 * answer-engine-shaped: a "what is X" question with a crisp definition is
 * exactly what featured snippets and AI answers lift.
 *
 * Supports the [MRL elevators](/products/mrl-elevators) product page, which
 * carries the commercial intent. Keep the engineering claims aligned with the
 * MRL vs MR vs hydraulic table already published there.
 *
 * Target: 800-1,000 words
 */
export const whatIsAnMrlElevator: BlogPostContent = {
  slug: "what-is-an-mrl-elevator",
  kind: "blog",
  h1: "What Is an MRL Elevator? Machine-Room-Less Lifts Explained",
  intro:
    "An MRL elevator is a traction lift whose drive machine sits inside the top of the lift shaft instead of in a separate machine room above it. That single change removes a room from your building while keeping the counterweight efficiency and ride quality of a traction lift, which is why machine-room-less designs have become the default for a great deal of new residential and low-to-mid-rise construction in India. This guide explains how they work, their pros and cons, and when a machine room or a hydraulic lift is still the better answer.",
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-12",
  author: "Relicomp Elevators",
  readingTimeMinutes: 7,
  heroImage: productImages["mrl-elevators"],
  heroAlt:
    "Compact gearless MRL machine installed at the head of a lift shaft",
  primaryKeyword: "mrl elevator",
  wordCountTarget: [800, 1000],
  body: [
    {
      type: "heading",
      level: 2,
      text: "What does MRL mean?",
      id: "what-does-mrl-mean",
    },
    {
      type: "paragraph",
      text: "MRL stands for machine-room-less. In a conventional traction lift, the motor, sheave, brake and controller live in a dedicated machine room, normally directly above the shaft. In an MRL lift, a compact gearless machine is mounted within the shaft itself, usually at the head, and the controller moves into a slim cabinet at a landing. The lift still works on the same principle as any traction lift: the car hangs on ropes or belts over a driven sheave, balanced by a counterweight.",
    },
    {
      type: "paragraph",
      text: "The enabling technology is the permanent-magnet gearless machine. Removing the gearbox made the machine small and flat enough to live inside the shaft, and gearless drive also cut energy consumption and improved ride smoothness. An MRL is therefore not a compromise version of a traction lift; it is a traction lift with its machinery relocated.",
    },
    {
      type: "callout",
      text: "In one sentence: an MRL elevator is a traction lift with no separate machine room, achieved by fitting a compact gearless machine inside the shaft head.",
    },
    {
      type: "heading",
      level: 2,
      text: "Advantages of a machine-room-less lift",
      id: "mrl-pros",
    },
    {
      type: "list",
      items: [
        "No machine room: you recover the floor area and avoid building, waterproofing and servicing a room above the shaft, often the single largest civil saving on a new build",
        "Lower energy use: gearless permanent-magnet machines with a counterweight are efficient, and many designs can return energy during regenerative phases",
        "Smooth, quiet ride: gearless drive with modern control removes gearbox noise and improves levelling accuracy",
        "Cleaner architecture: nothing projects above the roofline, which matters where height is restricted or the elevation is a design concern",
        "Design freedom: no machine-room slab means fewer constraints on what sits above the shaft",
      ],
    },
    {
      type: "paragraph",
      text: "On a project where the machine room would otherwise have to be built, the civil saving frequently offsets a good part of the equipment difference. That is the calculation worth doing rather than comparing equipment line items alone.",
    },
    {
      type: "heading",
      level: 2,
      text: "Disadvantages and honest limitations",
      id: "mrl-cons",
    },
    {
      type: "list",
      items: [
        "Headroom still matters: the machine lives at the top of the shaft, so MRL is not a solution for genuinely minimal headroom",
        "Maintenance access is at shaft-top rather than in a room, which technicians must be equipped and trained for",
        "Rescue in a power failure needs an automatic rescue device or battery drive, as with any traction lift",
        "Heat and ventilation at the shaft head need designing for, since the machine is inside the shaft",
        "Component specificity: gearless machines and their drives are less generic than older geared equipment, so spares and service depend more on the manufacturer being around",
      ],
    },
    {
      type: "paragraph",
      text: "That last point is worth taking seriously when choosing a supplier. An MRL is a long-lived asset whose drive and controller are specific to its maker, so manufacturer continuity and local service capability are part of the specification, not an afterthought. Relicomp manufactures at Magadi and maintains what it installs through [lift AMC](/services/lift-amc-maintenance).",
    },
    {
      type: "heading",
      level: 2,
      text: "MRL vs machine-room traction vs hydraulic",
      id: "mrl-vs-others",
    },
    {
      type: "paragraph",
      text: "The three-way comparison is the one most buyers actually need. Conventional traction keeps the machine in a room, which costs civil work and area but gives the easiest maintenance access and scales to the tallest buildings. Hydraulic has no counterweight and is driven by a fluid ram, which makes it the answer where headroom is very tight and allows the car to be lowered on fluid release in a power failure, at the cost of higher energy use and limited travel. MRL sits between them and suits most new low-to-mid-rise work.",
    },
    {
      type: "paragraph",
      text: "The full side-by-side table, including pit, speed, energy and power-failure behaviour, is in [hydraulic vs traction elevator](/blog/hydraulic-vs-traction-elevator), and the product-level detail is on the [MRL elevators](/products/mrl-elevators), [traction elevators](/products/traction-elevators) and [hydraulic elevators](/products/hydraulic-elevators) pages.",
    },
    {
      type: "heading",
      level: 2,
      text: "Is an MRL elevator right for your building?",
      id: "is-mrl-right",
    },
    {
      type: "paragraph",
      text: "MRL is usually the right starting assumption for a new-build home, villa or apartment block of a few floors where headroom is workable and nobody wants to build a machine room. It is a weaker fit where headroom is severely constrained, where the building is tall enough to need conventional traction's speed and traffic handling, or where a retrofit shaft simply cannot accommodate a shaft-head machine.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Confirm the clear headroom above your top served floor, including beams, tanks and any sloping roof",
        "Confirm whether a machine room could exist, and what that floor area is worth to you",
        "Set expected usage honestly: a villa and a 40-flat block have different duty cycles",
        "Check who will maintain it locally, and whether spares for that machine are obtainable",
        "Ask whether a rescue device is included or optional in the quotation",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What does an MRL elevator cost?",
      id: "mrl-cost",
    },
    {
      type: "paragraph",
      text: "MRL equipment typically prices above an equivalent geared machine, and the comparison only makes sense once the machine-room civil cost is included on the other side of the ledger. Travel, stops, capacity, cabin finishes and site access then move the total as they would for any lift. Relicomp quotes after a survey rather than publishing a fixed rate; the budgeting framework is in the [home lift price guide](/blog/home-lift-price-in-india-2026) and the installation scope in the [elevator installation cost guide](/blog/elevator-installation-cost-india).",
    },
    {
      type: "heading",
      level: 2,
      text: "Summary",
      id: "summary",
    },
    {
      type: "paragraph",
      text: "An MRL elevator is a traction lift with a compact gearless machine inside the shaft head and no separate machine room. It keeps counterweight efficiency, delivers a smooth quiet ride and saves the civil cost of a machine room, while still needing workable headroom, shaft-top maintenance access and a rescue device. For most new low-to-mid-rise buildings in India it is the sensible default, and a [free site survey](/contact?topic=mrl&product=mrl-elevators) will confirm whether your headroom allows it.",
    },
  ],
  faqs: [
    {
      question: "What is an MRL elevator?",
      answer:
        "An MRL, or machine-room-less, elevator is a traction lift whose drive machine is mounted inside the top of the lift shaft rather than in a separate machine room above it. It works on the same rope-and-counterweight principle as any traction lift, using a compact gearless machine small enough to fit in the shaft.",
    },
    {
      question: "What are the disadvantages of a machine-room-less lift?",
      answer:
        "It still needs workable headroom because the machine sits at the shaft head; maintenance access is at shaft-top rather than in a room; a rescue device or battery drive is required for power failures; shaft-head ventilation needs designing; and the gearless machine and drive are manufacturer-specific, so local service and spares matter.",
    },
    {
      question: "Is an MRL elevator better than a hydraulic lift?",
      answer:
        "For most new buildings with workable headroom, yes on energy and ride quality, because the counterweight means the motor moves only the imbalance. Hydraulic remains better where headroom is very tight, and it can be lowered to a landing on fluid release without a battery drive.",
    },
    {
      question: "Does an MRL elevator need a pit?",
      answer:
        "Yes. Removing the machine room does not remove the need for a pit below the lowest served floor or for overtravel above the top floor. Share the pit depth and headroom you can achieve and we will confirm which drives remain available for your shaft.",
    },
    {
      question: "How much does an MRL elevator cost in Bangalore?",
      answer:
        "MRL equipment usually prices above an equivalent geared machine, but the fair comparison subtracts the machine room you no longer have to build. Relicomp quotes after a survey rather than publishing a fixed rate, because travel, stops, capacity, finishes and site access all move the figure.",
    },
    {
      question: "Can an existing lift be converted to MRL?",
      answer:
        "Sometimes, but it depends on headroom, shaft structure and the loads the shaft was designed for, so it is an assessment rather than a standard upgrade. Where an old lift is unreliable but the shaft is sound, [lift modernization](/services/lift-modernization) of the drive and controller is often the better route.",
    },
  ],
  related: [
    {
      href: "/products/mrl-elevators",
      label: "MRL elevators",
      kind: "product",
    },
    {
      href: "/blog/hydraulic-vs-traction-elevator",
      label: "Hydraulic vs traction elevators",
      kind: "blog",
    },
    {
      href: "/products/traction-elevators",
      label: "Traction & passenger elevators",
      kind: "product",
    },
    {
      href: "/services/lift-modernization",
      label: "Lift modernization",
      kind: "service",
    },
    {
      href: "/blog/home-lift-size-guide",
      label: "Home lift size guide",
      kind: "blog",
    },
    {
      href: "/contact",
      label: "Check if MRL suits your shaft",
      kind: "page",
    },
  ],
  cta: {
    heading: "Check whether an MRL fits your shaft",
    body: "Send the clear headroom above your top floor, the pit depth available, your number of stops and expected usage. We will confirm whether MRL works for your building or recommend the drive that does.",
    buttonLabel: "Check my shaft",
    href: "/contact?topic=mrl&product=mrl-elevators",
  },
  seo: {
    title: "What Is an MRL Elevator?",
    description:
      "An MRL elevator is a traction lift with its gearless machine in the shaft head, so no machine room is needed. Pros, cons and headroom needs.",
    canonicalPath: "/blog/what-is-an-mrl-elevator",
    ogImage: "/og/default.png",
    keywords: [
      "what is an mrl elevator",
      "mrl elevator",
      "machine room less lift",
      "machine room less lift pros and cons",
      "mrl elevator price in bangalore",
    ],
  },
};
