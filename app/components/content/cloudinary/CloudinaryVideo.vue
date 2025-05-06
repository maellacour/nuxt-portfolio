<template>
  <div class="mx-auto">
    <CldVideoPlayer width="1920" height="1080" :src="props.videoId" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  videoId: {
    type: String,
    default: ''
  }
})
</script>
