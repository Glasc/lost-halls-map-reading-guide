import { defineCollection, z } from "astro:content"

const content = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string().min(1)
  }),
})

export const collections = { content }
