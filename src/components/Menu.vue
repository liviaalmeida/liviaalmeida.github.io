<template>
	<div :class="['menu', {
		'menu--background': background,
	}]">
		<Locale class="menu-locale" />
		<nav class="menu-nav">
			<button
				v-for="link in links"
				:key="link.text"
				@click="onNav(link.class)"
				class="menu-link"
			>
				{{ link.text }}
			</button>
		</nav>
		<MenuButton
			v-model="open"
			class="menu-button"
		/>
		<div
			v-if="open"
			class="menu-drop"
		>
			<button
				v-for="link in links"
				:key="link.text"
				@click="onNav(link.class)"
				class="menu-link"
			>
				{{ link.text }}
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Locale from '@/components/Locale.vue'
import MenuButton from './MenuButton.vue'

export default Vue.extend({
  components: {
    Locale,
    MenuButton,
  },
	data() {
		return {
			background: false,
			open: false,
		}
	},
	computed: {
		heigth(): number {
			return 60
		},
		links(): Array<Link> {
			return [
				{
					text: 'Sobre',
					class: 'profile',
				},
				{
					text: 'Linguagens',
					class: 'programming',
				},
				{
					text: 'Experiência',
					class: '',
				},
			]
		},
	},
	methods: {
		onNav(toClass: string) {
			const el = document.querySelector(`.${toClass}`) as HTMLElement
			const { top } = el.getBoundingClientRect()

			window.scrollTo({
				top: window.scrollY + top - 60,
			})

			this.open = false
		},
		onScroll() {
			this.background = window.scrollY > window.innerHeight - this.heigth - 1
		},
	},
	mounted() {
		window.addEventListener('scroll', this.onScroll)
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll)
	},
})
</script>

<style lang="scss">
$height: 60px;

.menu {
	background-color: $lv-purple;
	width: 100%;
	height: $height;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	transition: background-color 1s;
	position: relative;
	z-index: 200;

	&--background {
		background-color: darken($lv-purple, 10%);
	}

	&-link {
		background-color: transparent;
		border: none;
		color: $lv-white;
		cursor: pointer;
		font-family: 'Bebas Neue';
		font-size: 2.5*$m;
		font-weight: 700;
		margin: 0 2*$m;
		text-transform: uppercase;
	}

	&-nav {
		@include tablet {
			display: none;
		}
	}

	&-button {
		display: none;

		@include tablet {
			display: flex;
		}
	}

	&-drop {
		@include flex-column;
		align-items: center;
		background-color: $lv-purple;
		position: absolute;
		left: 0;
		top: $height;
		width: 100%;
	}
}
</style>
