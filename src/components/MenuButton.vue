<template>
	<label class="menu-close">
		<input
			v-model="checked"
			type="checkbox"
		>
		<div class="menu-close-line menu-close-line-1" />
		<div class="menu-close-line menu-close-line-2" />
		<div class="menu-close-line menu-close-line-3" />
	</label>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	model: {
		event: 'change',
	},
	props: {
		value: {
			type: Boolean,
			required: false,
		},
	},
	data() {
		return {
			checked: false,
		}
	},
	watch: {
		checked() {
			this.$emit('change', this.checked)
		},
		value() {
			this.checked = this.value
		},
	},
})
</script>

<style lang="scss">
$line-spin: 220deg;
$line-inclination: 50deg;

.menu-close {
	@include flex-column;
	cursor: pointer;
	width: 20px;
	height: 15px;
	fill: none;
	position: relative;
	justify-content: space-between;

	&-line {
		height: 2px;
		width: 20px;
		background-color: white;
		border-radius: 5px;
		transition: all .5s;
		top: 50%;
	}

	input {
		display: none;
	}

	input:checked ~ div {
		&.menu-close-line {
			position: absolute;
			background-color: gray;
			top: 50%;
		}

		&.menu-close-line-1 {
			animation: spin-left .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal;
			transform: rotate($line-inclination);
		}

		&.menu-close-line-2 {
			opacity: 0;
		}

		&.menu-close-line-3 {
			animation: spin-right .6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal;
			transform: rotate(-$line-inclination);
		}
	}
}

@keyframes spin-left {
	100% {
		transform: rotate($line-spin);
	}
}

@keyframes spin-right {
	100% {
		transform: rotate(-$line-spin);
	}
}
</style>
