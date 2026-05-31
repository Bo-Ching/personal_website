export type ExperienceType = "work" | "internship" | "project";

export type Experience = {
  id: string;
  title: string;
  organization: string;
  type: ExperienceType;
  period: string;
  location: string;
  highlights: string[];
  techStack: string[];
};
