<template>
  <Input
    v-model="model"
    :label="$t('contact.captcha.label')"
    :placeholder="$t('contact.captcha.placeholder')"
    type="number"
    class="captcha"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
import Input from '@/ui/Input.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { captcha } from '@/assets/helpers'
import jCaptcha from 'js-captcha'

export default defineComponent({
  props: {
    modelValue: {
      required: true,
      type: String,
    },
    validate: {
      required: true,
      type: Boolean,
    },
  },
  emits: [
    'update:modelValue',
    'abuse',
    'error',
    'success',
  ],
  data() {
    return {
      captcha: {} as jCaptcha,
      model: this.modelValue,
    }
  },
  watch: {
    modelValue() {
      this.model = this.modelValue
    },
    validate() {
      if (this.validate) {
        this.captcha.validate()
      } else {
        this.captcha.reset()
      }
    },
  },
  methods: {
    callback(response: CaptchaResponse, _: Element, tries: number) {
      if (response === 'success') {
        this.$emit('success')
        return
      }
      if (tries > 3) {
        this.$emit('abuse')
        return
      }
      this.$emit('error')
    },
  },
  mounted() {
    this.captcha = captcha('.captcha .input-input', this.callback)
  },
})
</script>

<style lang="scss" scoped>
.captcha-canvas {
  transform: translateX(5px);
  margin-right: $m;
}
</style>
