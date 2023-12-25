<template>
  <Section
    :title="$t('title.profile')"
    title-icon="profile"
    class="profile"
  >
    <div class="profile-content">
      <img
        :src="require('@/assets/images/livia.jpeg')"
        alt="Profile picture"
      >
      <div class="profile-text">
        <p
          v-for="(paragraph, p) in $t('profile')"
          :key="p"
        >
          {{ paragraph }}
        </p>
        <a
          @click="onDownload"
          href="/resume/curriculum-en.pdf"
          download="resume.pdf"
          class="profile-resume"
          rel="alternate"
        >
          <VButton>
            <Icon name="download" />
            {{ $t('title.resume') }}
          </VButton>
        </a>
      </div>
    </div>
    <Timeline
      v-for="info in infos"
      :key="info.title"
      :icon="info.icon"
      :time-events="$t(info.items)"
      :title="$t(info.title)"
      class="profile-info"
    />
  </Section>
</template>

<script lang="ts">
import mixpanel from 'mixpanel-browser'
import Vue from 'vue'

export default Vue.extend({
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

<style lang="scss">

.profile {
  img {
    border-radius: 5px;
    height: 30*$m;

    @include tablet {
      border-radius: 50%;
      height: 20*$m;
      width: 20*$m;
      object-fit: cover;
      object-position: 50% 0;
    }
  }

  &-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10*$m;

    @include tablet {
      flex-direction: column;
    }
  }

  &-text {
    max-width: 400px;
    margin-left: 5*$m;

    @include tablet {
      margin-left: 0;
      margin-top: $m;
    }
    
    p {
      font-size: 1.8*$m;
      text-align: justify;
      line-height: 1.5;
      margin-bottom: .7*$m;

      &:last-of-type {
        margin-bottom: 1.5*$m;
      }
    }
  }

  &-resume {
    display: block;
    text-decoration: none;
    margin: 0 auto;
    width: 200px;
  }

  &-info {
    margin: 6*$m auto;
    max-width: 420px;
  }
}
</style>
