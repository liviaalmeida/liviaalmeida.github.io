<template>
  <div
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    small: {
      required: false,
      type: Boolean,
    },
    title: {
      required: false,
      type: String,
    },
    titleIcon: {
      required: false,
      type: String,
    },
  },
  mounted() {
    console.log(this.$el)
  },
})
</script>

<style lang="scss">
.section {
  @include flex-column;
  padding: 50px 30px;
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
  }
}
</style>
