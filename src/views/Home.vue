<template>
  <div class="home">
		<Profile />
		<Programming />
		<Experience />
		<Contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Profile from '@/components/Profile.vue'
import Programming from '@/components/Programming.vue'
import Experience from '@/components/Experience.vue'
import Contact from '@/components/Contact.vue'

export default Vue.extend({
  components: {
    Profile,
    Programming,
    Experience,
    Contact,
  },
})
</script>
