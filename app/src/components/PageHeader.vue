<template>
  <header class="header">
    <NavigationMenu class="header-menu" />
    <h1 class="header-title">
      Lívia Almeida
    </h1>
    <h2 class="header-position">
      {{ $t('title.position') }}
    </h2>
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
  background-color: $lv-purple;
  color: $lv-white;
  font-family: 'Bebas Neue';
  font-weight: 600;
  padding: 60px 0 2*$m;
  position: relative;
  height: 100dvh;
  width: 100%;
  justify-content: center;
  align-items: center;
	flex-wrap: wrap;
}

.header-menu {
  position: fixed;
  top: 0;
  left: 0;
}

.header-title {
  font-size: 5*$m;
  margin-bottom: 0.5*$m;
}

.header-position {
  font-size: 2.5*$m;
  margin-bottom: 2*$m;
}

.header-scroll {
  position: absolute;
  bottom: 10px;
}
</style>
