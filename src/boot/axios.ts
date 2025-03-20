/**
 * axios boot file
 * @author shiloh
 * @date 2024/7/22 9:12
 */
import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'
import { randomColor } from 'src/utils/random'
import dayjs from 'dayjs'
import { DAYJS_PATTERN } from 'src/constant/date-pattern'

const { VITE_API_BASE_PATH } = import.meta.env
const api = axios.create({
  baseURL: VITE_API_BASE_PATH,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30 * 1000,
})

api.interceptors.request.use((config) => {
  console.log(
    '%c┍------------------------------------------------------------------┑',
    `color:${randomColor()}`,
  )
  const reqUrl = `${config.method?.toUpperCase()} ${config.url}`
  const reqTime = dayjs().format(DAYJS_PATTERN.YYYY_MM_DD_HH_MM_SS)
  console.log(`| [Request] ${reqTime} - ${reqUrl}`, config)
  return config
})

api.interceptors.response.use(
  (response) => {
    const reqUrl = `${response.config.method?.toUpperCase()} ${response.config.url}`
    const respTime = dayjs().format(DAYJS_PATTERN.YYYY_MM_DD_HH_MM_SS)
    const respStatus = `${response.status}:${response.statusText}`
    console.log(`| [Response] ${respTime} - ${respStatus} ${reqUrl}`, response)
    console.log(
      '%c┕------------------------------------------------------------------┙',
      `color:${randomColor()};`,
    )
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default defineBoot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api }
