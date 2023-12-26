<template>
  <div
    class="animated-title"
  >
    <VIcon
      :name="icon"
      size="l"
      class="animated-title-icon"
    />
    <h2>{{ text }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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

.animated-title {
  color: $lv-purple;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: 'Bebas Neue';
    font-size: 4*$m;
    margin-left: $m;
  }

  &-icon {
    width: $icon;
    fill: $lv-purple;
  }
}
</style>
