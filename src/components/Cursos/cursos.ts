import type { ImageMetadata } from "astro";
import certificadoAstro from "@/assets/certificado-astro.jpg";
import certificadoTanstack from "@/assets/certificado-tanstack.png";


export interface Curso {
  title: string;
  instructor: string;
  plataforma: string;
  image: ImageMetadata;
  icon:string;
  link: string
}

export const cursos: Curso[] = [
  {
    title: "Astro",
    instructor: "Fernando Herrera",
    plataforma: "Udemy",
    icon: "Astro",
    image: certificadoAstro,
    link: "https://www.udemy.com/certificate/UC-737be89c-1698-4aac-9c25-8d9c03ded0fa/"
  },
  {
    title: "TanStack Query",
    instructor: "Fernando Herrera",
    plataforma: "DevTalles",
    icon: "tanstack",
    image: certificadoTanstack,
    link: "https://cursos.devtalles.com/certificates/lsef9snnrv"
  },
  // {
  //   title: "Next.js",
  //   instructor: "Fernando Herrera",
  //   plataforma: "Udemy",
  //   icon: "NextJS",
  // },
];