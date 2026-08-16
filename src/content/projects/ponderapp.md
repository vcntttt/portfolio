---
technologies:
  - React Native
  - Expo
  - TypeScript
  - Drizzle
  - TanStack Query
---

![Pantallas de PonderApp](../../assets/ponderador/full.png)

## Una herramienta para calcular notas sin pelearse con una planilla

PonderApp nació de una necesidad bastante concreta: calcular mis propias notas cuando una asignatura tiene controles, trabajos y evaluaciones anidadas. Las planillas resolvían una parte del problema, pero eran fáciles de romper y poco cómodas de usar desde el teléfono.

La aplicación modela asignaturas, evaluaciones y subevaluaciones como una estructura editable. Eso permite recalcular el promedio cuando cambia una ponderación, agregar escenarios y mantener un historial por semestre.

## Decisiones de producto

- La información se guarda localmente para que la aplicación funcione sin conexión.
- Las evaluaciones se pueden editar sin perder el contexto de la asignatura.
- La interfaz prioriza ingresar una nota rápido y entender de dónde salió el promedio.

La desarrollé desde el diseño inicial hasta su publicación en Play Store. También la probé con compañeros para detectar fricciones en el flujo de ingreso y consulta de notas.
