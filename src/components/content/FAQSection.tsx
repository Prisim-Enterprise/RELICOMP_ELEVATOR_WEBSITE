"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/content/types";
import { trackEvent } from "@/lib/analytics";
import { RichText } from "./RichText";

type FAQSectionProps = {
  faqs: FAQ[];
  title?: string;
  slug?: string;
  pageType?: string;
};

export function FAQSection({
  faqs,
  title = "Frequently asked questions",
  slug,
  pageType,
}: FAQSectionProps) {
  if (!faqs?.length) return null;

  return (
    <section className="my-10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl font-semibold mb-4">
        {title}
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger
              className="text-left"
              onClick={() => {
                trackEvent("faq_open", {
                  question: faq.question.slice(0, 120),
                  slug: slug ?? "",
                  page_type: pageType ?? "",
                });
              }}
            >
              {faq.question}
            </AccordionTrigger>
            {/* NOTE (SEO): Radix mounts this content only once a visitor opens
                the item, so `.faq-answer` elements are not in the server-rendered
                HTML and the `.faq-answer` selector in our SpeakableSpecification
                resolves to nothing until then. That is accepted here: every FAQ
                answer is already published in full in the FAQPage JSON-LD on the
                same page, which is what search and answer engines consume. Adding
                `forceMount` does put the text in the HTML, but Radix then stops
                applying `hidden`, so answers render expanded unless the closed
                state is also hidden in CSS - which costs the expand/collapse
                animation site-wide. Not worth it for a duplicate of data the
                JSON-LD already carries. */}
            <AccordionContent className="faq-answer leading-relaxed text-muted-foreground">
              <RichText text={faq.answer} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
