import type { PortfolioEntry } from "@/types";
import interrogadorPreview from "@/assets/interrogador/previewv2.png";
import mynoPreview from "@/assets/myno/preview.png";
import mynoFull from "@/assets/myno/full.png";
import ponderadorPreview from "@/assets/ponderador/preview.png";
import ponderadorFull from "@/assets/ponderador/full.png";
import sellifyPreview from "@/assets/sellify/preview.jpg";
import sellifyFull from "@/assets/sellify/full.png";
import libraryPreview from "@/assets/library/logo.png";
import trianglePreview from "@/assets/triangle/triangle.png";
import trucklyPreview from "@/assets/truckly/diagramauml.png";
import bayesPreview from "@/assets/clasificador-bayesiano/metricas-vs-epsilon.png";
import geneticPreview from "@/assets/algoritmo-genetico/mejores-fitness.png";

export const portfolio: PortfolioEntry[] = [
  {
    slug: "ponderapp",
    title: "PonderApp",
    category: "product",
    status: "live",
    date: "2025 — actualidad",
    summary:
      "Aplicación móvil para calcular promedios con evaluaciones anidadas y generar escalas de notas.",
    context:
      "La desarrollé a partir de necesidades que encontraba al calcular mis propias notas.",
    role: "Diseño y desarrollo de la aplicación.",
    scope:
      "Prototipos, pruebas con compañeros, funcionamiento offline y publicación en Play Store.",
    outcome: "Disponible para estudiantes en Play Store.",
    highlights: [
      "Modelo claro de asignaturas, evaluaciones y subnotas",
      "Historial editable por semestre",
      "Funcionamiento 100 % offline",
      "UX diseñada específicamente para estudiantes",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Drizzle", "TanStack Query"],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.vrivera.ponderapp",
      },
      { label: "Sitio del producto", href: "https://ponderapp.cl" },
    ],
    image: ponderadorPreview,
    detailImage: ponderadorFull,
    featured: true,
  },
  {
    slug: "cuestionarios",
    title: "Plataforma de cuestionarios",
    category: "professional",
    status: "delivered",
    date: "2025",
    summary:
      "Prototipo de una plataforma universitaria que genera evaluaciones personalizadas con ayuda de IA.",
    context:
      "Trabajo profesional desarrollado por encargo para la Universidad Católica de Temuco.",
    role: "Desarrollo del prototipo inicial.",
    scope:
      "El alcance contratado correspondía al prototipo; el proyecto no continuó después de la entrega.",
    outcome: "Prototipo entregado al cliente.",
    highlights: [
      "Aplicación web full-stack",
      "Generación de evaluaciones a partir de trabajos subidos",
      "Servicio separado de OCR para procesar documentos",
    ],
    technologies: ["Next.js", "TypeScript", "tRPC", "Drizzle", "PostgreSQL", "FastAPI"],
    links: [],
    image: interrogadorPreview,
    featured: true,
  },
  {
    slug: "library",
    title: "Library",
    category: "product",
    status: "in-progress",
    date: "2026 — actualidad",
    summary:
      "Sistema personal para registrar libros, películas, series, anime y manga.",
    context:
      "La estoy desarrollando para centralizar mi biblioteca personal y mis notas.",
    role: "Diseño del dominio, desarrollo full-stack y operación del sistema.",
    scope:
      "Biblioteca personal, notas, progreso, autenticación, integraciones de lectura y notificaciones.",
    outcome: "Sistema en desarrollo activo.",
    highlights: [
      "Modelo unificado para distintos tipos de obras",
      "Datos privados por usuario y control de acceso",
      "Integración con KOReader y sincronización de lectura",
      "Pruebas unitarias y E2E para flujos críticos",
    ],
    technologies: ["React", "TanStack Router", "Convex", "TypeScript", "Vitest", "Playwright"],
    links: [{ label: "Repositorio", href: "https://github.com/vcntttt/library" }],
    image: libraryPreview,
    featured: true,
  },
  {
    slug: "triangle",
    title: "Triangle",
    category: "product",
    status: "in-progress",
    date: "2026 — actualidad",
    summary:
      "Aplicación personal inspirada en Linear para gestionar proyectos e issues.",
    context:
      "Partió de una maqueta de interfaz y la adapté a mis necesidades de uso personal.",
    role: "Adaptación de la interfaz y desarrollo de funcionalidades.",
    scope:
      "Proyectos, issues, etiquetas, vistas guardadas, timeline de actividad, command palette y PWA.",
    outcome: "Herramienta personal en desarrollo activo.",
    highlights: [
      "Persistencia real con Convex",
      "Vistas de workspace e insights",
      "Preferencias de orden y configuración de sidebar",
      "Acceso móvil mediante PWA",
    ],
    technologies: ["React", "TypeScript", "Convex", "TanStack", "PWA"],
    links: [{ label: "Repositorio", href: "https://github.com/vcntttt/triangle" }],
    image: trianglePreview,
    featured: true,
  },
  {
    slug: "myno",
    title: "Myno",
    category: "academic",
    status: "finished",
    date: "2025",
    summary:
      "Ecommerce B2B con recomendaciones personalizadas a partir del historial y comportamiento de compra.",
    context: "Proyecto académico desarrollado para un ramo de la carrera.",
    scope:
      "Demo funcional con alcance acotado; no es un ecommerce operativo para un negocio real.",
    outcome: "Aplicación desplegada como demostración del proyecto.",
    highlights: [
      "Recomendaciones por tags, co-compra y popularidad global",
      "Historial de compras persistente y filtrable",
      "Carrito persistente y rutas protegidas",
      "Búsqueda y filtrado de productos",
    ],
    technologies: ["Next.js 15", "TypeScript", "TanStack Query", "Redis", "Tailwind", "shadcn/ui"],
    links: [
      { label: "Repositorio", href: "https://github.com/vcntttt/myno" },
      { label: "Demo", href: "https://myno-vr.vercel.app" },
    ],
    image: mynoPreview,
    detailImage: mynoFull,
  },
  {
    slug: "truckly",
    title: "Truckly",
    category: "academic",
    status: "finished",
    date: "2025",
    summary:
      "Plataforma web para gestionar flotas vehiculares, asignaciones y mantenimientos según el rol del usuario.",
    context: "Proyecto académico desarrollado para un ramo de la carrera.",
    scope:
      "Sistema full-stack con alcance acotado a una demostración funcional para pequeñas y medianas empresas.",
    outcome: "Aplicación desplegada con usuarios de prueba para presentar los flujos principales.",
    highlights: [
      "Roles de administrador y conductor",
      "Gestión de vehículos, usuarios y mantenimientos",
      "Asignaciones por período de tiempo",
      "Arquitectura full-stack con API tipada",
    ],
    technologies: ["React", "Vite", "TanStack Router", "Hono", "tRPC", "PostgreSQL", "Drizzle"],
    links: [
      { label: "Repositorio", href: "https://github.com/vcntttt/truckly" },
      { label: "Demo", href: "https://truckly.netlify.app" },
    ],
    image: trucklyPreview,
  },
  {
    slug: "sellify",
    title: "Sellify",
    category: "academic",
    status: "finished",
    date: "2024",
    summary:
      "Sistema de ventas para pequeñas empresas, con panel administrativo y punto de venta.",
    context: "Proyecto grupal desarrollado para un ramo de la carrera.",
    scope:
      "El alcance se concentró en los flujos de gestión, venta y fidelización; la API y la app móvil fueron desarrolladas por otro equipo.",
    outcome: "Sistema presentado como entrega académica funcional.",
    highlights: [
      "Dashboard administrativo",
      "Interfaz de punto de venta",
      "Rutas privadas",
      "Sistema de fidelidad y generación de boletas",
    ],
    technologies: ["React", "TypeScript", "TanStack Query", "Tailwind", "shadcn/ui", "WebSockets"],
    links: [{ label: "Repositorio", href: "https://github.com/vcntttt/Sellify-TI2" }],
    image: sellifyPreview,
    detailImage: sellifyFull,
  },
  {
    slug: "modelo-regresion",
    title: "Modelo de regresión",
    category: "research",
    status: "finished",
    date: "2025",
    summary:
      "Estudio académico sobre selección de variables y clasificación binaria mediante modelos logísticos.",
    context: "Proyecto académico desarrollado para un ramo de análisis estadístico.",
    scope:
      "Comparación de modelos con distintos subconjuntos de variables, explorando parsimonia, estabilidad e interpretabilidad.",
    outcome: "Análisis documentado y reproducible sobre el dataset WDBC.",
    highlights: [
      "Análisis de correlaciones y multicolinealidad",
      "Comparación de modelos logísticos",
      "Evaluación del efecto de Lasso y Ridge",
      "Visualizaciones y documentación de decisiones técnicas",
    ],
    technologies: ["R", "Regresión logística", "Lasso", "Ridge", "ggplot2"],
    links: [{ label: "Repositorio", href: "https://github.com/vcntttt/modelo-regresion" }],
  },
  {
    slug: "clasificador-bayesiano",
    title: "Clasificador bayesiano",
    category: "research",
    status: "finished",
    date: "2025",
    summary:
      "Implementación de un clasificador Naive Bayes gaussiano para predecir diabetes a partir de variables médicas.",
    context: "Proyecto académico centrado en probabilidad, clasificación y evaluación de modelos.",
    scope:
      "Uso del dataset PimaIndiansDiabetes, ajuste de epsilon y comparación de métricas como sensibilidad, precisión, especificidad y exactitud.",
    outcome: "Análisis documentado con visualizaciones y experimentos reproducibles.",
    highlights: [
      "Implementación de Naive Bayes gaussiano",
      "Evaluación con partición de entrenamiento y prueba",
      "Comparación de métricas según epsilon",
      "Experimentos con R y aceleración mediante C/CUDA",
    ],
    technologies: ["R", "Naive Bayes", "Bootstrap", "Monte Carlo", "C/CUDA"],
    links: [{ label: "Repositorio", href: "https://github.com/vcntttt/clasificador-bayesiano" }],
    image: bayesPreview,
  },
  {
    slug: "algoritmo-genetico",
    title: "Algoritmo genético para coaliciones mínimas",
    category: "research",
    status: "private",
    date: "2025",
    summary:
      "Implementación académica de un algoritmo genético acelerado con GPU para un problema de optimización combinatoria.",
    context: "Proyecto académico desarrollado para un ramo de algoritmos de optimización.",
    scope:
      "Representación de soluciones, selección, cruce, mutación, benchmarks y visualización de convergencia.",
    outcome: "Resultados comparados con un algoritmo de referencia y documentados en el repositorio.",
    highlights: [
      "Evaluación de fitness en GPU con CuPy",
      "Benchmarks reproducibles",
      "Comparación de rendimiento con una solución de referencia",
      "Visualización de coaliciones y convergencia",
    ],
    technologies: ["Python", "CuPy", "NumPy", "Pandas", "Matplotlib"],
    image: geneticPreview,
  },
];

export const featuredPortfolio = portfolio.filter((entry) => entry.featured);
export const workPortfolio = portfolio.filter(
  (entry) => entry.category === "professional" || entry.slug === "ponderapp",
);
export const personalPortfolio = portfolio.filter(
  (entry) => entry.category === "product" && entry.slug !== "ponderapp",
);
export const academicPortfolio = portfolio.filter(
  (entry) => entry.category === "academic",
);
export const researchPortfolio = portfolio.filter(
  (entry) => entry.category === "research",
);

export const getPortfolioEntry = (slug: string) =>
  portfolio.find((entry) => entry.slug === slug);
