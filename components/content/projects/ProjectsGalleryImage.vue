<template>
  <div
    :key="index"
    class="mb-10 sm:mb-0"
  >
    <img
      :src="image"
      class="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
    >
  </div>
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    default: 0
  }
})
</script>
