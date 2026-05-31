export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  const target = document.getElementById(sectionId);
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState({}, "", window.location.pathname + window.location.search);
}

export function queueSectionScroll(sectionId: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem("pending-section-id", sectionId);
}

export function consumeQueuedSectionScroll() {
  if (typeof window === "undefined") return;

  const sectionId = window.sessionStorage.getItem("pending-section-id");
  if (!sectionId) return;

  window.sessionStorage.removeItem("pending-section-id");
  window.requestAnimationFrame(() => scrollToSection(sectionId));
}
