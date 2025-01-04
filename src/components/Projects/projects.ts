import { TAGS } from "./tags";

export interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  slug: string;
  class: string;
  status: "live" | "soon" | "finished";
  tags: {
    name: string;
    class: string;
    icon: string;
  }[];
}

export const projects: Project[] = [
  {
    title: "Url Shortener",
    description:
      "Acortador de urls de código abierto desarrollado con fines educativos utilizando tecnologías web modernas.",
    link: "https://url-shorteneer.vercel.app/",
    github: "https://github.com/vcntttt/url-shortener",
    image: "url-shortenerv2.png",
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
    image: "sellifyv2.png",
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
    image: "on-develop.webp",
    slug: "",
    class: "col-span-7",
    status: "soon",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA, TAGS.SHADCN],
  },
  // {
  //   title: "Recetas Sin Gluten",
  //   description: "Blog de recetas sin gluten.",
  //   link: "#",
  //   github: "https://github.com/vcntttt/recetas-sin-gluten",
  //   image: "",
  //   slug: "recetas-sin-gluten",
  //   class: "col-span-5",
  //   status: false,
  // },
];