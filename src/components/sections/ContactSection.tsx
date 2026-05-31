import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="flex min-h-screen items-start">
      <div className="w-full pt-28 pb-12 sm:pt-32">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Open to collaboration and product-focused engineering opportunities.
        </p>
        <div className="mt-6 rounded-lg border border-border bg-surface p-5">
          <p className="text-sm">
            <span className="font-medium">Email:</span>{" "}
            <a className="underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
