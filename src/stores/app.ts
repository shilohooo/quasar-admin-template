/**
 * App store
 * @author shiloh
 * @date 2025/3/27 14:24
 */
import { defineStore } from 'pinia'
import { Loading, QSpinnerHourglass } from 'quasar'

export const useAppStore = defineStore('app', () => {
  const showLoading = () => {
    if (Loading.isActive) {
      console.log('Loading is already active')
      return
    }

    console.log('Loading is not active')
    Loading.show({
      spinner: QSpinnerHourglass,
      spinnerColor: 'primary',
      backgroundColor: 'grey-5',
    })
  }

  const hideLoading = () => {
    if (!Loading.isActive) {
      console.log('Loading is already hidden')
      return
    }

    console.log('Loading is not hidden')
    Loading.hide()
  }

  return {
    showLoading,
    hideLoading,
  }
})
