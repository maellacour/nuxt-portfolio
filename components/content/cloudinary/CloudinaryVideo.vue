<template>
  <div class="mx-auto">
    <CldVideoPlayer
      width="1920"
      height="1080"
      :src="videoId"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  videoId: {
    type: String,
    default: ''
  }
})
</script>
