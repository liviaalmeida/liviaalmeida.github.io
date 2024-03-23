<template>
  <Section
    :title="$t('menu.knowledge')"
    class="knowledge"
  >
    <Timeline
      :time-events="convertTimeEvent($tm(education.items))"
      :title="$t(education.title)"
      class="knowledge-item"
    />
    <Timeline
      :time-events="convertTimeEvent($tm(languages.items))"
      :title="$t(languages.title)"
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
import Section from '@/ui/Section.vue'
import Skills from '@/ui/Skills.vue'
import Timeline from '@/ui/Timeline.vue'

import { convertTimeEvent } from '@/assets/helpers'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    education(): Indexable<string> {
      return {
        items: 'education',
        title: 'title.education',
      }
    },
    languages(): Indexable<string> {
      return {
        items: 'languages',
        title: 'title.languages',
      }
    },
    programming() {
      return [
        {
          level: this.$t('skills.proficient'),
          listing: [
            'CSS',
            'HTML',
            'JavaScript',
            'TypeScript',
          ],
          stars: 5,
        },
        {
          level: this.$t('skills.good'),
          listing: [
            'C/C++',
            'Python',
          ],
          stars: 4,
        },
        {
          level: this.$t('skills.sufficient'),
          listing: [
            'C#',
            'SQL',
          ],
          stars: 3,
        },
      ]
    },
  },
})
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
