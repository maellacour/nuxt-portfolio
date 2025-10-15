<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('content')
    .where({ _path: { $contains: '/projects/' } })
    .all()
)
</script>

<template>
  <UPageSection
    v-if="page.projects"
    id="projects"
    :title="page.projects.title"
    :description="page.projects.description"
    class="scroll-mt-[calc(var(--header-height)+140px)]"
  >
    <div
      v-if="projects && projects.length"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <UCard
        v-for="(item, index) in projects"
        :key="index"
        :to="`/projects${item._path}`"
        class="hover:shadow-lg transition-shadow"
      >
        <template #header>
          <CldImage
            :src="item.image"
            :alt="item.title"
            class="w-full rounded-t-lg aspect-video object-cover"
            width="800"
            height="450"
            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
            format="webp"
          />
        </template>
        <div class="space-y-2">
          <h3 class="text-xl font-semibold">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
            {{ item.description }}
          </p>
        </div>
      </UCard>
    </div>
  </UPageSection>
</template>
