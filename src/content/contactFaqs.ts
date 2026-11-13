import type { FAQ } from "./types";
import { availability } from "./site";

/**
 * FAQs for /contact.
 *
 * Two reasons this file exists. First, /contact was the thinnest live page on
 * the site at roughly 220 rendered words, and thin content on a page that
 * receives header, footer and in-body links from every other page is a wasted
 * signal. Second, it was the only live page carrying no FAQPage schema, and
 * these are exactly the questions an answer engine is asked about a local
 * business: are they open, do they charge to visit, which office do I call.
 *
 * The opening-hours answer reads from `availability` so it cannot drift from the
 * LocalBusiness openingHoursSpecification published on the same page.
 */
export const contactFaqs: FAQ[] = [
  {
    question: "What are your office hours?",
    answer: `${availability.officeHoursLabel}. ${availability.note}`,
  },
  {
    question: "Do you charge for a site visit or consultation?",
    answer:
      "No. Site visits and consultations are free across our service regions. The survey is what lets us quote with scope separated into our scope and yours, rather than issue an estimate that changes later as a change order.",
  },
  {
    question: "What should I include in my enquiry to get a useful answer?",
    answer:
      "Tell us the number of floors, the opening or shaft you have, your city, and whether the building exists or is still at drawing stage. With those four details we can usually suggest a workable configuration before anyone visits. Photographs of the intended shaft location help a great deal.",
  },
  {
    question: "Which office should I contact?",
    answer:
      "Any of them: enquiries are handled centrally. Our head office and manufacturing are in Bengaluru, with branch offices at Jigani and Mysuru. Mention your city when you enquire and we will route you to the nearest service team and confirm a realistic attendance window.",
  },
  {
    question: "How quickly will you reply?",
    answer:
      "We typically reply to website enquiries within 24 hours during office hours. For an urgent breakdown, call rather than using the form, because breakdown calls are handled on the support line rather than through website enquiries.",
  },
  {
    question: "Do you work outside Karnataka?",
    answer:
      "Yes. We install and maintain lifts across Karnataka and Tamil Nadu, with manufacturing in Bengaluru. Response times vary honestly with distance, so tell us your city and we will confirm coverage rather than promise a window we cannot keep.",
  },
];
