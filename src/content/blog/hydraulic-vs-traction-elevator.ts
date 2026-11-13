import type { BlogPostContent } from "../types";
import { productImages } from "../images";

/**
 * /blog/hydraulic-vs-traction-elevator
 *
 * Targets the comparison cluster, which carries the lowest difficulty scores
 * found anywhere in the keyword research: traction elevator vs hydraulic
 * (170/SD 6), hydraulic vs traction (140/SD 6), mrl elevator vs hydraulic
 * (10/SD 16), "which is better" variants.
 *
 * The comparison tables on the MRL and traction product pages cover the same
 * ground in brief. This post is the long-form version those pages link to; keep
 * the engineering claims consistent with them rather than restating them
 * differently, since AEO table snippets are the point of both.
 *
 * Target: 1,200-1,500 words
 */
export const hydraulicVsTractionElevator: BlogPostContent = {
  slug: "hydraulic-vs-traction-elevator",
  kind: "blog",
  h1: "Hydraulic vs Traction Elevator: How to Choose for Your Building",
  intro:
    "Hydraulic or traction is the first real engineering decision in any lift project, and it is usually settled by your building rather than by preference. This comparison covers how each drive works, where each one wins on headroom, pit, energy, speed, travel and maintenance, where machine-room-less traction fits between them, and the five building facts that decide the answer. Written for homeowners, architects and facility managers specifying lifts in India.",
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-12",
  author: "Relicomp Elevators",
  readingTimeMinutes: 9,
  heroImage: productImages["hydraulic-elevators"],
  heroAlt:
    "Hydraulic and traction elevator machinery compared in a Relicomp installation",
  primaryKeyword: "traction elevator vs hydraulic",
  wordCountTarget: [1200, 1500],
  body: [
    {
      type: "heading",
      level: 2,
      text: "The short answer",
      id: "short-answer",
    },
    {
      type: "paragraph",
      text: "Hydraulic lifts push the car up with a fluid-driven ram. Traction lifts hang the car on ropes or belts over a sheave, balanced by a counterweight, and move it with a motor. As a rule of thumb, hydraulic suits low-rise installations with limited headroom, which is why it is common in villa retrofits; traction suits taller buildings, longer travel and higher usage, which is why it dominates apartments and offices. Between two and four floors, both are usually technically viable and the decision comes down to the specifics of your shaft.",
    },
    {
      type: "callout",
      text: "Neither drive is better in the abstract. The honest answer comes from five building facts: travel height, headroom available, pit depth available, expected usage, and whether a machine room can exist. Everything below is how those five facts translate into a drive.",
    },
    {
      type: "heading",
      level: 2,
      text: "How each drive actually works",
      id: "how-they-work",
    },
    {
      type: "paragraph",
      text: "In a hydraulic lift, a power pack drives fluid into a cylinder, and the ram extends to raise the car, directly or through a roping arrangement. Descent is controlled by releasing fluid back to the tank, which means a hydraulic car can usually be lowered to a landing on loss of power without a battery drive, a genuinely useful property. The machinery sits beside or below the shaft rather than above it, so the top of the shaft stays comparatively clear.",
    },
    {
      type: "paragraph",
      text: "In a traction lift, the car and a counterweight hang on opposite sides of a driven sheave. The counterweight offsets most of the car's mass, so the motor only has to move the imbalance, which is why traction is markedly more efficient over long travel and heavy use. The machine traditionally sits in a machine room above the shaft; a machine-room-less design puts a compact gearless machine inside the shaft head instead. See [hydraulic elevators](/products/hydraulic-elevators) and [traction elevators](/products/traction-elevators) for the configurations we build.",
    },
    {
      type: "heading",
      level: 2,
      text: "Hydraulic vs traction vs MRL compared",
      id: "comparison-table",
    },
    {
      type: "component",
      name: "AMCComparisonTable",
      props: {
        title: "Hydraulic vs traction vs machine-room-less (MRL)",
        columns: [
          "Consideration",
          "Hydraulic",
          "Traction (with machine room)",
          "MRL traction",
        ],
        rows: [
          [
            "Where the machine sits",
            "Beside or below the shaft, in a tank/power pack",
            "In a machine room above the shaft",
            "Inside the shaft head, no separate room",
          ],
          [
            "Headroom needed",
            "Least demanding, suits low slabs",
            "Needs headroom plus a machine room",
            "Needs workable headroom at the top",
          ],
          [
            "Pit",
            "Often deeper, for the cylinder arrangement",
            "Conventional",
            "Conventional",
          ],
          [
            "Best travel range",
            "Low rise, typically a few floors",
            "Mid to high rise, long travel",
            "Low to mid rise, growing range",
          ],
          [
            "Speed",
            "Lower; adequate for homes",
            "Highest; suits traffic",
            "Moderate to high",
          ],
          [
            "Energy use over heavy duty",
            "Higher: no counterweight to offset the load",
            "Lower: counterweight balances the car",
            "Lowest of the three in most duty cycles",
          ],
          [
            "Power-failure behaviour",
            "Can usually be lowered on fluid release",
            "Needs a rescue device or battery drive",
            "Needs a rescue device or battery drive",
          ],
          [
            "Civil cost implication",
            "No machine room, but pit and tank space",
            "Machine room adds civil cost",
            "No machine room; often the civil saving",
          ],
          [
            "Maintenance character",
            "Fluid, seals and temperature matter",
            "Ropes, sheave and brake routine",
            "Compact gearless, shaft-top access",
          ],
          [
            "Typical fit",
            "Villa and duplex retrofits",
            "Offices, malls, tall residential",
            "Apartments and new-build homes",
          ],
        ],
      },
    },
    {
      type: "heading",
      level: 2,
      text: "Where hydraulic wins",
      id: "hydraulic-advantages",
    },
    {
      type: "list",
      items: [
        "Low headroom: with no machine above the car, hydraulic often fits under an existing roof slab where traction cannot",
        "Retrofits: the structure carries load differently, which can simplify insertion into an existing building",
        "Power-failure descent: the car can generally be brought to a landing by releasing fluid, without a battery drive",
        "Smooth, quiet operation at residential speeds, where outright speed is not the requirement",
        "No machine room: the civil saving matters when there is nowhere to put one",
      ],
    },
    {
      type: "paragraph",
      text: "The trade-offs are real too: energy consumption is higher under heavy duty because there is no counterweight doing half the work, travel is practically limited, speed is lower, and the fluid system introduces temperature and seal considerations that a maintenance plan has to respect.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where traction wins",
      id: "traction-advantages",
    },
    {
      type: "list",
      items: [
        "Long travel: ropes and a counterweight scale to building heights hydraulic cannot practically reach",
        "Heavy usage: the counterweight makes repeated trips far more energy-efficient, which shows up in running cost",
        "Speed and ride quality at higher velocities, which is what apartment and office traffic needs",
        "Traffic handling: group control across multiple cars is a traction domain",
        "Predictable long-run maintenance on a well-understood rope, sheave and brake routine",
      ],
    },
    {
      type: "paragraph",
      text: "Against that, conventional traction needs a machine room, which is civil cost and floor area, and it needs an automatic rescue device or battery drive to bring passengers to a landing in a power failure.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where MRL fits: often the real answer",
      id: "mrl-option",
    },
    {
      type: "paragraph",
      text: "Many people arriving at hydraulic vs traction are really choosing between hydraulic and machine-room-less traction. MRL keeps traction's counterweight efficiency and ride quality while deleting the machine room, which is frequently the single largest civil saving available on a new build. That combination has made MRL the default for a great deal of new residential and low-to-mid-rise work in India.",
    },
    {
      type: "paragraph",
      text: "MRL does still want workable headroom, because the machine lives at the top of the shaft, and maintenance access is at shaft-top rather than in a comfortable room. Where headroom is genuinely tight, hydraulic remains the more honest answer. The detail is on the [MRL elevators](/products/mrl-elevators) page and in [what is an MRL elevator](/blog/what-is-an-mrl-elevator).",
    },
    {
      type: "heading",
      level: 2,
      text: "The five facts that decide it",
      id: "deciding-facts",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Travel: how many floors, and the total rise from lowest to highest served level",
        "Headroom: clear height above the top served floor, including beams, tanks and sloping roofs",
        "Pit: depth achievable below the lowest served floor, and whether excavation is limited",
        "Usage: a villa making a few dozen trips a day is not an apartment block making hundreds",
        "Machine room: whether one can exist at all, and what that floor area is worth to you",
      ],
    },
    {
      type: "paragraph",
      text: "Answer those five and the drive usually selects itself. Dimensions are covered in the [home lift size guide](/blog/home-lift-size-guide); how the drive choice flows into installation effort is in the [elevator installation cost guide](/blog/elevator-installation-cost-india).",
    },
    {
      type: "heading",
      level: 2,
      text: "What about running and maintenance cost?",
      id: "running-cost",
    },
    {
      type: "paragraph",
      text: "Energy cost favours traction and MRL wherever usage is meaningful, because the counterweight means the motor moves the imbalance rather than the whole car. On a lightly used home lift the absolute difference may be modest; on an apartment lift running all day it is not. Maintenance cost is better thought of as different rather than higher: hydraulic maintenance attends to fluid, seals and temperature, traction maintenance attends to ropes, sheave and brake. What drives AMC pricing in either case is set out in [lift AMC charges explained](/blog/lift-amc-charges-explained).",
    },
    {
      type: "heading",
      level: 2,
      text: "Summary",
      id: "summary",
    },
    {
      type: "paragraph",
      text: "Hydraulic suits low-rise, low-headroom and retrofit situations and offers power-failure descent without a battery drive. Traction suits longer travel, higher speed and heavy usage, and is markedly more energy-efficient thanks to its counterweight. MRL traction takes most of traction's advantages and removes the machine room, which makes it the common answer for new residential work. Send Relicomp your travel, headroom, pit, usage and machine-room situation and we will recommend a drive after a free [site survey](/contact?topic=drive-comparison) rather than by brochure.",
    },
  ],
  faqs: [
    {
      question: "Which is better, a hydraulic or a traction elevator?",
      answer:
        "Neither in the abstract. Hydraulic is usually better for low-rise, limited-headroom and retrofit installations; traction is better for longer travel, higher speed and heavy usage, where its counterweight also makes it far more energy-efficient. Your travel height, headroom, pit, usage and machine-room options decide it.",
    },
    {
      question: "Is a hydraulic lift cheaper than a traction lift?",
      answer:
        "Not reliably, and comparing equipment alone is misleading. Hydraulic can avoid machine-room civil cost but may need a deeper pit and consumes more energy under heavy duty; traction with a machine room adds civil cost but costs less to run. Compare the whole project plus a few years of running cost.",
    },
    {
      question: "What is the difference between MRL and hydraulic?",
      answer:
        "An MRL is a traction lift with its machine inside the shaft head instead of a separate machine room, so it keeps counterweight efficiency and ride quality. A hydraulic lift has no counterweight and is driven by a fluid ram from a power pack beside the shaft. MRL generally wins on energy; hydraulic generally wins where headroom is very tight.",
    },
    {
      question: "Which drive is best for a home lift in India?",
      answer:
        "For new-build homes with workable headroom, MRL traction is frequently the best balance of efficiency, ride and civil cost. For retrofits under an existing slab, hydraulic is often the only drive that fits honestly. Both are configurations Relicomp manufactures, so the recommendation follows the survey.",
    },
    {
      question: "What happens in a power failure?",
      answer:
        "A hydraulic car can generally be lowered to a landing by releasing fluid, without a battery drive. Traction and MRL lifts need an automatic rescue device or battery drive to do the same, which is worth confirming is included rather than optional in any quotation.",
    },
    {
      question: "Can an existing hydraulic lift be converted to traction?",
      answer:
        "It is rarely a simple swap, because headroom, pit, structure and the loads the shaft was built for all differ. Where an old lift is unreliable but the shaft is sound, [lift modernization](/services/lift-modernization) of the existing drive and controller is usually the better conversation. A site assessment will tell you which applies.",
    },
  ],
  related: [
    {
      href: "/products/hydraulic-elevators",
      label: "Hydraulic elevators",
      kind: "product",
    },
    {
      href: "/products/traction-elevators",
      label: "Traction & passenger elevators",
      kind: "product",
    },
    {
      href: "/products/mrl-elevators",
      label: "MRL elevators",
      kind: "product",
    },
    {
      href: "/blog/what-is-an-mrl-elevator",
      label: "What is an MRL elevator?",
      kind: "blog",
    },
    {
      href: "/blog/home-lift-size-guide",
      label: "Home lift size guide",
      kind: "blog",
    },
    {
      href: "/contact",
      label: "Get a drive recommendation",
      kind: "page",
    },
  ],
  cta: {
    heading: "Not sure which drive your building needs?",
    body: "Send your travel height, the headroom and pit you can achieve, expected usage and whether a machine room is possible. We will recommend a drive on engineering grounds and confirm it on a free site survey.",
    buttonLabel: "Get a drive recommendation",
    href: "/contact?topic=drive-comparison",
  },
  seo: {
    title: "Hydraulic vs Traction Elevator",
    description:
      "Traction elevator vs hydraulic compared on headroom, pit, speed, travel and energy, with MRL in between. Five facts that decide your drive.",
    canonicalPath: "/blog/hydraulic-vs-traction-elevator",
    ogImage: "/og/default.png",
    keywords: [
      "traction elevator vs hydraulic",
      "hydraulic vs traction",
      "mrl elevator vs hydraulic",
      "hydraulic or traction elevator which is better",
      "difference between hydraulic and traction lift",
    ],
  },
};
