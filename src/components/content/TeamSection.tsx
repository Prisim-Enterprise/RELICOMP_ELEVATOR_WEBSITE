import Image from "next/image";
import { leadership, type TeamMember } from "@/content/team";

type TeamSectionProps = {
  members?: readonly TeamMember[];
  heading?: string;
  lead?: string;
};

/**
 * Named leadership / expertise section for E-E-A-T.
 *
 * Renders nothing when no real people are configured, so the page never ships
 * placeholder humans. Populate `src/content/team.ts` to switch it on; the
 * matching Person JSON-LD on /about is driven by the same array.
 */
export function TeamSection({
  members = leadership,
  heading = "The people behind your elevator",
  lead = "Design, manufacturing and service are handled by named engineers, not an anonymous call centre.",
}: TeamSectionProps) {
  if (!members.length) return null;

  return (
    <section
      className="border-b border-border py-12 sm:py-14 lg:py-16"
      aria-labelledby="team-heading"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-5xl">
          <h2
            id="team-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {heading}
          </h2>
          <p className="speakable-intro mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lead}
          </p>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m) => (
              <li
                key={m.id}
                id={m.id}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                {m.image ? (
                  <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role} at Relicomp Elevators`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ) : null}

                <p className="text-lg font-semibold">{m.name}</p>
                <p className="text-sm text-primary">{m.role}</p>

                {m.experience ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {m.experience} in the elevator industry
                  </p>
                ) : null}

                {m.bio ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                ) : null}

                {m.credentials?.length ? (
                  <p className="mt-3 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Qualifications:{" "}
                    </span>
                    {m.credentials.join(", ")}
                  </p>
                ) : null}

                {m.expertise?.length ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Specialises in:{" "}
                    </span>
                    {m.expertise.join(", ")}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
