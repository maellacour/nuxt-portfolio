<template>
  <div>
    <h2 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
      Project: {{ title }}
    </h2>
    <div class="flex">
      <div class="flex items-center mr-10">
        <span
          class="i-heroicons-clock flex-shrink-0 h-6 w-6"
          aria-hidden="true"
        />
        <span
          class="
                  font-general-medium
                  ml-2
                  leading-none
                  text-primary-dark
                  dark:text-primary-light
                "
        >{{ publishDate }}</span>
      </div>
      <div class="flex items-center">
        <span
          class="i-heroicons-tag flex-shrink-0 h-6 w-6"
          aria-hidden="true"
        />
        <span
          class="
                  font-general-medium
                  ml-2
                  leading-none
                  text-primary-dark
                  dark:text-primary-light
                "
        >{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: 'Default title'
  },
  publishDate: {
    type: String,
    default: Date.now().toString()
  },
  tag: {
    type: String,
    default: 'Default description'
  }
})
</script>
