<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

const { data: projects } = await useAsyncData('projects', () => queryContent('/projects').where({ _partial: false }).find())
</script>

<template>
  <div>
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
    >
      <ImagePlaceholder />
    </ULandingHero>

    <ULandingSection
      :title="page.projects.title"
      :description="page.projects.description"
    >
      <UPageGrid
        id="projects"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in projects"
          :key="index"
          v-bind="item"
          :to="`/projects/${item.title.toLowerCase().replace(/ /g, '-')}`"
          orientation="vertical"
        >
          <img
            v-if="item.image"
            :src="item.image"
            class="w-full rounded-md"
          >
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      id="aboutme"
      :title="page.aboutme.title"
      :description="page.aboutme.description"
      :align="page.aboutme.align"
      class="scroll-mt-[var(--header-height)]"
    >
      <CldImage
        :src="page.aboutme.image.name"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        :alt="page.aboutme.image.src"
        :grayscale="page.aboutme.image.grayscale"
      />
      <template #description>
        <div
          v-if="page.aboutme.description"
          class="text-justify"
          v-html="page.aboutme.description"
        />
      </template>
    </ULandingSection>

    <ULandingSection
      id="contact"
      :title="page.contact.title"
      :align="page.contact.align"
      :links="page.socials"
      class="scroll-mt-[var(--header-height)]"
    >
      <ImagePlaceholder />
      <template #description>
        <div
          v-if="page.contact.description"
          v-html="page.contact.description"
        />
      </template>
    </ULandingSection>
  </div>
</template>
