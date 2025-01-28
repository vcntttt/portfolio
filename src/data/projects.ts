import { TAGS } from "./tags";
import type { Project } from "@/types";

// images
import urlFull from "@/assets/shortener/full.png";
import sellifyFull from "@/assets/sellify/full.png";
import EcommerceFull from "@/assets/ecommerce/full.png";
import urlPreview from "@/assets/shortener/preview.jpg";
import sellifyPreview from "@/assets/sellify/preview.jpg";
import EcommercePreview from "@/assets/ecommerce/preview.png";

// images: [urlPreview, urlFull]
export const projects: Project[] = [
  {
    title: "Url Shortener",
    date: "Febrero 2024",
    description:
      "Herramienta de código abierto para simplificar enlaces largos.",
    longDescription:
      "Herramienta de código abierto para simplificar enlaces largos.",
    link: "https://url-shorteneer.vercel.app/",
    github: "https://github.com/vcntttt/url-shortener",
    images: [urlPreview, urlFull],
    slug: "url-shortener",
    class: "col-span-5",
    status: "live",
    tags: [TAGS.NEXT, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA],
    features: ["NextUI", "SearchParams", "RESTful API Handlers"],
  },
  {
    title: "Ecommerce",
    date: "Enero 2025",
    description: "Ecommerce basada en 'Teslo Shop'",
    longDescription:
      "Ecommerce basada en 'Teslo Shop', proyecto desarrollado en el curso de Next.js de Fernando Herrera. ",
    link: "https://next14-ecommercee.vercel.app/",
    github: "https://github.com/vcntttt/next14-ecommerce",
    images: [EcommercePreview, EcommerceFull],
    slug: "next14-ecommerce",
    class: "col-span-5",
    status: "live",
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
  {
    title: "Sellify",
    date: "Noviembre 2024",
    description:
      "Sistema privado de gestión de ventas diseñado para ayudar a pymes a optimizar sus operaciones en puntos de venta físicos.",
    longDescription:
      "Sistema privado de gestión de ventas diseñado para ayudar a pymes a optimizar sus operaciones en puntos de venta físicos.",
    link: "",
    github: "https://github.com/vcntttt/Sellify-TI2",
    images: [sellifyPreview, sellifyFull],
    slug: "sellify",
    class: "col-span-7",
    status: "soon",
    tags: [
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.TANSTACKQUERY,
      TAGS.TAILWIND,
      TAGS.SHADCN,
    ],
    features: ["soon..."],
  },
];
