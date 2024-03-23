<template>
  <Section
    class="experience"
    :title="$t('menu.experience')"
  >
    <Timeline
      v-for="experience in experiences"
      :key="experience.title"
      :time-events="convertTimeEvent($tm(experience.items))"
      :title="$t(experience.title)"
      class="experience-info"
    />
  </Section>
</template>

<script setup lang="ts">
import Section from '@/ui/Section.vue'
import Timeline from '@/ui/Timeline.vue'

import { convertTimeEvent } from '@/assets/helpers'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    experiences() {
      return [
        {
          title: 'title.experience',
          items: 'experience',
        },
        {
          title: 'title.presentations',
          items: 'presentations',
        },
        {
          title: 'title.projects',
          items: 'projects',
        },
      ]
    },
  },
})
</script>

<style lang="scss" scoped>
.experience-info {
  max-width: 500px;

  &:not(:first-of-type) {
    margin-top: 60px;
  }
}
</style>
