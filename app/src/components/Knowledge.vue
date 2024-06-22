<template>
  <Section
    :title="$t('menu.knowledge')"
    class="knowledge"
  >
    <Timeline
      :time-events="education"
      :title="$t('title.education')"
      class="knowledge-item"
    />
    <Timeline
      :time-events="languages"
      :title="$t('title.languages')"
      class="knowledge-item"
    />
    <Skills
      :skills="programming"
      :title="$t('title.programming')"
      class="knowledge-item"
    />
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import Section from '@/ui/Section.vue'
import Skills from '@/ui/Skills.vue'
import Timeline from '@/ui/Timeline.vue'

const { t, tm } = useI18n({ useScope: 'global' })

const education = computed<TimeEvent[]>(() => tm('education'))

const languages = computed<TimeEvent[]>(() => tm('languages'))

const programming = computed<Skill[]>(() => [
  {
    level: t('skills.proficient'),
    listing: ['CSS', 'HTML', 'JavaScript', 'TypeScript'],
    stars: 5,
  },
  {
    level: t('skills.good'),
    listing: ['C/C++', 'Python'],
    stars: 4,
  },
  {
    level: t('skills.sufficient'),
    listing: ['C#', 'SQL'],
    stars: 3,
  },
])
</script>

<style lang="scss" scoped>
.knowledge {
	background-color: $lv-gray;
}

.knowledge-item {
  &:not(:last-of-type) {
    margin-bottom: 50px;
  }
}
</style>
