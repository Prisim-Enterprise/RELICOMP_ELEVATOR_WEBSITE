/**
 * Segment credibility strip  -  no invented client logos.
 * Positions the types of clients Relicomp serves in Bangalore.
 */
const SEGMENTS = [
  "Villa homeowners",
  "Duplex & G+2 families",
  "Architects",
  "Interior designers",
  "Builders & developers",
  "Retrofit projects",
] as const;

export function LandingSegments() {
  return (
    <section className="lp-segments" aria-label="Who we work with">
      <div className="wrap">
        <p className="lp-segments-label">
          Trusted by Bangalore homeowners, architects &amp; builders
        </p>
        <ul className="lp-segments-list">
          {SEGMENTS.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
