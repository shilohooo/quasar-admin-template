<!--
  * 布局组件 - 标签页
  * @author shiloh
  * @date 2024/7/24 16:17
-->
<template>
  <q-tabs class="bg-primary text-white" no-caps inline-label dense shrink stretch align="left">
    <q-route-tab
      v-for="tab in tabStore.tabs"
      :key="tab.path!"
      :label="tab.label"
      :icon="tab.icon"
      :name="tab.path"
      :to="tab.path"
      exact
      @mouseover="tab.closable = true"
      @mouseleave="tab.closable = false"
    >
      <template v-if="HOME_MENU.path !== tab.path && tab.closable" #default>
        <q-icon class="q-ml-sm" name="close" @click.prevent="handleCloseTab(tab)" />
      </template>
    </q-route-tab>
  </q-tabs>
</template>

<script setup lang="ts">
import { type Tab, useTabStore } from 'stores/tab'
import { HOME_MENU } from 'src/router/routes/menu.data'

const tabStore = useTabStore()
const router = useRouter()

/**
 * 关闭标签页
 * @param tab 当前关闭的标签页
 * @author shiloh
 * @date 2024/7/25 16:01
 */
const handleCloseTab = async (tab: Tab) => {
  tabStore.removeTab(tab)
  // 关闭后，跳转到上一个标签页
  const lastTab = tabStore.tabs.at(-1)
  await router.push({ path: lastTab?.path ?? HOME_MENU.path })
}
</script>

<style scoped lang="scss">
.q-icon:hover {
  background-color: $grey-5;
}
</style>
