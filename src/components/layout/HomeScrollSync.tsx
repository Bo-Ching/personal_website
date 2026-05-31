"use client";

import { useEffect } from "react";
import { consumeQueuedSectionScroll } from "@/lib/scroll";

export function HomeScrollSync() {
  useEffect(() => {
    consumeQueuedSectionScroll();
  }, []);

  return null;
}
