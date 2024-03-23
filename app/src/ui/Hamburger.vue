<template>
  <label class="hamburger">
    <input
      v-model="checked"
      type="checkbox"
      class="hamburger-checkbox"
    >
    <div class="hamburger-line hamburger-line-1" />
    <div class="hamburger-line hamburger-line-2" />
    <div class="hamburger-line hamburger-line-3" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
      required: false,
    },
  },
  emits: [
    'update:modelValue',
  ],
  data() {
    return {
      checked: false,
    }
  },
  watch: {
    checked() {
      this.$emit('update:modelValue', this.checked)
    },
    value() {
      this.checked = this.modelValue
    },
  },
})
</script>

<style lang="scss" scoped>
$line-spin: 220deg;
$line-inclination: 50deg;

.hamburger {
  @include flex-column;
  cursor: pointer;
  width: 20px;
  height: 15px;
  fill: none;
  position: relative;
  justify-content: space-between;
}

.hamburger-line {
  height: 2px;
  width: 20px;
  background-color: $lv-white;
  border-radius: 5px;
  transition: all .5s;
  top: 50%;
}

.hamburger-checkbox {
  display: none;
}

.hamburger-checkbox:checked ~ .hamburger-line {
  &.hamburger-line {
    position: absolute;
    background-color: gray;
    top: 50%;
  }

  &.hamburger-line-1 {
    animation: spin-left .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal;
    transform: rotate($line-inclination);
  }

  &.hamburger-line-2 {
    opacity: 0;
  }

  &.hamburger-line-3 {
    animation: spin-right .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal;
    transform: rotate(-$line-inclination);
  }
}

@keyframes spin-left {
  100% {
    transform: rotate($line-spin);
  }
}

@keyframes spin-right {
  100% {
    transform: rotate(-$line-spin);
  }
}
</style>
