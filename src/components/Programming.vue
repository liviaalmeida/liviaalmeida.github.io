<template>
	<Section
		title-icon="programming"
		:title="$t('title.programming')"
		class="programming"
	>
		<div class="skills">
			<div class="skill"
			v-for="(skill,index) in skills" :key="index"
			@mouseover="active = true" @mouseout="active = false">
				<span>{{skill.name}}</span>
				<ProgressBar :progress="skill.progress" />
			</div>
		</div>
	</Section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      active: false,
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

.skills {
	@include flex-column;
	justify-content: space-around;
	align-self: center;
	flex-grow: 1;
}

.skill {
	align-self: flex-end;
	font-size: 1.7*$m;
	margin-top: 3*$m;

	span {
		margin-right: 1.5*$m;
	}
}
</style>
