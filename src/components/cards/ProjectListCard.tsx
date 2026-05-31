import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectListCardProps = {
  project: Project;
  className?: string;
};

export function ProjectListCard({ project, className }: ProjectListCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`ui-card ui-card-interactive group relative block h-full overflow-hidden bg-slate-100 ${className ?? ""}`}
      aria-label={`View ${project.title}`}
    >
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.04]"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <h2 className="text-xl font-semibold tracking-tight text-white">{project.title}</h2>
        <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-6 text-slate-100/95">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="rounded-full border border-white/35 bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
