import { defineStore } from 'pinia'
import type { QExpansionItem } from 'quasar'
import { type Menu, MenuType } from 'src/router/routes/menu.data'

export const useSidebarStore = defineStore('sidebar', () => {
  const collapsed = ref(false)

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  const setCollapsed = (val: boolean) => {
    collapsed.value = val
  }

  const catalogRefs = ref<Record<string, QExpansionItem>>({})

  const addCatalogRef = (menu: Menu, el: QExpansionItem) => {
    if (MenuType.CATALOG !== menu.type || !menu.path || !el) {
      return
    }

    catalogRefs.value[menu.path] = el
  }

  const getCatalogRef = (routePath: string): (QExpansionItem | undefined)[] => {
    return Object.keys(catalogRefs.value)
      .filter((key) => routePath.startsWith(key))
      .map((key) => catalogRefs.value[key])
  }

  return {
    collapsed,
    toggleCollapsed,
    setCollapsed,
    catalogRefs,
    addCatalogRef,
    getCatalogRef,
  }
})
