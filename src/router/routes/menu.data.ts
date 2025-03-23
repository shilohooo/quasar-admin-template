/**
 * 菜单信息
 * @author shiloh
 * @date 2024/7/16 14:17
 */

export interface Menu {
  path: string
  name?: string
  label: string
  icon?: string
  level?: number
  component?: string
  type: MenuType
  iframeSrc?: string
  children?: Menu[]
}

export const enum MenuType {
  CATALOG = 0,
  PAGE = 1,
  LINK = 2,
}

export const HOME_MENU = {
  icon: 'home',
  name: 'home',
  label: 'Home',
  path: '/home',
  type: MenuType.PAGE,
}

/**
 * 菜单元信息
 *
 * @author shiloh
 * @date 2024/7/16 14:28
 */

export const menuList: Menu[] = [
  {
    icon: 'settings',
    label: 'System',
    path: '/system',
    type: MenuType.CATALOG,
    children: [
      {
        icon: 'people',
        label: 'User Management',
        type: MenuType.CATALOG,
        path: '/system/user',
        level: 1,
        children: [
          {
            icon: 'list',
            label: 'User List',
            type: MenuType.PAGE,
            path: '/system/user/list',
            level: 1,
            component: 'modules/sys/UserView',
          },
        ],
      },
      {
        icon: 'security',
        label: 'Role',
        path: '/system/role',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/sys/RoleView',
      },
      {
        icon: 'menu',
        label: 'Menu',
        path: '/system/menu',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/sys/MenuView',
      },
    ],
  },
  {
    icon: 'monitor',
    label: 'Log',
    path: '/log',
    type: MenuType.CATALOG,
    children: [
      {
        icon: 'dns',
        label: 'System Log',
        path: '/log/sys-log',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/log/SysLogView',
      },
      {
        icon: 'people',
        label: 'User Log',
        path: '/log/user-log',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/log/UserLogView',
      },
    ],
  },
  {
    icon: 'dashboard',
    label: 'Layout',
    path: '/layout',
    type: MenuType.CATALOG,
    children: [
      {
        icon: 'grid_view',
        label: 'Flex Box',
        path: '/layout/flex-box',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/layouts/FlexBox',
      },
    ],
  },
  {
    icon: 'sports_esports',
    label: 'Examples',
    path: '/example',
    type: MenuType.CATALOG,
    children: [
      {
        icon: 'code',
        label: 'Code Block',
        path: '/example/code-block',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/examples/CodeBlock',
      },
      {
        icon: 'grid_on',
        label: 'Icon Picker',
        path: '/example/icon-picker',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/examples/IconPicker',
      }
    ],
  },
  {
    icon: 'web',
    label: 'Iframe',
    path: '/iframe',
    type: MenuType.CATALOG,
    children: [
      {
        icon: 'language',
        label: 'Quasar Docs',
        path: '/iframe/quasar-docs',
        type: MenuType.PAGE,
        level: 1,
        iframeSrc: 'https://quasar.dev/',
        component: 'modules/iframe/IframeView',
      },
    ],
  },
  {
    icon: 'info',
    label: 'About',
    path: '/about',
    type: MenuType.PAGE,
    component: 'AboutView',
  },
  {
    icon: 'account_circle',
    label: 'Profile',
    path: '/profile',
    type: MenuType.PAGE,
    component: 'ProfileView',
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    path: 'https://github.com/shilohooo/quasar-layout-example/issues',
    type: MenuType.LINK,
  },
  {
    icon: 'help',
    label: 'Help',
    path: 'https://github.com/shilohooo/quasar-layout-example/issues',
    type: MenuType.LINK,
  },
]

/**
 * 获取所有类型为 PAGE 的路由的 path
 * @param menus 菜单列表
 * @param flatMenus 结果
 * @author shiloh
 * @date 2025/1/25 9:50
 */
export function getFlatMenus(menus: Menu[], flatMenus: Menu[] = []) {
  for (const menu of menus) {
    if (menu.children?.length) {
      getFlatMenus(menu.children, flatMenus)
    }

    flatMenus.push(menu)
  }

  return flatMenus
}
