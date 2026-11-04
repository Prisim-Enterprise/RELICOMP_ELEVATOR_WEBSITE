import type { FAQ } from "@/content/types";

/** Content for /lp/home-elevators-bangalore landing page. */

export const homeElevatorsBangalorePath = "/lp/home-elevators-bangalore";

export const homeElevatorsBangaloreSeo = {
  title: "Home Elevators in Bangalore | Relicomp – Made in Bengaluru",
  description:
    "Home lifts for villas & duplexes, manufactured at our Magadi, Bengaluru factory. 600+ installations, 16+ years, fast service. Get your free site visit today.",
  canonicalPath: homeElevatorsBangalorePath,
  ogImage: "/og/default.png",
  keywords: [
    "home elevator bangalore",
    "home lift bangalore",
    "residential elevators in bangalore",
    "best home elevators in bangalore",
    "small lifts for homes in bangalore",
    "hydraulic lift for home in bangalore",
    "home lift manufacturers in bangalore",
  ],
} as const;

/** Plain-text FAQs  -  no internal links on this conversion page. */
export const homeElevatorBangaloreFaqs: FAQ[] = [
  {
    question: "How much space is needed for a home lift?",
    answer:
      "Compact models can fit in roughly 3′ × 3′ when the layout allows. A stairwell void or a corner of the living area is often sufficient. Our engineer confirms feasibility during the free site visit.",
  },
  {
    question:
      "What is the cost of a home elevator for a 3-floor house in Bangalore?",
    answer:
      "The cost of a G+2 (3-stop) home elevator depends on the drive type, cabin finish, door type and how much civil work your site needs. We do not publish fixed price lists because every home is different. Share your floor count and site details and our team sends an itemised quote, usually the same day, confirmed after a free site visit.",
  },
  {
    question: "Can a lift be installed in an existing/old house?",
    answer:
      "Yes. Hydraulic and MRL models are commonly retrofitted into existing homes with minimal civil work when structure, pit/overhead, and access allow. A survey confirms what is realistic for your house.",
  },
  {
    question: "How much power does a home lift consume?",
    answer:
      "Most residential units run on single-phase power, with consumption comparable to a household AC during travel. LED cabin lighting and standby modes keep idle draw low.",
  },
  {
    question: "What happens during a power cut?",
    answer:
      "The Automatic Rescue Device (ARD) brings the cabin to the nearest floor and opens the doors so passengers can exit safely, which is especially important during Bangalore outages.",
  },
  {
    question: "Do I need a license for a home lift in Karnataka?",
    answer:
      "Yes. Under the Karnataka Lifts, Escalators and Passenger Conveyors Act, 2012, owners must obtain permission before installation and an operational licence after completion and inspection. Relicomp guides you through documentation with registered installation processes.",
  },
  {
    question: "What maintenance does a home elevator need?",
    answer:
      "Periodic servicing under our AMC plans keeps the lift safe and reliable. Our Bangalore team handles breakdowns within hours.",
  },
];

export const homeElevatorBangaloreFaqsSchema: FAQ[] = homeElevatorBangaloreFaqs;
