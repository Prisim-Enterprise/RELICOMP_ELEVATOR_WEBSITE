"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Shield,
  Zap,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import ParallaxHero from "@/components/ParallaxHero";

import manufacturing from "@/assets/manufacturing.webp";
import advanceSafetyFeature from "@/assets/advanceSafetyFeature.webp";
import energyEfficient from "@/assets/energyEfficient.webp";
import strongRegionalPresence from "@/assets/strongRegionalPresence.webp";
import solutionHomeElevators from "@/assets/homepage/solution-home-elevators.webp";
import solutionCommercialElevators from "@/assets/homepage/solution-commercial-elevators.webp";
import solutionInstallationService from "@/assets/homepage/solution-installation-service.webp";
import projectVillaElevator from "@/assets/homepage/project-villa-elevator.webp";
import projectResidentialApartment from "@/assets/homepage/project-residential-apartment.webp";
import projectHospitalElevator from "@/assets/homepage/project-hospital-elevator.webp";
import projectGoodsLift from "@/assets/homepage/project-goods-lift.webp";
import { HubSeoSection } from "@/components/content/HubSeoSection";
import { homeHubSeo } from "@/content/hubs";
import { QuoteCta } from "@/components/quote/QuoteCta";
import {
  WhatsAppCta,
  whatsappMessageFor,
} from "@/components/quote/WhatsAppCta";

const StickyScrollReveal = dynamic(
  () => import("@/components/StickyScrollReveal")
);
const TestimonialsSection = dynamic(() =>
  import("@/components/TestimonialsSection").then((mod) => mod.TestimonialsSection)
);

const Index = () => {
  const whyChooseItems = [
    {
      title: "In-House Manufacturing",
      description:
        "With our state-of-the-art manufacturing unit in Magadi, Bengaluru, we ensure complete end-to-end control over quality, design & safety. Every elevator is built to perfection with rigorous quality checks at every stage. Our in-house production facility allows us to maintain the highest standards while offering competitive pricing and faster delivery timelines. We work directly with raw materials, ensuring traceability and quality from the ground up, giving you complete peace of mind about the reliability and durability of your elevator system.",
      icon: <Building2 className="h-10 w-10" />,
      image: manufacturing,
      bullets: [
        "Complete quality control from raw materials to finished product",
        "Custom design and engineering capabilities",
        "Faster delivery with in-house production",
        "Cost-effective solutions without compromising quality",
        "Direct oversight of safety standards and compliance",
      ],
    },
    {
      title: "Advanced Safety Features",
      description:
        "Safety is our top priority. Our elevators are equipped with industry-leading safety systems including ARD (Automatic Rescue Device), Overspeed Governors, UCM Protection, Emergency Brakes & Intelligent Door Systems. These advanced features work together to ensure maximum passenger safety in all scenarios - from normal operations to emergency situations. Our safety systems are regularly tested and comply with all national and international safety standards, giving you and your passengers complete confidence in every ride.",
      icon: <Shield className="h-10 w-10" />,
      image: advanceSafetyFeature,
      bullets: [
        "ARD (Automatic Rescue Device) for passenger safety during power failures",
        "Overspeed Governors to prevent dangerous speed increases",
        "UCM Protection for emergency situations",
        "Intelligent Door Systems with safety sensors",
        "Emergency Brakes and backup power systems",
      ],
    },
    {
      title: "Energy-Efficient Systems",
      description:
        "Our elevators are designed with sustainability in mind, consuming significantly less power while maintaining optimal performance. We integrate LED lighting systems and regenerative drives that actually recover energy during descent, feeding it back into the building's power system. This not only reduces your carbon footprint but also substantially lowers your operational costs. Our smart control systems optimize energy usage based on traffic patterns, ensuring efficient operation throughout the day while supporting your building's green initiatives.",
      icon: <Zap className="h-10 w-10" />,
      image: energyEfficient,
      bullets: [
        "LED lighting systems for reduced power consumption",
        "Regenerative drives that recover energy during descent",
        "Smart control systems for optimized energy usage",
        "Lower carbon footprint with eco-friendly technology",
        "Reduced operational costs for building owners",
      ],
    },
    {
      title: "Strong Regional Presence",
      description:
        "With over 16 years of experience and 600+ successful installations across Karnataka and Tamil Nadu, we have established a strong regional presence that ensures you get local expertise with national standards. Our dedicated service teams are strategically located in Bangalore, Mysore, Hassan, Udupi, Chamarajanagara, Kushalnagar, Hospete & Dindigul, providing quick response times for maintenance, breakdowns, and new installations. Our deep understanding of local building codes, regional preferences, and established network of satisfied customers makes us the trusted choice for elevator solutions in South India.",
      icon: <MapPin className="h-10 w-10" />,
      image: strongRegionalPresence,
      bullets: [
        "Local service teams in multiple cities across Karnataka",
        "Quick response time for maintenance and breakdowns",
        "Understanding of local building codes and regulations",
        "Established network of satisfied customers",
        "Regional expertise in elevator installation and service",
      ],
    },
  ];

  const solutions = [
    {
      title: "Home Elevators",
      description: "Elegant, compact, customizable elevators for villas and duplexes",
      image: solutionHomeElevators,
      href: "/products/home-elevators",
      linkLabel: "Explore home elevators",
    },
    {
      title: "Commercial Elevators",
      description: "Reliable high-performance lifts for offices, malls & hospitals",
      image: solutionCommercialElevators,
      href: "/products",
      linkLabel: "Explore commercial elevators",
    },
    {
      title: "Installation & Service",
      description: "Complete installation, modernization, AMC & breakdown support",
      image: solutionInstallationService,
      href: "/services",
      linkLabel: "Explore installation and service",
    },
  ];

  const projects = [
    { title: "Villa Elevator", location: "Bangalore", image: projectVillaElevator },
    { title: "Residential Apartment", location: "Mysore", image: projectResidentialApartment },
    { title: "Hospital Elevator", location: "Udupi", image: projectHospitalElevator },
    { title: "Goods Lift", location: "Dindigul", image: projectGoodsLift },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <ParallaxHero className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <TextReveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              Elevate Your Space,
              <br />
              <span className="text-gradient drop-shadow-2xl">Elevate Your Standards</span>
            </h1>
          </TextReveal>

          <TextReveal delay={200}>
            <p className="text-xl md:text-2xl mb-4 text-white drop-shadow-lg max-w-3xl mx-auto">
              Trusted Elevator Company in Bangalore & Mysore | 16+ Years of
              Excellence
            </p>
          </TextReveal>

          <TextReveal delay={400}>
            <p className="text-lg mb-8 text-white/90 drop-shadow-lg max-w-2xl mx-auto">
              600+ installations across Karnataka & Tamil Nadu
            </p>
          </TextReveal>

          <TextReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <QuoteCta
                source="home_hero_site_visit"
                size="lg"
                className="w-full sm:w-auto text-sm md:text-base px-6 py-4 md:py-6 shadow-premium hover:scale-105 transition-transform"
              >
                Request Free Site Visit
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </QuoteCta>
              <WhatsAppCta
                source="home_hero_whatsapp"
                message={whatsappMessageFor("home_hero")}
                variant="heroOutline"
                size="lg"
                className="w-full sm:w-auto text-sm md:text-base px-4 md:px-6 py-3 md:py-4 border-2"
              >
                Chat on WhatsApp
              </WhatsAppCta>
            </div>
          </TextReveal>
        </div>
      </ParallaxHero>

      {/* Why Choose Us Section */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <TextReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose Relicomp Elevators?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience excellence in every detail
              </p>
            </div>
          </TextReveal>

          <StickyScrollReveal items={whyChooseItems} />
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-14 bg-muted/30">
        <div className="container mx-auto px-4">
          <TextReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Solutions
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive elevator solutions for every need
              </p>
            </div>
          </TextReveal>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <TextReveal key={index} delay={index * 100}>
                <div className="glass-card border border-border/40 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={solution.image.src}
                      alt={`${solution.title} by Relicomp Elevators`}
                      width={solution.image.width}
                      height={solution.image.height}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-6 text-center flex-1 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{solution.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-6 flex-1">
                      {solution.description}
                    </p>
                    <Link href={solution.href} className="mt-auto">
                      <Button variant="outline" className="w-full rounded-full sm:w-auto">
                        {solution.linkLabel}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>

          <TextReveal delay={400}>
            <div className="text-center mt-12">
              <Link href="/products">
                <Button
                  size="lg"
                  className="rounded-full px-8 shadow-premium hover:scale-105 transition-transform"
                >
                  View All Products & Services
                </Button>
              </Link>
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <TextReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                A glimpse of our installations across Karnataka
              </p>
            </div>
          </TextReveal>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <TextReveal key={index} delay={index * 100}>
                <div className="glass-card border border-border/40 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={project.image.src}
                      alt={`${project.title} in ${project.location} by Relicomp Elevators`}
                      width={project.image.width}
                      height={project.image.height}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-6 text-center flex-1 flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{project.location}</p>
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>

          <TextReveal delay={400}>
            <div className="text-center mt-12">
              <Link href="/projects">
                <Button variant="outline" size="lg" className="rounded-full">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </TextReveal>
        </div>
      </section>

      <TestimonialsSection
        title="What our clients say"
        subtitle="Real Google reviews from homeowners and project owners across Bangalore. Quality, smooth ride, and support after handover."
        ctaHref="/projects"
        ctaLabel="See projects & more feedback"
      />

      <HubSeoSection content={homeHubSeo} slug="home" muted />

      {/* Final CTA Section */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Building?
            </h2>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get expert guidance, free site visit & a customized quote
            </p>
          </TextReveal>
          <TextReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteCta
                source="home_final_free_quote"
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 shadow-premium hover:scale-105 transition-transform"
              >
                Get Free Quote
              </QuoteCta>
              <WhatsAppCta
                source="home_final_whatsapp"
                message={whatsappMessageFor("home_final")}
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white bg-white text-red-600 hover:bg-red-600 hover:text-white hover:[&_svg]:text-white"
              >
                Speak on WhatsApp
              </WhatsAppCta>
            </div>
          </TextReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
