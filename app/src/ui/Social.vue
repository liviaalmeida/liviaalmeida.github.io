<template>
  <div
    v-visible="{
      callback: onVisible,
      once: true,
    }"
    class="social"
  >
    <a
      :href="href"
      :aria-label="text"
      class="social-icon"
      rel="noopener"
      @click="onClick(href)"
    >
      <Iconific
        :image="image"
        :size="3"
        :active="active"
      />
    </a>
    <a
      :href="href"
      class="social-text"
      @mouseover="active = true"
      @mouseout="active = false"
      @click="onClick(href)"
    >
      {{ text }}
    </a>
  </div>
</template>

<script setup lang="ts">
import Iconific from '@/ui/Iconific.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import mixpanel from 'mixpanel-browser'

export default defineComponent({
  props: {
    href: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    onClick(href: string) {
      mixpanel.track('Icon-click', {
        to: href,
      })
    },
    onVisible(visible: boolean) {
      this.active = visible

      if (visible) setTimeout(() => this.active = false, 1000)
    },
  },
})
</script>

<style lang="scss" scoped>
.social {
  @include inline-flex-column;
  align-items: center;
}

.social-icon,
.social-text {
  &, &:visited {
    color: $lv-purple;
    font-family: 'Neuton';
    font-size: 2*$m;
    font-weight: 600;
    text-decoration: none;
  }
}
</style>
