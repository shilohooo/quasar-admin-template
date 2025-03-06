/**
 * http client type definition
 * @author shiloh
 * @date 2025/2/6 21:05
 */

// Axios Transform
export interface AxiosTransform {
  /**
   * Api response transform hook
   * @param response api response
   * @author shiloh
   * @date 2025/2/6 21:53
   */
  transformResponseHook?: (response: AxiosResponse<ApiResult>) => unknown
}

// Api response data
export interface ApiResult<T = unknown> {
  // response code, 0 = success
  code: number
  msg: string
  timestamp: number
  data: T
}
