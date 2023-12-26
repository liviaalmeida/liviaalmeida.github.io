import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { ObserveVisibility } from 'vue-observe-visibility'
import VueCookies from 'vue-cookies'
import Mixpanel from 'mixpanel-browser'

import AnimatedIcon from '@/ds/AnimatedIcon.vue'
import AnimatedLink from '@/ds/AnimatedLink.vue'
import AnimatedTitle from '@/ds/AnimatedTitle.vue'
import CaptchaValidation from '@/ds/CaptchaValidation.vue'
import CoffeeCup from '@/ds/CoffeeCup.vue'
import PageSection from '@/ds/PageSection.vue'
import ProgressBar from '@/ds/ProgressBar.vue'
import ScrollDown from '@/ds/ScrollDown.vue'
import VButton from '@/ds/VButton.vue'
import VIcon from '@/ds/VIcon.vue'
import VInput from '@/ds/VInput.vue'
import VModal from '@/ds/VModal.vue'
import VTimeline from '@/ds/VTimeline.vue'

Vue.component('AnimatedIcon', AnimatedIcon)
Vue.component('AnimatedLink', AnimatedLink)
Vue.component('AnimatedTitle', AnimatedTitle)
Vue.component('CaptchaValidation', CaptchaValidation)
Vue.component('CoffeeCup', CoffeeCup)
Vue.component('PageSection', PageSection)
Vue.component('ProgressBar', ProgressBar)
Vue.component('ScrollDown', ScrollDown)
Vue.component('VButton', VButton)
Vue.component('VIcon', VIcon)
Vue.component('VInput', VInput)
Vue.component('VModal', VModal)
Vue.component('VTimeline', VTimeline)

Vue.directive('visible', ObserveVisibility)

Vue.use(VueCookies)

Mixpanel.init('993c79eddca27044b045ea158973bd99')

Vue.config.productionTip = false

import '@/assets/scss/reset.scss'

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
