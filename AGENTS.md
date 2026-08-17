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
