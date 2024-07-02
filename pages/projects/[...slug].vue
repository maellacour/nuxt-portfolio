<template>
  <main class="container mx-auto">
    <ContentDoc class="prose prose-gray dark:prose-invert max-w-none">
      <!-- Slot if document not loaded yet -->
      <template #empty>
        <h1>Document is loading</h1>
      </template>
      <!-- Slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: 'Mael Lacour | %s'
})

defineOgImageComponent('NuxtSeo')
</script>
