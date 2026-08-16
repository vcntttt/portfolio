import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    // Editorial source of truth. Optional only while older projects are migrated.
    summary: z.string().optional(),
    // Newer projects can group technologies by application or system boundary.
    technologyGroups: z
      .array(
        z.object({
          name: z.string(),
          items: z.array(z.string()),
        }),
      )
      .optional(),
    // Transitional flat list for projects that have not been grouped yet.
    technologies: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
