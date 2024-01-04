<template>
  <div
    v-visible="{
      callback: onVisible,
      once: true,
    }"
    class="animated-link"
  >
    <a
      :href="href"
      :aria-label="text"
      class="animated-link-icon"
      rel="noopener"
      @click="onClick(href)"
    >
      <AnimatedIcon
        :image="image"
        :size="3"
        :active="active"
      />
    </a>
    <a
      :href="href"
      class="animated-link-text"
      @mouseover="active = true"
      @mouseout="active = false"
      @click="onClick(href)"
    >
      {{ text }}
    </a>
  </div>
</template>

<script lang="ts">
import mixpanel from 'mixpanel-browser'
import Vue from 'vue'

export default Vue.extend({
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
.animated-link {
  @include inline-flex-column;
  align-items: center;
}

.animated-link-icon,
.animated-link-text {
  &, &:visited {
    color: $lv-purple;
    font-family: 'Neuton';
    font-size: 2*$m;
    font-weight: 600;
    text-decoration: none;
  }
}
</style>
