import { config } from '@vue/test-utils'

import 'intersection-observer'
import VueObserveVisibility  from 'vue-observe-visibility'

import i18n from '@/i18n'

config.global.plugins = [
  ...config.global.plugins,
  i18n,
  VueObserveVisibility,
]
