import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    title: "Webmaster - Ingeniería Civil en Informática",
    organization: "Universidad Católica de Temuco",
    organizationUrl: "https://uct.cl",
    date: "ago 2026 — actualidad",
    location: "Temuco, Chile",
    description:
      "Tomé a cargo la recuperación y modernización del sitio web de mi carrera: mantengo WordPress como CMS para la gestión editorial mientras migro su frontend a Astro SSG, tras rescatar una plataforma WordPress/Elementor abandonada en el clúster de Kubernetes. La nueva arquitectura usa imágenes Nginx inmutables y despliegues reproducibles.",
    current: true,
  },
  {
    title: "Practicante de desarrollo de sistemas",
    organization: "Softus SpA",
    organizationUrl: "https://softus.cl",
    date: "dic 2025 — ene 2026",
    location: "Temuco, Chile",
    description:
      "Práctica orientada a procesos de migración de datos, evolucionando desde migraciones manuales hacia una herramienta para estandarizar y automatizar estos procesos.",
  },
  {
    title: "Tutor E-Learning",
    organization: "Universidad Católica de Temuco",
    organizationUrl: "https://uct.cl",
    date: "2024 — 2025",
    location: "Temuco, Chile",
    description:
      "Tutorías continuas para estudiantes y profesores del departamento CINAP, junto con apoyo en análisis y recolección de datos.",
  },
];
