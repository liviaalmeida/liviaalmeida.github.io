<template>
  <header class="header">
    <NavigationMenu class="header-menu" />
    <h1>Lívia Almeida</h1>
    <h2>{{ $t('title.position') }}</h2>
    <CoffeeCup />
    <ScrollDown
      to-class="app-view"
      class="header-scroll"
    />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationMenu from '@/components/NavigationMenu.vue'

export default Vue.extend({
  components: {
    NavigationMenu,
  },
})
</script>

<style lang="scss" scoped>
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
  position: relative;

  &-menu {
    position: fixed;
    top: 0;
    left: 0;
  }

  &-scroll {
    position: absolute;
    bottom: 10px;
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
