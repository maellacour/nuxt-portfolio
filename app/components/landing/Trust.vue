<script setup lang="ts">
const trustItems = [
  {
    icon: 'i-heroicons-academic-cap',
    name: 'EPFL',
    tagline: 'VR & neuroscience research'
  },
  {
    icon: 'i-heroicons-building-library',
    name: 'UNIGE',
    tagline: 'Cognitive science collaborations'
  },
  {
    icon: 'i-heroicons-heart',
    name: 'HUG',
    tagline: 'Clinical research tooling'
  },
  {
    icon: 'i-heroicons-paper-airplane',
    name: 'Airbus',
    tagline: 'Dragonfly · Award for Excellence'
  },
  {
    icon: 'i-simple-icons-unity',
    name: 'Unity Certified Expert',
    tagline: 'Programmer certification'
  },
  {
    icon: 'i-heroicons-academic-cap',
    name: 'Arts et Métiers ParisTech',
    tagline: 'Grande École · Engineer'
  }
]
</script>

<template>
  <UPageSection
    id="trust"
    title="Institutions & Recognition"
    description="Seven years of research collaborations, certified expertise, and engineering excellence."
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="item in trustItems"
        :key="item.name"
        class="flex items-start gap-4 p-5 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900"
      >
        <div class="shrink-0 size-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <UIcon
            :name="item.icon"
            class="size-5 text-primary"
          />
        </div>
        <div>
          <p class="font-semibold text-gray-900 dark:text-white">
            {{ item.name }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            {{ item.tagline }}
          </p>
        </div>
      </div>
    </div>

    <p class="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
      Working with leading research institutions since 2017 —
      <NuxtLink
        to="#contact"
        class="text-primary font-medium hover:underline"
      >
        let's build something that matters.
      </NuxtLink>
    </p>
  </UPageSection>
</template>
