<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'Projects',
  to: '/#projects',
  icon: 'i-heroicons-cube-transparent',
  // active: activeHeadings.value.includes('projects') && !activeHeadings.value.includes('aboutme')
}, {
  label: 'About Me',
  to: '/#aboutme',
  icon: 'i-heroicons-credit-card',
  // active: activeHeadings.value.includes('aboutme') && !activeHeadings.value.includes('contact')
}, {
  label: 'Contact',
  to: '/#contact',
  icon: 'i-heroicons-academic-cap',
  // active: activeHeadings.value.includes('contact')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#projects'),
    document.querySelector('#aboutme'),
    document.querySelector('#contact')
  ])
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Mael Lacour
    </template>

    <template #right>
      <UColorModeButton />
      <!-- Add me list of buttons -->
      <UButton icon="i-simple-icons-linkedin" to="https://www.linkedin.com/in/mael-lacour/" color="gray" trailing />
      <UButton icon="i-simple-icons-github" to="https://github.com/Eyap53" color="gray" trailing />
    </template>
  </UHeader>
</template>
