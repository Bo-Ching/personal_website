export type ProjectLink = {
  label: "Live" | "GitHub" | "Case Study" | "Demo";
  href: string;
};

export type ProjectStatus = "active" | "archived" | "draft";

export type Project = {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  summary: string;
  content: string[];
  role: string;
  techStack: string[];
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  order: number;
  links: ProjectLink[];
  status: ProjectStatus;
};
