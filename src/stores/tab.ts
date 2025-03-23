import { defineStore } from 'pinia'
import { HOME_MENU, type Menu, MenuType } from 'src/router/routes/menu.data'

export type Tab = Menu & { closable?: boolean }

/**
 * tab store
 * @author shiloh
 * @date 2024/7/24 15:22
 */
export const useTabStore = defineStore('tab-store', () => {
  const tabs = ref<Tab[]>([])
  const activeTab = ref<Tab>(HOME_MENU)

  const closeLeftTabsDisabled = computed(() => {
    if (HOME_MENU.path === activeTab.value.path) {
      return true
    }

    const activeTabIndex = tabs.value.findIndex((item) => item.path === activeTab.value.path)
    return activeTabIndex === 0 || !tabs.value[activeTabIndex - 1]
  })

  const closeRightTabsDisabled = computed(() => {
    if (HOME_MENU.path === activeTab.value.path) {
      return tabs.value.length === 0
    }

    const activeTabIndex = tabs.value.findIndex((item) => item.path === activeTab.value.path)
    return !tabs.value[activeTabIndex + 1]
  })

  /**
   * add tab
   * @param tab new tab
   * @author shiloh
   * @date 2024/7/24 15:47
   */
  const addTab = (tab: Tab) => {
    if (MenuType.PAGE !== tab.type || HOME_MENU.path === tab.path) {
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

  /**
   * remove left tabs base on active tab
   * @author shiloh
   * @date 2025/3/23 11:05
   */
  const removeLeftTabs = () => {
    const index = tabs.value.findIndex((item) => item.path === activeTab.value?.path)
    if (index <= 0) {
      return
    }

    tabs.value = tabs.value.slice(index)
  }

  /**
   * remove right tabs base on active tab
   * @author shiloh
   * @date 2025/3/23 11:47
   */
  const removeRightTabs = () => {
    const index = tabs.value.findIndex((item) => item.path === activeTab.value?.path)
    if (index < 0) {
      return
    }

    tabs.value = tabs.value.slice(0, index + 1)
  }

  /**
   * remove other tabs base on active tab
   * @author shiloh
   * @date 2025/3/23 11:47
   */
  const removeOtherTabs = () => {
    tabs.value = [activeTab.value]
  }

  /**
   * remove all tabs exclude HOME
   * @author shiloh
   * @date 2025/3/23 11:49
   */
  const removeAllTabs = () => {
    tabs.value = []
    activeTab.value = HOME_MENU
  }

  return {
    tabs,
    activeTab,
    closeLeftTabsDisabled,
    closeRightTabsDisabled,
    addTab,
    removeTab,
    setActiveTab,
    removeLeftTabs,
    removeRightTabs,
    removeOtherTabs,
    removeAllTabs,
  }
})
