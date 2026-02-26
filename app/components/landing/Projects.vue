<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: allContent } = await useAsyncData('projects', () =>
  queryCollection('content').all()
)

const FEATURED_PROJECTS = ['studova', 'neurotrainer', 'harmonie']
const OTHER_PROJECTS = ['ecorescue', 'tiktik', 'borgia', 'portfolio']

const featuredProjects = computed(() => {
  if (!allContent.value) return []
  return allContent.value
    .filter((item) => {
      const slug = item.path?.split('/').pop() || ''
      return item.path?.startsWith('/projects/') && FEATURED_PROJECTS.includes(slug)
    })
    .sort((a, b) => {
      const aSlug = a.path?.split('/').pop() || ''
      const bSlug = b.path?.split('/').pop() || ''
      return FEATURED_PROJECTS.indexOf(aSlug) - FEATURED_PROJECTS.indexOf(bSlug)
    })
})

const otherProjects = computed(() => {
  if (!allContent.value) return []
  return allContent.value
    .filter((item) => {
      const slug = item.path?.split('/').pop() || ''
      return item.path?.startsWith('/projects/') && OTHER_PROJECTS.includes(slug)
    })
    .sort((a, b) => {
      const aSlug = a.path?.split('/').pop() || ''
      const bSlug = b.path?.split('/').pop() || ''
      return OTHER_PROJECTS.indexOf(aSlug) - OTHER_PROJECTS.indexOf(bSlug)
    })
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
    <!-- Featured projects -->
    <div
      v-if="featuredProjects.length"
      class="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      <NuxtLink
        v-for="(item, index) in featuredProjects"
        :key="index"
        :to="item.path"
        class="block"
      >
        <UCard class="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full">
          <template #header>
            <div class="relative overflow-hidden">
              <CldImage
                v-if="item.image"
                :src="item.image"
                :alt="item.title || 'Project image'"
                class="w-full rounded-t-lg aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                width="800"
                height="450"
                sizes="(max-width: 1080px) 100vw, 33vw"
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
            <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
              {{ item.description }}
            </p>
            <div class="flex items-center gap-2 text-primary font-bold text-sm pt-2">
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

    <!-- More projects -->
    <div
      v-if="otherProjects.length"
      class="mt-10"
    >
      <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-5">
        More Projects
      </h3>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink
          v-for="(item, index) in otherProjects"
          :key="index"
          :to="item.path"
          class="block"
        >
          <UCard class="group hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full">
            <template #header>
              <div class="relative overflow-hidden">
                <CldImage
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.title || 'Project image'"
                  class="w-full rounded-t-lg aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                  width="400"
                  height="225"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  format="webp"
                />
                <div
                  v-else
                  class="w-full rounded-t-lg aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center"
                >
                  <UIcon
                    name="i-heroicons-photo"
                    class="size-10 text-gray-400"
                  />
                </div>
              </div>
            </template>
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-medium group-hover:text-primary transition-colors truncate">
                {{ item.title }}
              </h4>
              <UIcon
                name="i-heroicons-arrow-right"
                class="size-3.5 text-gray-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 ml-2"
              />
            </div>
          </UCard>
        </NuxtLink>
      </div>
    </div>
  </UPageSection>
</template>
