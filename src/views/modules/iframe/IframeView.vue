<!--
  * Iframe
  * @author shiloh
  * @date 2025/1/12 15:50
-->
<template>
  <div class="frame-wrapper" v-if="route.meta.iframeSrc">
    <div v-if="loading" class="loading-wrapper">
      <q-spinner color="primary" size="3rem" />
    </div>
    <iframe ref="iframeRef" :src="route.meta.iframeSrc" class="iframe-page" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// region mounted

const loading = ref(false)
const iframeRef = ref<HTMLIFrameElement | null>(null)

onMounted(async () => {
  loading.value = true
  await nextTick()
  if (!iframeRef.value) {
    return
  }

  iframeRef.value.onload = () => {
    loading.value = false
  }
  iframeRef.value.onerror = () => {
    loading.value = false
  }
})

// endregion
</script>

<style lang="scss" scoped>
.frame-wrapper {
  position: absolute;
  inset: 0;

  .loading-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .iframe-page {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border: 0;
  }
}
</style>
