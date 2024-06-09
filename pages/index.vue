<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
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
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid
        id="features"
        class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
      >
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      id="pricing"
      :title="page.pricing.title"
      :description="page.pricing.description"
      :align="page.pricing.align"
      class="scroll-mt-[var(--header-height)]"
    >
      <ImagePlaceholder />
    </ULandingSection>

    <ULandingSection
      id="contact"
      :title="page.contact.title"
      :description="page.contact.description"
      :align="page.contact.align"
      :links="page.contact.links"
      class="scroll-mt-[var(--header-height)]"
    >
      <ImagePlaceholder />
    </ULandingSection>
  </div>
</template>
