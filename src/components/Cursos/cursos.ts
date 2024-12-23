export interface Curso {
  title: string;
  author: string;
  plataforma: string;
  image:string;
  finished: boolean;
}

export const cursos: Curso[] = [
  {
    title: "Astro",
    author: "Fernando Herrera",
    plataforma: "Udemy",
    image: "Astro",
    finished: true,
  },
  {
    title: "Next.js",
    author: "Fernando Herrera",
    plataforma: "Udemy",
    image: "NextJS",
    finished: false,
  },
  {
    title: "TanStack Query",
    author: "Fernando Herrera",
    plataforma: "DevTalles",
    image: "tanstack",
    finished: true,
  },
];