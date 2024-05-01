<template>
  <div
    :style="style"
    class="icon"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const COLORS = {
  gray: '#1e1e1e',
  green: '#008000',
  red: '#ff0000',
  white: '#fff',
  yellow: '#ffff00',
}

export default defineComponent({
  props: {
    color: {
      default: 'gray',
      type: String as () => COLOR,
    },
    name: {
      required: true,
      type: String,
    },
  },
  computed: {
    style(): { [key: string]: string } {
      const backgroundColor = COLORS[this.color as COLOR]

      return {
        backgroundColor,
        maskImage: `url('/icons/${this.name}.svg')`,
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.icon {
  height: 35px;
  width: 35px;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
}
</style>
