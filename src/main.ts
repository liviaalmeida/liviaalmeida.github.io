import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { ObserveVisibility } from 'vue-observe-visibility'
import VueCookies from 'vue-cookies'

import AnimatedIcon from '@/ds/AnimatedIcon.vue'
import AnimatedLink from '@/ds/AnimatedLink.vue'
import AnimatedTitle from '@/ds/AnimatedTitle.vue'
import Captcha from '@/ds/Captcha.vue'
import Coffee from '@/ds/Coffee.vue'
import Icon from '@/ds/Icon.vue'
import Modal from '@/ds/Modal.vue'
import ProgressBar from '@/ds/ProgressBar.vue'
import Section from '@/ds/Section.vue'
import Timeline from '@/ds/Timeline.vue'
import VButton from '@/ds/VButton.vue'
import VInput from '@/ds/VInput.vue'

Vue.component('AnimatedIcon', AnimatedIcon)
Vue.component('AnimatedLink', AnimatedLink)
Vue.component('AnimatedTitle', AnimatedTitle)
Vue.component('Captcha', Captcha)
Vue.component('Coffee', Coffee)
Vue.component('Icon', Icon)
Vue.component('Modal', Modal)
Vue.component('ProgressBar', ProgressBar)
Vue.component('Section', Section)
Vue.component('Timeline', Timeline)
Vue.component('VButton', VButton)
Vue.component('VInput', VInput)

Vue.directive('visible', ObserveVisibility)

Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
