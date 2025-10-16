<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

// Fetch all content and filter for projects
const { data: allContent } = await useAsyncData('projects', () =>
  queryCollection('content').all()
)

// Filter only project pages from content collection
const projects = computed(() => {
  if (!allContent.value) return []
  
  return allContent.value.filter(item =>
    item.path?.startsWith('/projects/')
  )
})
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
      <NuxtLink
        v-for="(item, index) in projects"
        :key="index"
        :to="item.path"
        class="block"
      >
        <UCard class="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full">
          <template #header>
            <div class="relative overflow-hidden">
              <CldImage
                v-if="item.meta?.image"
                :src="item.meta.image"
                :alt="item.title || 'Project image'"
                class="w-full rounded-t-lg aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                width="800"
                height="450"
                sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
                format="webp"
              />
              <div
                v-else
                class="w-full rounded-t-lg aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center"
              >
                <UIcon
                  name="i-heroicons-photo"
                  class="size-16 text-gray-400"
                />
              </div>
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
              <UIcon
                name="i-heroicons-arrow-right"
                class="size-4 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </UCard>
      </NuxtLink>
    </div>
  </UPageSection>
</template>
