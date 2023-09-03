import { boot } from 'quasar/wrappers'
import axios from 'axios'

export const api = axios.create({ baseURL: '', withCredentials: true })
export default boot(async ({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})
