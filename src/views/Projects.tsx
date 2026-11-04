"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import {
  PageHero,
  pageHeroBreadcrumbClass,
  pageHeroGlassClass,
  pageHeroOutlineButtonClass,
} from "@/components/content/PageHero";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import { QuoteCta } from "@/components/quote/QuoteCta";
import { useQuoteModal } from "@/components/quote/QuoteModalContext";
import {
  WhatsAppCta,
  whatsappMessageFor,
} from "@/components/quote/WhatsAppCta";
import luxuryVillaHomeElevator from "@/assets/projects/luxury-villa-home-elevator.webp";
import apartmentComplexLifts from "@/assets/projects/apartment-complex-lifts.webp";
import hospitalElevatorSystem from "@/assets/projects/hospital-elevator-system.webp";
import goodsLiftInstallation from "@/assets/projects/goods-lift-installation.webp";
import hotelElevatorSuite from "@/assets/projects/hotel-elevator-suite.webp";
import corporateOfficeTower from "@/assets/projects/corporate-office-tower.webp";
import shoppingMallElevators from "@/assets/projects/shopping-mall-elevators.webp";
import residentialDuplexLift from "@/assets/projects/residential-duplex-lift.webp";
import factoryGoodsElevator from "@/assets/projects/factory-goods-elevator.webp";
import { HubSeoSection } from "@/components/content/HubSeoSection";
import { projectsHubSeo } from "@/content/hubs";

type ProjectCategory = "all" | "Residential" | "Commercial" | "Industrial";

type Project = {
  title: string;
  location: string;
  type: Exclude<ProjectCategory, "all">;
  summary: string;
  image: StaticImageData;
};

const projects: Project[] = [
  {
    title: "Luxury villa home elevator",
    location: "Bangalore",
    type: "Residential",
    summary: "Compact cabin, quiet ride, and villa-friendly shaft packaging.",
    image: luxuryVillaHomeElevator,
  },
  {
    title: "Apartment complex lifts",
    location: "Mysore",
    type: "Residential",
    summary: "Multi-stop passenger elevators for mid-rise residential cores.",
    image: apartmentComplexLifts,
  },
  {
    title: "Hospital elevator system",
    location: "Udupi",
    type: "Commercial",
    summary: "Patient- and staff-friendly vertical movement with clear duty split.",
    image: hospitalElevatorSystem,
  },
  {
    title: "Goods lift installation",
    location: "Dindigul",
    type: "Industrial",
    summary: "Material handling lift scoped for load, door clear width, and duty.",
    image: goodsLiftInstallation,
  },
  {
    title: "Hotel elevator suite",
    location: "Hassan",
    type: "Commercial",
    summary: "Guest and service traffic planned as a coordinated lift package.",
    image: hotelElevatorSuite,
  },
  {
    title: "Corporate office tower",
    location: "Bangalore",
    type: "Commercial",
    summary: "Passenger elevators sized for peak lobby and floor-to-floor demand.",
    image: corporateOfficeTower,
  },
  {
    title: "Shopping mall elevators",
    location: "Mysore",
    type: "Commercial",
    summary: "High-visibility passenger units for retail circulation zones.",
    image: shoppingMallElevators,
  },
  {
    title: "Residential duplex lift",
    location: "Kushalnagar",
    type: "Residential",
    summary: "Two- to three-stop home lift for comfort and accessibility.",
    image: residentialDuplexLift,
  },
  {
    title: "Factory goods elevator",
    location: "Hospete",
    type: "Industrial",
    summary: "Industrial-duty freight movement between production floors.",
    image: factoryGoodsElevator,
  },
];

const filters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All projects" },
  { id: "Residential", label: "Residential" },
  { id: "Commercial", label: "Commercial" },
  { id: "Industrial", label: "Industrial" },
];

const serviceAreas: { name: string; href?: string }[] = [
  { name: "Bangalore", href: "/locations/bangalore" },
  { name: "Mysore", href: "/locations/mysore" },
  { name: "Hassan", href: "/locations/hassan" },
  { name: "Kushalnagar" },
  { name: "Chamarajanagara" },
  { name: "Hospete" },
  { name: "Udupi" },
  { name: "Dindigul" },
  { name: "Hennur" },
  { name: "Jigani" },
];

const stats = [
  { value: "600+", label: "Installations" },
  { value: "2 states", label: "KA & TN coverage" },
  { value: "Home → industrial", label: "Project range" },
  { value: "Survey-led", label: "Quotes & scope" },
];

const typeStyles: Record<Exclude<ProjectCategory, "all">, { badge: string }> = {
  Residential: {
    badge: "bg-rose-500/10 text-rose-700 border-rose-200",
  },
  Commercial: {
    badge: "bg-sky-500/10 text-sky-700 border-sky-200",
  },
  Industrial: {
    badge: "bg-amber-500/10 text-amber-800 border-amber-200",
  },
};

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const { openQuoteModal } = useQuoteModal();

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <PageHero innerClassName="pb-12 sm:pb-14">
          <PageBreadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
            ]}
            className={pageHeroBreadcrumbClass}
          />

          <div className="grid w-full min-w-0 items-end gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Portfolio
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight break-words sm:text-4xl md:text-5xl lg:text-6xl">
                Projects that move people & materials
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Residential villas, apartments, hospitals, hotels, offices, and
                industrial goods lifts across Karnataka and Tamil Nadu. Surveyed,
                manufactured, and installed by Relicomp.
              </p>
              <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <QuoteCta
                  source="projects_hero"
                  size="lg"
                  className="w-full px-6 shadow-lg sm:w-auto sm:px-8"
                >
                  Start your project
                  <ArrowRight className="ml-1 h-4 w-4" />
                </QuoteCta>
                <Button
                  asChild
                  size="lg"
                  variant="heroOutline"
                  className={`w-full px-6 sm:w-auto sm:px-8 ${pageHeroOutlineButtonClass}`}
                >
                  <a href="#project-grid">Browse installations</a>
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

        {/* Featured installations + filters */}
        <section
          id="project-grid"
          className="scroll-mt-28 border-b border-border py-12 sm:py-14 lg:py-16"
        >
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Featured installations
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Filter by use case across residential, commercial, and industrial installs.
                </p>
              </div>
              <p className="shrink-0 text-sm font-medium text-muted-foreground">
                Showing{" "}
                <span className="font-bold text-foreground">{filtered.length}</span>{" "}
                of {projects.length}
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Filter projects by type"
              className="mt-6 flex max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filters.map((item) => {
                const active = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(item.id)}
                    className={cn(
                      "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all",
                      active
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => {
                const style = typeStyles[project.type];
                const imageSrc =
                  typeof project.image === "string"
                    ? project.image
                    : project.image.src;
                return (
                  <li key={`${project.title}-${project.location}`}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-lg">
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={imageSrc}
                          alt={`${project.title} in ${project.location}`}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <span
                          className={cn(
                            "absolute left-3 top-3 rounded-full border bg-background/90 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide backdrop-blur-sm",
                            style.badge
                          )}
                        >
                          {project.type}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-4 sm:p-5">
                        <h3 className="text-base font-bold leading-snug sm:text-lg">
                          {project.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {project.summary}
                        </p>
                        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                          <MapPin className="h-4 w-4 shrink-0 text-primary" />
                          <span>{project.location}</span>
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>

            {filtered.length === 0 ? (
              <p className="mt-10 text-center text-muted-foreground">
                No projects in this category yet.
              </p>
            ) : null}
          </div>
        </section>

        <HubSeoSection content={projectsHubSeo} slug="projects" muted />

        <TestimonialsSection
          title="Client testimonials"
          subtitle="Real Google reviews from project owners after survey, install, and handover."
          ctaLabel="Start your project"
          onCtaClick={() => openQuoteModal("projects_testimonials")}
          muted={false}
        />

        {/* Service areas */}
        <section className="border-b border-border py-12 sm:py-14 lg:py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Where we deliver
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Major cities across Karnataka & Tamil Nadu
                </p>
              </div>
              <Button asChild variant="outline" className="w-full rounded-full sm:w-auto">
                <Link href="/locations">
                  All locations
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {serviceAreas.map((area) => {
                const content = (
                  <>
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    <span className="truncate font-medium">{area.name}</span>
                    {area.href ? (
                      <CheckCircle2 className="ml-auto h-3.5 w-3.5 shrink-0 text-primary/50 opacity-0 transition-opacity group-hover:opacity-100" />
                    ) : null}
                  </>
                );

                const className =
                  "group flex min-w-0 items-center gap-2 rounded-xl border border-border bg-card px-3 py-3 text-sm shadow-sm transition-all hover:border-primary/40 hover:shadow-md sm:px-4";

                return (
                  <li key={area.name}>
                    {area.href ? (
                      <Link href={area.href} className={className}>
                        {content}
                      </Link>
                    ) : (
                      <div className={className}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-12 text-primary-foreground sm:py-14">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              Start your project with Relicomp
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/90 sm:text-base">
              Share floors, city, and elevator type. We will recommend a path and
              arrange a site survey.
            </p>
            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <QuoteCta
                source="projects_final"
                size="lg"
                variant="secondary"
                className="w-full px-6 font-semibold sm:w-auto sm:px-8"
              >
                Request a free quote
              </QuoteCta>
              <WhatsAppCta
                source="projects_final_whatsapp"
                message={whatsappMessageFor("projects_final")}
                size="lg"
                variant="heroOutline"
                className="w-full px-6 sm:w-auto sm:px-8"
              >
                Chat on WhatsApp
              </WhatsAppCta>
              <Button
                asChild
                size="lg"
                variant="heroOutline"
                className="w-full rounded-full px-6 sm:w-auto sm:px-8"
              >
                <Link href="/products">View products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
