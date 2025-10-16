import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'data',
      source: 'index.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        ogimage: z.string(),
        hero: z.object({
          title: z.string(),
          description: z.string(),
          links: z.array(z.object({
            label: z.string(),
            icon: z.string(),
            size: z.string().optional(),
            color: z.string().optional(),
            to: z.string(),
            target: z.string().optional()
          })).optional(),
          image: z.object({
            name: z.string(),
            alt: z.string()
          })
        }),
        projects: z.object({
          title: z.string(),
          description: z.string()
        }),
        aboutme: z.object({
          title: z.string(),
          description: z.string(),
          align: z.string(),
          image: z.object({
            name: z.string(),
            alt: z.string()
          })
        }),
        contact: z.object({
          title: z.string(),
          description: z.string(),
          align: z.string(),
          image: z.object({
            name: z.string(),
            alt: z.string()
          })
        }),
        socials: z.array(z.object({
          label: z.string(),
          to: z.string(),
          target: z.string().optional(),
          icon: z.string()
        })).optional()
      })
    }),
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
