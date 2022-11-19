<template>
  <VInput
    v-model="model"
    @model="$emit('captcha', $event)"
    :label="$t('contact.captcha.label')"
    :placeholder="$t('contact.captcha.placeholder')"
    type="number"
    class="captcha"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import helper, { captchaCallback } from '@/assets/helpers'

export default Vue.extend({
  model: {
    event: 'captcha',
  },
  props: {
    callback: {
      required: false,
      type: Function,
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
    this.captcha = helper.captcha('.captcha .input-input', callback)
  },
})
</script>

<style lang="scss">
.captcha-canvas {
  transform: translateX(5px);
  margin-right: $m;
}
</style>
