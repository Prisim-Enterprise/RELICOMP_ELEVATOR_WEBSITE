"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { headOfficeAddress } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

const LAST_UPDATED = "June 30, 2026";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-charcoal via-secondary to-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <TextReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Terms of <span className="text-gradient">Service</span>
            </h1>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-gray-300 text-base md:text-lg">
              Last updated: {LAST_UPDATED}
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <TextReveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                These Terms of Service ("Terms") govern your access to and use of
                the website of Relicomp Elevators Pvt. Ltd. ("Relicomp", "we",
                "us", or "our"). By accessing this website or engaging our services,
                you agree to be bound by these Terms. If you do not agree, please do
                not use our website.
              </p>
            </TextReveal>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                1. Use of the Website
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to use this website only for lawful purposes and in a way
                that does not infringe the rights of, restrict, or inhibit anyone
                else's use of the site. You must not attempt to gain unauthorised
                access to any part of the website, its servers, or connected systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                2. Products & Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Information about our elevators, installation, maintenance, and
                modernization services is provided for general guidance. Product
                specifications, availability, and pricing may change without notice.
                Any quotation, scope of work, warranty, and delivery timeline will be
                confirmed in a separate written agreement before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                3. Inquiries & Communications
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                When you submit an inquiry through our forms or contact details, you
                confirm that the information you provide is accurate and that you
                consent to being contacted by us regarding your request. Submitting an
                inquiry does not create a binding contract until confirmed by both
                parties in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                4. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, logos, graphics, images,
                and designs, is the property of Relicomp Elevators Pvt. Ltd. or its
                licensors and is protected by applicable intellectual property laws.
                You may not reproduce, distribute, or use any content without our
                prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                5. Third-Party Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may include links to third-party websites and social media
                platforms. These links are provided for convenience only, and we are
                not responsible for the content, products, or practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The website and its content are provided on an "as is" basis. To the
                fullest extent permitted by law, Relicomp shall not be liable for any
                indirect, incidental, or consequential loss arising from your use of,
                or inability to use, this website. Nothing in these Terms limits
                liability that cannot be excluded under applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                7. Warranties & Service Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Warranties and annual maintenance terms for installed equipment are
                governed by the specific agreement signed at the time of purchase or
                service. Warranty coverage may be affected by unauthorised
                modifications, misuse, or servicing carried out by third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                8. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms are governed by and construed in accordance with the laws
                of India. Any disputes arising in connection with these Terms shall be
                subject to the exclusive jurisdiction of the courts in Bangalore,
                Karnataka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                9. Changes to These Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may revise these Terms at any time. Updated Terms take effect once
                posted on this page with a revised "Last updated" date. Your continued
                use of the website constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                10. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For any questions about these Terms, please contact us:
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+918037404826"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>8037404826 (Calls) / +91 87924 96622 (WhatsApp)</span>
                </a>
                <Link
                  href="/contact#contact-form"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>Send a message</span>
                </Link>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span>{headOfficeAddress}</span>
                </div>
              </div>
            </section>

            <TextReveal>
              <p className="text-sm text-muted-foreground border-t border-border pt-6">
                See also our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </TextReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
