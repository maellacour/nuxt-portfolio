export default defineAppConfig({
  global: {
    picture: {
      dark: 'profil-with-headset_kltqvr.jpg',
      light: 'profil-with-headset_kltqvr.jpg',
      alt: 'Mael Lacour profile picture'
    },
    email: 'contact.dev at maellacour.com',
    available: true,
    linkedin: 'https://www.linkedin.com/in/mael-lacour/',
    github: 'https://github.com/maellacour'
  },
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'zinc'
    },
    variables: {
      light: {
        background: 'var(--color-gray-50)'
      },
      dark: {
        background: 'var(--color-gray-900)'
      }
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()} Mael Lacour`,
    colorMode: false,
    links: [{
      icon: 'i-simple-icons-linkedin',
      to: 'https://www.linkedin.com/in/mael-lacour/',
      target: '_blank',
      'aria-label': 'LinkedIn'
    }, {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/maellacour',
      target: '_blank',
      'aria-label': 'GitHub'
    }]
  }
})
