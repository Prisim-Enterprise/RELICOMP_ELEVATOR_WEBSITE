import {
  Award,
  Factory,
  IndianRupee,
  PhoneCall,
  ShieldCheck,
  Siren,
} from "lucide-react";

const BADGES = [
  {
    icon: Factory,
    title: "Made in India",
    body: "Designed & built at Magadi, Bengaluru",
  },
  {
    icon: Award,
    title: "ISO Certified",
    body: "Manufacturing quality systems",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    body: "ARD, UCM & emergency brakes",
  },
  {
    icon: Siren,
    title: "Auto Rescue",
    body: "Safe exit during power cuts",
  },
  {
    icon: IndianRupee,
    title: "Warranty + AMC",
    body: "Local spares & service plans",
  },
  {
    icon: PhoneCall,
    title: "Local Support",
    body: "Bangalore engineers on call",
  },
] as const;

export function LandingTrustBadges() {
  return (
    <section className="lp-badges" aria-label="Trust and safety badges">
      <div className="wrap">
        <ul className="lp-badges-grid">
          {BADGES.map(({ icon: Icon, title, body }) => (
            <li key={title} className="lp-badge-card">
              <span className="lp-badge-icon" aria-hidden>
                <Icon strokeWidth={1.75} />
              </span>
              <div>
                <p className="lp-badge-title">{title}</p>
                <p className="lp-badge-body">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
