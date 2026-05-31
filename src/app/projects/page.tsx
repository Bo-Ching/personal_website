import { Footer } from "@/components/layout/Footer";
import { BackToHomeSectionLink } from "@/components/layout/BackToHomeSectionLink";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectListCard } from "@/components/cards/ProjectListCard";
import { getProjects } from "@/lib/content";

function getBentoSpan(index: number) {
  const pattern = [
    "col-span-12 md:col-span-7",
    "col-span-12 md:col-span-5",
    "col-span-12 md:col-span-5",
    "col-span-12 md:col-span-7",
  ];

  return pattern[index % pattern.length];
}

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <section className="border-b border-border py-12">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            A complete list of product and engineering projects. Each card links to a dedicated detail page.
          </p>
          <BackToHomeSectionLink
            sectionId="projects"
            className="mt-5 inline-flex text-sm font-semibold text-slate-700 hover:underline"
          >
            Back to homepage section
          </BackToHomeSectionLink>
        </section>
        <section className="py-10">
          <div className="grid grid-cols-12 auto-rows-[240px] gap-4 md:auto-rows-[260px]">
            {projects.map((project, index) => (
              <ProjectListCard
                key={project.id}
                project={project}
                className={getBentoSpan(index)}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
