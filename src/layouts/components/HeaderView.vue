<!--
  * 顶部
  * @author shiloh
  * @date 2024/7/16 17:14
-->
<template>
  <q-header
    elevated
    class="bg-primary text-white"
    height-hint="98"
  >
    <q-toolbar>
      <q-btn
        dense
        flat
        round
        class="q-mr-md"
        icon="menu"
        @click="sidebarStore.toggleCollapsed()"
      />
      <breadcrumb-view />

      <q-toolbar-title />

      <q-avatar class="q-mr-sm">
        <a href="https://github.com/shilohooo/quasar-layout-example" target="_blank">
          <q-icon name="ion-logo-github" color="white" />
        </a>
      </q-avatar>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
  import { useSidebarStore } from 'stores/sidebar'
  import BreadcrumbView from 'layouts/components/BreadcrumbView.vue'

  const sidebarStore = useSidebarStore()

  defineOptions({ name: 'HeaderView' })
</script>

<style scoped></style>
