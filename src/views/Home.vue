<template>
  <div class="home">
		<Profile />
		<Programming />
		<Work />
		<Presentations />
		<Education />
		<Projects />
		<Languages />
		<Contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Profile from '@/components/Profile.vue'
import Work from '@/components/Work.vue'
import Programming from '@/components/Programming.vue'
import Presentations from '@/components/Presentations.vue'
import Education from '@/components/Education.vue'
import Projects from '@/components/Projects.vue'
import Languages from '@/components/Languages.vue'
import Contact from '@/components/Contact.vue'

export default Vue.extend({
  components: {
    Profile,
    Work,
    Programming,
    Presentations,
    Education,
    Projects,
    Languages,
    Contact,
  },
})
</script>
