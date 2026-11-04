import type { ContentBlock } from "@/content/types";
import type { TocItem } from "@/components/content/InPageNav";

/** Build TOC from content heading blocks that already have ids. */
export function tocFromBody(body: ContentBlock[], max = 8): TocItem[] {
  const items: TocItem[] = [];
  for (const block of body) {
    if (block.type === "heading" && block.level === 2) {
      const id =
        block.id ||
        block.text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      if (id) items.push({ id, label: block.text });
    }
    if (items.length >= max) break;
  }
  return items;
}
