<template>
  <li
    class="font-general-regular text-ternary-dark dark:text-ternary-light"
  >
    <span>{{ title }}: </span>
    <a
      href="#"
      :class="
        title == 'Website' || title == 'Phone'
          ? 'hover:underline cursor-pointer'
          : ''
      "
      aria-label="Project website and phone"
    >{{ details }}</a>
  </li>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default title'
  },
  details: {
    type: String,
    default: 'Default description'
  }
})
</script>
