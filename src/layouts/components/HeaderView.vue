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
        <img
          src="~assets/avatar.jpg"
          alt="User Avatar"
        />
      </q-avatar>
      <span class="text-bold">Your Username</span>
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
