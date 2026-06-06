"use client";

import { useEffect } from "react";
import { consumeQueuedSectionScroll } from "@/lib/scroll";

export function HomeSectionScrollSync() {
  useEffect(() => {
    consumeQueuedSectionScroll();
  }, []);

  return null;
}
