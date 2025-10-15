// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/cloudinary',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  icon: {
    collections: ['heroicons', 'simple-icons']
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  colorMode: {
    fallback: 'dark',
    classSuffix: ''
  },

  site: {
    name: 'Mael Lacour | Portfolio',
    description: 'A portfolio where I showcase my work on web and Unity development.',
    logo: '/logo.png',
    url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    defaultLocale: 'en'
  },

  compatibilityDate: '2024-11-01'
})
