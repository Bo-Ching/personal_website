export type ArticleStatus = "published" | "coming_soon" | "draft";

export type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string[];
  publishedAt: string;
  updatedAt: string;
  status: ArticleStatus;
  tags: string[];
  featured: boolean;
  order: number;
};
