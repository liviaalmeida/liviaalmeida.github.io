<template>
	<div class="progress-bar">
		<div class="progress" />
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
		width: {
			type: Number,
			required: false,
			default: 8,
		}
	},
	computed: {
		elStyle(): CSSStyleDeclaration {
			return helper.elementStyle(this.$el)
		},
		progressStyle(): CSSStyleDeclaration {
			return helper.elementStyle(this.$el.firstElementChild)
		}
	},
	mounted() {
		this.defineWidth()
	},
	methods: {
		defineWidth() {
			this.elStyle.width = helper.numberToRem(this.width)
			this.progressStyle.width = helper.numberToRem(this.progress * this.width)
		}
	}
})
</script>

<style lang="scss" scoped>
$height: $m;
$border-radius: .5*$m;

.progress-bar {
	display: inline-flex;
	background-color: rgba($lv-purple, .5);
	height: $height;
	border-radius: $border-radius;

	&:hover .progress {
		animation: barGrow ease-in-out 2s infinite alternate;
		transform-origin: 0;
	}

	.progress {
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
