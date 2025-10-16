<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Default title'
  },
  publishDate: {
    type: String,
    default: new Date().getFullYear().toString()
  },
  tag: {
    type: String,
    default: 'Project'
  }
})
</script>

<template>
  <div class="mb-8">
    <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
      {{ props.title }}
    </h1>
    <div class="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
      <div class="flex items-center gap-2">
        <UIcon name="i-heroicons-calendar" class="size-5" />
        <span>{{ props.publishDate }}</span>
      </div>
      <div class="flex items-center gap-2">
        <UIcon name="i-heroicons-tag" class="size-5" />
        <span>{{ props.tag }}</span>
      </div>
    </div>
  </div>
</template>
