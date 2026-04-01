<script setup lang="ts">
import EmotionScroll from '@emotionagency/emotion-scroll'
import { raf } from '@emotionagency/utils'
onMounted(() => {
  window.escroll = new EmotionScroll({
    raf,
    useKeyboardSmooth: false,
    duration: 1.5,
  })
})

onBeforeUnmount(() => {
  window.escroll && window.escroll.destroy()
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss">
@use '@emotionagency/emotion-scroll/css';
</style>
