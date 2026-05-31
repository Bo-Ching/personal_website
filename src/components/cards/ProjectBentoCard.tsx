import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectBentoCardProps = {
  project: Project;
  className?: string;
};

export function ProjectBentoCard({ project, className }: ProjectBentoCardProps) {
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
        sizes="(min-width: 1024px) 33vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-900/26 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
          {project.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tag) => (
            <span
              key={`${project.id}-${tag}`}
              className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
