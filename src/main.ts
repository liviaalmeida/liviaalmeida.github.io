import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { ObserveVisibility } from 'vue-observe-visibility'
import { VueMaskDirective } from 'v-mask'

import AnimatedIcon from '@/ds/AnimatedIcon.vue'
import AnimatedLink from '@/ds/AnimatedLink.vue'
import AnimatedTitle from '@/ds/AnimatedTitle.vue'
import Coffee from '@/ds/Coffee.vue'
import Icon from '@/ds/Icon.vue'
import ProgressBar from '@/ds/ProgressBar.vue'
import Section from '@/ds/Section.vue'
import Timeline from '@/ds/Timeline.vue'
import VButton from '@/ds/VButton.vue'
import VInput from '@/ds/VInput.vue'

Vue.component('AnimatedIcon', AnimatedIcon)
Vue.component('AnimatedLink', AnimatedLink)
Vue.component('AnimatedTitle', AnimatedTitle)
Vue.component('Coffee', Coffee)
Vue.component('Icon', Icon)
Vue.component('ProgressBar', ProgressBar)
Vue.component('Section', Section)
Vue.component('Timeline', Timeline)
Vue.component('VButton', VButton)
Vue.component('VInput', VInput)

Vue.directive('visibility', ObserveVisibility)
Vue.directive('mask', VueMaskDirective)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
