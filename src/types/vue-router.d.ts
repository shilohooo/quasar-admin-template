/**
 * VueRouter module augmentation
 * @author shiloh
 * @date 2025/1/12 15:54
 */
declare module 'vue-router' {
  interface RouteMeta {
    // icon name of menu
    icon?: string
    // iframe page url
    iframeSrc?: string | undefined
  }
}

// as a module
export {}
