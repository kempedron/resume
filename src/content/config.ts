import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    technologies: z.array(z.string()),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { projects };
