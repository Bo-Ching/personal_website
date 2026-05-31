import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <Link href={`/projects/${project.slug}`} className="text-lg font-semibold tracking-tight text-slate-900 hover:text-slate-700">
          {project.title}
        </Link>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-700">
          {project.status}
        </span>
      </div>
      <p className="mt-2 text-sm text-muted">{project.summary}</p>
      <p className="mt-3 text-sm text-slate-700">
        <span className="font-medium">Role:</span> {project.role}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-md border border-border bg-slate-50 px-2 py-1 text-xs text-slate-700">
            {tech}
          </span>
        ))}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-800 underline-offset-4 group-hover:underline">
        View detail
      </Link>
      <div className="mt-4 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={`${project.id}-${link.label}`}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
