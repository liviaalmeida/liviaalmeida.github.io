<template>
  <div :class="['iconific', {'iconific--active': active }]">
    <Icon
      color="white"
      :name="image"
      :class="[
        'iconific-icon',
        {'iconific-icon--active': active },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import Icon from '@/ui/Icon.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
$size: 48px;

.iconific {
  background-color: $lv-purple;
	border-radius: 50%;
  opacity: 0.6;
  height: $size;
  width: $size;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.iconific, .iconific-icon {
  transition: all $animation-time;
}

.iconific:hover, .iconific--active {
  opacity: 1;

  .iconific-icon {
    transform: scale(1.5);
  }
}
</style>
