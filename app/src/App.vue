<template>
  <div id="app">
    <PageHeader />
    <router-view
      class="app-view"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageHeader from '@/components/PageHeader.vue'
import mixpanel from 'mixpanel-browser'

export default Vue.extend({
  components: {
    PageHeader,
  },
  mounted() {
    mixpanel.track('Page-view')
  },
})
</script>

<style lang="scss">
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
