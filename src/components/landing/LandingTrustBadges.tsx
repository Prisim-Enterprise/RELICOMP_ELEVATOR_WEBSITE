import {
  Award,
  Factory,
  IndianRupee,
  PhoneCall,
  ShieldCheck,
  Siren,
} from "lucide-react";

/**
 * NOTE: this component is currently not rendered - the usage in
 * `src/views/HomeElevatorsBangalore.tsx` is commented out. It is kept here
 * because it is the badge strip for the Google Ads landing page and may be
 * switched back on.
 *
 * That is exactly why the "ISO Certified" badge below was changed. It claimed a
 * certification the business has not published a certificate for, attached to
 * no issuing body - the same claim that `/about` carried until 2026-11-13, where
 * it was traced to issuers that do not exist. Dormant code is the worst place to
 * leave a claim like that: uncommenting one line would have put an
 * unsubstantiated certification claim onto a page that takes paid traffic, where
 * advertising rules require claims to be substantiated.
 *
 * It now states the standard the equipment is actually built to, matching
 * `/about`. If a real certificate is ever issued - standard, accredited body,
 * number, expiry - this badge can carry it.
 */
const BADGES = [
  {
    icon: Factory,
    title: "Made in India",
    body: "Designed & built at Magadi, Bengaluru",
  },
  {
    icon: Award,
    title: "Built to IS 14665",
    body: "BIS standards for lift design & safety",
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
