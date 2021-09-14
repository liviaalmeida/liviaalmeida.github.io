<template>
  <div class="timeline">
    <div class="timeline-header"
    v-if="icon && title">
      <Icon
        :name="icon"
      />
      <div class="timeline-title">
        {{ title }}
        <div class="timeline-hr" />
      </div>
    </div>
    <ol class="timeline-list">
      <li
        v-for="(timeEvent, index) in timeEvents"
        :key="index"
        @mouseover="active = true"
        @mouseout="active = false"
      >
        <a
          v-if="timeEvent.link"
          :href="timeEvent.link"
          target="_blank"
        >
          {{ timeEvent.title }}
        </a>
        <h5 v-else>
          {{ timeEvent.title }}
        </h5>
        <h6 v-if="timeEvent.duration">
          {{ timeEvent.duration }}
        </h6>
        <p>
          <span
            v-if="timeEvent.intro"
            class="intro"
          >
            {{ timeEvent.intro }}
          </span> 
          <span
            v-html="timeEvent.description"
          />
        </p>
      </li>
    </ol>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      active: false,
    }
  },
  props: {
    icon: {
      required: true,
      type: String,
    },
    timeEvents: {
      type: Array as () => TimeEvent[],
      required: true,
    },
    title: {
      required: true,
      type: String,
    },
  },
})
</script>

<style lang="scss" scoped>
$border: 0.3*$m solid $lv-purple;
$bullet-size: 1.3*$m;
$icon: 35px;

.timeline-header {
  display: flex;
  align-items: center;
  font-family: 'Bebas Neue';
  font-size: 24px;

  svg {
    height: $icon;
    width: $icon;
    fill: $lv-purple;
  }
}

.timeline-title {
  width: 100%;
  margin-left: .5*$m;
}

.timeline-hr {
  background-color: transparent;
  border-top: 2px solid $lv-purple;
  height: 0;
  margin: 0;
}

.timeline-list {
  list-style: none;
  padding: 0 0 0 2*$m;
  margin: 0 0 0 1.4*$m;
  border-left: $border;
  z-index: 0;

  li {
    position: relative;
    padding-top: 0.5*$m;

    &:not(:last-child) {
      margin-bottom: 2*$m;
    }

    &:after {
      height: $bullet-size;
      width: $bullet-size;
      display: block;
      position: absolute;
      background: $lv-white;
      border-radius: 50%;
      border: $border;
      content: '';
      top: 0.5*$m;
      left: -3.1*$m;
      z-index: 2;
      transition: all $animation-time ease-in;
      @include animation-on-load(grow-ball);
    }

    &:hover:after {
      background: lighten($lv-purple, 10%);
    }

    a, h5, h6 {
      display: inline-block;
    }

    a, a:visited {
      color: $lv-purple;

      &:focus {
        color: $lv-purple;
      }
    }

    h5, a, a:visited {
      font-family: 'Bebas Neue';
      font-weight: 600;
      font-size: 2*$m;
    }

    h6 {
      font-size: 1*$m;
      margin-left: 0.5*$m;
    }

    p {
      .intro {
        font-weight: 600;
        margin-right: 0.5*$m;
      }

      font-size: 1.5*$m;
      text-align: justify;
      line-height: 1.3;
    }
  }
}

@keyframes grow-ball {
  0% {
    transform: scale(0);
  }
}
</style>
