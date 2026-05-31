"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpenText,
  FileUser,
  FolderKanban,
  Home,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { profile } from "@/data/profile";
import { queueSectionScroll, scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "home", type: "section" as const, icon: Home },
  { label: "About", href: "/about", icon: UserRound },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Articles", href: "/articles", icon: BookOpenText },
  { label: "Resume", href: "/resume", icon: FileUser },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigateSection = (sectionId: string) => {
    if (pathname === "/") {
      scrollToSection(sectionId);
      return;
    }

    queueSectionScroll(sectionId);
    router.push("/");
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:px-6">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-full border border-border bg-background/95 px-4 shadow-sm backdrop-blur sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigateSection("home")}
          className="text-sm font-semibold tracking-tight text-slate-900"
        >
          {profile.name}
        </button>

        <button
          type="button"
          className="rounded-md border border-border p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              {item.type === "section" ? (
                <button
                  type="button"
                  onClick={() => navigateSection(item.href)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  aria-label={item.label}
                >
                  <item.icon size={17} />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                  aria-label={item.label}
                >
                  <item.icon size={17} />
                </Link>
              )}
              <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-1 rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-slate-700 opacity-0 shadow-sm transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </div>

      <nav
        className={cn(
          "mx-auto mt-2 w-full max-w-7xl rounded-full border border-border bg-background px-4 py-3 shadow-sm md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="flex items-center justify-center gap-2">
          {navItems.map((item) => (
            item.type === "section" ? (
              <button
                key={`${item.label}-mobile`}
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                aria-label={item.label}
                title={item.label}
                onClick={() => {
                  setOpen(false);
                  navigateSection(item.href);
                }}
              >
                <item.icon size={17} />
              </button>
            ) : (
              <Link
                key={`${item.label}-mobile`}
                href={item.href}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                aria-label={item.label}
                title={item.label}
                onClick={() => setOpen(false)}
              >
                <item.icon size={17} />
              </Link>
            )
          ))}
        </div>
      </nav>
    </header>
  );
}
