import Vue from 'vue'
import VueI18n, { LocaleMessages } from 'vue-i18n'

Vue.use(VueI18n)

type Indexable<T> = { [key: string]: T }
type Context = Indexable<Indexable<string>>

const context: Context = import.meta.glob('./assets/locales/*.json', { eager: true })
const files = Object.keys(context)

function loadLocaleMessages (): LocaleMessages {
  const messages: LocaleMessages = {}
  files.forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = context[key]
    }
  })
  return messages
}

export default new VueI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
})
