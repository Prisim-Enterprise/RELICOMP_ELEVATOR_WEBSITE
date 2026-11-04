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
            <AccordionContent className="faq-answer leading-relaxed text-muted-foreground">
              <RichText text={faq.answer} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
