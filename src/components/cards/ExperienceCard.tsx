import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
  item: Experience;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="rounded-xl border border-border bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
          <p className="text-sm text-muted">
            {item.organization} · {item.location}
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-700">
          {item.type}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-700">{item.period}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.techStack.map((tech) => (
          <span key={tech} className="rounded-md border border-border bg-slate-50 px-2 py-1 text-xs text-slate-700">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
