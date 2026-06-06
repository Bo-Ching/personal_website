import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getArticleBySlug, getArticles } from "@/lib/content";

type ArticleDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticles().map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-border bg-white p-7 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Article Detail
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{article.title}</h1>
          <p className="mt-3 text-sm text-slate-500">{article.publishedAt}</p>
          <p className="mt-4 text-base text-muted">{article.summary}</p>
          <div className="mt-7 space-y-4">
            {article.content.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
          <Link href="/articles" className="mt-8 inline-flex text-sm font-semibold text-slate-700 hover:underline">
            Back to articles list
          </Link>
        </article>
      </main>
      <Footer />
    </div>
  );
}
