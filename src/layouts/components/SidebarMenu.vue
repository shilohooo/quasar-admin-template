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
    :mini="miniState"
    :mini-width="80"
    :breakpoint="500"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item
          clickable
          v-ripple
          to="/"
          :active="'/' === route.path"
          @click="handleMenuItemClick({ path: '/', label: 'Home', icon: 'home', type: Menu })"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Home</q-item-section>
        </q-item>
        <q-separator
          key="home"
          size="2px"
        />
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
  import { type Menu, menuList } from 'src/router/routes/menu.data'
  import SidebarMenuItem from 'layouts/components/SidebarMenuItem.vue'
  import { useSidebarStore } from 'stores/sidebar'
  import { useRoute, useRouter } from 'vue-router'
  import { ref } from 'vue'
  import { useTabStore } from 'stores/tab'

  defineOptions({ name: 'SidebarMenu' })

  const sidebarStore = useSidebarStore()
  const route = useRoute()
  const miniState = ref(true)

  const tabStore = useTabStore()
  const router = useRouter()

  /**
   * 菜单点击处理
   * @param menu 当前点击的菜单
   * @author shiloh
   * @date 2024/7/24 15:52
   */
  const handleMenuItemClick = async (menu: Menu) => {
    tabStore.addTab(menu)
    await router.push({ path: menu.path })
  }
</script>

<style scoped></style>
