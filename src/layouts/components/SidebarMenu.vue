<!--
  * 侧边栏菜单
  * @author shiloh
  * @date 2024/7/16 17:16
-->
<template>
  <q-drawer show-if-above v-model="sidebarStore.collapsed" side="left" bordered :breakpoint="500">
    <q-scroll-area style="height: calc(100% - 130px); margin-top: 70px">
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

        <template v-for="menuItem in menuList" :key="menuItem.label">
          <sidebar-menu-item :menu="menuItem" />
        </template>
      </q-list>
    </q-scroll-area>

    <div
      class="absolute-top q-pa-sm flex items-center justify-center"
      style="height: 70px; gap: 10px"
    >
      <q-avatar class="q-mb-sm" square>
        <img src="~assets/logo.svg" alt="App Logo" />
      </q-avatar>
      <span class="text-weight-bold">{{ appName }}</span>
    </div>
    <div class="text-center">
      <div style="font-size: 12px">Copyright © 2024-present Shiloh. All Rights Reserved.</div>
      <q-btn
        flat
        dense
        no-caps
        target="_blank"
        href="https://beian.miit.gov.cn/"
        label="粤ICP备2024240113号-1"
      />
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import { HOME_MENU, menuList } from 'src/router/routes/menu.data'
import SidebarMenuItem from 'layouts/components/SidebarMenuItem.vue'
import { useSidebarStore } from 'stores/sidebar'
import { useTabStore } from 'stores/tab'

defineOptions({ name: 'SidebarMenu' })

const sidebarStore = useSidebarStore()
const route = useRoute()

const tabStore = useTabStore()

const appName = ref<string>(import.meta.env.VITE_APP_NAME)
</script>

<style scoped></style>
