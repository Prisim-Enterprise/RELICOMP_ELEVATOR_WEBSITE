import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import type { BreadcrumbItem as Crumb } from "@/content/types";
import { Fragment } from "react";

type PageBreadcrumbsProps = {
  items: Crumb[];
  className?: string;
};

export function PageBreadcrumbs({ items, className }: PageBreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd(items)} />
      <Breadcrumb className={className}>
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <Fragment key={`${item.href}-${item.name}`}>
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={item.href}>{item.name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
