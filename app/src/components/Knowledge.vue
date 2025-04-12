<template>
  <Section
    :title="$t('menu.knowledge')"
    class="knowledge"
  >
    <Skills
      :skills="education"
      :title="$t('title.education')"
      class="knowledge-item"
    />
    <Skills
      :skills="languages"
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

const { t, tm } = useI18n({ useScope: 'global' })

const education = computed<Skill[]>(() => tm('education'))

const languages = computed<Skill[]>(() => tm('languages'))

const programming = computed<Skill[]>(() => [
  {
    name: t('skills.languages'),
    listing: ['JavaScript', 'Python', 'C++'],
    stars: 5,
  },
  {
    name: t('skills.web'),
    listing: ['HTML', 'CSS', 'performance', t('skills.skill.accessibility')],
    stars: 4,
  },
  {
    name: t('skills.frameworks'),
    listing: ['Vue', 'Angular'],
    stars: 3,
  },
  {
    name: t('skills.tools'),
    listing: ['Vite', 'Webpack'],
    stars: 3,
  },
  {
    name: t('skills.tests'),
    listing: ['Vitest', 'Jest', 'Nightwatch', 'Cypress'],
    stars: 3,
  },
  {
    name: t('skills.databases'),
    listing: ['SQL'],
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
