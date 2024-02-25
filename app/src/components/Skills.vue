<template>
  <Section
    title-icon="programming"
    :title="$t('title.programming')"
    class="programming"
  >
    <div class="programming-skills">
      <div
        v-for="(skill,index) in skills"
        :key="index"
        class="programming-skill"
      >
        <span class="programming-label">{{ skill.name }}</span>
        <Progress
          :progress="skill.progress"
        />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import Progress from '@/ui/Progress.vue'
import Section from '@/ui/Section.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      skills: [
        {
          'name': 'C/C++',
          'progress': 0.8,
        },
        {
          'name': 'C#',
          'progress': 0.3,
        },
        {
          'name': 'CSS',
          'progress': 0.9,
        },
        {
          'name': 'HTML',
          'progress': 0.8,
        },
        {
          'name': 'JavaScript',
          'progress': 0.9,
        },
        {
          'name': 'Python',
          'progress': 0.85,
        },
        {
          'name': 'SQL',
          'progress': 0.7,
        },
        {
          'name': 'TypeScript',
          'progress': 0.9,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.programming {
	background-color: $lv-lilac;
}

.programming-skills {
	@include flex-column;
	justify-content: space-around;
	align-self: center;
	flex-grow: 1;
  margin: 0 auto;
  max-width: 226px;
  transform: translateX(-20px);
}

.programming-skill {
	align-self: flex-end;
	font-size: 1.7*$m;
	margin-top: 3*$m;
}

.programming-label {
  margin-right: 1.5*$m;
}
</style>
