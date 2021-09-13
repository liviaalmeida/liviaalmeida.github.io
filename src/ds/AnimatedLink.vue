<template>
	<div class="animated-link">
		<a
			:href="href"
			class="icon"
		>
			<AnimatedIcon
				:image="image"
				:size="3"
				:active="active"
			/>
		</a>
		<a
			:href="href"
			@mouseover="active = true"
			@mouseout="active = false"
			class="text"
		>
			{{text}}
		</a>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	data() {
		return {
			active: false,
		}
	},
	props: {
		image: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		href: {
			type: String,
			required: true,
		}
	}
})
</script>

<style lang="scss" scoped>
.animated-link {
	@include inline-flex-column;
	align-items: center;

	a, a:visited {
		text-decoration: none;
		color: $lv-purple;
		font-family: 'Neuton';
		font-weight: 600;
		font-size: 2*$m;
	}
}
</style>
