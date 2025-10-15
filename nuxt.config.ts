// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/cloudinary',
    '@nuxtjs/seo'
  ],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },
  css: ['~/assets/css/main.css'],
  icon: {
    collections: ['heroicons', 'simple-icons']
  },

  routeRules: {
    '/': { prerender: true }
  },
  nitro: {
    static: true
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  typescript: {
    strict: false
  },
  future: {
    compatibilityVersion: 4
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
    defaultLocale: 'en' // not needed if you have @nuxtjs/i18n installed
  },
  compatibilityDate: '2024-07-04'
})
