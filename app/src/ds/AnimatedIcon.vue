<template>
  <div :class="['animated-icon', {'animated-icon--active': active }]">
    <VIcon
      color="white"
      :name="image"
      :class="['icon', {'icon--active': active }]"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    active: {
      type: Boolean,
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: false,
      default: 4,
    },
  },
})
</script>

<style lang="scss" scoped>
.animated-icon {
  background-color: $lv-purple;
	border-radius: 50%;
  opacity: 0.6;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.animated-icon, .icon {
  transition: all $animation-time;
}

.animated-icon:hover, .animated-icon--active {
  opacity: 1;

  .icon {
    transform: scale(1.5);
  }
}
</style>
