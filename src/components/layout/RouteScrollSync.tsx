"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { consumeQueuedSectionScroll } from "@/lib/scroll";

export function RouteScrollSync() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    consumeQueuedSectionScroll();
  }, [pathname]);

  return null;
}
