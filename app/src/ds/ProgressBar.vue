<template>
	<div
    v-visible="{
      callback: onVisible,
      once: true,
    }"
    class="progress"
  >
		<div
      v-if="visible"
      class="progress-bar"
    />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import helper from '@/assets/helpers'

export default Vue.extend({
  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  computed: {
    progressStyle(): CSSStyleDeclaration {
      return helper.elementStyle(this.$el.firstElementChild)
    },
  },
  methods: {
    defineWidth() {
      const bar = this.$el.firstElementChild as HTMLDivElement
      bar.style.width = `${this.progress * 100}%`
    },
    onVisible(visible: boolean) {
      this.visible = visible
      if (!visible) return

      this.$nextTick(() => this.defineWidth())
    },
  },
})
</script>

<style lang="scss" scoped>
$height: $m;
$border-radius: .5*$m;

.progress {
	display: inline-flex;
	background-color: rgba($lv-purple, .5);
	height: $height;
	border-radius: $border-radius;
  width: 12.5*$m;

	&:hover .progress-bar {
		animation: barGrow ease-in-out 2s infinite alternate;
		transform-origin: 0;
	}

	&-bar {
		background-color: $lv-purple;
		height: $height;
		border-radius: $border-radius;
		@include animation-on-load(no-width-on-load);
	}
}

@keyframes barGrow {
	100% {
		width: 5px;
	}
}
</style>
