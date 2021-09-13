<template>
	<component
		:is="icon"
	/>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  computed: {
    icon() {
      return () => import(`@/assets/icons/${this.name}.svg?inline`)
    },
  },
})
</script>
