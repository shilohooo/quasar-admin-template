/**
 * http client config
 * @author shiloh
 * @date 2025/2/6 21:04
 */
import { type AxiosRequestConfig, type AxiosResponse, HttpStatusCode } from 'axios'
import { api } from 'boot/axios'
import type { ApiResult, AxiosTransform } from 'src/types/http-client'
import { Notify } from 'quasar'
import { useAppStore } from 'stores/app'
const appStore = useAppStore()

const transform: AxiosTransform = {
  /**
   * response data transform
   * @param response original response
   * @author shiloh
   * @date 2025/2/6 21:56
   */
  transformResponseHook: async (response: AxiosResponse<ApiResult>) => {
    const resData = response.data

    if (resData.code === HttpStatusCode.InternalServerError) {
      Notify.create({
        message: resData.msg,
        color: 'negative',
        position: 'top',
        icon: 'error',
      })
      throw new Error(resData.msg)
    }

    return resData.data
  },
}

const httpClient = {
  // axios 实例
  instance: api,

  /**
   * Send a GET request
   * @param config axios request config
   * @author shiloh
   * @date 2025/2/6 21:18
   */
  get<T = unknown>(config?: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  },

  /**
   * Send a POST request
   * @param config axios request config
   * @author shiloh
   * @date 2025/2/6 21:18
   */
  post<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  },

  /**
   * Send a request
   * @param config axios request config
   * @author shiloh
   * @date 2025/2/6 21:18
   */
  request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    appStore.showLoading()
    return new Promise((resolve, reject) => {
      this.instance
        .request<unknown, AxiosResponse<ApiResult<T>>>(config)
        .then((res: AxiosResponse<ApiResult<T>>) => {
          const { transformResponseHook } = transform
          if (!transformResponseHook) {
            resolve(res as unknown as Promise<T>)
            return
          }

          try {
            resolve(transformResponseHook(res) as Promise<T>)
          } catch (e) {
            reject((e as Error) ?? new Error('Unknown request error:('))
          }
        })
        .catch((error) => {
          console.error('request error', error)
          reject(error)
        })
        .finally(() => {
          appStore.hideLoading()
        })
    })
  },
}

export default httpClient
