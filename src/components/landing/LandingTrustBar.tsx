import { Award, Factory, Home, MapPin } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Factory,
    label: "Magadi Factory – End-to-end control",
  },
  {
    icon: Home,
    label: "600+ Installations",
  },
  {
    icon: Award,
    label: "Top 10 Manufacturer 2023",
  },
  {
    icon: MapPin,
    label: "Service: Whitefield • JP Nagar • Sarjapur • Yelahanka & more",
  },
] as const;

export function LandingTrustBar() {
  return (
    <div className="lp-trust-bar" role="region" aria-label="Company credentials">
      <div className="wrap">
        <ul className="lp-trust-bar-list">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon className="lp-trust-bar-icon" aria-hidden strokeWidth={1.75} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
