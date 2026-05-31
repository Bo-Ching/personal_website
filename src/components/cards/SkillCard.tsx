import type { SkillCategory } from "@/types/skill";

type SkillCardProps = {
  skillCategory: SkillCategory;
};

export function SkillCard({ skillCategory }: SkillCardProps) {
  return (
    <article className="rounded-xl border border-border bg-white p-5 shadow-sm">
      <h3 className="text-base font-semibold text-slate-900">{skillCategory.category}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {skillCategory.skills.map((skill) => (
          <span key={skill} className="rounded-md border border-border bg-slate-50 px-2 py-1 text-xs text-slate-700">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
