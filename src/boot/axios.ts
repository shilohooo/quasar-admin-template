/**
 * axios boot file
 * @author shiloh
 * @date 2024/7/22 9:12
 */
import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'

const { VITE_API_BASE_PATH } = import.meta.env
const api = axios.create({
  baseURL: VITE_API_BASE_PATH,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  timeout: 30 * 1000,
})

api.interceptors.request.use((config) => {
  console.log(`---------------request-----------> 😈 %c${config.url}`, 'color: #2fa968', config)
  return config
})

api.interceptors.response.use(
  (response) => {
    console.log(
      `---------------response-----------> 😈 %c${response.config.url}`,
      'color: #2fa968',
      response,
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
