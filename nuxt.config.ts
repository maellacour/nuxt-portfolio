// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/cloudinary',
    '@nuxtjs/seo',
    'nuxt-cloudflare-analytics'
  ],
  site: {
    url: 'https://portfolio.maellacour.com',
    name: 'Mael Lacour | Portfolio',
    description: 'A portfolio where I showcase my work on web and Unity development.',
    defaultLocale: 'en' // not needed if you have @nuxtjs/i18n installed
  },
  ui: {
    icons: ['heroicons', 'simple-icons']
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  cloudflareAnalytics: {
    token: process.env.CLOUDFLARE_ANALYTICS_TOKEN
  }
})
