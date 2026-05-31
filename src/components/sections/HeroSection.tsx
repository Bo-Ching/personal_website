"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { profile } from "@/data/profile";
import { queueSectionScroll, scrollToSection } from "@/lib/scroll";

export function HeroSection() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (sectionId: string) => {
    if (pathname === "/") {
      scrollToSection(sectionId);
      return;
    }

    queueSectionScroll(sectionId);
    router.push("/");
  };

  return (
    <section id="home" className="flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 text-left">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {profile.location}
          </p>
          <h1 className="mt-4 max-w-3xl text-6xl font-bold tracking-tight text-slate-900 sm:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-3xl font-semibold text-slate-900 sm:text-5xl">
            {profile.title}
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            {renderSubtitle(profile.subtitle)}
          </p>
          <div className="mt-4 max-w-2xl space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/resume"
              className="rounded-full border border-slate-900 bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-md"
            >
              Resume
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => handleScroll("projects")}
              className="inline-flex items-center text-slate-600 transition-colors hover:text-slate-900"
              aria-label="Scroll to next section"
              title="Scroll"
            >
              <ArrowDown className="hero-bounce" size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSubtitle(text: string) {
  const words = text.split(" ");

  return words.map((word, idx) => {
    const clean = word.toLowerCase().replace(/[.,]/g, "");
    const isKeyword = clean === "connected" || clean === "trust" || clean === "systems";

    return (
      <span key={`${word}-${idx}`} className={isKeyword ? "font-semibold text-slate-900" : undefined}>
        {word}
        {idx < words.length - 1 ? " " : ""}
      </span>
    );
  });
}
