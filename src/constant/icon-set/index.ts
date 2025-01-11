/**
 * icon map
 * @author shiloh
 * @date 2025/1/11 22:58
 */
import IoniconsV4Set from 'src/constant/icon-set/ionicons-v4'
import MaterialIconSet from 'src/constant/icon-set/material-icons'
import type { QuasarIconSets } from 'quasar'

export interface IconData {
  name: QuasarIconSets
  icons: string[]
}

export const ICON_MAP: Partial<Record<QuasarIconSets, IconData>> = {
  'ionicons-v4': IoniconsV4Set,
  'material-icons': MaterialIconSet,
}
