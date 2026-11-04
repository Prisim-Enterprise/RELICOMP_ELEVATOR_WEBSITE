import { Award, Factory, MapPin, ShieldCheck, Wrench } from "lucide-react";

const defaults = [
  { icon: Award, label: "16+ years" },
  { icon: Factory, label: "Magadi manufacturing" },
  { icon: Wrench, label: "600+ installations" },
  { icon: MapPin, label: "KA & TN service" },
  { icon: ShieldCheck, label: "Install + AMC" },
];

export function TrustStrip({
  items = defaults,
}: {
  items?: { icon: typeof Award; label: string }[];
}) {
  return (
    <ul className="flex flex-wrap gap-2 sm:gap-3">
      {items.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm"
        >
          <Icon className="h-3.5 w-3.5 text-primary" aria-hidden />
          {label}
        </li>
      ))}
    </ul>
  );
}
