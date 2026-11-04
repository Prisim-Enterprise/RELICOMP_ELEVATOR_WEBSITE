import type { ContentBlock, FAQ, RelatedLink } from "@/content/types";

export type HubSeoContent = {
  /** Optional section title above long-form body */
  heading: string;
  /** Short lead under the heading */
  lead?: string;
  body: ContentBlock[];
  faqs: FAQ[];
  related: RelatedLink[];
};
