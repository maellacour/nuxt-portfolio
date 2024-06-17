<template>
  <div class="center">
    <ULandingHero
      title="Lorem Ipsum"
      description="page.hero.description"
    />

    <UPageGrid>
      <img
        v-for="(item, index) in items"
        :key="index"
        :src="item"
        class="w-full rounded-md"
      >
    </UPageGrid>

    <!-- Project info -->
    <ULandingSection title="page.features.title">
      <ULandingGrid>
        <!-- Single project left section details -->
        <ULandingCard
          title="About"
          class="col-span-4 row-span-2"
        />
        <ULandingCard
          title="Objective"
          class="col-span-4 row-span-2"
        />
        <ULandingCard
          title="Tools & Technologies"
          description="HTML, CSS, JavaScript, Nuxt.js, TailwindCSS, AdobeXD "
          class="col-span-4 row-span-2"
        />
        <!-- Single project right section details -->
        <ULandingCard
          title="Details"
          description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? "
          class="col-span-8"
        />
      </ULandingGrid>
    </ULandingSection>

    <UPageGrid>
      <UPageCard
        title="About"
        class="col-span-4 row-span-2"
      />
      <UPageCard
        title="Objective"
        class="col-span-4 row-span-2"
      />
      <UPageCard
        title="Tools & Technologies"
        description="HTML, CSS, JavaScript, Nuxt.js, TailwindCSS, AdobeXD "
        class="col-span-4 row-span-2"
      />
      <UPageCard
        title="Details"
        description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? "
        class="col-span-8"
      />
    </UPageGrid>
  </div>
</template>

<script setup lang="ts">
const items = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3'
]
</script>
