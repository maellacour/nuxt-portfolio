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
        class="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      >
        <template #header>
          <div class="relative overflow-hidden">
            <CldImage
              :src="item.image"
              :alt="item.title"
              class="w-full rounded-t-lg aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
              width="800"
              height="450"
              sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
              format="webp"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </template>
        <div class="space-y-3">
          <h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
            {{ item.description }}
          </p>
          <div class="flex items-center gap-2 text-primary font-medium text-sm pt-2">
            <span>View Project</span>
            <UIcon name="i-heroicons-arrow-right" class="size-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </UCard>
    </div>
  </UPageSection>
</template>
