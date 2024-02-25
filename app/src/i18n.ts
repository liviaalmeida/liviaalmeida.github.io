import { createI18n } from 'vue-i18n'

import en from '@/assets/locales/en.json'
import fr from '@/assets/locales/fr.json'
import pt from '@/assets/locales/pt.json'

export default createI18n({
  fallbackLocale: 'fr', 
  locale: 'en',
  messages: {
    en,
    fr,
    pt,
  },
})
