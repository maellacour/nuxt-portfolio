import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Projects',
  icon: 'i-heroicons-cube-transparent',
  to: '/#projects'
},
{
  label: 'Contact',
  icon: 'i-heroicons-envelope',
  to: '/#contact'
}]
