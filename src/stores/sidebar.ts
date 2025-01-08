import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const collapsed = ref(false)

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  return {
    collapsed,
    toggleCollapsed,
  }
})
