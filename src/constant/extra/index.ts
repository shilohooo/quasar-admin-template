import type { QuasarFonts, QuasarIconSets } from 'quasar'

export const ICON_SET: QuasarIconSets[] = [
  'material-icons',
  // 'eva-icons',
  'ionicons-v4',
  'mdi-v7',
  // 'fontawesome-v6'
  // 'themify',
  // 'line-awesome',
]

export const FONT_SET: QuasarFonts[] = [
  // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
  'roboto-font', // optional, you are not bound to it
]

/**
 * Quasar extra config
 * @author shiloh
 * @date 2025/1/11 22:02
 */
export const EXTRA_CONFIG: (QuasarIconSets | QuasarFonts)[] = [...ICON_SET, ...FONT_SET]
