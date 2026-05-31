import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectPreviewCardProps = {
  project: Project;
};

export function ProjectPreviewCard({ project }: ProjectPreviewCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition hover:-translate-y-0.5 hover:shadow-md"
      aria-label={`View ${project.title}`}
    >
      <div className="relative h-80 w-full overflow-hidden border-b border-border bg-slate-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900">{project.title}</h3>
        <p className="mt-2 h-12 overflow-hidden text-sm leading-6 text-slate-600">{project.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.techStack.map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
