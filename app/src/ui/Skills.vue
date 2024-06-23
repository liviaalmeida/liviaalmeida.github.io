<template>
  <div class="skills">
    <h3 class="skills-title">
      {{ title }}
    </h3>
    <div
      v-for="group in skills"
      :key="group.name"
      class="skills-listing"
    >
      <div class="skills-value">
        <h4 class="skills-name">
          {{ group.name }}
        </h4>
        <Rating
          v-if="group.stars"
          :stars="group.stars"
          class="skills-rating"
        />
        <div
          v-if="group.level"
          class="skills-level"
        >
          {{ group.level }}
        </div>
      </div>
      <ul class="skills-list">
        <li
          v-if="group.intro"
          class="skills-intro"
        >
          {{ group.intro }}
        </li>
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
  gap: 10px;
}

.skills-name {
  font-family: 'Bebas Neue';
  font-size: 20px;
  font-weight: bold;
}

.skills-name::before {
  content: '·';
  display: inline-block;
  margin-right: 5px;
}

.skills-level {
  font-size: 10px;
  margin-top: 5px;
}

.skills-intro,
.skills-item {
  display: inline;
}

.skills-intro {
  font-weight: bold;
  margin-right: 8px;
}

.skills-item:not(:last-child)::after {
  content: ', '
}
</style>
