import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Articoli della sezione "Risorse per genitori".
 * Ogni file .md in src/content/articoli diventa una pagina /risorse/<nome-file>.
 */
const articoli = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articoli' }),
  schema: z.object({
    title: z.string(),
    /** Meta description (max ~155 caratteri). */
    description: z.string().max(170),
    /** Testo breve per le card. */
    excerpt: z.string(),
    readingMinutes: z.number().int().positive(),
    /** Slug di UN solo libro pertinente, opzionale (vedi `books` in src/config/site.ts). */
    relatedBook: z.enum(['sole-e-l-amore', 'sole-e-la-paura']).optional(),
    order: z.number().int(),
    tone: z.enum(['cipria', 'pesca', 'sole', 'polvere', 'salvia']).default('pesca'),
  }),
});

export const collections = { articoli };
