<template>
  <div>
    <video>
      <source
        :src="video"
        type="video/mp4"
      >
      <!-- ... other video sources ... -->
    </video>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  video: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    default: 0
  }
})
</script>
