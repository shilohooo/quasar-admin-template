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
      <q-avatar color="white">
        <img
          src="~assets/logo.svg"
          alt="App Logo"
        />
      </q-avatar>
      <q-toolbar-title>System Name</q-toolbar-title>
      <tab-view />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
  import { useSidebarStore } from 'stores/sidebar'
  import TabView from 'layouts/components/TabView.vue'

  const sidebarStore = useSidebarStore()

  defineOptions({ name: 'HeaderView' })
</script>

<style scoped></style>
