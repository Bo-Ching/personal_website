import { siGmail, siGithub } from "simple-icons";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-background">
      <FooterContent className="mx-auto w-full max-w-7xl border-t border-border px-4 py-6 sm:px-6 lg:px-8" />
    </footer>
  );
}

type FooterContentProps = {
  className?: string;
};

export function FooterContent({ className }: FooterContentProps) {
  const github = profile.socials.find((item) => item.label === "GitHub")?.href ?? "#";
  const linkedin = profile.socials.find((item) => item.label === "LinkedIn")?.href ?? "#";

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <p className="text-sm text-muted">© {new Date().getFullYear()} {profile.name} v1.0</p>
      <div className="flex items-center gap-4">
        <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 transition-colors hover:text-slate-900">
          <BrandIcon path={siGithub.path} title="GitHub" />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 transition-colors hover:text-slate-900">
          <BrandIcon path={LINKEDIN_PATH} title="LinkedIn" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-600 transition-colors hover:text-slate-900">
          <BrandIcon path={siGmail.path} title="Gmail" />
        </a>
      </div>
    </div>
  );
}

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

type BrandIconProps = {
  path: string;
  title: string;
};

function BrandIcon({ path, title }: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" role="img" aria-label={title} fill="currentColor">
      <path d={path} />
    </svg>
  );
}
