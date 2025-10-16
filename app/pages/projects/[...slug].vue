<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`project-${route.path}`, () =>
  queryCollection('content').path(route.path).first()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImageComponent('Project', {
  title: page.value.title,
  image: page.value.image
})
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      class="mb-8"
    />
    <ContentRenderer
      :value="page"
      class="prose prose-gray dark:prose-invert max-w-none"
    />
  </UPage>
</template>
