<template>
  <section
    :class="['section', {
      'section--small': small,
    }]"
  >
    <h2
      v-if="title"
      class="section-title"
    >
      {{ title }}
    </h2>
    <div class="section-content">
      <slot name="default" />
    </div>
  </section>
</template>

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
  font-family: 'Abel';
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
}

.section-content {
  margin: 0 auto;
  max-width: 800px;

  @include phone {
    width: 100%;
  }
}
</style>
