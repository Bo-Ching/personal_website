# Personal Website Prototype

A maintainable personal website prototype built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- ESLint

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ArticlesSection.tsx
│   │   └── ContactSection.tsx
│   └── cards/
│       ├── ProjectCard.tsx
│       ├── SkillCard.tsx
│       └── ExperienceCard.tsx
├── data/
│   ├── profile.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── projects.ts
│   └── articles.ts
├── types/
│   ├── profile.ts
│   ├── experience.ts
│   ├── skill.ts
│   ├── project.ts
│   └── article.ts
└── lib/
    └── utils.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Current Scope

- Single-page portfolio with sections:
  - Hero
  - About
  - Experience
  - Skills
  - Projects
  - Articles Preview
  - Contact
  - Footer
- Navbar anchor navigation with responsive mobile/desktop behavior
- Content source separated from UI via `content/` + `src/types`

## Content Files

Content is file-driven for easy maintenance:

- `content/projects/*.json`
- `content/articles/*.json`

`src/lib/content.ts` is the typed access layer used by pages/sections.

## UI Tokens + Card Base

To keep UI consistent while scaling:

- Global UI tokens are defined in `src/app/globals.css`
  - `--radius-card`
  - `--shadow-card`
  - `--shadow-card-hover`
- Shared card classes:
  - `.ui-card`
  - `.ui-card-interactive`
- Base card component is available at `src/components/ui/Card.tsx`

## Content Model (v1)

For long-term maintainability, `Project` and `Article` now include operational fields for sorting, featuring, and future CMS migration.

- `Project`
  - Core: `id`, `slug`, `title`, `summary`, `content`, `thumbnail`, `role`, `techStack`, `links`, `status`
  - Operations: `tags`, `publishedAt`, `updatedAt`, `featured`, `order`
- `Article`
  - Core: `id`, `slug`, `title`, `summary`, `content`, `publishedAt`, `status`
  - Operations: `updatedAt`, `tags`, `featured`, `order`

Helper accessors in `src/lib/content.ts`:
- `getProjects()`, `getFeaturedProjects()`
- `getArticles()`, `getPublishedArticles()`
- `getProjectBySlug()`, `getArticleBySlug()`

## Future Expansion

- Project detail pages: `src/app/projects/[slug]/page.tsx`
- Article list/detail pages:
  - `src/app/articles/page.tsx`
  - `src/app/articles/[slug]/page.tsx`
- CMS/MDX integration by replacing `src/data` as the data source
- SEO upgrades:
  - per-page metadata
  - Open Graph
  - sitemap
  - structured data
- Vercel deployment as primary target
