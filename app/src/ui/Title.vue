<template>
  <div
    class="title"
  >
    <Icon
      :name="icon"
      size="l"
      class="title-icon"
    />
    <h2 class="title-heading">
      {{ text }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/ui/Icon.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
$icon: 30px;

.title {
  color: $lv-purple;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-icon {
  fill: $lv-purple;
  width: $icon;
}

.title-heading {
  font-family: 'Bebas Neue';
  font-size: 4*$m;
  margin-left: $m;
}
</style>
