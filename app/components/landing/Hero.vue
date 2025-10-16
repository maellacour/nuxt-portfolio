<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageHero
    orientation="horizontal"
    :ui="{
      title: 'text-shadow-md',
      description: 'mt-4',
      links: 'mt-6'
    }"
  >

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        {{ page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        {{ page.description }}
      </Motion>
    </template>

    <template #links>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.5
        }"
      >
        <div
          v-if="page.hero?.links"
          class="flex flex-col items-center gap-3"
        >
          <div class="flex items-center gap-2">
            <UButton v-bind="page.hero.links[0]" />
            <UButton
              :color="global.available ? 'success' : 'error'"
              variant="ghost"
              class="gap-2"
              :label="global.available ? 'Available for new projects' : 'Not available at the moment'"
            >
              <template #leading>
                <span class="relative flex size-2">
                  <span
                    class="absolute inline-flex size-full rounded-full opacity-75"
                    :class="global.available ? 'bg-success animate-ping' : 'bg-error'"
                  />
                  <span
                    class="relative inline-flex size-2 scale-90 rounded-full"
                    :class="global.available ? 'bg-success' : 'bg-error'"
                  />
                </span>
              </template>
            </UButton>
          </div>

          <div class="flex gap-x-4">
            <Motion
              v-for="(link, index) of footer?.links"
              :key="index"
              :initial="{
                scale: 1.1,
                opacity: 0,
                filter: 'blur(20px)'
              }"
              :animate="{
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)'
              }"
              :transition="{
                duration: 0.6,
                delay: 0.6 + index * 0.1
              }"
            >
              <UButton
                v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
              />
            </Motion>
          </div>
        </div>
      </Motion>
    </template>

    <Motion
      v-if="page.hero?.image || global.picture?.light"
      :initial="{
        x: 40,
        opacity: 0,
        filter: 'blur(10px)'
      }"
      :animate="{
        x: 0,
        opacity: 1,
        filter: 'blur(0px)'
      }"
      :transition="{
        duration: 0.8,
        delay: 0.2
      }"
    >
      <CldImage
        :src="page.hero?.image?.name || global.picture?.light!"
        :alt="page.hero?.image?.alt || global.picture?.alt!"
        class="rounded-2xl shadow-2xl"
        width="600"
        height="600"
        sizes="(max-width: 768px) 100vw, 50vw"
        format="webp"
      />
    </Motion>
  </UPageHero>
</template>
