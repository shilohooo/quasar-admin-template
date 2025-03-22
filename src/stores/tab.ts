import { defineStore } from 'pinia'
import { HOME_MENU, type Menu, MenuType } from 'src/router/routes/menu.data'

export type Tab = Menu & { closable?: boolean }

/**
 * tab store
 * @author shiloh
 * @date 2024/7/24 15:22
 */
export const useTabStore = defineStore('tab-store', () => {
  const tabs = ref<Tab[]>([HOME_MENU])
  const activeTab = ref<Tab>(HOME_MENU)

  /**
   * add tab
   * @param tab new tab
   * @author shiloh
   * @date 2024/7/24 15:47
   */
  const addTab = (tab: Tab) => {
    if (MenuType.PAGE !== tab.type) {
      return
    }

    const index = tabs.value.findIndex((item) => item.path === tab.path)
    if (index > -1) {
      return
    }

    tabs.value.push(tab)
    activeTab.value = tab
  }

  /**
   * remove tab
   * @param tab tab to remove
   * @author shiloh
   * @date 2024/7/24 15:47
   */
  const removeTab = (tab: Tab) => {
    const index = tabs.value.findIndex((item) => item.path === tab.path)
    if (index > -1) {
      tabs.value.splice(index, 1)
    }
  }

  /**
   * set active tab
   * @param tab tab
   * @author shiloh
   * @date 2025/3/22 11:35
   */
  const setActiveTab = (tab: Tab) => {
    activeTab.value = tab
  }

  return {
    tabs,
    addTab,
    removeTab,
    activeTab,
    setActiveTab,
  }
})
