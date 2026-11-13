import type { BlogPostContent } from "../types";
import { productImages } from "../images";

/**
 * /blog/home-lift-size-guide
 *
 * Second article in the cost/specification cluster. Targets the size keyword set
 * (home lift sizes 1,000/SD 25, home lift size 880/SD 28, 4 passenger lift size
 * 480/SD 21, capsule lift size 320/SD 12, passenger lift size 320/SD 10).
 *
 * The price guide and the home-elevators product page both referred to a
 * "companion home lift size guide" in plain text before this file existed, so
 * those references now resolve to a real page instead of dead-ending.
 *
 * Dimensions quoted here are the same indicative bands published in the
 * home-elevators sizeChart. Do not introduce numbers that contradict it, and do
 * not state a figure as a code requirement unless it has been verified against
 * the standard itself.
 *
 * Target: 1,200-1,500 words
 */
export const homeLiftSizeGuide: BlogPostContent = {
  slug: "home-lift-size-guide",
  kind: "blog",
  h1: "Home Lift Size Guide: Cabin, Shaft, Pit and Headroom Explained",
  intro:
    "Searching home lift size, home lift sizes, or 4 passenger lift size usually means one of two things: you are trying to fit a lift into a space that already exists, or you are still able to shape the opening before concrete is poured. This guide explains how cabin size, shaft size, pit depth and headroom relate to each other, what capacity in persons actually means, and which dimension decisions are expensive to reverse later.",
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-12",
  author: "Relicomp Elevators",
  readingTimeMinutes: 9,
  heroImage: productImages["home-elevators"],
  heroAlt:
    "Home lift cabin interior showing clear cabin width and door opening",
  primaryKeyword: "home lift size",
  wordCountTarget: [1200, 1500],
  body: [
    {
      type: "heading",
      level: 2,
      text: "Cabin size and shaft size are not the same number",
      id: "cabin-vs-shaft",
    },
    {
      type: "paragraph",
      text: "The single most common planning mistake is treating one dimension as the whole answer. A home lift involves at least four related measurements: the clear cabin (the usable box you stand in), the shaft or hoistway (the structural opening the lift lives in), the pit (the depth below the lowest floor level), and the headroom (the height above the top floor level). Quote a lift maker only your cabin preference and you may still be told the shaft does not work.",
    },
    {
      type: "paragraph",
      text: "The shaft is always larger than the cabin. Between the two sit the car frame, guide rails and their brackets, the door operator and landing door frames, counterweight or jack arrangements depending on drive type, and the running clearances that let the car travel without contact. How much larger depends on the drive and the door, which is why two manufacturers can ask for different shafts for the same nominal capacity.",
    },
    {
      type: "callout",
      text: "Planning rule: decide capacity and door type first, then let the lift maker derive the shaft. Deciding the shaft first, and shopping for a lift to fit it, is how retrofit projects end up with a cabin nobody enjoys using.",
    },
    {
      type: "heading",
      level: 2,
      text: "What does a 2, 3 or 4 person home lift actually mean?",
      id: "capacity-in-persons",
    },
    {
      type: "paragraph",
      text: "Capacity is a rated load, expressed in kilograms, that gets translated into persons for marketing. Lift standards convert passengers to load at a fixed figure per person, so a four-person rating is a load rating rather than a promise about four particular adults with luggage. When you compare a 4 passenger lift size across vendors, compare the rated load in kilograms and the clear cabin dimensions, not just the person count on the brochure.",
    },
    {
      type: "paragraph",
      text: "This matters because person counts are the easiest number to inflate. A cabin can be rated for more persons than it comfortably seats or than a wheelchair can turn inside. Relicomp publishes indicative cabin bands on the [home elevators](/products/home-elevators) page precisely so the conversation starts from clear dimensions.",
    },
    {
      type: "component",
      name: "SizeChart",
      props: {
        headers: [
          "Configuration",
          "Typical persons",
          "Clear cabin (indicative)",
          "Best suited to",
        ],
        rows: [
          [
            "Compact home lift",
            "2",
            "~700-900 mm clear (layout dependent)",
            "Retrofits, stair voids, tight shafts in existing homes",
          ],
          [
            "Standard home lift",
            "3",
            "~900-1100 mm clear (layout dependent)",
            "Villas and duplexes with a planned shaft",
          ],
          [
            "Family home lift",
            "4",
            "~1100-1400 mm clear (layout dependent)",
            "Wheelchair, walker or stroller use; multi-generation homes",
          ],
        ],
      },
    },
    {
      type: "paragraph",
      text: "Treat every figure above as indicative and layout dependent. The final clear cabin follows from your shaft, your chosen door, and the drive selected after survey. It is a starting point for a conversation, not a catalogue cut sheet.",
    },
    {
      type: "heading",
      level: 2,
      text: "Pit depth and headroom: the two dimensions people forget",
      id: "pit-and-headroom",
    },
    {
      type: "paragraph",
      text: "Plan area gets all the attention, but vertical dimensions decide feasibility more often. The pit is the space below the lowest served floor that houses buffers and the car's lowest travel position. Headroom is the clear height above the top served floor that allows the car to overtravel safely and gives technicians space to work on top of the car.",
    },
    {
      type: "paragraph",
      text: "Different drives have different vertical appetites. A hydraulic home lift generally asks less of the headroom, because the machine is not above the car, which is why it is often the answer for a retrofit under an existing roof slab. A machine-room-less traction lift removes the separate machine room but still needs workable headroom at the top of the shaft. Compare the trade-offs on the [hydraulic elevators](/products/hydraulic-elevators) and [MRL elevators](/products/mrl-elevators) pages, or read the [hydraulic vs traction comparison](/blog/hydraulic-vs-traction-elevator).",
    },
    {
      type: "list",
      items: [
        "Pit: depth available below the lowest floor, and whether the ground water table or an existing raft limits excavation",
        "Headroom: clear height above the top floor slab, including any beam or sloping roof that intrudes",
        "Floor-to-floor height: affects total travel, rope or jack selection, and the number of door sets",
        "Overhead obstructions: water tanks, ducts and solar mounts above the shaft line",
        "Access route: whether a cabin and rails can physically be carried to the shaft on your site",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How wide should the door opening be?",
      id: "door-opening",
    },
    {
      type: "paragraph",
      text: "The door is the dimension users actually feel. A cabin can be generous while a narrow door still makes it awkward to enter with a walker or a suitcase. Door type also consumes shaft width: a centre-opening door and a side-opening telescopic door distribute their mechanism differently, so switching door type late can change the shaft requirement.",
    },
    {
      type: "paragraph",
      text: "If accessibility is a real requirement rather than an aspiration, say so at survey stage. Accessibility-minded home lift specifications in India typically target a family-size cabin with a clear door opening wide enough for a wheelchair to enter straight on, and enough cabin depth for the occupant and an assistant. That combination usually points to the four-person band rather than a compact cabin.",
    },
    {
      type: "heading",
      level: 2,
      text: "Capsule and glass lift sizes behave differently",
      id: "capsule-lift-size",
    },
    {
      type: "paragraph",
      text: "Searches for capsule lift size and glass lift dimensions deserve a separate note. A capsule lift's structure, glazing and framing are part of the visible architecture, so the enclosure geometry is driven by appearance as much as by travel. Curved and panoramic enclosures do not scale down as freely as a plain steel shaft: below a certain footprint the glazing radius and the door arrangement stop working together. If a capsule lift is the goal, bring the architect and the lift maker into the same conversation early, and see the [capsule and glass elevators](/products/capsule-glass-elevators) page for the configurations we build.",
    },
    {
      type: "heading",
      level: 2,
      text: "New build versus retrofit: when to fix the dimensions",
      id: "new-build-vs-retrofit",
    },
    {
      type: "paragraph",
      text: "On a new build, the lift shaft should be sized before the RCC drawings are frozen. This is the cheapest moment in the entire project to gain cabin space: widening an opening on paper costs a redraw, while widening it later means cutting structure. Involving the lift maker before the slab is the single highest-return thing an owner can do for both size and cost.",
    },
    {
      type: "paragraph",
      text: "On a retrofit, the dimensions are mostly given and the engineering question is what fits honestly inside them. Stair voids, light wells, courtyard corners and external shafts are all workable, and each imposes different constraints on pit, headroom and door side. Where an older lift already exists but the shaft is sound, [lift modernization](/services/lift-modernization) can be the better route than a new shaft.",
    },
    {
      type: "heading",
      level: 2,
      text: "How shaft size affects price",
      id: "size-and-price",
    },
    {
      type: "paragraph",
      text: "Size and cost are linked, but not in a straight line. Moving from a two-person to a four-person cabin increases equipment and structure, yet the larger jump in a project budget often comes from finishes, glazing and civil rework rather than from capacity alone. Right-sizing early is a cost-control tool: it avoids both the overspecified cabin and the expensive late change order. The drivers are set out in full in the [home lift price guide](/blog/home-lift-price-in-india-2026) and the [elevator installation cost guide](/blog/elevator-installation-cost-india).",
    },
    {
      type: "heading",
      level: 2,
      text: "What to send us for a size recommendation",
      id: "what-to-send",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Number of floors to be served, and the floor-to-floor height",
        "The opening you have, or can create: width and depth at the shaft line",
        "Depth available below the lowest floor, and clear height above the top floor",
        "Who will use the lift, including any wheelchair, walker or stroller requirement",
        "Whether this is a new build with drawings still open, or an existing building",
        "Photographs of the intended shaft location and the route material must travel",
      ],
    },
    {
      type: "paragraph",
      text: "With those six items we can usually indicate a workable configuration before anyone visits, then confirm it on a free [site survey](/contact?topic=home-lift-size&product=home-elevators).",
    },
    {
      type: "heading",
      level: 2,
      text: "Summary",
      id: "summary",
    },
    {
      type: "paragraph",
      text: "Home lift size is a set of four linked dimensions, not one number: clear cabin, shaft, pit and headroom. Decide capacity and door first and let the shaft follow; check the vertical dimensions before celebrating the plan area; and fix all of it before the concrete, because that is the only stage where extra cabin space is cheap. Relicomp sizes and manufactures [home elevators](/products/home-elevators) at Magadi and confirms every dimension on site before quoting.",
    },
  ],
  faqs: [
    {
      question: "What is the minimum size for a home lift in India?",
      answer:
        "There is no single minimum that applies to every home, because the usable minimum depends on drive type, door type and the clearances your chosen equipment needs. In practice a compact two-person cabin in the region of 700-900 mm clear is the smallest configuration most homeowners find genuinely usable, and even that needs a survey to confirm pit and headroom.",
    },
    {
      question: "How much bigger than the cabin does the shaft need to be?",
      answer:
        "Always larger, by an amount that depends on the drive, the rails and brackets, and the door mechanism. That is why a shaft figure is only meaningful when it comes from the manufacturer who will supply the lift. Ask for the shaft requirement in writing alongside the cabin dimensions.",
    },
    {
      question: "What is the size of a 4 passenger lift?",
      answer:
        "A four-person home lift typically falls in an indicative clear cabin band of roughly 1100-1400 mm, layout dependent, with the shaft larger again. Compare the rated load in kilograms as well as the person count, since person counts are the easiest figure for a brochure to overstate.",
    },
    {
      question: "Can a home lift be installed without a pit?",
      answer:
        "Some configurations need very little pit, but almost none need none at all, and a claim of zero pit deserves close reading. Share the depth you can achieve below the lowest floor at enquiry stage and we will tell you honestly which drives remain available.",
    },
    {
      question: "Does a bigger cabin mean a much higher price?",
      answer:
        "Not proportionally. Capacity affects equipment and structure, but finishes, glazing and civil rework usually move a home lift budget more than cabin size alone. Right-sizing early avoids paying twice, once for an oversized cabin and again for a late change.",
    },
    {
      question: "Can you recommend a size before visiting the site?",
      answer:
        "Usually yes, as an indication. Send floors, floor-to-floor height, the opening you have, pit and headroom available, and who will use the lift. We will suggest a workable configuration, then confirm it on a free survey before any firm proposal.",
    },
  ],
  related: [
    {
      href: "/products/home-elevators",
      label: "Home elevators",
      kind: "product",
    },
    {
      href: "/products/capsule-glass-elevators",
      label: "Capsule & glass elevators",
      kind: "product",
    },
    {
      href: "/blog/home-lift-price-in-india-2026",
      label: "Home lift price guide 2026",
      kind: "blog",
    },
    {
      href: "/blog/hydraulic-vs-traction-elevator",
      label: "Hydraulic vs traction elevators",
      kind: "blog",
    },
    {
      href: "/services/elevator-installation",
      label: "Elevator installation",
      kind: "service",
    },
    {
      href: "/contact",
      label: "Request a free site survey",
      kind: "page",
    },
  ],
  cta: {
    heading: "Not sure which size fits your shaft?",
    body: "Send your floors, the opening you have, and the pit and headroom available. We will indicate a workable configuration and confirm it on a free site survey before quoting.",
    buttonLabel: "Get a size recommendation",
    href: "/contact?topic=home-lift-size&product=home-elevators",
  },
  seo: {
    title: "Home Lift Size Guide: Cabin & Shaft",
    description:
      "Home lift sizes explained: clear cabin vs shaft, pit depth, headroom, door width, and indicative 2, 3 and 4 passenger cabin bands.",
    canonicalPath: "/blog/home-lift-size-guide",
    ogImage: "/og/default.png",
    keywords: [
      "home lift size",
      "home lift sizes",
      "4 passenger lift size",
      "passenger lift size",
      "capsule lift size",
      "home lift shaft size",
    ],
  },
};
