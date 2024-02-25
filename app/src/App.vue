<template>
  <Header />
  <Profile />
  <Skills />
  <Experience />
  <Contact />
</template>

<script setup lang="ts">
import Contact from '@/components/Contact.vue'
import Experience from '@/components/Experience.vue'
import Header from '@/components/Header.vue'
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import mixpanel from 'mixpanel-browser'

export default defineComponent({
  mounted() {
    mixpanel.track('Page-view')
  },
})
</script>
