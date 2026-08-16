---
technologies:
  - React
  - Vite
  - TanStack Router
  - TanStack Query
  - Hono
  - tRPC
  - Better Auth
  - Zod
  - PostgreSQL
  - Drizzle
---

![Diagrama de la plataforma Truckly](../../assets/truckly/diagramauml.png)

## Una arquitectura full-stack para gestionar flotas

Truckly fue desarrollado para el ramo de Desarrollo de Aplicaciones Empresariales. El proyecto concentra en una sola plataforma la gestión de vehículos, usuarios, asignaciones y mantenimientos para pequeñas y medianas empresas.

El principal desafío estuvo en integrar una arquitectura full-stack con varias piezas que debían funcionar como un sistema coherente: un frontend en React y Vite, enrutamiento y carga de datos con TanStack Router y TanStack Query, una API tipada con Hono y tRPC, autenticación y permisos con Better Auth, y persistencia relacional con PostgreSQL y Drizzle ORM.

La carga de datos del frontend fue un foco importante de la implementación. Las rutas precargan información cuando corresponde, las estadísticas se renderizan con Suspense y skeletons, y las tablas muestran estados de carga y actualización. Después de cada mutación, las queries se invalidan para que los cambios aparezcan sin recargar manualmente la página. Esto permite que los paneles de administración y de conductores se sientan ágiles incluso mientras consultan datos reales.

El sistema distingue entre administradores y conductores, con flujos diferentes para registrar vehículos, gestionar asignaciones, revisar mantenimientos y actualizar el estado de las tareas. El alcance fue el de una demostración funcional desplegada con usuarios de prueba, pero la arquitectura quedó preparada para crecer más allá del prototipo.
