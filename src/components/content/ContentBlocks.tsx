import type { ContentBlock } from "@/content/types";
import { PriceRangeTable } from "./PriceRangeTable";
import { SizeChart } from "./SizeChart";
import { SpecsTable } from "./SpecsTable";
import { AMCComparisonTable } from "./AMCComparisonTable";
import { ProcessTimeline } from "./ProcessTimeline";
import { RichText } from "./RichText";
import { cn } from "@/lib/utils";

type ContentBlocksProps = {
  blocks: ContentBlock[];
  className?: string;
};

export function ContentBlocks({ blocks, className }: ContentBlocksProps) {
  if (!blocks?.length) return null;

  return (
    <div className={cn("max-w-none", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="mb-5 text-base leading-7 text-foreground/90 sm:text-[1.05rem] sm:leading-8"
              >
                <RichText text={block.text} />
              </p>
            );
          case "heading": {
            const Tag = block.level === 2 ? "h2" : "h3";
            return (
              <Tag
                key={index}
                id={block.id}
                className={
                  block.level === 2
                    ? "mt-12 mb-4 scroll-mt-28 border-l-4 border-primary pl-4 text-2xl font-bold tracking-tight text-foreground"
                    : "mt-8 mb-3 scroll-mt-28 text-xl font-semibold tracking-tight text-foreground"
                }
              >
                {block.text}
              </Tag>
            );
          }
          case "list":
            return block.ordered ? (
              <ol
                key={index}
                className="mb-6 list-none space-y-3 counter-reset-item"
              >
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-foreground/90 leading-relaxed"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="mb-6 space-y-2.5">
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-foreground/90 leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside
                key={index}
                className="my-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-5 text-sm leading-relaxed text-foreground shadow-sm sm:p-6 sm:text-base"
              >
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Good to know
                </p>
                <RichText text={block.text} />
              </aside>
            );
          case "component":
            switch (block.name) {
              case "PriceRangeTable":
                return <PriceRangeTable key={index} {...block.props} />;
              case "SizeChart":
                return <SizeChart key={index} {...block.props} />;
              case "SpecsTable":
                return <SpecsTable key={index} {...block.props} />;
              case "AMCComparisonTable":
                return <AMCComparisonTable key={index} {...block.props} />;
              case "ProcessTimeline":
                return (
                  <ProcessTimeline
                    key={index}
                    stepIds={block.props?.stepIds}
                    title={block.props?.title}
                  />
                );
              default:
                return null;
            }
          default:
            return null;
        }
      })}
    </div>
  );
}
