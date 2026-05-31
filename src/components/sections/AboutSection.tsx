import { profile } from "@/data/profile";
import { experienceList } from "@/data/experience";

export function AboutSection() {
  return (
    <section id="about" className="flex min-h-screen items-center py-10">
      <div className="w-full py-10 md:py-14">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Timeline
            </p>
            <ol className="relative mt-5 border-l border-slate-300 pl-5">
              {experienceList.map((item) => (
                <li key={item.id} className="relative pb-7 last:pb-0">
                  <span className="absolute -left-[1.55rem] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">
                    {item.organization} · {item.location}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
              Narrative
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Building Practical Products with Clear Systems
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              {profile.location}
            </p>
            <div className="mt-5 space-y-4 text-muted">
              {profile.about.map((paragraph) => (
                <p key={paragraph} className="leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
