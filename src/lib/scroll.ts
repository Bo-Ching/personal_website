export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return false;

  const target = document.getElementById(sectionId);
  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState({}, "", window.location.pathname + window.location.search);
  return true;
}

export function scrollToSectionAfterNavigation(
  sectionId: string,
  onDone?: () => void,
) {
  if (typeof window === "undefined") return;

  let didScroll = false;
  const delays = [50, 120, 220, 360, 560, 800, 1100, 1500];
  const timers = delays.map((delay, index) =>
    window.setTimeout(() => {
      if (didScroll) return;

      didScroll = scrollToSection(sectionId);

      if (didScroll || index === delays.length - 1) {
        onDone?.();
      }
    }, delay),
  );

  return () => timers.forEach((timer) => window.clearTimeout(timer));
}

export function getHomeSectionHref() {
  return "/";
}

export function queueSectionScroll(sectionId: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem("pending-section-id", sectionId);
}

export function consumeQueuedSectionScroll() {
  if (typeof window === "undefined") return;

  const sectionId = window.sessionStorage.getItem("pending-section-id");
  if (!sectionId) return;

  scrollToSectionAfterNavigation(sectionId, () => {
    if (document.getElementById(sectionId)) {
      window.sessionStorage.removeItem("pending-section-id");
    }
  });
}
