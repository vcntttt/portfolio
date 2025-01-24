import type { Tag } from "@/types";

export const TAGS: Record<string, Tag> = {
  NEXT: {
    name: "Next.js",
    class: "bg-black",
    icon: "NextJS",
    iconClass: "text-black",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159]",
    icon: "TailwindCSS",
    iconClass: "",
  },
  REACT: {
    name: "React",
    class: "bg-green-950",
    icon: "React",
    iconClass: "",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-blue-950",
    icon: "TypeScript",
    iconClass: "",
  },
  PRISMA: {
    name: "Prisma",
    class: "bg-slate-900",
    icon: "Prisma",
    iconClass: "",
  },
  TANSTACKQUERY: {
    name: "TanStack Query",
    class: "bg-red-900",
    icon: "tanstack",
    iconClass: "",
  },
  SHADCN: {
    name: "ShadCN",
    class: "bg-black",
    icon: "shadcn",
    iconClass: "",
  },
};
