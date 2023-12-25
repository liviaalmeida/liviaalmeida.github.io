<template>
  <div
    class="animated-link"
    v-visible="{
      callback: onVisible,
      once: true,
    }"
  >
    <a
      @click="onClick(href)"
      :href="href"
      :aria-label="text"
      class="icon"
      rel="noopener"
    >
      <AnimatedIcon
        :image="image"
        :size="3"
        :active="active"
      />
    </a>
    <a
      @click="onClick(href)"
      :href="href"
      @mouseover="active = true"
      @mouseout="active = false"
      class="text"
    >
      {{text}}
    </a>
  </div>
</template>

<script lang="ts">
import mixpanel from 'mixpanel-browser'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      active: false,
    }
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
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

  a, a:visited {
    text-decoration: none;
    color: $lv-purple;
    font-family: 'Neuton';
    font-weight: 600;
    font-size: 2*$m;
  }
}
</style>
