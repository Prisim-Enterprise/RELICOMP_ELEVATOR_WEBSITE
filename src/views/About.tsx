"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import CertificatesPublications from "@/components/CertificatesPublications";
import {
  PageHero,
  pageHeroBreadcrumbClass,
  pageHeroGlassClass,
  pageHeroOutlineButtonClass,
} from "@/components/content/PageHero";
import { Button } from "@/components/ui/button";
import { brand } from "@/content/site";
import { HubSeoSection } from "@/components/content/HubSeoSection";
import { TeamSection } from "@/components/content/TeamSection";
import { aboutHubSeo } from "@/content/hubs";
import { QuoteCta } from "@/components/quote/QuoteCta";
import {
  WhatsAppCta,
  whatsappMessageFor,
} from "@/components/quote/WhatsAppCta";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Eye,
  Factory,
  Heart,
  Leaf,
  MapPin,
  Phone,
  Shield,
  Target,
} from "lucide-react";

const stats = [
  { value: brand.yearsOfExcellence, label: "Years of excellence" },
  { value: brand.installations, label: "Installations delivered" },
  { value: "Top 10", label: "Manufacturer recognition 2023" },
  { value: brand.regions, label: "Service regions" },
];

const pillars = [
  {
    icon: Target,
    title: "Our mission",
    body: "Provide safe, reliable, and energy-efficient elevator solutions backed by advanced technology and superior service.",
  },
  {
    icon: Eye,
    title: "Our vision",
    body: "Become the most trusted elevator brand in South India by redefining vertical mobility through innovation, sustainability, and craftsmanship.",
  },
  {
    icon: Heart,
    title: "Our promise",
    body: "Safety first, unmatched quality, customer-centric service, eco-friendly engineering, and local commitment with global standards.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Safety first",
    description: "Uncompromising commitment to passenger safety and security.",
  },
  {
    icon: Award,
    title: "Unmatched quality",
    description: "Premium materials and craftsmanship in every installation.",
  },
  {
    icon: Heart,
    title: "Customer-centric",
    description: "Dedicated service and support for complete satisfaction.",
  },
  {
    icon: Leaf,
    title: "Eco-friendly",
    description: "Sustainable engineering for a greener tomorrow.",
  },
];

const footprint = [
  { title: "Head office", place: "Vijayanagar, Bengaluru" },
  { title: "Factory", place: "Magadi Road, Bengaluru" },
  { title: "Branch", place: "Mysuru" },
  { title: "Branch", place: "Jigani" },
];

const certificates = [
  {
    title: "Top 10 Elevators & Moving Stairways Manufacturers 2023",
    description:
      "Recognized by India's leading industry publication for excellence in elevator manufacturing and innovation.",
    year: "2023",
    issuer: "Industry Today",
  },
  {
    title: "ISO Certified Manufacturing",
    description:
      "Our manufacturing facility in Magadi, Bengaluru is ISO certified, ensuring international quality standards.",
    year: "2023",
    issuer: "ISO Certification Body",
  },
  {
    title: "Safety Compliance Certification",
    description:
      "All our elevators meet and exceed national safety standards with ARD, UCM, and advanced safety systems.",
    year: "2023",
    issuer: "National Safety Authority",
  },
];

const publications = [
  {
    title: "Relicomp Elevators: Leading Innovation in South India",
    description:
      "Featured article highlighting our 16+ years of excellence and 600+ successful installations across Karnataka and Tamil Nadu.",
    source: "Industry Today",
    date: "2023",
  },
  {
    title: "Sustainable Elevator Solutions for Modern Buildings",
    description:
      "Coverage of our energy-efficient systems and eco-friendly manufacturing practices in leading construction magazine.",
    source: "Building & Construction",
    date: "2023",
  },
];

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHero innerClassName="pb-12 sm:pb-14">
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
            ]}
            className={pageHeroBreadcrumbClass}
          />

          <div className="grid w-full min-w-0 items-end gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                About Relicomp
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight break-words sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Elevating India for over {brand.yearsOfExcellence} years
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {brand.legalName} designs, manufactures, installs, and maintains
                elevators across {brand.regions}. From home lifts to commercial
                and industrial systems.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <QuoteCta
                  source="about_hero"
                  size="lg"
                  className="w-full px-6 shadow-lg sm:w-auto sm:px-8"
                >
                  Talk to our team
                  <ArrowRight className="ml-1 h-4 w-4" />
                </QuoteCta>
                <Button
                  asChild
                  size="lg"
                  variant="heroOutline"
                  className={`w-full px-6 sm:w-auto sm:px-8 ${pageHeroOutlineButtonClass}`}
                >
                  <Link href="/projects">View projects</Link>
                </Button>
              </div>
            </div>

            <ul className="grid min-w-0 grid-cols-2 gap-3">
              {stats.map((stat) => (
                <li
                  key={stat.label}
                  className={`${pageHeroGlassClass} p-4 sm:p-5`}
                >
                  <p className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/65 sm:text-sm">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </PageHero>

        {/* Story */}
        <section className="border-b border-border py-12 sm:py-14 lg:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
              <div className="min-w-0">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Who we are
                </h2>
                <p className="mt-2 text-sm font-medium text-primary">
                  Manufacturer-led. Regionally delivered.
                </p>
              </div>
              <div className="min-w-0 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Relicomp Elevators Pvt. Ltd. is one of the leading elevator
                  companies in Bangalore, specializing in design, manufacturing,
                  installation, and maintenance of elevators across Karnataka and
                  Tamil Nadu.
                </p>
                <p>
                  Recognized among India&apos;s &ldquo;Top 10 Elevators &amp;
                  Moving Stairways Manufacturers 2023&rdquo;, we have successfully
                  completed {brand.installations} installations for residential,
                  commercial, industrial, and hospital projects.
                </p>
                <p>
                  With a strong presence across Bangalore, Mysore, Jigani, and a
                  fully equipped manufacturing unit in Magadi, we deliver
                  world-class solutions built on quality, safety, and innovation.
                </p>
              </div>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {footprint.map((item) => (
                <li
                  key={`${item.title}-${item.place}`}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.title === "Factory" ? (
                      <Factory className="h-5 w-5" />
                    ) : (
                      <MapPin className="h-5 w-5" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold leading-snug">
                      {item.place}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Mission / vision / promise */}
        <section className="border-b border-border bg-muted/30 py-12 sm:py-14 lg:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Mission, vision & promise
              </h2>
              <p className="mt-2 text-muted-foreground">
                What guides every design, install, and AMC visit
              </p>
            </div>

            <ul className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3">
              {pillars.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.title}
                    className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6"
                  >
                    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Values */}
        <section className="border-b border-border py-12 sm:py-14 lg:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Core values
                </h2>
                <p className="mt-2 text-muted-foreground">
                  How we work on every site and in every cabin
                </p>
              </div>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <li
                    key={value.title}
                    className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md"
                  >
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-bold">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Why choose */}
        <section className="border-b border-border bg-muted/30 py-12 sm:py-14">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Why teams choose Relicomp
                </h2>
                <p className="mt-3 text-muted-foreground">
                  One manufacturer path from factory floor to building handover.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "16+ years of elevator industry experience",
                  "600+ installations across Karnataka & Tamil Nadu",
                  "In-house manufacturing support at Magadi",
                  "Installation, AMC, and modernization under one brand",
                ].map((line) => (
                  <li key={line} className="flex gap-3 text-sm sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="border-b border-border py-12 sm:py-14 lg:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Certifications & recognition
              </h2>
              <p className="mt-2 text-muted-foreground">
                Awards, certifications, and industry coverage
              </p>
            </div>
            <CertificatesPublications
              certificates={certificates}
              publications={publications}
            />
          </div>
        </section>

        {/* Renders only once real people exist in src/content/team.ts */}
        <TeamSection />

        <HubSeoSection content={aboutHubSeo} slug="about" />

        {/* CTA */}
        <section className="bg-primary py-12 text-primary-foreground sm:py-14">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              Ready to work with us?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/90 sm:text-base">
              Explore products, review projects, or speak with our team for a
              survey-led recommendation.
            </p>
            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <QuoteCta
                source="about_final"
                size="lg"
                variant="secondary"
                className="w-full px-6 font-semibold sm:w-auto sm:px-8"
              >
                Get free quote
              </QuoteCta>
              <WhatsAppCta
                source="about_final_whatsapp"
                message={whatsappMessageFor("about_final")}
                size="lg"
                variant="heroOutline"
                className="w-full px-6 sm:w-auto sm:px-8"
              >
                Talk on WhatsApp
              </WhatsAppCta>
              <Button
                asChild
                size="lg"
                variant="heroOutline"
                className="w-full rounded-full px-6 sm:w-auto sm:px-8"
              >
                <Link href="/products">Explore products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
