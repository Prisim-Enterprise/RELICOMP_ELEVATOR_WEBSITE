"use client";

import { Factory, Leaf, MapPin, Shield } from "lucide-react";

const FEATURES = [
  {
    icon: Factory,
    title: "In-House Magadi Factory",
    body: "State-of-the-art unit on Magadi Main Road. Full quality control from raw materials to final testing. Faster delivery, no import duties.",
  },
  {
    icon: Shield,
    title: "Advanced Safety Suite",
    body: "ARD (Automatic Rescue Device), UCM protection, overspeed governors, emergency brakes & intelligent door systems. Standard on every home elevator.",
  },
  {
    icon: Leaf,
    title: "Energy Efficient",
    body: "LED lighting, regenerative drives (gearless models), smart controls. Lower electricity bills for years after installation.",
  },
  {
    icon: MapPin,
    title: "Local Service Network",
    body: "Service teams in Bangalore, Mysore, Hassan, Udupi, Chamarajanagara, Kushalnagar, Hospete & Dindigul. Fast response when it matters.",
  },
] as const;

const ADVANTAGES = [
  {
    title: "4–6 Weeks",
    body: "Typical delivery & installation (vs 8–16 weeks for many imports)",
  },
  {
    title: "Better Price",
    body: "No importer / brand markups. Direct factory pricing for Bangalore",
  },
  {
    title: "Real Support",
    body: "Local engineers who know your area. Not a distant call centre",
  },
] as const;

type LandingWhyChooseProps = {
  onGetQuote: (source?: string) => void;
};

export function LandingWhyChoose({ onGetQuote }: LandingWhyChooseProps) {
  return (
    <section className="why-choose" id="why-relicomp">
      <div className="wrap">
        <div className="sec-head center">
          <h2>Why Bangalore Homeowners Choose Relicomp Over Imported Brands</h2>
          <p className="lead">
            Nibav, Elite and many others import or assemble. We design,
            manufacture, test and service everything from Magadi. That changes
            price, speed and support.
          </p>
        </div>

        <div className="why-choose-grid">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article className="why-choose-card" key={title}>
              <div className="why-choose-icon" aria-hidden>
                <Icon strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="why-advantage">
          <h3 className="why-advantage-title">The Local Manufacturing Advantage</h3>
          <div className="why-advantage-grid">
            {ADVANTAGES.map((item) => (
              <div className="why-advantage-item" key={item.title}>
                <p className="why-advantage-stat">{item.title}</p>
                <p className="why-advantage-body">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="why-advantage-cta">
            <button
              type="button"
              className="btn btn-brass"
              onClick={() => onGetQuote("why_choose_section")}
            >
 Experience the Difference. Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
