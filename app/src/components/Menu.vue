<template>
  <div :class="['menu', {'menu--background': background}]">
    <Locale class="menu-locale" />
    <nav class="menu-nav">
      <button
        v-for="link in links"
        :key="link.text"
        class="menu-link"
        @click="onNav(link.class)"
      >
        {{ $t(link.text) }}
      </button>
    </nav>
    <Hamburger
      v-model="open"
      class="menu-button"
    />
    <transition name="dropdown">
      <nav
        v-if="open"
        :class="['menu-drop', {
          'menu-drop--background': background,
        }]"
      >
        <button
          v-for="link in links"
          :key="link.text"
          class="menu-link"
          @click="onNav(link.class)"
        >
          {{ $t(link.text) }}
        </button>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
import Hamburger from '@/ui/Hamburger.vue'
import Locale from '@/components/Locale.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { navigateTo } from '@/assets/helpers'
import mixpanel from 'mixpanel-browser'

export default defineComponent({
  data() {
    return {
      background: false,
      open: false,
    }
  },
  computed: {
    heigth(): number {
      return 60
    },
    links(): Array<Link> {
      return [
        {
          text: 'menu.about',
          class: 'hero',
        },
        {
          text: 'menu.knowledge',
          class: 'knowledge',
        },
        {
          text: 'menu.experience',
          class: 'experience',
        },
        {
          text: 'title.contact',
          class: 'contact',
        },
      ]
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onNav(toClass: string) {
      navigateTo(toClass, -60)
      this.open = false

      mixpanel.track('Menu-click', {
        to: toClass,
      })
    },
    onScroll() {
      this.background = window.scrollY > this.heigth + 1
    },
  },
})
</script>

<style lang="scss" scoped>
$height: 60px;
$link: 35px;
$transition: background-color 1s;

@mixin background {
  &--background {
    background-color: darken($lv-darker, 5%);
  }
}

.menu {
  @include background;
  background-color: $lv-dark;
  padding: 10px;
  position: fixed;
  transition: $transition;
  z-index: 200;
  height: $height;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-link {
  background-color: transparent;
  border: none;
  color: $lv-white;
  cursor: pointer;
  font-family: 'Abel';
  font-size: 20px;
  font-weight: 700;
  height: $link;
  margin: 0 20px;
  text-transform: lowercase;
}

.menu-nav {
  @include tablet {
    display: none;
  }
}

.menu-button {
  display: none;

  @include tablet {
    display: flex;
  }
}

.menu-drop {
  @include background;
  @include flex-column;
  align-items: center;
  background-color: $lv-dark;
  overflow: hidden;
  transition: height .4s, $transition;
  position: absolute;
  left: 0;
  top: $height;
  height: 4 * $link;
  width: 100%;
}

.dropdown {
  &-enter {
    height: 0;
  }

  &-enter-to {
    height: 4 * $link;
  }

  &-leave-to {
    height: 0;
  }
}
</style>
