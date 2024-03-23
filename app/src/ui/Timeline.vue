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
      v-if="title"
      class="timeline-header"
    >
      <h3 class="timeline-title">
        {{ title }}
      </h3>
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

<script lang="ts">
import { defineComponent } from 'vue'
import mixpanel from 'mixpanel-browser'

export default defineComponent({
  props: {
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
$border: 2px solid $lv-darker;
$bullet-size: 8px;

.timeline-header {
  font-family: 'Abel';
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.timeline-title {
  width: 100%;
  margin-left: 5px;
}

.timeline-list {
  list-style: none;
  padding: 0 0 0 24px;
  margin: 0 0 0 14px;
  z-index: 0;
  position: relative;
}

.timeline-list-line {
  @include animation-on-load(grow-line);
  background-color: $lv-grey;
  content: '';
  display: block;
  transform-origin: top;
  position: absolute;
  top: 11px;
  left: 0;
  height: calc(100% - 15px);
  width: 1.5px;
}

.timeline-list-item {
  padding-top: 5px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 20px;
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
    top: 11px;
    left: -28.5px;
  }

  &:hover:after {
    background: lighten($lv-darker, 10%);
  }
}

.timeline-list-link,
.timeline-list-title,
.timeline-list-duration {
  display: inline;
}

.timeline-list-link, .timeline-list-link:visited {
  color: $lv-darker;
  text-decoration: none;

  &:focus {
    color: $lv-darker;
  }
}

.timeline-list-title,
.timeline-list-link,
.timeline-list-link:visited {
  font-family: 'Bebas Neue';
  font-weight: 600;
  font-size: 20px;
}

.timeline-list-duration {
  font-size: 10px;
  margin-left: 5px;
}

.timeline-list-text {
  font-size: 15px;
  line-height: 1.3;
  text-align: left;
}

.timeline-list-intro {
  font-weight: 600;
  margin-right: 5px;
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
