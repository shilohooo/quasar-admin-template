<!--
  * 侧边栏菜单项
  * @author shiloh
  * @date 2024/7/16 15:12
-->
<template>
  <q-item
    v-if="!menu.children?.length"
    clickable
    :active="menu.path === route.path"
    v-ripple
    class="q-ma-sm"
    active-class="bg-blue-1 rounded-borders"
    :to="MenuType.PAGE === menu.type ? menu.path : undefined"
    :href="MenuType.LINK === menu.type ? menu.path : undefined"
    :target="MenuType.LINK === menu.type ? '_blank' : undefined"
    :inset-level="menu.level"
    @click="tabStore.addTab(menu)"
  >
    <q-item-section
      v-if="menu.icon"
      avatar
    >
      <q-icon :name="menu.icon" />
    </q-item-section>
    <q-item-section>
      {{ menu.label }}
    </q-item-section>
  </q-item>
  <div v-else>
    <q-expansion-item
      :icon="menu.icon"
      :label="menu.label"
      class="q-ma-sm"
      :header-class="menu.children.findIndex((item) => route.path === item.path) > -1 ? 'text-primary' : undefined"
    >
      <sidebar-menu-item
        v-for="subMenu in menu.children"
        :key="subMenu.label"
        :menu="subMenu"
      />
    </q-expansion-item>
  </div>
</template>

<script setup lang="ts">
  import { type Menu, MenuType } from 'src/router/routes/menu.data'
  import { useRoute } from 'vue-router'
  import { useTabStore } from 'stores/tab'

  const route = useRoute()

  defineOptions({ name: 'SidebarMenuItem' })

  defineProps<{ menu: Menu }>()

  const tabStore = useTabStore()
</script>

<style scoped></style>
