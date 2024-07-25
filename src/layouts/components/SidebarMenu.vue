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
    <q-scroll-area class="fit">
      <q-list>
        <q-item
          clickable
          v-ripple
          :to="HOME_MENU.path"
          class="q-ma-sm"
          :active="HOME_MENU.path === route.path"
          active-class="bg-blue-1 rounded-borders"
          @click="tabStore.addTab({ path: '/', label: 'Home', icon: 'home', type: MenuType.PAGE })"
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
  </q-drawer>
</template>

<script setup lang="ts">
  import { HOME_MENU, menuList, MenuType } from 'src/router/routes/menu.data'
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
