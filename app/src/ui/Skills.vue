<template>
  <div class="skills">
    <h3 class="skills-title">
      {{ title }}
    </h3>
    <div
      v-for="group in skills"
      :key="group.level"
      class="skills-listing"
    >
      <div class="skills-value">
        <h4 class="skills-level">
          {{ group.level }}
        </h4>
        <Rating
          :stars="group.stars"
          class="skills-rating"
        />
      </div>
      <ul>
        <li
          v-for="skill in group.listing"
          class="skills-item"
        >
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Rating from '@/ui/Rating.vue'

defineProps<{ skills: Array<Skill>, title: string }>()
</script>

<style lang="scss" scoped>
.skills-title {
  font-family: 'Abel';
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.skills-listing:not(:last-child) {
  margin-bottom: 8px;
}

.skills-value {
  display: flex;
  align-items: center;
  font-family: 'Bebas Neue';
  font-size: 20px;
  font-weight: bold;
  gap: 8px;
}

.skills-item {
  display: inline;

  &:not(:last-child)::after {
    content: ', '
  }
}
</style>
