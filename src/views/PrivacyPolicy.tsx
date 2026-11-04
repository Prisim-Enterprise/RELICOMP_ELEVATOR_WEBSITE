"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { headOfficeAddress } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

const LAST_UPDATED = "June 30, 2026";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-charcoal via-secondary to-black text-white pt-32 pb-16">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <TextReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Privacy <span className="text-gradient">Policy</span>
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
                Relicomp Elevators Pvt. Ltd. ("Relicomp", "we", "us", or "our")
                respects your privacy and is committed to protecting the personal
                information you share with us. This Privacy Policy explains what
                information we collect through our website, how we use it, and the
                choices you have. By using our website or submitting an inquiry,
                you agree to the practices described below.
              </p>
            </TextReveal>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>
                  <strong className="text-foreground">Information you provide:</strong>{" "}
                  your name, phone number, email address, project details, and any
                  message you send through our contact or inquiry forms.
                </li>
                <li>
                  <strong className="text-foreground">Automatically collected data:</strong>{" "}
                  your IP address, browser type, device information, pages visited,
                  and interactions, gathered through cookies and analytics tools.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
                <li>To respond to your inquiries and provide quotations.</li>
                <li>To schedule site visits, installations, and maintenance.</li>
                <li>To improve our website, products, and customer service.</li>
                <li>To send service updates and, with your consent, promotional information.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                3. Cookies & Analytics
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and third-party analytics services (such as
                Google Analytics and Google Tag Manager) to understand how visitors
                use our site and to measure the performance of our content. You can
                control or disable cookies through your browser settings, though some
                features of the site may not function properly as a result.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                4. Sharing of Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell or rent your personal information. We may share it
                only with trusted service providers who help us operate our website
                and deliver our services (for example, email and hosting providers),
                or where required by law. These parties are permitted to use your
                information only for the purposes we specify.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                5. Data Security & Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We apply reasonable technical and organisational measures to protect
                your personal information against unauthorised access, loss, or
                misuse. We retain personal information only for as long as necessary
                to fulfil the purposes described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                6. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You may request access to, correction of, or deletion of the personal
                information we hold about you, and you may withdraw consent for
                marketing communications at any time. To exercise these rights, please
                contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                7. Third-Party Links
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external sites and social media
                platforms. We are not responsible for the privacy practices or content
                of those websites and encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                8. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will
                be posted on this page with a revised "Last updated" date. We encourage
                you to review it periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                9. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have questions about this Privacy Policy or how we handle your
                information, please reach out to us:
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
                <Link href="/terms-of-service" className="text-primary hover:underline">
                  Terms of Service
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

export default PrivacyPolicy;
