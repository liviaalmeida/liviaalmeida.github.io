<template>
  <button
    class="scroll-down"
    aria-label="Scroll Down"
    @click="onScroll"
  >
    <VIcon
      color="white"
      name="double-down"
      size="xl"
      class="scroll-down-icon"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import helper from '@/assets/helpers'

export default Vue.extend({
  props: {
    toClass: {
      type: String,
      required: true,
    },
  },
  methods: {
    onScroll() {
      helper.navigateTo(this.toClass, -60)
    },
  },
})
</script>

<style lang="scss" scoped>
.scroll-down {
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 80px;
  width: 80px;
}

.scroll-down-icon {
  fill: white;
  height: 70px;
  width: 70px;

  &:hover {
    animation: floaty 1s linear 0s infinite alternate-reverse;
  }
}

@keyframes floaty {
  50% { transform: translateY(5px); }
}
</style>
