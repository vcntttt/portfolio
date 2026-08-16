import type { CollectionEntry } from "astro:content";
import tanstackRouterIcon from "@/icons/tanstack-router.svg?url";
import type {
  PortfolioCategory,
  PortfolioEntry,
  PortfolioStatus,
} from "@/types";

export type ProjectContent = CollectionEntry<"projects">;
export type ProjectContentBySlug = Map<string, ProjectContent>;
export type TechnologyGroup = {
  name: string;
  items: string[];
};

export const categoryLabels: Record<PortfolioCategory, string> = {
  professional: "Trabajo Remunerado",
  product: "Proyecto personal",
  academic: "Proyecto universitario",
  research: "Investigación",
};

export const statusLabels: Record<PortfolioStatus, string> = {
  live: "Activo",
  delivered: "Prototipo entregado",
  "in-progress": "En desarrollo",
  finished: "Completado",
  private: "Repositorio privado",
};

export const linkIcons: Record<string, string> = {
  "Play Store": "play-store",
  "Landing page": "home",
  "Aplicación web": "globe",
  Demo: "globe",
  Repositorio: "github",
};

export const linkDescriptions: Record<string, string> = {
  "Play Store": "Descargar la aplicación para Android",
  "Landing page": "Conocer PonderApp y sus funciones",
  "Aplicación web": "Usar PonderApp desde el navegador",
  Demo: "Abrir la demostración en el navegador",
  Repositorio: "Ver el código fuente del proyecto",
};

export const technologyIcons: Record<string, string> = {
  React: "react",
  "React Native": "react",
  "Next.js": "nextjs",
  "Next.js 15": "nextjs",
  TypeScript: "typescript",
  Expo: "expo",
  "TanStack Start": "tanstack-router",
  Vite: "vite",
  Hono: "hono",
  Drizzle: "drizzle-orm",
  "Drizzle ORM": "drizzle-orm",
  "TanStack Query": "tanstack",
  "TanStack Router": "tanstack-router",
  TanStack: "tanstack",
  "Tailwind CSS": "tailwindcss",
  SQLite: "sqlite",
  Convex: "convex",
  Redis: "redis",
  Tailwind: "tailwindcss",
  "shadcn/ui": "shadcn",
  tRPC: "trpc",
  PostgreSQL: "postgresql",
  FastAPI: "fastapi",
  "Better Auth": "better-auth",
  ArkType: "arktype",
  RevenueCat: "revenuecat",
  PostHog: "posthog",
  Zod: "zod",
};

export const technologyIconSources: Record<string, string> = {
  "tanstack-router": tanstackRouterIcon,
};

export const technologyIconClass = (technology: string) => {
  if (technology === "SQLite" || technology === "PostHog") {
    return "h-5 w-7 shrink-0";
  }

  if (technology === "Better Auth") {
    return "size-5 shrink-0 rounded-sm text-black";
  }

  return "size-5 shrink-0";
};

const containedPreviewSlugs = new Set([
  "library",
  "triangle",
  "truckly",
  "clasificador-bayesiano",
]);

export const isContainedPreview = (slug: string) =>
  containedPreviewSlugs.has(slug);

export const indexProjectContent = (
  projects: ProjectContent[],
): ProjectContentBySlug =>
  new Map(projects.map((project) => [project.id, project]));

export const getProjectSummary = (
  entry: PortfolioEntry,
  contentBySlug: ProjectContentBySlug,
) => resolveProjectSummary(entry, contentBySlug.get(entry.slug));

export const resolveProjectSummary = (
  entry: PortfolioEntry,
  project?: ProjectContent,
) => project?.data.summary ?? entry.summary ?? "";

export const getTechnologyGroups = (
  project?: ProjectContent,
): TechnologyGroup[] => {
  const groups = project?.data.technologyGroups ?? [];

  if (groups.length > 0) {
    return groups;
  }

  const technologies = project?.data.technologies ?? [];
  return technologies.length > 0 ? [{ name: "", items: technologies }] : [];
};

export const getProjectTechnologies = (
  entry: PortfolioEntry,
  contentBySlug: ProjectContentBySlug,
) =>
  getTechnologyGroups(contentBySlug.get(entry.slug)).flatMap(
    (group) => group.items,
  );
