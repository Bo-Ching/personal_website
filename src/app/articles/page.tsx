import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { BackToHomeSectionLink } from "@/components/layout/BackToHomeSectionLink";
import { Navbar } from "@/components/layout/Navbar";
import { getArticles } from "@/lib/content";

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <section className="border-b border-border py-12">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Writing
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Articles</h1>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Notes on engineering decisions, project architecture, and practical product development.
          </p>
          <BackToHomeSectionLink
            sectionId="articles"
            className="mt-5 inline-flex text-sm font-semibold text-slate-700 hover:underline"
          >
            Back to homepage section
          </BackToHomeSectionLink>
        </section>
        <section className="py-10">
          <div className="space-y-4">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="block rounded-xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                aria-label={`Read ${article.title}`}
              >
                <p className="text-xs uppercase tracking-wide text-slate-500">{article.publishedAt}</p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">{article.title}</h2>
                <p className="mt-2 text-sm text-muted">{article.summary}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-600">
                  {article.status === "coming_soon" ? "Coming Soon" : "Published"}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
