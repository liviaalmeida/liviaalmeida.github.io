<template>
  <div
    :style="style"
    :class="['icon', `icon--${size}`]"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const COLORS = {
  green: '#008000',
  purple: '#3c0046',
  red: '#ff0000',
  white: '#fff',
  yellow: '#ffff00',
}
const SIZES = ['s', 'm', 'l', 'xl']

export default defineComponent({
  props: {
    color: {
      default: 'purple',
      type: String as () => COLOR,
    },
    name: {
      required: true,
      type: String,
    },
    opacity: {
      default: 1,
      type: Number,
      validator: (value: number) => value >= 0 && value <= 1,
    },
    size: {
      default: 's',
      type: String,
      validator: (value: string) => SIZES.includes(value),
    },
  },
  computed: {
    style(): { [key: string]: string } {
      const backgroundColor = COLORS[this.color as COLOR]

      return {
        backgroundColor,
        maskImage: `url('/icons/${this.name}.svg')`,
        opacity: this.opacity.toString(),
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@mixin size($size) {
  height: $size;
  width: $size;
}

.icon {
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 85%;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 85%;
}

.icon--s {
  @include size(22px);
}

.icon--m {
  @include size(35px);
}

.icon--l {
  @include size(37px);
}

.icon--xl {
  @include size(70px);
}
</style>
