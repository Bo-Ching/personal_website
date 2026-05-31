import Link from "next/link";
import type { Article } from "@/types/article";

type ArticlePreviewCardProps = {
  article: Article;
};

export function ArticlePreviewCard({ article }: ArticlePreviewCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs uppercase tracking-wide text-slate-500">{article.publishedAt}</p>
      <Link href={`/articles/${article.slug}`} className="mt-2 block text-lg font-semibold tracking-tight text-slate-900">
        {article.title}
      </Link>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{article.summary}</p>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-600">
        {article.status === "coming_soon" ? "Coming Soon" : "Published"}
      </p>
      <Link
        href={`/articles/${article.slug}`}
        className="mt-3 inline-flex text-sm font-semibold text-slate-700 underline-offset-4 hover:underline"
      >
        Read detail
      </Link>
    </article>
  );
}
