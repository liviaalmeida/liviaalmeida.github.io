<template>
  <VInput
    v-model="model"
    :label="$t('contact.captcha.label')"
    :placeholder="$t('contact.captcha.placeholder')"
    type="number"
    class="captcha"
    @model="$emit('captcha', $event)"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { captcha, captchaCallback } from '@/assets/helpers'

export default Vue.extend({
  model: {
    event: 'captcha',
  },
  props: {
    callback: {
      required: false,
      type: Function,
      default: undefined,
    },
    value: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      captcha: {},
      model: this.value,
    }
  },
  watch: {
    value() {
      this.model = this.value
    },
  },
  mounted() {
    const callback = this.callback as captchaCallback
    this.captcha = captcha('.captcha .input-input', callback)
  },
})
</script>

<style lang="scss" scoped>
.captcha-canvas {
  transform: translateX(5px);
  margin-right: $m;
}
</style>
