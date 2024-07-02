<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImageComponent('NuxtSeo') // To be replaced later

const { data: projects } = await useAsyncData('projects', () => queryContent('/projects').where({ _partial: false }).find())
</script>

<template>
  <div>
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
      orientation="horizontal"
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
          <CldImage
            :src="item.image"
            :alt="item.title"
            class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
            width="1024"
            height="600"
            sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw"
            format="webp"
          />
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
        :alt="page.aboutme.image.alt"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        width="1024"
        height="1024"
        sizes="(max-width: 1024px) 100vw, 50vw"
        format="webp"
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
      <CldImage
        :src="page.contact.image.name"
        :alt="page.contact.image.alt"
        class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
        width="1000"
        height="668"
        sizes="(max-width: 1024px) 100vw, 50vw"
        format="webp"
      />
      <template #description>
        <div
          v-if="page.contact.description"
          v-html="page.contact.description"
        />
      </template>
    </ULandingSection>
  </div>
</template>
