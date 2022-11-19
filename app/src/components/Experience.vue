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
      :time-events="$t(experience.items)"
      :title="$t(experience.title)"
      class="experience-info"
    />
  </Section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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

<style lang="scss">
.experience-info {
  max-width: 500px;

  &:not(:first-of-type) {
    margin-top: 6*$m;
  }
}
</style>
