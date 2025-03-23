import { Notify } from 'quasar'

/**
 * clipboard hooks
 * @author shiloh
 * @date 2025/2/16 10:33
 */
export function useClipboard() {
  /**
   * copy text to clipboard
   * @param text text to copy
   * @author shiloh
   * @date 2025/2/16 10:33
   */
  async function copy(text: string) {
    await navigator.clipboard.writeText(text)
    Notify.create({
      message: 'Copied!',
      color: 'positive',
      position: 'top',
      icon: 'check',
    })
  }

  return {
    copy,
  }
}
