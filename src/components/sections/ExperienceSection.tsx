import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experienceList } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="flex min-h-screen items-start">
      <div className="w-full pt-28 pb-12 sm:pt-32">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Roles across internships, work, and collaboration-heavy product projects.
        </p>
        <div className="mt-6 grid gap-4">
          {experienceList.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
