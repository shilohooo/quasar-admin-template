/**
 * Global type definition
 * @author shiloh
 * @date 2025/3/7 11:46
 */

declare global {
  interface ImportMetaEnv extends ViteEnv {
    _: unknown
  }

  interface ViteEnv {
    // Application name
    VITE_APP_NAME: string
    // API base path, used for development / production with axios
    VITE_API_BASE_PATH: string
  }
}
