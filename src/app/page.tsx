import { Navbar } from "@/components/layout/Navbar";
import { HomeScrollSync } from "@/components/layout/HomeScrollSync";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { getArticles, getProjects } from "@/lib/content";

export default function Home() {
  const projects = getProjects();
  const articles = getArticles();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HomeScrollSync />
      <HeroSection />
      <main className="mx-auto w-full max-w-7xl px-4 pb-0 sm:px-6 lg:px-8">
        <ProjectsSection projects={projects} />
        <ArticlesSection articles={articles} />
      </main>
    </div>
  );
}
