import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    title: "Webmaster - Ingeniería Civil en Informática",
    organization: "Universidad Católica de Temuco",
    organizationUrl: "https://uct.cl",
    date: "ago 2026 — actualidad",
    location: "Temuco, Chile",
    description:
      "Tomé a cargo el sitio web de mi carrera, una instalación WordPress/Elementor abandonada, y lo reconstruí como una plataforma institucional que otras unidades de la universidad puedan reutilizar. Payload administra el contenido, con acceso mediante Google Workspace, y Astro genera el sitio público como páginas estáticas. Los perfiles académicos sincronizan sus publicaciones desde OpenAlex y ORCID. GitHub Actions construye y despliega cada cambio en Kubero; el sitio está publicado en el dominio oficial, inf.uct.cl.",
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
