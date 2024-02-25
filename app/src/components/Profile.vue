<template>
  <Section
    :title="$t('title.profile')"
    title-icon="profile"
    class="profile"
  >
    <div class="profile-content">
      <img
        loading="lazy"
        src="@/assets/images/livia.jpeg"
        alt="Profile picture"
        class="profile-photo"
      >
      <div class="profile-text">
        <p
          v-for="(paragraph, p) in $tm('profile')"
          :key="p"
          class="profile-paragraph"
        >
          {{ paragraph }}
        </p>
        <a
          href="/resume/curriculum-en.pdf"
          download="resume.pdf"
          class="profile-resume"
          rel="alternate"
          @click="onDownload"
        >
          <Button class="profile-button">
            <Icon
              name="download"
              :opacity="0.7"
              class="profile-download"
            />
            {{ $t('title.resume') }}
          </Button>
        </a>
      </div>
    </div>
    <Timeline
      v-for="info in infos"
      :key="info.title"
      :icon="info.icon"
      :time-events="convertTimeEvent($tm(info.items))"
      :title="$t(info.title)"
      class="profile-info"
    />
  </Section>
</template>

<script setup lang="ts">
import Button from '@/ui/Button.vue'
import Icon from '@/ui/Icon.vue'
import Section from '@/ui/Section.vue'
import Timeline from '@/ui/Timeline.vue'

import { convertTimeEvent } from '@/assets/helpers'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import mixpanel from 'mixpanel-browser'

export default defineComponent({
  computed: {
    infos() {
      return [
        {
          icon: 'education',
          title: 'title.education',
          items: 'education',
        },
        {
          icon: 'language',
          title: 'title.languages',
          items: 'languages',
        },
      ]
    },
  },
  methods: {
    onDownload() {
      mixpanel.track('CV-download', {
        lang: this.$i18n.locale,
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.profile-photo {
  border-radius: 5px;
  height: 30*$m;

  @include tablet {
    border-radius: 50%;
    object-fit: cover;
    object-position: 50% 0;
    height: 20*$m;
    width: 20*$m;
  }
}

.profile-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10*$m;

  @include tablet {
    flex-direction: column;
  }
}

.profile-text {
  margin-left: 5*$m;
  max-width: 400px;

  @include tablet {
    margin-left: 0;
    margin-top: $m;
  }
}

.profile-paragraph {
    font-size: 1.8*$m;
    line-height: 1.5;
    margin-bottom: .7*$m;
    text-align: left;

    &:last-of-type {
      margin-bottom: 1.5*$m;
    }
  }

.profile-resume {
  display: block;
  margin: 0 auto;
  text-decoration: none;
  width: 200px;
}

.profile-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.profile-download {
  transform: translateY(-4px) scale(1.2);
}

.profile-info {
  margin: 6*$m auto;
  max-width: 420px;
}
</style>
