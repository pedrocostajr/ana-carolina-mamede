import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['obesidade', 'diabetes', 'tireoide', 'menopausa', 'colesterol', 'consulta']),
    keyword: z.string().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.number().default(5),
    image: z.string().default('/images/blog/default.jpg'),
    reviewedBy: z.string().default('Dra. Ana Carolina Mamede'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
