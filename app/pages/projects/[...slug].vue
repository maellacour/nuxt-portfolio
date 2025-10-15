<template>
  <UPage v-if="page">
    <ContentRenderer :value="page" class="prose prose-gray dark:prose-invert max-w-none mx-auto" />
  </UPage>
  <UPage v-else>
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-2xl">
        Page not found
      </h1>
    </div>
  </UPage>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`/${route.path}`, () => queryCollection('content').path(route.path).first())

// Debug logging
console.log('Route path:', route.path)
console.log('Page data:', page.value)

useHead({
  titleTemplate: 'Mael Lacour | %s'
})

if (page.value) {
  defineOgImageComponent('Project',
    {
      title: page.value.title,
      image: page.value.image
    }
  )
}
</script>
