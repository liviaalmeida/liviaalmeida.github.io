<template>
  <Section
    class="experience"
    :title="$t('menu.experience')"
  >
    <Timeline
      v-for="experience in experiences"
      :key="experience.title"
      :time-events="experience.events"
      :title="experience.title"
      class="experience-info"
    />
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import Section from '@/ui/Section.vue'
import Timeline from '@/ui/Timeline.vue'

const { t, tm } = useI18n({ useScope: 'global' })

const experiences = computed<Experience[]>(() => [
  {
    title: t('title.experience'),
    events: tm('experience'),
  },
  {
    title: t('title.presentations'),
    events: tm('presentations'),
  },
  {
    title: t('title.projects'),
    events: tm('projects'),
  },
])
</script>

<style lang="scss" scoped>
.experience-info {
  max-width: 500px;

  &:not(:first-of-type) {
    margin-top: 60px;
  }
}
</style>
