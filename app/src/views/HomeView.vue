<template>
  <div class="home">
    <MyProfile />
    <ProgrammingSkills />
    <WorkExperience />
    <ContactForm />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import MyProfile from '@/components/MyProfile.vue'
import ProgrammingSkills from '@/components/ProgrammingSkills.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import ContactForm from '@/components/ContactForm.vue'

export default Vue.extend({
  components: {
    MyProfile,
    ProgrammingSkills,
    WorkExperience,
    ContactForm,
  },
})
</script>
