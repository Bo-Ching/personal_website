import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { profile } from "@/data/profile";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <section className="rounded-xl border border-border bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Resume</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{profile.name}</h1>
          <p className="mt-2 text-base text-slate-700">{profile.title}</p>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            This page is ready for your final resume content. You can replace this section with
            an embedded PDF, a download link, or a structured resume layout.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            Contact Me
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
