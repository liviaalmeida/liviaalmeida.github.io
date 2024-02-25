<template>
  <button
    class="scroll"
    aria-label="Scroll Down"
    @click="onScroll"
  >
    <Icon
      color="white"
      name="double-down"
      size="xl"
      class="scroll-icon"
    />
  </button>
</template>

<script setup lang="ts">
import Icon from '@/ui/Icon.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { navigateTo } from '@/assets/helpers'

export default defineComponent({
  props: {
    toClass: {
      type: String,
      required: true,
    },
  },
  methods: {
    onScroll() {
      navigateTo(this.toClass, -60)
    },
  },
})
</script>

<style lang="scss" scoped>
.scroll {
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 80px;
  width: 80px;
}

.scroll-icon {
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
