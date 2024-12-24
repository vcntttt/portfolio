import { TAGS } from "./tags";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  id: string;
  class: string;
  live: boolean;
  tags: {
    name: string;
    class: string;
    icon: string;
  } [];
}

export const projects: Project[] = [
  {
    title: "Url Shortener",
    description: "Acortador de urls de código abierto desarrollado con fines educativos utilizando tecnologías web modernas.",
    link: "https://url-shorteneer.vercel.app/",
    github: "https://github.com/vcntttt/url-shortener",
    image: "url-shortener.png",
    id: "url-shortener",
    class: "col-span-5",
    live: true,
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA],
  },
  // {
  //   title: "Agenda Medica",
  //   description: "",
  //   link: "",
  //   github: "",
  //   image: "",
  //   id: "",
  //   class: "col-span-7",
  //   live: false,
  // },
  // {
  //   title: "Sellify",
  //   description: "Sistema de gestión de inventario y punto de venta.",
  //   link: "",
  //   github: "https://github.com/vcntttt/Sellify-TI2",
  //   image: "sellify.png",
  //   id: "sellify",
  //   class: "col-span-7",
  //   live: false,
  //   tags: [TAGS.NEXT, TAGS.TAILWIND],
  // },
  // {
  //   title: "Recetas Sin Gluten",
  //   description: "Blog de recetas sin gluten.",
  //   link: "#",
  //   github: "https://github.com/vcntttt/recetas-sin-gluten",
  //   image: "",
  //   id: "recetas-sin-gluten",
  //   class: "col-span-5",
  //   live: false,
  // },
];