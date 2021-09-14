<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="$attrs.disabled || loading"
    @click="onClick"
    class="button"
  >
    <span
      class="button-wave"
    />
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
  computed: {
    wave(): HTMLSpanElement {
      return this.$el.querySelector('.button-wave') as HTMLSpanElement
    },
  },
  methods: {
    async onClick() {
      const animate = 'animate'
      const { classList } = this.wave
      if (classList.contains(animate)) return

      classList.add('animate')
      setTimeout(() => {
        classList.remove('animate')
      }, 400)
    },
  },
})
</script>

<style lang="scss">
$color: rgba($lv-purple, .7);
$height: 45px;
$icon: 25px;

.button {
  background-color: transparent;
  border: 2px solid $color;
  border-radius: 5px;
  color: $color;
  display: block;
  font-family: 'Bebas Neue';
  font-size: 20px;
  height: $height;
  min-width: 200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  &:disabled {
    border-color: $lv-grey;
    color: rgba($lv-grey, .5);
  }

  &:not(:disabled) {
    cursor: pointer;
  }

  svg {
    height: $icon;
    width: $icon;
    fill: $color;
    margin-right: .3*$m;
    transform: translateY(1px);
  }

  &-loading {
    animation: spin 1s ease-in 0s infinite;
    border: 5px solid $color;
    border-right-color: transparent;
    border-radius: 50%;
    display: inline-block;
    height: $icon;
    width: $icon;
    margin-top: 4px;
  }

  &-wave {
    background-color: rgba(black, .2);
    display: inline-block;
    height: $height;
    width: $height;
    position: absolute;
    top: -2px;
    left: calc(50% - $width);
    transform: scaleX(0);
    transition: all .4s ease-in;

    &.animate {
			animation: wave .4s ease-in 1;
    }
  }
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

@keyframes wave {
	100% {
		opacity: 0;
		transform: scaleX(10);
	}
}
</style>
