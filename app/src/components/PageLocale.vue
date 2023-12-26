<template>
  <div class="locale">
    <label
      v-for="lang in langs"
      :key="lang"
    >
      <input
        type="radio"
        name="lang"
        :value="lang"
        @click="updateLocale"
      >
      <span>
        {{ lang }}
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import mixpanel from 'mixpanel-browser'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      langs: ['en', 'fr', 'pt'],
    }
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
  label {
    font-weight: 400;
    font-size: 18px;

    &:not(:last-child):after {
      content: '|';
      margin: 0 3px;
    }

    span {
      opacity: .5;
      cursor: pointer;
    }

    input {
      display: none;

      &:checked ~ span {
        font-weight: 700;
        opacity: 1;
      }
    }
  }
}
</style>
