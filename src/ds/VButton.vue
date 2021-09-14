<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="$attrs.disabled || loading"
    class="button"
  >
    <span
      v-if="loading"
      class="button-loading"
    />
    <slot
      v-else
      name="default"
    />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    loading: {
      required: false,
      type: Boolean,
    },
  },
})
</script>

<style lang="scss">
$color: rgba($lv-purple, .7);
$loading: 25px;

.button {
  background-color: transparent;
  border: 2px solid $color;
  border-radius: 5px;
  color: $color;
  display: block;
  font-family: 'Bebas Neue';
  font-size: 20px;
  height: 45px;
  min-width: 150px;
  margin: 0 auto;

  &:disabled {
    background-color: rgba($lv-grey, .3);
    border-color: $lv-grey;
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  &-loading {
    animation: spin 1s ease-in 0s infinite;
    border: 5px solid $color;
    border-right-color: transparent;
    border-radius: 50%;
    display: inline-block;
    height: $loading;
    width: $loading;
    margin-top: 4px;
  }
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>
