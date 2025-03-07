<!--
  * 侧边栏菜单项
  * @author shiloh
  * @date 2024/7/16 15:12
-->
<template>
  <q-item
    v-if="!menu.children?.length"
    clickable
    :active="menu.path === currentRoute.path"
    v-ripple
    class="q-ma-sm"
    active-class="bg-blue-1 rounded-borders"
    :to="MenuType.PAGE === menu.type ? menu.path : undefined"
    :href="MenuType.LINK === menu.type ? menu.path : undefined"
    :target="MenuType.LINK === menu.type ? '_blank' : undefined"
    @click="tabStore.addTab(menu)"
  >
    <q-item-section v-if="menu.icon" avatar>
      <q-icon :name="menu.icon" />
    </q-item-section>
    <q-item-section>
      {{ menu.label }}
    </q-item-section>
  </q-item>
  <div v-else>
    <q-expansion-item
      :ref="(el) => sidebarStore.addCatalogRef(menu, el as unknown as QExpansionItem)"
      :default-opened="currentRoute.path.startsWith(menu.path!)"
      :icon="menu.icon"
      :label="menu.label"
      class="q-ma-sm"
      :group="`expansion-group-${menu.level}`"
      :content-inset-level="0.2"
      :header-class="currentRoute.path.startsWith(menu.path!) ? 'text-primary' : undefined"
    >
      <sidebar-menu-item v-for="subMenu in menu.children" :key="subMenu.label" :menu="subMenu" />
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { type Menu, MenuType } from 'src/router/routes/menu.data'
import { useTabStore } from 'stores/tab'
import type { QExpansionItem } from 'quasar'
import { useSidebarStore } from 'stores/sidebar'

const currentRoute = useRoute()

defineOptions({ name: 'SidebarMenuItem' })

defineProps<{ menu: Menu }>()

const tabStore = useTabStore()
const sidebarStore = useSidebarStore()

function handleShowMenu(routePath: string) {
  sidebarStore.getCatalogRef(routePath).forEach((ref) => ref?.show())
}

watch(
  () => currentRoute.path,
  (newValue) => {
    handleShowMenu(newValue)
  },
)
</script>

<style scoped></style>
