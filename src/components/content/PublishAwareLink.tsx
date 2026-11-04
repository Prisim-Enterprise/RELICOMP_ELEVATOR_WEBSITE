import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { isPublished } from "@/content/publish";

type PublishAwareLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  /** Extra classes when the target is unpublished (link disabled) */
  disabledClassName?: string;
};

/**
 * Renders a Next.js Link when the target is published; otherwise a non-interactive
 * span that keeps the label visible for catalog / interlinking demos.
 */
export function PublishAwareLink({
  href,
  className,
  disabledClassName,
  children,
  onClick,
  ...rest
}: PublishAwareLinkProps) {
  if (!isPublished(href)) {
    return (
      <span
        className={cn(
          className,
          "cursor-not-allowed opacity-60 pointer-events-none",
          disabledClassName
        )}
        title="Coming soon"
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
