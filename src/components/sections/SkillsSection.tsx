import { SkillCard } from "@/components/cards/SkillCard";
import { skillCategories } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="flex min-h-screen items-start">
      <div className="w-full pt-28 pb-12 sm:pt-32">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Organized by capability so this section can later map to filters or searchable tags.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard key={category.category} skillCategory={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
