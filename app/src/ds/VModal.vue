<template>
  <transition name="modal-transition">
    <div
      v-if="value"
      class="modal-wrapper"
      @click="close"
    >
      <div
        class="modal"
        @click.stop
      >
        <div class="modal-content">
          <VIcon
            :color="color"
            :name="type"
            size="l"
            class="modal-icon"
          />
          <p class="modal-title">
            {{ title }}
          </p>
          <p>
            {{ message }}
          </p>
        </div>
        <button
          class="modal-close"
          type="button"
          @click="close"
        >
          {{ $t('common.close') }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

const ERRORCOLOR = {
  'error': 'red',
  'info': 'yellow',
  'success': 'green',
}

export default Vue.extend({
  model: {
    event: 'show',
  },
  props: {
    message: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    type: {
      required: true,
      type: String as () => 'error' | 'success' | 'info',
    },
    value: {
      required: true,
      type: Boolean,
    },
  },
  computed: {
    color(): string {
      return ERRORCOLOR[this.type]
    },
  },
  methods: {
    close() {
      this.$emit('show', false)
    },
  },
})
</script>

<style lang="scss" scoped>
.modal {
  background: $lv-white;
  border-radius: 5px;
  font-family: 'Open Sans';
  font-size: 14px;
  text-align: center;
  width: 450px;

  &-wrapper {
    background: rgba(black, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
  }

  &-content {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-title {
    font-weight: 600;
    margin-right: 8px;
    text-transform: uppercase;
  }

  &-close {
    background: none;
    border: none;
    border-top: 1px solid $lv-grey;
    color: $lv-grey;
    cursor: pointer;
    font-family: 'Open Sans';
    padding: 5px;
    text-transform: uppercase;
    width: 100%;
  }

  &-transition {
    &-enter {
      opacity: 0;
    }
  
    &-enter-active {
      transition: .4s;

      .pt-modal {
        animation: grow .4s ease-in 0s 1;
      }
    }
  
    &-leave-to {
      transition: .4s;
      opacity: 0;

      .pt-modal {
        animation: grow .4s ease-out 0s 1 reverse;
      }
    }
  }
}

@keyframes grow {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
