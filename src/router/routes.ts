import { RouteRecordRaw } from 'vue-router'
import { Menu, menuList, MenuType } from 'src/router/routes/menu.data'
// Vite 一次性导入匹配指定路径的所有组件实例，返回值为一个 key = 路径，value = 组件实例 的对象
// 在 Vue3 中，如果需要根据菜单配置或者后台接口数据生成动态路由，则要先将对应的组件全部导入进来
// 然后通过菜单的某个字段值（如：component）去匹配
const dynamicRoutesMap = import.meta.glob('/src/views/**/*.vue')
console.log('dynamicRoutesMap', dynamicRoutesMap)

const home: RouteRecordRaw = {
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [{ path: '', component: () => import('src/views/IndexPage.vue') }]
}

const dynamicRoutes: RouteRecordRaw[] = []

/**
 * 生成动态路由
 * @param menus 菜单列表
 * @author shiloh
 * @date 2024/7/16 16:09
 */
function generateDynamicRoutes(menus: Menu[]) {
  for (const menu of menus) {
    if (menu.children?.length) {
      generateDynamicRoutes(menu.children)
    }

    // 菜单类型为 Page，才需要注册路由
    if (MenuType.PAGE !== menu.type) {
      continue
    }

    if (menu.path) {
      dynamicRoutes.push({
        path: menu.path,
        name: menu.name ?? menu.path,
        component: dynamicRoutesMap[`/src/views/${menu.component}.vue`]
      })
    }
  }
}

generateDynamicRoutes(menuList)

console.log('dynamicRoutes', dynamicRoutes)

home.children = home.children.concat(dynamicRoutes)

export default [
  home,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/views/ErrorNotFound.vue')
  }
]
