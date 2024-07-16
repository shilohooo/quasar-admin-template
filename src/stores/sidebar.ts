import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const collapsed = ref(false)

  const toggleCollapsed = () => {
    console.log('into')
    collapsed.value = !collapsed.value
    console.log(collapsed.value)
  }

  return {
    collapsed,
    toggleCollapsed
  }
})
