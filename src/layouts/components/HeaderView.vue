<!--
  * 顶部
  * @author shiloh
  * @date 2024/7/16 17:14
-->
<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round class="q-mr-md" icon="menu" @click="sidebarStore.toggleCollapsed()" />
      <breadcrumb-view />

      <q-toolbar-title />

      <menu-search-box />

      <div class="row q-ml-md q-gutter-x-md">
        <q-btn unelevated round @click="handleToggleFullscreen">
          <q-icon
            :name="$q.fullscreen.isActive ? 'close_fullscreen' : 'fullscreen'"
            color="white"
            size="1.5rem"
          />
        </q-btn>

        <q-btn unelevated round :href="repoUrl" target="_blank">
          <q-icon name="ion-logo-github" color="white" size="1.5rem" />
        </q-btn>

        <q-btn unelevated round :href="bugUrl" target="_blank">
          <q-icon name="bug_report" color="white" size="1.5rem" />
        </q-btn>
      </div>
    </q-toolbar>

    <tab-view />
  </q-header>
</template>

<script setup lang="ts">
import { useSidebarStore } from 'stores/sidebar'
import BreadcrumbView from 'layouts/components/BreadcrumbView.vue'
import MenuSearchBox from 'components/MenuSearchBox.vue'
import { repository, bugs } from '../../../package.json'
import TabView from 'layouts/components/TabView.vue'
import { useQuasar } from 'quasar'

defineOptions({ name: 'HeaderView' })

const $q = useQuasar()
const sidebarStore = useSidebarStore()

const repoUrl = repository.url
const bugUrl = bugs.url

/**
 * toggle fullscreen
 * @author shiloh
 * @date 2025/3/27 15:05
 */
async function handleToggleFullscreen() {
  await $q.fullscreen.toggle()
}
</script>

<style scoped></style>
