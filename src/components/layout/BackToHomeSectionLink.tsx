"use client";

import Link from "next/link";
import { getHomeSectionHref, queueSectionScroll } from "@/lib/scroll";

type BackToHomeSectionLinkProps = {
  sectionId: string;
  className?: string;
  children: string;
};

export function BackToHomeSectionLink({
  sectionId,
  className,
  children,
}: BackToHomeSectionLinkProps) {
  return (
    <Link
      href={getHomeSectionHref()}
      scroll={false}
      className={className}
      onClick={() => queueSectionScroll(sectionId)}
    >
      {children}
    </Link>
  );
}
