import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    link: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const endorsements = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    quote: z.string(),
    order: z.number().default(100),
    image: z.string().optional(),
  }),
});

const press = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    date: z.coerce.date(),
    link: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

const pillars = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string().default('leaf'),
    summary: z.string(),
    order: z.number().default(100),
  }),
});

export const collections = {
  posts,
  events,
  endorsements,
  press,
  pillars,
};
