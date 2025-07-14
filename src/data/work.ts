import type { Work } from "@/types";
// import onDevelop from "@/assets/on-develop.jpg";
import interrogadorPreview from "@/assets/interrogador/preview-grey.png";

export const work : Work[] = [
  {
    title: "Plataforma de Cuestionarios",
    date: "2025",
    description: "Plataforma universitaria de gestión completa que, mediante IA, genera en tiempo real evaluaciones personalizadas a partir de los trabajos subidos por cada estudiante.",
    link: "https://interrogador.vercel.app/",
    github: "private",
    images: [interrogadorPreview],
    slug: "plataforma-cuestionarios",
    class: "col-span-7",
    status: "soon",
    client: "Universidad Católica de Temuco",
  }
]