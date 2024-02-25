<template>
  <Section
    class="experience"
    title-icon="tools"
    :title="$t('menu.experience')"
  >
    <Timeline
      v-for="experience in experiences"
      :key="experience.title"
      :icon="experience.icon"
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
          icon: 'work',
          title: 'title.experience',
          items: 'experience',
        },
        {
          icon: 'microphone',
          title: 'title.presentations',
          items: 'presentations',
        },
        {
          icon: 'rocket',
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
    margin-top: 6*$m;
  }
}
</style>
