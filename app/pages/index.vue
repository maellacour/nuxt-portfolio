<template>
  <div v-if="page">
    <UPageHero
      id="hero"
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      orientation="horizontal"
      class="text-justify"
    >
      <CldImage
        :src="page.hero.image.name"
        :alt="page.hero.image.alt"
        width="1080"
        height="calc"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        sizes="(max-width: 1024px) 100vw, 50vw"
        format="webp"
      />
    </UPageHero>

    <UPageSection
      :title="page.projects.title"
    >
      <template #description>
        <div
          v-if="page.projects.description"
          v-html="page.projects.description"
        />
      </template>
      <div
        v-if="projects && projects.length"
        id="projects"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <UCard
          v-for="(item, index) in projects"
          :key="index"
          :to="`/projects/${item.title.toLowerCase().replace(/ /g, '-')}`"
          class="text-justify"
        >
          <template #header>
            <CldImage
              :src="item.image"
              :alt="item.title"
              class="w-full rounded-t-lg"
              width="1024"
              height="600"
              sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
              format="webp"
            />
          </template>
          <div class="space-y-2">
            <h3 class="text-xl font-semibold">
              {{ item.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              {{ item.description }}
            </p>
          </div>
        </UCard>
      </div>
    </UPageSection>

    <UPageSection
      id="aboutme"
      :title="page.aboutme.title"
      orientation="horizontal"
      :reverse="page.aboutme.align === 'right'"
      class="scroll-mt-[var(--header-height)] text-justify"
    >
      <template #description>
        <div
          v-if="page.aboutme.description"
          v-html="page.aboutme.description"
        />
      </template>
      <CldImage
        :src="page.aboutme.image.name"
        :alt="page.aboutme.image.alt"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        width="1024"
        height="1024"
        sizes="(max-width: 1024px) 100vw, 50vw"
        format="webp"
      />
    </UPageSection>

    <UPageSection
      id="contact"
      :title="page.contact.title"
      orientation="horizontal"
      :reverse="page.contact.align === 'right'"
      :links="page.socials"
      class="scroll-mt-[var(--header-height)] text-justify"
    >
      <template #description>
        <div
          v-if="page.contact.description"
          v-html="page.contact.description"
        />
      </template>
      <CldImage
        :src="page.contact.image.name"
        :alt="page.contact.image.alt"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        width="1000"
        height="calc"
        sizes="(max-width: 1024px) 100vw, 50vw"
        format="webp"
      />
    </UPageSection>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { useSeoMeta, defineOgImageComponent } from '#imports'

const { data: page } = await useAsyncData('index', () => queryCollection('index').first())
const { data: projects } = await useAsyncData('projects', () => queryCollection('content').where({ _path: { $contains: '/projects/' } }).all())

useSeoMeta({
  title: page.value?.title || 'Mael Lacour',
  ogImage: '/og.png',
  description: page.value?.description || 'A portfolio where I showcase my work on web and Unity development.',
  titleTemplate: '%s',
  twitterImage: '/og.png',
  twitterCard: 'summary_large_image',
  twitterTitle: page.value?.title || 'Mael Lacour',
  twitterDescription: page.value?.description || 'A portfolio where I showcase my work on web and Unity development.'
})

if (page.value) {
  defineOgImageComponent('Home', {
    title: page.value.hero?.title || 'Welcome to My Portfolio',
    // Use page.value.ogimage if it's the intended main OG image for the hero section
    // otherwise, page.value.hero.image.name might be more specific if that's the hero image
    image: page.value.ogimage || page.value.hero?.image?.name || '/og.png'
  });
} else {
  // Define a generic OG image if page data is not available
  defineOgImageComponent('Home', {
    title: 'Mael Lacour | Portfolio',
    image: '/og.png' // Default site OG image
  });
}
</script>
