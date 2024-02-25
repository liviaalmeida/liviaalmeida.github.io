<template>
  <section
    :class="['section', {
      'section--small': small,
    }]"
  >
    <Title
      v-if="title && titleIcon"
      :icon="titleIcon"
      :text="title"
      class="section-title"
    />
    <div class="section-content">
      <slot name="default" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Title from '@/ui/Title.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    small: {
      default: false,
      type: Boolean,
    },
    title: {
      default: '',
      type: String,
    },
    titleIcon: {
      default: '',
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
.section {
  @include flex-column;
  padding: 50px;
  justify-content: center;

  &:not(&--small) {
    min-height: calc(100vh - 60px);
  }
}

.section-title {
  margin-bottom: 40px;
}

.section-content {
  margin: 0 auto;
  max-width: 800px;

  @include phone {
    width: 100%;
  }
}
</style>
