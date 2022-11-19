<template>
	<header class="header">
		<Menu class="header-menu" />
		<h1>Lívia Almeida</h1>
		<h2>{{$t('title.position')}}</h2>
    <Coffee />
	</header>
</template>

<script lang="ts">
import Vue from 'vue'
import Menu from '@/components/Menu.vue'

export default Vue.extend({
  components: {
    Menu,
  },
})
</script>

<style lang="scss">
.header {
  @include flex-column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
	flex-wrap: wrap;
  padding: 60px 0 2*$m;
  background-color: $lv-purple;
  color: $lv-white;
  font-family: 'Bebas Neue';
  font-weight: 600;

  &-menu {
    position: fixed;
    top: 0;
    left: 0;
  }

  h1 {
    font-size: 5*$m;
    margin-bottom: 0.5*$m;
  }

  h2 {
    font-size: 2.5*$m;
    margin-bottom: 2*$m;
  }
}
</style>
