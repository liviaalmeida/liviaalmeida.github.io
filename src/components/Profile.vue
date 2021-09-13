<template>
	<Section
		:title="$t('title.profile')"
		title-icon="profile"
		class="profile"
	>
		<div class="profile-content">
			<img :src="require('@/assets/images/livia.jpeg')">
			<div class="profile-text">
				<p
					v-for="(paragraph, p) in $t('profile')"
					:key="p"
				>
					{{paragraph}}
				</p>
			</div>
		</div>
	</Section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style lang="scss">

.profile {
	img {
		border: 10px solid white;
		border-radius: 5px;
		height: 30*$m;

		@include tablet {
			border-radius: 50%;
			height: 20*$m;
			width: 20*$m;
			object-fit: cover;
			object-position: 50% 0;
		}
	}

	&-content {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@include tablet {
			flex-direction: column;
		}
	}

	&-text {
		max-width: 350px;
		margin-left: 5*$m;

		@include tablet {
			margin-left: 0;
			margin-top: $m;
		}
		
		p {
			font-size: 1.8*$m;
			text-align: justify;
			line-height: 1.5;

			&:not(:last-child) {
				margin-bottom: .7*$m;
			}
		}
	}
}
</style>
