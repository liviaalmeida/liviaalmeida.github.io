<template>
  <section
    :class="['section', {
      'section--small': small,
    }]"
  >
    <AnimatedTitle
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

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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

  &-title {
    margin-bottom: 40px;
  }
  
  &-content {
    margin: 0 auto;
    max-width: 800px;

    @include phone {
      width: 100%;
    }
  }
}
</style>
