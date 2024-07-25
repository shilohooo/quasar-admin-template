import { defineStore } from 'pinia'
import { ref } from 'vue'
import { HOME_MENU, type Menu } from 'src/router/routes/menu.data'

/**
 * tab store
 * @author shiloh
 * @date 2024/7/24 15:22
 */
export const useTabStore = defineStore('tab-store', () => {
  const currentTab = ref<string>('/')
  const tabs = ref<Menu[]>([HOME_MENU])

  /**
   * 添加标签页
   * @param tab 标签页
   * @author shiloh
   * @date 2024/7/24 15:47
   */
  const addTab = (tab: Menu) => {
    currentTab.value = tab.path ?? '/'
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
  const removeTab = (tab: Menu) => {
    const index = tabs.value.findIndex((item) => item.path === tab.path)
    if (index > -1) {
      tabs.value.splice(index, 1)
    }
  }

  return {
    currentTab,
    tabs,
    addTab,
    removeTab
  }
})
