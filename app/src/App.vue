<template>
  <Menu />
  <Hero />
  <Knowledge />
  <Experience />
  <Contact />
</template>

<script setup lang="ts">
import Contact from '@/components/Contact.vue'
import Experience from '@/components/Experience.vue'
import Hero from '@/components/Hero.vue'
import Knowledge from '@/components/Knowledge.vue'
import Menu from '@/components/Menu.vue'
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
