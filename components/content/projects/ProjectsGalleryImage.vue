<template>
  <div
    :key="index"
    class="mb-10 sm:mb-0"
  >
    <CldImage
      :src="name"
      class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
      :alt="alt"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
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
