import type { Experience } from "@/types/experience";

export const experienceList: Experience[] = [
  {
    id: "exp-1",
    title: "Frontend Engineer Intern",
    organization: "TechWave Labs",
    type: "internship",
    period: "Jun 2025 - Sep 2025",
    location: "Taipei, Taiwan",
    highlights: [
      "Built reusable dashboard widgets that reduced duplicate UI code by 35%.",
      "Improved page performance by optimizing image loading and component rendering.",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    title: "Full-Stack Developer",
    organization: "Freelance Projects",
    type: "work",
    period: "Oct 2025 - Present",
    location: "Remote",
    highlights: [
      "Delivered web applications from planning to deployment for small businesses.",
      "Designed API contracts and modular UI architecture for faster iteration.",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "exp-3",
    title: "Team Project Lead",
    organization: "Campus Capstone",
    type: "project",
    period: "Feb 2025 - May 2025",
    location: "National Taiwan University",
    highlights: [
      "Led a 4-person team to build a task management platform for student clubs.",
      "Defined coding standards and introduced CI checks for stable collaboration.",
    ],
    techStack: ["Next.js", "Prisma", "GitHub Actions"],
  },
];
