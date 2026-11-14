# Instrucciones para trabajar con el contenido

## Modelo de contenido

La información de cada proyecto está separada intencionalmente en dos fuentes:

- `src/content/projects/<slug>.md` es la fuente de verdad editorial. Contiene el
  resumen del proyecto en el frontmatter (`summary`), sus tecnologías —agrupadas
  por aplicación mediante `technologyGroups` cuando corresponde— y todo el texto
  de la página dedicada: descripción, decisiones, rol, alcance, resultado y
  cualquier otra sección que corresponda.
- `src/data/portfolio.ts` contiene metadata de presentación y navegación: slug,
  categoría, estado, fecha, enlaces, imágenes y si el proyecto aparece destacado.
  Algunas entradas todavía conservan campos textuales heredados mientras se
  migran; esos campos no son la fuente editorial y se eliminan al revisar cada
  proyecto.

Cuando se edita el contenido de un proyecto, se debe modificar su Markdown y no
duplicar ese texto en `portfolio.ts`. El campo `summary` de `portfolio.ts` se
mantiene temporalmente como fallback para los proyectos que todavía no tienen un
resumen en su frontmatter; debe desaparecer a medida que cada proyecto se migre.
La lista plana `technologies` cumple el mismo rol transitorio para proyectos que
aún no están agrupados.

## Marketing y marca personal

Antes de trabajar en copy, textos del portfolio, SEO, meta tags, imagen OG,
redes sociales o contenido de marca personal, lee la skill `marketing`, aunque
el pedido no mencione «marketing». Este sitio no es un producto con usuarios que
pagan: usa solo las guías de copy (`copywriting`, `copy-editing`), SEO
(`seo-audit`, `schema`), contenido (`content-strategy`), `social` y, para el
posicionamiento personal, `product-marketing`. Ignora las de precios,
cobro, retención, fichas de tienda y similares.

## Currículum

El CV se genera con LaTeX: `cv/cv.cls` define la plantilla (estilo Harvard, IBM Plex Serif, una página A4) y cada variante es un `.tex` propio con su contenido. `cv/es.tex` y `cv/en.tex` son las versiones fijas; `bun run cv` las compila a `public/cv-vicente-rivera.pdf` y `public/cv-vicente-rivera-en.pdf`, que enlaza el sitio. Los PDF se versionan; no los edites a mano. Una variante por postulación es un `cv/variante-<empresa>.tex` nuevo con `\documentclass[spanish|english]{cv}`; nunca reescribas las bases ni otra variante para adaptarla. Git ignora esos archivos porque el repositorio es público, así que no los versiones ni los copies a `public/`. Se compilan con `latexmk -pdf -outdir=.build <archivo>` dentro de `cv/`.
