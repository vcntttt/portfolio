
export interface Curso {
  title: string;
  instructor: string;
  plataforma: string;
  icon:string;
  link: string
}

export const cursos: Curso[] = [
  {
    title: "Next.js",
    instructor: "Fernando Herrera",
    plataforma: "Udemy",
    icon: "NextJS",
    link: "https://www.udemy.com/certificate/UC-9e0f0c27-e4b1-44f0-8dca-b5c572e8f443/"
  },
  {
    title: "Astro",
    instructor: "Fernando Herrera",
    plataforma: "Udemy",
    icon: "Astro",
    link: "https://www.udemy.com/certificate/UC-737be89c-1698-4aac-9c25-8d9c03ded0fa/"
  },
  {
    title: "TanStack Query",
    instructor: "Fernando Herrera",
    plataforma: "DevTalles",
    icon: "tanstack",
    link: "https://cursos.devtalles.com/certificates/lsef9snnrv"
  },
];