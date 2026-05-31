import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectBentoCard } from "@/components/cards/ProjectBentoCard";
import type { Project } from "@/types/project";

function getBentoSpan(index: number) {
  const pattern = [
    "col-span-12 md:col-span-7",
    "col-span-12 md:col-span-5",
    "col-span-12 md:col-span-5",
    "col-span-12 md:col-span-7",
  ];

  return pattern[index % pattern.length];
}

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="flex min-h-[calc(100dvh-4rem)] items-start bg-background">
      <div className="w-full pt-20 pb-8 sm:pt-24">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:underline"
            aria-label="See all projects"
          >
            <span>All projects</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mx-auto mt-10 grid max-w-[72rem] grid-cols-12 auto-rows-[230px] gap-3 md:mt-12 md:auto-rows-[280px] md:gap-4">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectBentoCard
              key={project.id}
              project={project}
              className={getBentoSpan(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
