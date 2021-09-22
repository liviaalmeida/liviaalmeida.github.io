<template>
  <div id="app">
    <Header />
    <router-view
			class="app-view"
		/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import mixpanel from 'mixpanel-browser'

export default Vue.extend({
  components: {
    Header,
  },
  mounted() {
    mixpanel.track('Page-view')
  },
})
</script>

<style lang="scss">
@import '~@/assets/scss/reset.scss';

$loader-img: 250px;

html {
	scroll-behavior: smooth;
}

html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Open Sans', Helvetica;
	color: $lv-purple;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  * {
    box-sizing: border-box;
  }
}
</style>
