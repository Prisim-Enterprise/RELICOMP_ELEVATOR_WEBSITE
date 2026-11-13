import type { BlogPostContent } from "../types";
import { serviceImages } from "../images";

/**
 * /blog/elevator-installation-cost-india
 *
 * Targets the installation-cost cluster: cost of elevator installation
 * (880/SD 40), home lift installation cost (590/SD 12), home elevator
 * installation cost (320/SD 16), elevator installation cost in Bangalore.
 *
 * The services hub referenced "elevator installation cost in India" as plain
 * text before this file existed.
 *
 * Division of labour with the sibling posts: the home lift price guide covers
 * the whole project budget for a residential lift, this post covers the
 * installation scope specifically - who does what, what sits in whose scope,
 * and why installation quotes diverge. Keep them cross-linked, not duplicated.
 *
 * Pricing convention: no INR figures anywhere. pricesApproved is false
 * site-wide; Relicomp quotes after survey.
 *
 * Target: 1,500-1,800 words
 */
export const elevatorInstallationCostIndia: BlogPostContent = {
  slug: "elevator-installation-cost-india",
  kind: "blog",
  h1: "Elevator Installation Cost in India: Scope, Civil Work and Hidden Line Items",
  intro:
    "Most people searching cost of elevator installation, home lift installation cost or elevator installation cost in Bangalore are trying to answer a different question: is this quote complete? Installation is where project budgets quietly diverge, because the equipment invoice is comparable between vendors while the installation scope often is not. This guide separates the equipment package from the installation scope, lists the line items that typically arrive later as change orders, and gives you the questions that make two quotes genuinely comparable.",
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-12",
  author: "Relicomp Elevators",
  readingTimeMinutes: 11,
  heroImage: serviceImages["elevator-installation"],
  heroAlt:
    "Relicomp installation crew aligning guide rails inside a lift shaft on site",
  primaryKeyword: "elevator installation cost",
  wordCountTarget: [1500, 1800],
  body: [
    {
      type: "heading",
      level: 2,
      text: "Installation is a scope, not a surcharge",
      id: "installation-is-a-scope",
    },
    {
      type: "paragraph",
      text: "A lift is not delivered, it is built in place. Rails are plumbed and aligned over the full travel, the car frame is assembled, door sets are fitted and adjusted at every landing, the controller is wired and commissioned, safety gear is set and tested, and the whole assembly is run, measured and handed over. That work is skilled, sequential and dependent on your building being ready for it. Treating it as a percentage add-on to the equipment price is the fastest way to misread a quotation.",
    },
    {
      type: "paragraph",
      text: "This is also why installation cost resists a single national figure. The same lift installed into a finished shaft on an accessible site and into a retrofit stair void on a congested street are different jobs with the same bill of materials. Relicomp quotes installation after a survey, with scope separated, which is the only form of quote you can hold anyone to.",
    },
    {
      type: "callout",
      text: "Relicomp note: we do not publish a fixed installation rate. Everything below is a framework for comparing any manufacturer's offer, including ours, before a survey has happened.",
    },
    {
      type: "heading",
      level: 2,
      text: "The six cost blocks in an elevator installation",
      id: "cost-blocks",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Skilled labour and supervision: the erection crew, the supervisor who owns alignment and testing, and the days they are on your site",
        "Civil interface: pit, shaft walls, machine room or MRL provisions, waterproofing, cut-outs, grouting and making good",
        "Electrical interface: dedicated supply to the controller, earthing, shaft and lobby lighting, and optional UPS or automatic rescue device",
        "Access and logistics: material movement to the shaft, hoisting or crane time where needed, and multi-trip delivery on constrained sites",
        "Scaffolding and temporary works: platforms and protection inside the shaft for the duration of erection",
        "Commissioning and handover: alignment, load and safety testing, documentation, and user familiarisation",
      ],
    },
    {
      type: "paragraph",
      text: "Each block can sit in the lift maker's scope or the owner's scope, and both arrangements are legitimate. What is not legitimate is leaving it ambiguous. Ask for every block above to be marked owner-scope or contractor-scope in writing, then compare quotes block by block.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why civil readiness is the biggest single variable",
      id: "civil-readiness",
    },
    {
      type: "paragraph",
      text: "The cheapest installation is one where the crew arrives to a shaft that is already correct. The expensive version is where they arrive, find the shaft out of plumb, a pit shallower than drawing, or power not yet run, and stand down. Idle crews are charged for, revisits consume mobilisation again, and the schedule slips into whatever else is booked. These delays rarely appear in the headline price and almost always appear in the final invoice.",
    },
    {
      type: "paragraph",
      text: "Concretely, the items that most often cause a return visit are shaft plumb and dimension tolerance over the full travel, pit depth and waterproofing, headroom intrusions such as beams and tanks, landing door openings cut to the wrong width, and the dedicated electrical supply not being terminated. Getting a dimensional check done before the crew mobilises is cheap insurance. The dimensions themselves are covered in the [home lift size guide](/blog/home-lift-size-guide).",
    },
    {
      type: "heading",
      level: 2,
      text: "How drive type changes installation effort",
      id: "drive-type",
    },
    {
      type: "paragraph",
      text: "Installation cost follows the engineering, so the drive you choose moves it. A hydraulic lift brings a power pack and jack arrangement, generally asks less of the headroom, and suits retrofits under an existing slab, but introduces oil, a tank location and its own commissioning routine. A machine-room-less traction lift removes the separate machine room, which can save significant civil cost, while concentrating equipment at the top of the shaft and demanding workable headroom. A conventional traction lift with a machine room adds that room's civil cost but can simplify access for later maintenance.",
    },
    {
      type: "paragraph",
      text: "None of these is universally cheaper to install. The right comparison is for your building, after someone has measured it. The engineering trade-offs are set out in the [hydraulic vs traction comparison](/blog/hydraulic-vs-traction-elevator) and on the [MRL elevators](/products/mrl-elevators) page.",
    },
    {
      type: "heading",
      level: 2,
      text: "New build versus retrofit installation",
      id: "new-build-vs-retrofit",
    },
    {
      type: "paragraph",
      text: "On a new build, installation is a sequencing problem. If the lift maker is engaged before the RCC drawings are frozen, the shaft is cast correct, the provisions are in place, and erection slots cleanly into the construction programme. Engaging the lift maker after the structure is complete converts design decisions into cutting and making good, which is the most expensive way to buy cabin space.",
    },
    {
      type: "paragraph",
      text: "On a retrofit, installation is an access problem. The shaft may be a stair void, a light well, a courtyard corner or a new external structure, and the governing questions become how material reaches the shaft, what protection the occupied building needs while work proceeds, and how long the building can tolerate the disruption. Retrofit installation in an occupied apartment block is a different undertaking from the same lift in an empty villa, and an honest quote reflects that. See [apartments and residential](/industries/apartments-residential) for how we stage work in occupied buildings.",
    },
    {
      type: "heading",
      level: 2,
      text: "What the installation process looks like",
      id: "installation-process",
    },
    {
      type: "paragraph",
      text: "A staged process is what makes installation cost predictable, because each stage has an entry condition. Relicomp works through site assessment and engineering layout, staged material delivery tied to site clearance and payment milestones, erection, then QC and trial run, followed by handover. The full step-by-step timeline, including the quality-control and trial-run stage, is published on the [elevator installation](/services/elevator-installation) page with the standards each stage answers to.",
    },
    {
      type: "component",
      name: "ProcessTimeline",
      props: { title: "How a Relicomp installation is staged" },
    },
    {
      type: "paragraph",
      text: "Ask any bidder to show you their equivalent. A vendor who cannot describe stage entry conditions is a vendor whose schedule will move.",
    },
    {
      type: "heading",
      level: 2,
      text: "Standards the installation has to satisfy",
      id: "standards",
    },
    {
      type: "paragraph",
      text: "Installation is not only a commercial exercise, and the rules are worth knowing because they constrain what a cheap quote can legitimately omit. Three rulebooks apply in different places: the Bureau of Indian Standards IS 14665 series governs the machine, its erection and its testing; the National Building Code of India 2016, Part 8, Section 5 governs the shaft, the lobby and the building's fire-safety provisions; and in Karnataka the Karnataka Lifts, Escalators and Passenger Conveyors Act, 2012 governs permission to erect and the licence to operate.",
    },
    {
      type: "paragraph",
      text: "That three-way distinction is the useful one: the machine, the building, and the licence. A quote that is cheap because it quietly leaves out testing, documentation or statutory submissions is not cheaper, it is incomplete.",
    },
    {
      type: "heading",
      level: 2,
      text: "The line items that arrive as change orders",
      id: "hidden-line-items",
    },
    {
      type: "list",
      items: [
        "Scaffolding and shaft protection, where the quote assumed the owner would provide it",
        "Making good after cut-outs, grouting and plaster around landing doors",
        "Dedicated electrical supply, earthing and the lobby or shaft lighting points",
        "Automatic rescue device or UPS, frequently quoted as optional then treated as essential",
        "Crane or hoisting time on sites where material cannot be carried",
        "Idle-crew and remobilisation charges caused by civil work not being ready",
        "Statutory submission and inspection coordination, where it sits outside the base scope",
        "Year-one maintenance versus paid AMC after warranty, which changes the ownership comparison",
      ],
    },
    {
      type: "paragraph",
      text: "None of these are unreasonable charges. They become disputes only when they were never stated. The ownership side of the picture, including what maintenance costs after the warranty year, is explained in [lift AMC charges explained](/blog/lift-amc-charges-explained).",
    },
    {
      type: "heading",
      level: 2,
      text: "Nine questions that make two quotes comparable",
      id: "questions-to-ask",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Is installation included in this figure, or quoted separately?",
        "Which of the six cost blocks above are owner-scope and which are yours?",
        "What shaft dimensions, pit depth, headroom and tolerances does this price assume?",
        "What electrical supply do you need at the controller, and who runs it?",
        "Who provides scaffolding, shaft protection and making good?",
        "What happens commercially if civil work is not ready on your mobilisation date?",
        "What testing and documentation is handed over at completion?",
        "Which statutory submissions do you handle, and which remain mine?",
        "What does maintenance cost from year two, and what response time comes with it?",
      ],
    },
    {
      type: "paragraph",
      text: "Send the same nine questions and the same shaft data to every bidder. The answers, not the headline totals, are what tell you which quote is actually the lowest.",
    },
    {
      type: "heading",
      level: 2,
      text: "Summary",
      id: "summary",
    },
    {
      type: "paragraph",
      text: "Elevator installation cost in India is a function of labour, civil and electrical interface, access, and the readiness of your building, not a fixed percentage of the equipment price. Separate the scopes, insist on the shaft assumptions in writing, get civil readiness checked before mobilisation, and compare quotes block by block. Relicomp manufactures at Magadi and installs after a free survey, with a staged process and scope stated explicitly. See the [elevator installation](/services/elevator-installation) service page, or the [home lift price guide](/blog/home-lift-price-in-india-2026) for the whole residential budget.",
    },
  ],
  faqs: [
    {
      question: "What is the cost of elevator installation in India?",
      answer:
        "Installation is priced from the job rather than a national rate: skilled labour and supervision days, civil and electrical interface, site access, and how ready your shaft is when the crew arrives. Two identical lifts can differ substantially between an accessible new build and a congested retrofit, so insist on a survey-based figure.",
    },
    {
      question: "Is home lift installation cost included in the quoted price?",
      answer:
        "Sometimes, and sometimes not, which is exactly why you should ask. Some quotations bundle equipment and installation, others separate them, and a few exclude scaffolding, making good and the electrical supply entirely. Ask for every scope block to be marked owner or contractor before comparing totals.",
    },
    {
      question: "How long does elevator installation take?",
      answer:
        "It depends on travel, drive type, site access and civil readiness, and it is best quoted as a staged programme with entry conditions rather than a single duration. Relicomp publishes its stage path on the elevator installation page, including the quality-control and trial-run stage before handover.",
    },
    {
      question: "What civil work do I need to do before installation?",
      answer:
        "Typically a shaft built to the issued dimensions and tolerances, the specified pit depth with waterproofing, clear headroom without beam or tank intrusions, correctly sized landing openings, and a dedicated electrical supply terminated at the controller. A dimensional check before the crew mobilises prevents the most common cause of extra cost.",
    },
    {
      question: "Why is one installation quote much cheaper than another?",
      answer:
        "Usually scope rather than efficiency. Scaffolding, making good, the electrical supply, rescue devices, statutory coordination and testing are the items most often left out of a low figure, and they reappear later as change orders. Compare the exclusions first.",
    },
    {
      question: "Does installation cost more for a retrofit than a new build?",
      answer:
        "Frequently, because retrofit cost is driven by access, protection of an occupied building and working around existing structure rather than by the equipment. The counterweight is that a well-planned retrofit can avoid machine-room civil work entirely. Only a survey settles it for your building.",
    },
  ],
  related: [
    {
      href: "/services/elevator-installation",
      label: "Elevator installation service",
      kind: "service",
    },
    {
      href: "/blog/home-lift-price-in-india-2026",
      label: "Home lift price guide 2026",
      kind: "blog",
    },
    {
      href: "/blog/home-lift-size-guide",
      label: "Home lift size guide",
      kind: "blog",
    },
    {
      href: "/blog/lift-amc-charges-explained",
      label: "Lift AMC charges explained",
      kind: "blog",
    },
    {
      href: "/products/home-elevators",
      label: "Home elevators",
      kind: "product",
    },
    {
      href: "/contact",
      label: "Book a free site survey",
      kind: "page",
    },
  ],
  cta: {
    heading: "Get a scope-separated installation quote",
    body: "Share your floors, shaft status and city. We will survey the site and quote installation with every scope block marked owner or contractor, so you can compare it line by line against any other bidder.",
    buttonLabel: "Book a free site survey",
    href: "/contact?topic=installation-cost&product=home-elevators",
  },
  seo: {
    title: "Elevator Installation Cost in India",
    description:
      "Cost of elevator installation explained: labour, civil and electrical scope, access, drive type, and the change orders that inflate totals.",
    canonicalPath: "/blog/elevator-installation-cost-india",
    ogImage: "/og/default.png",
    keywords: [
      "elevator installation cost",
      "cost of elevator installation",
      "home lift installation cost",
      "home elevator installation cost",
      "elevator installation cost in bangalore",
      "lift installation charges",
    ],
  },
};
