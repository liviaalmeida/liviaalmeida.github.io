import { Plugin } from 'vue'
import JSCookie from 'js-cookie'

export const Keys = {
  abuse: 'CTMT',
  locale: 'LANG',
}

export class StorageClass implements Storehouse {
  $cookies = JSCookie
  keys = Keys

  private get(key: string) {
    return this.$cookies.get(key) || localStorage.getItem(key)
  }

  private set(key: string, value: any, expires?: any) {
    this.$cookies.set(key, value, expires)
    if (!expires) {
      localStorage.setItem(key, value)
    }
  }

  getAbuse() {
    return !!this.get(this.keys.abuse)
  }

  setAbuse() {
    var expires = new Date()
    expires.setTime(expires.getTime() + 1080000000)
    this.set(this.keys.abuse, 1, expires)
  }

  getLocale() {
    return this.get(this.keys.locale)
  }

  setLocale(locale: string) {
    this.set(this.keys.locale, locale)
  }
}

const plugin: Plugin = {
  install(app) {
    const globalStorage = new StorageClass()

    app.config.globalProperties.$storage = globalStorage
    app.provide('$storage', globalStorage)
  },
}

export default plugin
