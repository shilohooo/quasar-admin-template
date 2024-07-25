/**
 * 菜单信息
 * @author shiloh
 * @date 2024/7/16 14:17
 */

export interface Menu {
  path?: string
  name?: string
  label: string
  icon?: string
  level?: number
  component?: string
  type: MenuType
  children?: Menu[]
}

export const enum MenuType {
  CATALOG = 0,
  PAGE = 1,
  LINK = 2
}

export const HOME_MENU = {
  icon: 'home',
  name: 'home',
  label: 'Home',
  path: '/home',
  type: MenuType.PAGE
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
    type: MenuType.CATALOG,
    children: [
      {
        icon: 'people',
        label: 'User',
        path: '/user',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/sys/UserView'
      },
      {
        icon: 'security',
        label: 'Role',
        path: '/role',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/sys/RoleView'
      },
      {
        icon: 'menu',
        label: 'Menu',
        path: '/menu',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/sys/MenuView'
      }
    ]
  },
  {
    icon: 'monitor',
    label: 'Log',
    type: MenuType.CATALOG,
    children: [
      {
        icon: 'dns',
        label: 'System Log',
        path: '/sys-log',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/log/SysLogView'
      },
      {
        icon: 'people',
        label: 'User Log',
        path: '/user-log',
        type: MenuType.PAGE,
        level: 1,
        component: 'modules/log/UserLogView'
      }
    ]
  },
  {
    icon: 'info',
    label: 'About',
    path: '/about',
    type: MenuType.PAGE,
    component: 'AboutView'
  },
  {
    icon: 'account_circle',
    label: 'Profile',
    path: '/profile',
    type: MenuType.PAGE,
    component: 'ProfileView'
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    path: 'https://google.com',
    type: MenuType.LINK
  },
  {
    icon: 'help',
    label: 'Help',
    path: 'https://google.com',
    type: MenuType.LINK
  }
]
