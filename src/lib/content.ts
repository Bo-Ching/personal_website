import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { Article } from "@/types/article";
import type { Project } from "@/types/project";

const CONTENT_ROOT = path.join(process.cwd(), "content");
const PROJECTS_DIR = path.join(CONTENT_ROOT, "projects");
const ARTICLES_DIR = path.join(CONTENT_ROOT, "articles");

function readJsonFiles<T>(dir: string): T[] {
  const files = readdirSync(dir).filter((name) => name.endsWith(".json"));
  return files.map((file) => {
    const raw = readFileSync(path.join(dir, file), "utf8");
    return JSON.parse(raw) as T;
  });
}

export function getProjects() {
  return readJsonFiles<Project>(PROJECTS_DIR).sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects() {
  return getProjects().filter((item) => item.featured && item.status !== "draft");
}

export function getProjectBySlug(slug: string) {
  return getProjects().find((item) => item.slug === slug);
}

export function getArticles() {
  return readJsonFiles<Article>(ARTICLES_DIR).sort((a, b) => a.order - b.order);
}

export function getPublishedArticles() {
  return getArticles().filter((item) => item.status === "published");
}

export function getArticleBySlug(slug: string) {
  return getArticles().find((item) => item.slug === slug);
}
