<template>
  <a
    :href="href"
    class="social"
    @click="onClick(href)"
  >
    <Icon :name="image" size="m" />
    {{ text }}
  </a>
</template>

<script setup lang="ts">
import Icon from '@/ui/Icon.vue'
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
  methods: {
    onClick(href: string) {
      mixpanel.track('Icon-click', {
        to: href,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.social {
  align-items: center;
  display: inline-flex;
  font-family: 'Abel';
  font-size: 16px;
  font-weight: 600;
  gap: 5px;

  &, &:visited {
    color: $lv-darker;
    text-decoration: none;
  }
}
</style>
