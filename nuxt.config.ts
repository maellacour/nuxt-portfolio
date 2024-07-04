// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    "@nuxt/image",
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/cloudinary',
    '@nuxtjs/seo',
    'nuxt-cloudflare-analytics'
  ],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  ui: {
    icons: ['heroicons', 'simple-icons']
  },

  routeRules: {
    '/': { prerender: true }
  },

  devtools: {
    enabled: true
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

  site: {
    name: 'Mael Lacour | Portfolio',
    description: 'A portfolio where I showcase my work on web and Unity development.',
    defaultLocale: 'en' // not needed if you have @nuxtjs/i18n installed
  },

  cloudflareAnalytics: {
    token: process.env.CLOUDFLARE_ANALYTICS_TOKEN
  },

  compatibilityDate: '2024-07-04'
})