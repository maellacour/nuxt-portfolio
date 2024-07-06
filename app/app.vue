<template>
  <div>
    <NuxtLoadingIndicator />
    <AppHeader />
    
    <UMain>
      <NuxtPage />
    </UMain>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>