<template>
  <div :class="['menu', {
    'menu--background': background,
  }]">
    <Locale class="menu-locale" />
    <nav class="menu-nav">
      <button
        v-for="link in links"
        :key="link.text"
        @click="onNav(link.class)"
        class="menu-link"
      >
        {{ $t(link.text) }}
      </button>
    </nav>
    <MenuButton
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
          @click="onNav(link.class)"
          class="menu-link"
        >
          {{ $t(link.text) }}
        </button>
      </nav>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Locale from '@/components/Locale.vue'
import MenuButton from './MenuButton.vue'
import mixpanel from 'mixpanel-browser'

export default Vue.extend({
  components: {
    Locale,
    MenuButton,
  },
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
          class: 'profile',
        },
        {
          text: 'menu.programming',
          class: 'programming',
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
  methods: {
    onNav(toClass: string) {
      const el = document.querySelector(`.${toClass}`) as HTMLElement
      const { top } = el.getBoundingClientRect()

      window.scrollTo({
        top: window.scrollY + top - 60,
      })

      this.open = false

      mixpanel.track('Menu-click', {
        to: toClass,
      })
    },
    onScroll() {
      this.background = window.scrollY > this.heigth + 1
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
})
</script>

<style lang="scss">
$height: 60px;
$link: 35px;
$transition: background-color 1s;

@mixin background {
  &--background {
    background-color: darken($lv-purple, 5%);
  }
}

.menu {
  @include background;
  background-color: $lv-purple;
  width: 100%;
  height: $height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: relative;
  transition: $transition;
  z-index: 200;

  &-link {
    background-color: transparent;
    border: none;
    color: $lv-white;
    cursor: pointer;
    font-family: 'Bebas Neue';
    font-size: 2.5*$m;
    font-weight: 700;
    height: $link;
    margin: 0 2*$m;
    text-transform: uppercase;
  }

  &-nav {
    @include tablet {
      display: none;
    }
  }

  &-button {
    display: none;

    @include tablet {
      display: flex;
    }
  }

  &-drop {
    @include flex-column;
    @include background;
    align-items: center;
    background-color: $lv-purple;
    height: 4 * $link;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: $height;
    transition: height .4s, $transition;
    width: 100%;
  }
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