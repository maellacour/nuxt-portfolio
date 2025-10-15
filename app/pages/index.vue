<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.title || 'Mael Lacour',
  ogTitle: page.value?.title || 'Mael Lacour',
  description: page.value?.description || 'A portfolio where I showcase my work on web and Unity development.',
  ogDescription: page.value?.description || 'A portfolio where I showcase my work on web and Unity development.'
})

defineOgImageComponent('Home', {
  title: page.value.hero?.title || page.value.title || 'Mael Lacour',
  image: page.value.ogimage || '/og.png'
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <LandingProjects :page />
    <LandingAbout :page />
    <LandingContact :page />
  </UPage>
</template>
