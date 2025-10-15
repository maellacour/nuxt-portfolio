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

<template>
  <div :key="props.index" class="overflow-hidden rounded-xl">
    <CldImage
      :src="props.name"
      class="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
      :alt="props.alt"
      width="1080"
      height="608"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      format="webp"
    />
  </div>
</template>
