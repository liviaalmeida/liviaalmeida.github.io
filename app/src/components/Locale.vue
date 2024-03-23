<template>
  <div class="locale">
    <label
      v-for="lang in langs"
      :key="lang"
      class="locale-label"
    >
      <input
        type="radio"
        name="lang"
        :value="lang"
        class="locale-input"
        @click="updateLocale"
      >
      <span class="locale-lang">
        {{ lang }}
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import mixpanel from 'mixpanel-browser'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    langs(): string[] {
      return ['en', 'fr', 'pt']
    },
  },
  mounted() {
    const inputs = this.$el.querySelectorAll('input')
    inputs.forEach((input: HTMLInputElement) => {
      if (input.value === this.$i18n.locale) input.checked = true
    })
  },
  methods: {
    updateLocale({ target }: MouseEvent) {
      const value = (target as HTMLInputElement).value
      if (value && value !== this.$i18n.locale) {
        mixpanel.track('Locale-change', {
          from: this.$i18n.locale,
          to: value,
        })
        this.$i18n.locale = value
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.locale {
  color: $lv-white;
}

.locale-label {
  font-weight: 400;
  font-size: 14px;

  &:not(:last-child):after {
    content: '|';
    margin: 0 3px;
  }
}

.locale-input {
  display: none;

  &:checked ~ .locale-lang {
    font-weight: 700;
    opacity: 1;
  }
}

.locale-lang {
  opacity: .5;
  cursor: pointer;
}
</style>
