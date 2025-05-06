<template>
  <li class="font-general-regular text-ternary-dark dark:text-ternary-light">
    <span>{{ props.title }}: </span>
    <a href="#" :class="props.title == 'Website' || props.title == 'Phone'
      ? 'hover:underline cursor-pointer'
      : ''
      " aria-label="Project website and phone">{{ props.details }}</a>
  </li>
</template>

<script setup>
const props = defineProps({
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
