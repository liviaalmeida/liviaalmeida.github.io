<template>
  <div class="rating">
    <span
      v-for="star in stars"
      :key="star"
    >
      ★
    </span>
    <span
      v-for="star in unfilled"
      :key="star"
    >
      ☆
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    stars: {
      type: Number,
      required: true,
      validator: (value: number) => value>=0 && value<=5,
    },
  },
  computed: {
    unfilled(): number {
      return 5 - this.stars
    },
  },
})
</script>

<style lang="scss" scoped>
.rating {
  font-size: 14px;
}
</style>
