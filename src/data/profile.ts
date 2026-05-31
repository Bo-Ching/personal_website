import type { Profile } from "@/types/profile";

export const profile: Profile = {
  name: "Bo Ching",
  title: "Full-Stack Developer",
  subtitle:
    "I turn complex ideas into connected product journeys people can trust.",
  about: [
    "This portfolio is a path through my engineering story, from foundations to product outcomes.",
    "Every project and article here is a node connected by the same goal: building systems that bring people and ideas together.",
  ],
  location: "Taipei, Taiwan",
  email: "bo.ching@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/Bo-Ching" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bo-ching" },
  ],
  cta: [{ label: "Resume", href: "/resume" }],
};
