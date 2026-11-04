"use client";

import React, {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import type { StaticImageData } from "next/image";

interface StickyScrollItem {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string | StaticImageData;
  bullets?: string[];
}

interface StickyScrollRevealProps {
  items: StickyScrollItem[];
}

const StickyScrollReveal: React.FC<StickyScrollRevealProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    };

    const visibleCards = new Map<number, number>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const index = cardRefs.current.findIndex(
          (ref) => ref === entry.target
        );
        if (index === -1) return;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          visibleCards.set(index, entry.intersectionRatio);
        } else {
          visibleCards.delete(index);
        }
      });

      if (visibleCards.size > 0) {
        let maxRatio = 0;
        let maxIndex = 0;

        visibleCards.forEach((ratio, index) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxIndex = index;
          }
        });

        setActiveIndex((prev) =>
          maxIndex !== prev ? maxIndex : prev
        );
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    cardRefs.current.forEach((cardRef) => {
      if (cardRef) observer.observe(cardRef);
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative min-h-[200vh] py-8 md:py-14"
    >
      <div className="sticky top-20 md:top-32 grid lg:grid-cols-2 gap-6 md:gap-12 items-start">
        {/* LEFT: Text cards */}
        <div className="space-y-6 md:space-y-8">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`transition-all duration-500 will-change-transform ${
                activeIndex === index
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-40 scale-95 translate-x-[-4px]"
              }`}
            >
              <div className={`glass-card border rounded-2xl overflow-hidden transition-all duration-500 ${
                activeIndex === index
                  ? "border-primary/50 shadow-xl shadow-primary/10"
                  : "border-border/40 shadow-lg"
              }`}>
                {/* Active indicator bar */}
                {activeIndex === index && (
                  <div className="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />
                )}
                
                <div className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    {/* Number badge */}
                    <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base transition-all duration-500 ${
                      activeIndex === index
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        {item.icon && (
                          <div className={`text-primary flex-shrink-0 transition-transform duration-500 ${
                            activeIndex === index ? "scale-110" : "scale-100"
                          }`}>
                            {item.icon}
                          </div>
                        )}
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${
                          activeIndex === index ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {item.bullets && item.bullets.length > 0 && (
                    <div className={`mt-4 pt-4 border-t transition-all duration-500 ${
                      activeIndex === index ? "border-primary/30" : "border-border/50"
                    }`}>
                      <ul className="space-y-2 md:space-y-3">
                        {item.bullets.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3">
                            <span className="text-primary mt-1 md:mt-1.5 flex-shrink-0">
                              <svg
                                className="w-4 h-4 md:w-5 md:h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span className="text-xs md:text-sm text-foreground leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT: Sticky image */}
        <div className="hidden lg:block sticky top-32">
          <div className="glass-card border border-border/40 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-background">
            {items[activeIndex]?.image && (
              <div
                key={`image-container-${activeIndex}`}
                className="group relative flex aspect-[4/3] items-center justify-center bg-muted/50"
              >
                {typeof items[activeIndex].image === "string" ? (
                  <img
                    key={`image-${activeIndex}-${items[activeIndex].image}`}
                    src={items[activeIndex].image}
                    alt={items[activeIndex].title}
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <img
                    key={`image-${activeIndex}`}
                    src={items[activeIndex].image.src}
                    alt={items[activeIndex].title}
                    width={items[activeIndex].image.width}
                    height={items[activeIndex].image.height}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image number indicator */}
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  {activeIndex + 1} / {items.length}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollReveal;

// ----------------------------------------------------
// Example data (Products & Services)
// ----------------------------------------------------

export const productItems: StickyScrollItem[] = [
  {
    title: "Residential / Home Elevators",
    description:
      "Premium home elevators designed for villas and multi-storey apartments, giving your family safe and comfortable vertical mobility every day.",
    bullets: [
      "Enhance everyday comfort with smooth, silent home elevator rides",
      "Save space with compact shafts and machine-room-less (MRL) options",
      "Personalize your cabin with custom finishes, glass panels and mood lighting",
      "Support elderly and kids with barrier-free access on every floor",
      "Increase property value with a luxury home elevator installation",
    ],
    image: "/images/products/home-elevator.jpg",
  },
  {
    title: "MRL (Machine-Room-Less) Elevators",
    description:
      "Space-saving MRL elevators engineered for modern buildings that demand efficiency, lower power consumption and clean shaft design.",
    bullets: [
      "Free up valuable rooftop space with machine-room-less technology",
      "Reduce energy bills with efficient gearless traction systems",
      "Simplify building design with flexible shaft and pit requirements",
      "Speed up installation with pre-engineered MRL elevator packages",
      "Deliver smooth, low-noise rides for residential and commercial users",
    ],
    image: "/images/products/mrl-elevator.jpg",
  },
  {
    title: "Commercial Passenger Elevators",
    description:
      "Heavy-duty passenger elevators built for offices, malls and commercial complexes handling high traffic throughout the day.",
    bullets: [
      "Move people faster with optimized speed and smart group control",
      "Handle high footfall with robust, low-maintenance components",
      "Create a premium lobby experience with modern cabin interiors",
      "Improve accessibility with wide door openings and braille controls",
      "Ensure uptime with 24/7 monitoring and quick service response",
    ],
    image: "/images/products/passenger-elevator.jpg",
  },
  {
    title: "Hospital & Bed Elevators",
    description:
      "Specialized hospital elevators designed for stretcher movement, medical staff and critical patient transfer with maximum safety.",
    bullets: [
      "Accommodate stretchers, wheelchairs and medical equipment comfortably",
      "Provide jerk-free rides for critical patient transport between floors",
      "Integrate voice announcements and braille for better navigation",
      "Support hygiene with antibacterial cabin finishes and easy-clean floors",
      "Prioritize emergency access with fire-rated doors and rescue features",
    ],
    image: "/images/products/hospital-elevator.jpg",
  },
  {
    title: "Freight & Goods Elevators",
    description:
      "High-capacity freight elevators for warehouses, industries, hotels and retail – built to carry heavy loads safely and reliably.",
    bullets: [
      "Transport heavy goods, trolleys and pallets with high load capacities",
      "Protect interiors with rugged cabins and impact-resistant panels",
      "Optimize workflow by positioning elevators near loading zones",
      "Minimize downtime with industrial-grade components and AMC support",
      "Customize car size, door type and speed for your operations",
    ],
    image: "/images/products/freight-elevator.jpg",
  },
  {
    title: "Modernization & Upgrades",
    description:
      "Upgrade your old elevators with modern controls, safety features and premium cabins without changing the entire system.",
    bullets: [
      "Extend elevator life with controller, drive and door system upgrades",
      "Improve safety with latest standards, ARD and advanced brakes",
      "Reduce breakdowns and power usage with new-age drive technology",
      "Refresh aesthetics with new cabin designs, indicators and buttons",
      "Minimize disruption with phased modernization plans",
    ],
    image: "/images/products/modernization.jpg",
  },
];

export const serviceItems: StickyScrollItem[] = [
  {
    title: "Consultation & Design",
    description:
      "End-to-end elevator planning support from shaft design to capacity selection for architects, builders and homeowners.",
    bullets: [
      "Review building plans and recommend optimal elevator locations",
      "Calculate capacity, speed and traffic handling for your project",
      "Coordinate with architects and structural consultants seamlessly",
      "Ensure compliance with local elevator rules and safety standards",
      "Deliver clear technical drawings and BOQs for execution",
    ],
    image: "/images/services/design.jpg",
  },
  {
    title: "New Elevator Installation",
    description:
      "Complete installation of new elevators for residential, commercial and industrial projects with strict quality checks.",
    bullets: [
      "Execute installation with trained, in-house technician teams",
      "Follow standardized safety and quality checklists on every site",
      "Coordinate project timelines with your civil & MEP teams",
      "Commission lifts with thorough ride tests and safety trials",
      "Hand over systems with user training and documentation",
    ],
    image: "/images/services/installation.jpg",
  },
  {
    title: "Annual Maintenance Contracts (AMC)",
    description:
      "Planned preventive maintenance to keep your elevators safe, reliable and running with minimal breakdowns.",
    bullets: [
      "Schedule regular inspections with predefined service checklists",
      "Proactively identify and replace worn-out parts",
      "Reduce unexpected breakdowns and emergency call-outs",
      "Maintain service records for compliance and audits",
      "Offer flexible AMC plans for multiple elevator brands",
    ],
    image: "/images/services/amc.jpg",
  },
  {
    title: "24/7 Breakdown Support",
    description:
      "Quick response breakdown service to restore elevator operations and reduce downtime.",
    bullets: [
      "Provide rapid on-site response for service calls",
      "Troubleshoot and fix common breakdowns on first visit",
      "Keep critical spare parts ready for fast replacement",
      "Ensure passenger safety with emergency rescue procedures",
      "Share transparent reports after every breakdown visit",
    ],
    image: "/images/services/breakdown.jpg",
  },
];
