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

  /**
   * 添加标签页
   * @param tab 标签页
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
  }

  /**
   * 删除标签页
   * @param tab 标签页
   * @author shiloh
   * @date 2024/7/24 15:47
   */
  const removeTab = (tab: Tab) => {
    const index = tabs.value.findIndex((item) => item.path === tab.path)
    if (index > -1) {
      tabs.value.splice(index, 1)
    }
  }

  return {
    tabs,
    addTab,
    removeTab,
  }
})
