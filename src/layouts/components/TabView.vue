<!--
  * 布局组件 - 标签页
  * @author shiloh
  * @date 2024/7/24 16:17
-->
<template>
  <q-tabs
    no-caps
    inline-label
    dense
    shrink
    stretch
    align="left"
  >
    <q-route-tab
      v-for="tab in tabStore.tabs"
      :key="tab.path"
      :label="tab.label"
      :icon="tab.icon"
      :name="tab.path"
      :to="tab.path"
      exact
    />
  </q-tabs>
</template>

<script setup lang="ts">
  import { useTabStore } from 'stores/tab'

  const tabStore = useTabStore()
</script>

<style scoped></style>
