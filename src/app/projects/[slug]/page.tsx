import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getProjectBySlug, getProjects } from "@/lib/content";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-border bg-white p-7 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Project Detail
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{project.title}</h1>
          <p className="mt-4 text-base text-muted">{project.summary}</p>
          <p className="mt-5 text-sm text-slate-700">
            <span className="font-semibold">Role:</span> {project.role}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-md border border-border bg-slate-50 px-2 py-1 text-xs text-slate-700">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-7 space-y-4">
            {project.content.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-sm font-semibold text-slate-700 hover:underline">
                {link.label}
              </a>
            ))}
          </div>
          <Link href="/projects" className="mt-8 inline-flex text-sm font-semibold text-slate-700 hover:underline">
            Back to projects list
          </Link>
        </article>
      </main>
      <Footer />
    </div>
  );
}
