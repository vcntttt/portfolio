import { TAGS, type Tag } from "./tags";

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  link: string;
  github: string;
  images: string[];
  slug: string;
  class: string;
  status: "live" | "soon" | "finished";
  tags: Tag[];
  features?: string[];
  date: string
}

export const bestProjects: Project[] = [
  {
    title: "Url Shortener",
    date: "Febrero 2024",
    description:
      "Herramienta de código abierto para simplificar enlaces largos.",
    longDescription:
      "Herramienta de código abierto para simplificar enlaces largos.",
    link: "https://url-shorteneer.vercel.app/",
    github: "https://github.com/vcntttt/url-shortener",
    images: ["url-shortenerv2.jpg", "url-shortener-full.png"],
    slug: "url-shortener",
    class: "col-span-5",
    status: "live",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA],
    features: ["NextUI", "SearchParams", "RESTful API Handlers"],
  },
  {
    title: "Sellify",
    date: "Noviembre 2024",
    description: "Sistema privado de gestión de ventas diseñado para ayudar a pymes a optimizar sus operaciones en puntos de venta físicos.",
    longDescription:
      "Sistema privado de gestión de ventas diseñado para ayudar a pymes a optimizar sus operaciones en puntos de venta físicos.",
    link: "",
    github: "https://github.com/vcntttt/Sellify-TI2",
    images: ["sellifyv2.jpg", "sellify-full.png"],
    slug: "sellify",
    class: "col-span-7",
    status: "finished",
    tags: [
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.TANSTACKQUERY,
      TAGS.TAILWIND,
      TAGS.SHADCN,
    ],
    features: ["soon..."],
  },
  // {
  //   title: "Agenda Medica",
  //   description: "",
  //   link: "",
  //   github: "https://github.com/vcntttt/agenda-medica",
  //   image: "on-develop.jpg",
  //   slug: "",
  //   class: "col-span-7",
  //   status: "soon",
  //   tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA, TAGS.SHADCN],
  // },
];

export const projects: Project[] = [
  ...bestProjects,
  {
    title: "Ecommerce",
    date: "Enero 2025",
    description: "Ecommerce basada en 'Teslo Shop'",
    longDescription:
      "Ecommerce basada en 'Teslo Shop', proyecto desarrollado en el curso de Next.js de Fernando Herrera. ",
    link: "https://cursos.devtalles.com/certificates/lsef9snnrv",
    github: "https://github.com/vcntttt/next14-ecommerce",
    images: ["on-develop.jpg", "ecommerce-full.png"],
    slug: "cursos-web",
    class: "col-span-5",
    status: "soon",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA],
    features: [
      "Server Actions",
      "Busqueda indexada de productos",
      "Carrito de compras",
      "OAuth",
      "Pasarela de Pago (Paypal)",
      "Funciones de administración (CRUD)",
    ],
  },
];
