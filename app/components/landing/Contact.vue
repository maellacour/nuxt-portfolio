<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    v-if="page.contact"
    id="contact"
    :title="page.contact.title"
    orientation="horizontal"
    :reverse="true"
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
          v-if="page.contact.description"
          class="prose prose-gray dark:prose-invert max-w-none"
          v-html="page.contact.description"
        />
        <div class="mt-6 space-y-4">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-envelope" class="size-5" />
            <a :href="`mailto:${global.email}`" class="hover:underline">
              {{ global.email }}
            </a>
          </div>
          <div class="flex gap-3">
            <UButton
              icon="i-simple-icons-linkedin"
              :to="global.linkedin"
              color="neutral"
              variant="soft"
              label="LinkedIn"
              target="_blank"
            />
            <UButton
              icon="i-simple-icons-github"
              :to="global.github"
              color="neutral"
              variant="soft"
              label="GitHub"
              target="_blank"
            />
          </div>
        </div>
      </Motion>
    </template>

    <Motion
      v-if="page.contact.image"
      :initial="{
        x: -40,
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
        :src="page.contact.image.name"
        :alt="page.contact.image.alt"
        class="rounded-xl shadow-lg"
        width="1000"
        height="750"
        sizes="(max-width: 1024px) 100vw, 50vw"
        format="webp"
      />
    </Motion>
  </UPageSection>
</template>
