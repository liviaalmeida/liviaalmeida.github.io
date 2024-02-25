<template>
  <div
    v-visible="{
      callback: onVisible,
      once: true,
      throttle: 200,
    }"
    class="timeline"
  >
    <div
      v-if="icon && title"
      class="timeline-header"
    >
      <Icon
        :name="icon"
        size="m"
      />
      <div class="timeline-title">
        {{ title }}
        <div class="timeline-hr" />
      </div>
    </div>
    <ol class="timeline-list">
      <div
        v-if="visible"
        class="timeline-list-line"
      />
      <li
        v-for="(timeEvent, index) in timeEvents"
        :key="index"
        class="timeline-list-item"
        @mouseover="active = true"
        @mouseout="active = false"
      >
        <a
          v-if="timeEvent.link"
          :href="timeEvent.link"
          target="_blank"
          rel="noopener"
          class="timeline-list-link"
          @click="onEventClick(timeEvent.title)"
        >
          {{ timeEvent.title }}
        </a>
        <h5
          v-else
          class="timeline-list-title"
        >
          {{ timeEvent.title }}
        </h5>
        <h6
          v-if="timeEvent.duration"
          class="timeline-list-duration"
        >
          {{ timeEvent.duration }}
        </h6>
        <p class="timeline-list-text">
          <span
            v-if="timeEvent.intro"
            class="timeline-list-intro"
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

<script setup lang="ts">
import Icon from '@/ui/Icon.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import mixpanel from 'mixpanel-browser'

export default defineComponent({
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
  data() {
    return {
      active: false,
      visible: false,
    }
  },
  methods: {
    onEventClick(title: string) {
      mixpanel.track('Event-click', {
        event: title,
      })
    },
    onVisible(visible: boolean) {
      this.visible = visible
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
  padding: 0 0 0 2.4*$m;
  margin: 0 0 0 1.4*$m;
  z-index: 0;
  position: relative;
}

.timeline-list-line {
  @include animation-on-load(grow-line);
  background-color: $lv-purple;
  content: '';
  display: block;
  transform-origin: top;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0.3*$m;
}

.timeline-list-item {
  padding-top: 0.5*$m;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 2*$m;
  }

  &:after {
    @include animation-on-load(grow-ball);
    background: $lv-white;
    border: $border;
    border-radius: 50%;
    content: '';
    display: block;
    transition: all $animation-time ease-in;
    z-index: 2;
    height: $bullet-size;
    width: $bullet-size;
    position: absolute;
    top: 0.5*$m;
    left: -3.2*$m;
  }

  &:hover:after {
    background: lighten($lv-purple, 10%);
  }
}

.timeline-list-link,
.timeline-list-title,
.timeline-list-duration {
  display: inline;
}

.timeline-list-link, .timeline-list-link:visited {
  color: $lv-purple;

  &:focus {
    color: $lv-purple;
  }
}

.timeline-list-title,
.timeline-list-link,
.timeline-list-link:visited {
  font-family: 'Bebas Neue';
  font-weight: 600;
  font-size: 2*$m;
}

.timeline-list-duration {
  font-size: 1*$m;
  margin-left: 0.5*$m;
}

.timeline-list-text {
  font-size: 1.5*$m;
  line-height: 1.3;
  text-align: left;
}

.timeline-list-intro {
  font-weight: 600;
  margin-right: 0.5*$m;
}

@keyframes grow-ball {
  0% {
    transform: scale(0);
  }
}

@keyframes grow-line {
  0% {
    transform: scaleY(0);
  }
}
</style>
