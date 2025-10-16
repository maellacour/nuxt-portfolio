<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    v-if="page.about"
    id="about"
    :title="page.about.title"
    orientation="horizontal"
    class="scroll-mt-[calc(var(--header-height)+140px)]"
  >
    <template #description>
      <Motion
        :initial="{
          y: 20,
          opacity: 0
        }"
        :animate="{
          y: 0,
          opacity: 1
        }"
        :transition="{
          duration: 0.6,
          delay: 0.2
        }"
      >
        <div
          v-if="page.about.description"
          class="prose prose-gray dark:prose-invert max-w-none"
          v-html="page.about.description"
        />
      </Motion>
    </template>

    <Motion
      v-if="page.about.image"
      :initial="{
        x: 40,
        opacity: 0
      }"
      :animate="{
        x: 0,
        opacity: 1
      }"
      :transition="{
        duration: 0.6,
        delay: 0.3
      }"
    >
      <CldImage
        :src="page.about.image.name"
        :alt="page.about.image.alt"
        class="rounded-xl shadow-lg"
        width="1024"
        height="1024"
        sizes="(max-width: 1024px) 100vw, 50vw"
        format="webp"
      />
    </Motion>
  </UPageSection>
</template>
