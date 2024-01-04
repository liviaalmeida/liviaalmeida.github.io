<template>
  <div
    :class="['input', {
      'input--disabled': disabled,
      'input--focused': focus,
    }]"
  >
    <label
      :class="['input-label', {
        'input-label--disabled': disabled,
        'input-label--focused': focus,
      }]"
    >
      {{ label }}
    </label>
    <div class="input-wrapper">
      <textarea
        v-if="$attrs.type === 'textarea'"
        v-bind="$attrs"
        class="input-textarea"
        v-on="$listeners"
        @blur="onBlur"
        @focus="onFocus"
        @input="onModel($event.target)"
      />
      <input
        v-else
        v-bind="$attrs"
        class="input-input"
        v-on="$listeners"
        @blur="onBlur"
        @focus="onFocus"
        @input="onModel($event.target)"
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  model: {
    event: 'model',
  },
  props: {
    label: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      focus: false,
    }
  },
  computed: {
    disabled(): boolean {
      return this.$attrs.disabled !== undefined &&
        // eslint-disable-next-line
        // @ts-ignore
        this.$attrs.disabled !== false
    },
  },
  methods: {
    onBlur() {
      this.focus = false
    },
    onFocus() {
      this.focus = true
    },
    onModel({ value }: HTMLInputElement | HTMLTextAreaElement) {
      this.$emit('model', value)
    },
  },
})
</script>

<style lang="scss" scoped>
$blur: rgba($lv-purple, .7);

.input {
  @include flex-column;
  background-color: $lv-white;
  border: 2px solid $blur;
  border-radius: 5px;
  padding: 2px 5px;
  transition: border-color .5s;

  &--disabled {
    border-color: $lv-grey;
  }

  &--focused {
    border-color: $lv-purple;
  }
}

.input-label {
  color: $blur;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: .5*$m;
  margin-left: .3*$m;
  transition: color .5s;

  &--disabled {
    color: $lv-grey;
  }

  &--focused {
    color: $lv-purple;
  }
}

.input-wrapper {
  display: flex;
}

.input-input,
.input-textarea {
  background-color: transparent;
  border: none;
  font-family: 'Open Sans';
  font-size: 14px;
  width: 100%;

  &:focus {
    outline-color: transparent;
  }
}

.input-textarea {
  min-height: 65px;
  resize: vertical;
}
</style>
