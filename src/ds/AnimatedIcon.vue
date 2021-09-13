<template>
	<div :class="[
		{ 'icon--active': active },
		'icon',
	]">
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import helper from '@/assets/helpers'

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
  mounted() {
    this.setIconSize()
    this.setBackgroundImage()
  },
  computed: {
    elStyle(): CSSStyleDeclaration {
      return helper.elementStyle(this.$el)
    },
  },
  methods: {
    setIconSize(): void {
      const remSize = helper.numberToRem(this.size)

      this.elStyle.width = remSize
      this.elStyle.height = remSize
    },
    setBackgroundImage(): void {
      this.elStyle.backgroundImage = `url('${this.image}')`
    },
  },
})
</script>

<style lang="scss" scoped>
@mixin icon-active {
	background-size: 50%;
	opacity: 1;
}

.icon {
	display: inline-flex;
	background-color: $lv-purple;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 40%;
	border-radius: 50%;
	opacity: 0.6;
	transition: all $animation-time;
	@include animation-on-load(on-icon-load);

	&:hover, &--active {
		@include icon-active;
	}
}

@keyframes on-icon-load {
	0% { @include icon-active; }
}

</style>
