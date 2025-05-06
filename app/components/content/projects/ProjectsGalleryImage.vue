<template>
  <div :key="props.index" class="mb-10 sm:mb-0">
    <CldImage :src="props.name" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" :alt="props.alt" width="1080"
      height="608" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    default: 0
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>
