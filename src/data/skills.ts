import type { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST API", "tRPC"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "Prisma", "Redis"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "GitHub Actions", "Vercel", "Nginx"],
  },
  {
    category: "AI",
    skills: ["OpenAI API", "Prompt Engineering", "RAG Basics"],
  },
];
