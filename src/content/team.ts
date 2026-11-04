/**
 * Named leadership / expert team for E-E-A-T and Person schema.
 *
 * WHY THIS FILE EXISTS
 * AI search engines (Perplexity, ChatGPT Search, Google AI Overviews) and Google's
 * own E-E-A-T assessment both look for identifiable humans behind expertise claims.
 * Elevators are a safety-critical, high-value purchase, so named engineers with real
 * credentials carry genuine ranking and citation weight.
 *
 * HOW TO USE
 * Add real people below. Nothing is rendered and no Person schema is emitted while
 * the array is empty, so an unfinished list can never publish placeholder humans.
 *
 * Names already surfaced in your own Google reviews, as starting candidates:
 *   - Shreyas   (Services team)
 *   - Santhosh  (Project coordination / custom home lifts)
 *   - Manoj     (Installation & support)
 * Confirm each person's real role and consent before publishing.
 */

export type TeamMember = {
  /** Slug used for the Person @id fragment, e.g. "shreyas-n" */
  id: string;
  /** Full name as it should appear publicly */
  name: string;
  /** Job title, e.g. "Head of Service Operations" */
  role: string;
  /** 1-3 sentences of real, verifiable background. Avoid unverifiable superlatives. */
  bio?: string;
  /** Years in the elevator industry, e.g. "12 years" */
  experience?: string;
  /** Formal qualifications, e.g. ["B.E. Mechanical"] */
  credentials?: readonly string[];
  /** What this person is the in-house authority on */
  expertise?: readonly string[];
  /** Public path under /public, e.g. "/team/shreyas.jpg" */
  image?: string;
  /** Optional professional profile (LinkedIn) to strengthen the entity graph */
  sameAs?: readonly string[];
};

/**
 * TODO(business): populate with real, consented people.
 * Leave empty rather than inventing anyone — fabricated staff would be a
 * far worse E-E-A-T signal than having none.
 */
export const leadership: readonly TeamMember[] = [];

/** True when there is at least one real person to show. */
export const hasNamedTeam = leadership.length > 0;
