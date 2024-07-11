<script setup lang="ts">
import { computed } from 'vue'

// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  path: String,
  title: {
    type: String,
    default: 'Og Image Template'
  },
  description: {
    type: String,
    default: 'Set a description to change me.'
  },
  background: {
    type: String,
    default: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)'
  },
  color: {
    type: String
  },
  padding: {
    type: String,
    default: '0 50px'
  },
  titleFontSize: {
    type: String,
    default: '50px'
  },
  descriptionFontSize: {
    type: String,
    default: '35px'
  },
  icon: {
    type: [String, Boolean],
    default: 'logos:nuxt'
  },
  image: {
    type: String,
    required: false
  },
  siteName: {
    type: String,
    required: false
  },
  siteLogo: {
    type: String,
    required: false
  }
})

const backgroundAttrs = computed(() => {
  // we want to make a
  // const isBackgroundTw = props.background?.startsWith('bg-')
  return {
    style: {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: '#3384ad'
    }
  }
})

const backgroundFlareAttrs = computed(() => {
  // we want to make a
  // const isBackgroundTw = props.background?.startsWith('bg-')
  return {
    style: {
      display: 'flex',
      position: 'absolute',
      left: '-50%',
      top: '0%',
      width: '200%',
      height: '200%',
      backgroundImage: 'radial-gradient(circle, #b2d1e0  0%,  #7fb2cb  50%, #3384ad 70%)'
    }
  }
})

const backgroundFlareTwoAttrs = computed(() => {
  // we want to make a
  // const isBackgroundTw = props.background?.startsWith('bg-')
  return {
    style: {
      display: 'flex',
      position: 'absolute',
      right: '-5%',
      top: '-40%',
      width: '150%',
      height: '150%',
      backgroundImage: 'radial-gradient(circle, #b2d1e0  0%,  #7fb2cb  50%, #3384ad 70%)'
    }
  }
})

const titleAttrs = computed(() => {
  const classes = []
  const styles = {
    fontWeight: 'bold',
    marginBottom: '50px',
    lineHeight: '70px',
    fontSize: props.titleFontSize
  }
  return { class: classes, style: styles }
})

const siteConfig = useSiteConfig()
const siteName = computed(() => {
  return props.siteName || siteConfig.name
})
const siteLogo = computed(() => {
  return props.siteLogo || siteConfig.logo || 'https://nuxt.com/assets/design-kit/logo/full-logo-green-light.png'
})
</script>

<template>
  <div v-bind="backgroundAttrs" />
  <div v-bind="backgroundFlareAttrs" />
  <div v-bind="backgroundFlareTwoAttrs" />
  <div class="w-full flex flex-row z-10">
    <div
      class="w-1/2"
      style="padding: 50px;"
    >
      <div class="flex flex-col h-full justify-between text-gray-100">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-col">
            <div v-bind="titleAttrs">
              {{ title || 'Null Title' }}
            </div>
            <div
              v-if="'description'"
              class="text-2xl text-justify"
            >
              {{ description }}
            </div>
          </div>
        </div>
        <div class="text-900 w-full flex flex-row">
          <img
            v-if="siteLogo"
            :src="siteLogo"
            height="50"
          >
          <div
            style="font-size: 30px;"
            class="font-bold mt-2"
          >
            {{ siteName }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/5 h-full items-end">
      <img
        v-if="image"
        :src="`https://res.cloudinary.com/dyvpecjfg/image/upload/c_limit,w_1080/f_auto,q_auto:best,dpr_auto/${image}`"
        height="480"
        width="480"
        class="rounded-xl cursor-pointer shadow-lg m-auto"
      >
    </div>
  </div>
</template>
