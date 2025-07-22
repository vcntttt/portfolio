import { TAGS } from "./tags";
import type { Project } from "@/types";

// * images: [urlPreview, urlFull]
// import onDevelop from "@/assets/on-develop.jpg";
// urlshortener
import urlPreview from "@/assets/shortener/preview.jpg";
import urlFull from "@/assets/shortener/full.png";
// nextjs-ecommerce
import EcommercePreview from "@/assets/ecommerce/preview.png";
import EcommerceFull from "@/assets/ecommerce/full.png";
// sellify
import sellifyFull from "@/assets/sellify/full.png";
import sellifyPreview from "@/assets/sellify/preview.jpg";
// ponderapp
import ponderadorPreview from "@/assets/ponderador/preview.png";
import ponderadorFull from "@/assets/ponderador/full.png";
// myno
import mynoPreview from "@/assets/myno/preview.png";
import mynoFull from "@/assets/myno/full.png";

export const projects: Project[] = [
    {
    title: "Myno",
    date: "Q2 2025",
    description:
      "Ecommerce B2B que recomienda productos usando historial y comportamiento de compra.",
    longDescription: "Ecommerce mayorista orientado a minimarkets y almacenes. Su principal diferencial es el motor de recomendación: cada usuario recibe sugerencias personalizadas en la portada, productos y carrito, en base a compras previas, popularidad global y similitud de productos.",
    link: "https://myno.vercel.app/",
    github: "https://github.com/vcntttt/myno",
    images: [mynoPreview, mynoFull],
    slug: "myno",
    class: "col-span-7",
    status: "live",
    tech: [
      TAGS.NEXT15,
      TAGS.TANSTACKQUERY,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.SHADCN,
      TAGS.REDIS
    ],
    features: [
    "Recomendaciones personalizadas usando tags, co-compra y ventas globales",
    "Historial de compras persistente y filtrable (con eliminación)",
    "CRUD completo de carrito, persistente en LocalStorage",
    "Búsqueda y filtrado avanzado de productos",
    "UI responsiva con skeletons y feedback visual",
    "Rutas protegidas según autenticación",
  ],
    homepage: true
  },
    {
    title: "PonderApp",
    date: "Febrero 2025",
    description: "Aplicacion movil con herramientas para estudiantes.",
    longDescription: "Aplicacion movil con herramientas para estudiantes.",
    link: "https://ponderappcl.netlify.app",
    github: "private",
    images: [ponderadorPreview, ponderadorFull],
    slug: "ponderapp",
    class: "col-span-7",
    status: "live",
    tech: [
      TAGS.REACTNATIVE,
      TAGS.EXPO,
      TAGS.TYPESCRIPT,
      TAGS.TAILWIND,
      TAGS.DRIZZLE,
      TAGS.TANSTACKQUERY,
    ],
    features: ["Calculadora de promedios", "Generador de Escala de Notas"],
    info: "Disponible en Play Store.",
    homepage: true
  },
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
    tech: [TAGS.NEXT15, TAGS.TAILWIND, TAGS.TYPESCRIPT, TAGS.PRISMA],
    features: ["NextUI", "SearchParams", "RESTful API Handlers"],
    homepage: false
  },
  {
    title: "Sellify",
    date: "Noviembre 2024",
    description: "",
    longDescription:
      "Sistema privado de gestión de ventas diseñado para ayudar a pymes a optimizar sus operaciones en puntos de venta físicos.",
    link: "",
    github: "https://github.com/vcntttt/Sellify-TI2",
    images: [sellifyPreview, sellifyFull],
    slug: "sellify",
    class: "col-span-7",
    status: "finished",
    tech: [
      TAGS.REACT,
      TAGS.TYPESCRIPT,
      TAGS.TANSTACKQUERY,
      TAGS.TAILWIND,
      TAGS.SHADCN,
    ],
    features: [
      "Dashboard Administrativo",
      "Rutas Privadas",
      "Interfaz punto de venta",
      "Sistema de fidelidad de clientes",
      "Generación de boletas",
      "Integración con API y aplicación móvil externa mediante WebSockets",
    ],
    info: "API y aplicación movil desarrollados por otro equipo.",
    homepage: false
  },
  {
    title: "Ecommerce",
    date: "Enero 2025",
    description:
      "Ecommerce basada en productos de Tesla. Cuenta con autenticación, pagos, etc.",
    longDescription:
      "Ecommerce basada en productos de Tesla, idea original de Fernando Herrera.",
    link: "https://next14-ecommercee.vercel.app/",
    github: "https://github.com/vcntttt/next14-ecommerce",
    images: [EcommercePreview, EcommerceFull],
    slug: "next14-ecommerce",
    class: "col-span-5",
    status: "live",
    tech: [
      TAGS.NEXT14,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
      TAGS.PRISMA,
      TAGS.SHADCN,
    ],
    features: [
      "Server Actions",
      "Busqueda indexada de productos",
      "Carrito de compras",
      "OAuth",
      "Pasarela de Pago (Paypal)",
      "Funciones de administración (CRUD)",
    ],
    homepage: false
  },
  // {
  //   title: "Truckly",
  //   date: "Q2 2025",
  //   description:
  //     "Aplicación para gestionar pedidos de vehículos de transporte.",
  //   longDescription: "",
  //   link: "https://truckly.vercel.app/",
  //   github: "https://github.com/vcntttt/truckly",
  //   images: [onDevelop, onDevelop],
  //   slug: "truckly",
  //   class: "col-span-7",
  //   status: "live",
  //   tech: [
  //     TAGS.NEXT15,
  //     TAGS.TAILWIND,
  //     TAGS.TYPESCRIPT,
  //     TAGS.PRISMA,
  //     TAGS.SHADCN,
  //     TAGS.TANSTACKQUERY,
  //   ],
  // },
];
