"use client";

import { useRouter } from "next/navigation";
import { queueSectionScroll } from "@/lib/scroll";

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
  const router = useRouter();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        queueSectionScroll(sectionId);
        router.push("/");
      }}
    >
      {children}
    </button>
  );
}
