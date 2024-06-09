<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const links = computed(() => [{
  label: 'Projects',
  to: '#projects',
  icon: 'i-heroicons-cube-transparent',
  active: activeHeadings.value.includes('projects') && !activeHeadings.value.includes('aboutme')
}, {
  label: 'About Me',
  to: '#aboutme',
  icon: 'i-heroicons-credit-card',
  active: activeHeadings.value.includes('aboutme') && !activeHeadings.value.includes('contact')
}, {
  label: 'Contact',
  to: '#contact',
  icon: 'i-heroicons-academic-cap',
  active: activeHeadings.value.includes('contact')
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
      Nuxt UI Pro <UBadge
        label="Landing"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <template #right>
      <UButton
        label="Sign in"
        color="white"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton
        label="Sign in"
        color="white"
        block
        class="mb-3"
      />
      <UButton
        label="Get started"
        block
      />
    </template>
  </UHeader>
</template>
