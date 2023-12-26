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
            :name="type"
            class="modal-icon"
          />
          <p class="modal-title">
            {{ title }}
          </p>
          <p class="modal-message">
            {{ message }}
          </p>
        </div>
        <button
          class="modal-close"
          type="button"
          @click="close"
        >
          Fechar
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

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
  }

  &-icon {
    height: 45px;

    &.icon--error {
      fill: red;
    }

    &.icon--info {
      fill: yellow;

    }

    &.icon--success {
      fill: green;
    }
  }

  &-title {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  &-message {
    font-size: 13px;
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
