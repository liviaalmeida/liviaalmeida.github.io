<template>
  <PageSection
    :title="$t('title.profile')"
    title-icon="profile"
    class="profile"
  >
    <div class="profile-content">
      <img
        loading="lazy"
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
          href="/resume/curriculum-en.pdf"
          download="resume.pdf"
          class="profile-resume"
          rel="alternate"
          @click="onDownload"
        >
          <VButton class="profile-button">
            <VIcon
              name="download"
              :opacity="0.7"
              class="profile-download"
            />
            {{ $t('title.resume') }}
          </VButton>
        </a>
      </div>
    </div>
    <VTimeline
      v-for="info in infos"
      :key="info.title"
      :icon="info.icon"
      :time-events="$t(info.items)"
      :title="$t(info.title)"
      class="profile-info"
    />
  </PageSection>
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

<style lang="scss" scoped>

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

  &-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  &-download {
    transform: translateY(-4px) scale(1.2);
  }

  &-info {
    margin: 6*$m auto;
    max-width: 420px;
  }
}
</style>
