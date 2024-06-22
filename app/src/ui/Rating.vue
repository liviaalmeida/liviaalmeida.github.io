<template>
  <div class="rating">
    <span
      v-for="star in stars"
      :key="star"
      class="rating-star"
    >
      ★
    </span>
    <span
      v-for="star in (5 - stars)"
      :key="star"
      class="rating-empty"
    >
      ☆
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  stars: {
    type: Number,
    required: true,
    validator: (value: number) => value >= 0 && value <= 5,
  },
})
</script>

<style lang="scss" scoped>
.rating {
  font-size: 14px;
}
</style>
