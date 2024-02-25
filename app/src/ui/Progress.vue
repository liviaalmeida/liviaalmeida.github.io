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
import { defineComponent } from 'vue'

export default defineComponent({
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
      const { style } = (this.$el.firstElementChild as HTMLElement)
      return style
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
	background-color: rgba($lv-purple, .5);
	border-radius: $border-radius;
	display: inline-flex;
	height: $height;
  width: 12.5*$m;

	&:hover .progress-bar {
		animation: barGrow ease-in-out 2s infinite alternate;
		transform-origin: 0;
	}
}

.progress-bar {
  @include animation-on-load(no-width-on-load);
  background-color: $lv-purple;
  border-radius: $border-radius;
  height: $height;
}

@keyframes barGrow {
	100% {
		width: 5px;
	}
}
</style>
