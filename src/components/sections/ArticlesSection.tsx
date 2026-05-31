"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ArticlePreviewCard } from "@/components/cards/ArticlePreviewCard";
import { FooterContent } from "@/components/layout/Footer";
import type { Article } from "@/types/article";

const VISIBLE_CARDS = 2;
const CARD_WIDTH_PERCENT = 100 / VISIBLE_CARDS;
const AUTO_SLIDE_MS = 3500;

type ArticlesSectionProps = {
  articles: Article[];
};

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  const total = articles.length;
  const [index, setIndex] = useState(VISIBLE_CARDS);
  const [withTransition, setWithTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const leadingClones = articles.slice(-VISIBLE_CARDS);
  const trailingClones = articles.slice(0, VISIBLE_CARDS);
  const loopItems = [...leadingClones, ...articles, ...trailingClones];

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setWithTransition(true);
    setIndex((prev) => prev - 1);
  };

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setWithTransition(true);
    setIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (index < VISIBLE_CARDS) {
      setWithTransition(false);
      setIndex(total + index);
      setIsAnimating(false);
      return;
    }

    if (index >= total + VISIBLE_CARDS) {
      setWithTransition(false);
      setIndex(index - total);
      setIsAnimating(false);
      return;
    }

    setIsAnimating(false);
  };

  useEffect(() => {
    if (isHovered || isAnimating) return;
    const timer = window.setInterval(() => {
      setIsAnimating(true);
      setWithTransition(true);
      setIndex((prev) => prev + 1);
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [isHovered, isAnimating]);

  return (
    <section id="articles" className="flex min-h-[calc(100dvh-4rem)] items-start">
      <div className="flex min-h-[calc(100dvh-4rem)] w-full flex-col pt-16 pb-2 sm:pt-20">
        <div id="articles-top">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">Articles Preview</h2>
            <Link
              href="/articles"
              className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:underline"
              aria-label="See all articles"
            >
              <span>All articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            A placeholder preview for the future article system and content pipeline.
          </p>

          <div
            className="relative mx-auto mt-10 w-full max-w-[72rem] px-10 md:mt-12 md:px-14"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous articles"
              className="absolute left-2 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/95 text-slate-700 shadow-sm transition hover:bg-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next articles"
              className="absolute right-2 top-1/2 z-30 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/95 text-slate-700 shadow-sm transition hover:bg-white"
            >
              <ChevronRight size={18} />
            </button>

            <div className="relative z-10 -my-2 overflow-x-hidden overflow-y-visible py-2">
              <div
                className={withTransition ? "flex duration-500 ease-out" : "flex"}
                style={{
                  transform: `translateX(-${index * CARD_WIDTH_PERCENT}%)`,
                  transitionProperty: withTransition ? "transform" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {loopItems.map((article, itemIndex) => (
                  <div
                    key={`${article.id}-${itemIndex}`}
                    className="shrink-0 px-2 md:px-2.5"
                    style={{ width: `${CARD_WIDTH_PERCENT}%` }}
                  >
                    <ArticlePreviewCard article={article} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto border-t border-border pt-4">
          <FooterContent className="pb-4" />
        </div>
      </div>
    </section>
  );
}
