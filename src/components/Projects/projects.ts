import { TAGS, type Tag } from "./tags";

export interface Project {
  title: string;
  description: string
  longDescription: string
  link: string;
  github: string;
  image: string;
  slug: string;
  class: string;
  status: "live" | "soon" | "finished";
  tags: Tag[];
  features?: string[];
}

export const bestProjects: Project[] = [
  {
    title: "Url Shortener",
    description:
      "Acortador de urls de código abierto desarrollado con fines educativos utilizando tecnologías web modernas.",
      longDescription: "Acortador de urls de código abierto desarrollado con fines educativos utilizando tecnologías web modernas.",
    link: "https://url-shorteneer.vercel.app/",
    github: "https://github.com/vcntttt/url-shortener",
    image: "src/assets/url-shortenerv2.jpg",
    slug: "url-shortener",
    class: "col-span-5",
    status: "live",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA],
  },
  {
    title: "Sellify",
    description: "Sistema de gestión de inventario y punto de venta.",
    longDescription: "Sistema privado de ventas diseñado para pequeñas y medianas empresas, específicamente para aquellos que necesitan gestionar sus productos y ventas de manera eficiente. Nuestro sistema se compone de dos partes fundamentales. La primera es el panel de administración, que es donde el jefe o el dueño va a gestionar su negocio. La segunda es la parte del cajero, diseñada específicamente para las operaciones diarias en el punto de venta. En este panel se ingresaran los productos, se procesaran las ventas y posteriormente se emitirán las boletas.",
    link: "",
    github: "https://github.com/vcntttt/Sellify-TI2",
    image: "src/assets/sellifyv2.jpg",
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
  },
  // {
  //   title: "Agenda Medica",
  //   description: "",
  //   link: "",
  //   github: "https://github.com/vcntttt/agenda-medica",
  //   image: "src/assets/on-develop.jpg",
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
    description: "Ecommerce basada en 'Teslo Shop'",
    longDescription: "Ecommerce basada en 'Teslo Shop', proyecto desarrollado en el curso de Next.js de Fernando Herrera. ",
    link: "https://cursos.devtalles.com/certificates/lsef9snnrv",
    github: "https://github.com/vcntttt/next14-ecommerce",
    image: "src/assets/on-develop.jpg",
    slug: "cursos-web",
    class: "col-span-5",
    status: "soon",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA],
    features: ["Server Actions"],
  },
]
