import { TAGS, type Tag } from "./tags";

export interface Project {
  title: string;
  description: string
  link: string;
  github: string;
  image: string;
  slug: string;
  class: string;
  status: "live" | "soon" | "finished";
  tags: Tag[];
}

export interface FullProject extends Project {}

export const bestProjects: Project[] = [
  {
    title: "Url Shortener",
    description:
      "Acortador de urls de código abierto desarrollado con fines educativos utilizando tecnologías web modernas.",
    link: "https://url-shorteneer.vercel.app/",
    github: "https://github.com/vcntttt/url-shortener",
    image: "url-shortenerv2.jpg",
    slug: "url-shortener",
    class: "col-span-5",
    status: "live",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA],
  },
  {
    title: "Sellify",
    description: "Sistema de gestión de inventario y punto de venta.",
    link: "",
    github: "https://github.com/vcntttt/Sellify-TI2",
    image: "sellifyv2.jpg",
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
  {
    title: "Agenda Medica",
    description: "",
    link: "",
    github: "https://github.com/vcntttt/agenda-medica",
    image: "on-develop.jpg",
    slug: "",
    class: "col-span-7",
    status: "soon",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA, TAGS.SHADCN],
  },
  // {
  //   title: "Recetas Sin Gluten",
  //   shortDescription: "Blog de recetas sin gluten.",
  //   link: "#",
  //   github: "https://github.com/vcntttt/recetas-sin-gluten",
  //   image: "",
  //   slug: "recetas-sin-gluten",
  //   class: "col-span-5",
  //   status: false,
  // },
];

export const projects: FullProject[] = [
  ...bestProjects,
  {
    title: "Ecommerce",
    description: "Cursos de Desarrollo Web",
    link: "https://cursos.devtalles.com/certificates/lsef9snnrv",
    github: "https://github.com/vcntttt/cursos-web",
    image: "on-develop.jpg",
    slug: "cursos-web",
    class: "col-span-5",
    status: "live",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA],
  },
]
