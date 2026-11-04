"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Building2, Package, Eye, Wrench, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import Timeline from "@/components/Timeline";
import residentialElevator from "@/assets/residentialElevator.webp";
import mrlElevator from "@/assets/mrlElevator.webp";
import tractionElevator from "@/assets/tractionElevator.webp";
import hydraulicElevator from "@/assets/hydraulicElevator.webp";
import goodsElevator from "@/assets/goodsElevator.webp";
import capsuleElevator from "@/assets/capsuleElevator.webp";
import { installationSteps as sharedInstallationSteps } from "@/content/installationSteps";
import { QuoteCta } from "@/components/quote/QuoteCta";

const Products = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash) return;

    // Prefer live child routes when registered in LEGACY_HASH_REDIRECTS
    void import("@/content/legacyHashRedirects").then(
      ({ LEGACY_HASH_REDIRECTS }) => {
        const dest = LEGACY_HASH_REDIRECTS[hash];
        if (dest) {
          window.location.replace(dest);
          return;
        }
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    );
  }, [pathname]);
  const products = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Residential / Home Elevators",
      description:
        "Elegant, compact, and customizable elevators for villas, duplexes & luxury homes.",
      image: residentialElevator,
      features: [
        "Customizable cabin interiors",
        "Compact shaft & minimal civil work",
        "Smooth, quiet, jerk-free ride",
        "Suitable for 2-4 persons",
      ],
      useCase: "Multi-storey villas, apartments, elderly-friendly homes",
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "MRL (Machine-Room-Less) Elevators",
      description:
        "Modern, efficient, space-optimized solution with integrated drive system.",
      image: mrlElevator,
      features: [
        "Gearless traction motor + counterweight",
        "Space-saving design - no machine room",
        "Energy-efficient operation",
        "Quiet & comfortable ride",
      ],
      useCase: "Low to mid-rise buildings, boutique hotels, apartments",
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Traction / MR Elevators",
      description:
        "High capacity, frequent use elevators for high-rise buildings.",
      image: tractionElevator,
      features: [
        "High load capacity & greater speed",
        "Proven durability",
        "Consistent performance under heavy traffic",
        "Accessible machine room",
      ],
      useCase: "Commercial buildings, offices, apartment towers",
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Hydraulic Elevators",
      description:
        "Cost-effective, smooth-operating option for low to mid-rise buildings.",
      image: hydraulicElevator,
      features: [
        "Smooth start/stop motion",
        "Heavy load capability",
        "Lower up-front cost",
        "Reliable hydraulic system",
      ],
      useCase: "Low-rise homes, small apartments, 2-4 floor buildings",
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Goods / Dumbwaiter / Service Lifts",
      description:
        "Customized lifts for goods transport, service use, or special purposes.",
      image: goodsElevator,
      features: [
        "Custom load capacities",
        "Simple, reliable drive systems",
        "Custom cabin/shaft design",
        "Frequent goods movement ready",
      ],
      useCase: "Hotels, restaurants, hospitals, warehouses",
    },
    {
      icon: <Eye className="h-12 w-12" />,
      title: "Capsule / Panoramic / Glass Elevators",
      description:
        "Luxury elevators that add aesthetics and become visual centerpieces.",
      image: capsuleElevator,
      features: [
        "Transparent/semi-transparent cabins",
        "Stylish finishes (steel, chrome, wood)",
        "Smooth traction/MRL drive",
        "Custom design to match architecture",
      ],
      useCase: "Luxury villas, penthouses, boutique hotels, show-homes",
    },
  ];

  const installationSteps = sharedInstallationSteps.map(
    ({ title, description, duration }) => ({
      title,
      description,
      duration,
    })
  );

  const services = [
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Maintenance & AMC",
      description:
        "Preventive maintenance, 24/7 breakdown support, spare parts availability, and periodic service.",
    },
    {
      icon: <RefreshCw className="h-10 w-10" />,
      title: "Retrofitting & Modernization",
      description:
        "Upgrade old systems, refurbish cabins, enhance safety systems with minimal disruption.",
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Custom Manufacturing",
      description:
        "Bespoke cabin designs, custom dimensions, special use elevators with strict quality control.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-charcoal via-secondary to-black text-white pt-32 pb-16">        <div className="container mx-auto px-4 relative z-10 text-center">
          <TextReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Products & Services</span>
            </h1>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive elevator solutions from design to installation
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-14 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <TextReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Elevator Products
              </h2>
              <p className="text-xl text-muted-foreground">
                Find the perfect elevator for your building
              </p>
            </div>
          </TextReveal>

          <div className="space-y-16">
            {products.map((product, index) => {
              // Create ID from product title
              const productId = product.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
              
              return (
              <TextReveal key={index} delay={index * 100}>
                <div id={productId} className="glass-card overflow-hidden hover:shadow-premium transition-all duration-300 scroll-mt-24">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-square md:aspect-auto">
                      <img 
                        src={typeof product.image === "string" ? product.image : product.image.src} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-12">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-primary flex-shrink-0">{product.icon}</div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-3">{product.title}</h3>
                          <p className="text-muted-foreground mb-6">
                            {product.description}
                          </p>
                          {productId === "residential-home-elevators" && (
                            <Link
                              href="/products/home-elevators"
                              className="inline-flex text-sm font-medium text-primary hover:underline mb-4"
                            >
                              View full home elevators page →
                            </Link>
                          )}
                          {productId === "goods-dumbwaiter-service-lifts" && (
                            <Link
                              href="/products/goods-lifts-dumbwaiters"
                              className="inline-flex text-sm font-medium text-primary hover:underline mb-4"
                            >
                              View full goods lifts & dumbwaiters page →
                            </Link>
                          )}
                          {productId === "hydraulic-elevators" && (
                            <Link
                              href="/products/hydraulic-elevators"
                              className="inline-flex text-sm font-medium text-primary hover:underline mb-4"
                            >
                              View full hydraulic elevators page →
                            </Link>
                          )}
                          {productId === "mrl-machine-room-less-elevators" && (
                            <Link
                              href="/products/mrl-elevators"
                              className="inline-flex text-sm font-medium text-primary hover:underline mb-4"
                            >
                              View full MRL elevators page →
                            </Link>
                          )}
                          {productId === "traction-mr-elevators" && (
                            <Link
                              href="/products/traction-elevators"
                              className="inline-flex text-sm font-medium text-primary hover:underline mb-4"
                            >
                              View full traction / passenger lifts page →
                            </Link>
                          )}
                          {productId ===
                            "capsule-panoramic-glass-elevators" && (
                            <Link
                              href="/products/capsule-glass-elevators"
                              className="inline-flex text-sm font-medium text-primary hover:underline mb-4"
                            >
                              View full capsule / glass elevators page →
                            </Link>
                          )}
                        </div>
                      </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-3">
                          Typical Use Cases:
                        </h4>
                        <p className="text-muted-foreground">{product.useCase}</p>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </TextReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="installation-process" className="py-14 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <TextReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Work Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Staged material delivery, execution, QC, and handover, subject to
                stage payments and site clearance
              </p>
            </div>
          </TextReveal>

          <div className="max-w-5xl mx-auto">
            <Timeline items={installationSteps} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <TextReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Complete support throughout the elevator lifecycle
              </p>
            </div>
          </TextReveal>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
              // Create ID from service title
              const serviceId = service.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
              
              return (
              <TextReveal key={index} delay={index * 100}>
                <div id={serviceId} className="glass-card border border-border/40 shadow-lg rounded-2xl p-4 md:p-6 text-center hover:shadow-xl transition-all duration-300 h-full flex flex-col scroll-mt-24">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground flex-1">{service.description}</p>
                </div>
              </TextReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and site survey
            </p>
          </TextReveal>
          <TextReveal delay={400}>
            <QuoteCta
              source="products_page_request_quote"
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 shadow-premium hover:scale-105 transition-transform"
            >
              Request Quote
            </QuoteCta>
          </TextReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
