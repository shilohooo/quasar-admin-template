<!--
  * 侧边栏菜单
  * @author shiloh
  * @date 2024/7/16 17:16
-->
<template>
  <q-drawer
    show-if-above
    v-model="sidebarStore.collapsed"
    side="left"
    bordered
    :breakpoint="500"
  >
    <q-scroll-area style="height: calc(100% - 70px); margin-top: 70px">
      <q-list>
        <q-item
          clickable
          v-ripple
          :to="HOME_MENU.path"
          class="q-ma-sm"
          :active="HOME_MENU.path === route.path"
          active-class="bg-blue-1 rounded-borders"
          @click="tabStore.addTab(HOME_MENU)"
        >
          <q-item-section avatar>
            <q-icon :name="HOME_MENU.icon" />
          </q-item-section>
          <q-item-section>{{ HOME_MENU.label }}</q-item-section>
        </q-item>

        <template
          v-for="menuItem in menuList"
          :key="menuItem.label"
        >
          <sidebar-menu-item :menu="menuItem" />
        </template>
      </q-list>
    </q-scroll-area>

    <div
      class="absolute-top q-pa-sm flex items-center justify-center"
      style="height: 70px; gap: 10px"
    >
      <q-avatar
        class="q-mb-sm"
        color="white"
      >
        <img
          src="~assets/logo.svg"
          alt="App Logo"
        />
      </q-avatar>
      <span class="text-weight-bold">Your System Name</span>
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
  import { HOME_MENU, menuList } from 'src/router/routes/menu.data'
  import SidebarMenuItem from 'layouts/components/SidebarMenuItem.vue'
  import { useSidebarStore } from 'stores/sidebar'
  import { useRoute } from 'vue-router'
  import { useTabStore } from 'stores/tab'

  defineOptions({ name: 'SidebarMenu' })

  const sidebarStore = useSidebarStore()
  const route = useRoute()

  const tabStore = useTabStore()
</script>

<style scoped></style>
