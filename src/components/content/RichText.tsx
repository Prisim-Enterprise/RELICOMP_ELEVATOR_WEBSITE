import Link from "next/link";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { isPublished } from "@/content/publish";

type RichTextProps = {
  text: string;
  className?: string;
  /** Link style for dark backgrounds (e.g. callouts still use default). */
  linkClassName?: string;
};

/**
 * Renders plain text with markdown-style internal links: [label](/path)
 * Also supports external https links. Safe for paragraphs, lists, FAQs.
 * Unpublished internal targets render as highlighted but non-clickable text.
 */
export function RichText({ text, className, linkClassName }: RichTextProps) {
  if (!text) return null;

  const nodes: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <Fragment key={`t-${key++}`}>
          {text.slice(lastIndex, match.index)}
        </Fragment>
      );
    }

    const label = match[1];
    const href = match[2];
    const isInternal = href.startsWith("/");
    const classes = cn(
      "font-semibold text-primary underline-offset-4 transition-colors hover:underline",
      linkClassName
    );

    if (isInternal) {
      if (isPublished(href)) {
        nodes.push(
          <Link key={`l-${key++}`} href={href} className={classes}>
            {label}
          </Link>
        );
      } else {
        nodes.push(
          <span
            key={`d-${key++}`}
            className={cn(classes, "cursor-not-allowed no-underline opacity-70")}
            title="Coming soon"
            aria-disabled="true"
          >
            {label}
          </span>
        );
      }
    } else {
      nodes.push(
        <a
          key={`a-${key++}`}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(
      <Fragment key={`t-${key++}`}>{text.slice(lastIndex)}</Fragment>
    );
  }

  if (!nodes.length) {
    return <span className={className}>{text}</span>;
  }

  return <span className={className}>{nodes}</span>;
}
