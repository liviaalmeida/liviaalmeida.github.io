<template>
  <Section class="hero">
    <h1 class="hero-title">
      Lívia Almeida
    </h1>
    <h2 class="hero-position">
      {{ $t('title.position') }}
    </h2>
    <div class="hero-section">
      <figure class="hero-frame">
        <img
          loading="lazy"
          src="/img/profile.jpeg"
          alt=""
          class="hero-image"
        >
      </figure>
      <div class="hero-text">
        <p
          v-for="paragraph in about"
          class="hero-about"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div
      v-for="area in areas"
      :key="area.title"
    >
      <h3 class="hero-subtitle">
        {{ area.title }}
      </h3>
      <p v-html="area.text" />
    </div>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import Section from '@/ui/Section.vue'

const { tm } = useI18n({ useScope: 'global' })

const about = computed<string[]>(() => tm('profile.about'))
const areas = computed<Area[]>(() => tm('profile.areas'))
</script>

<style lang="scss" scoped>
$frame-size: 220px;
$picture-size: 170px;

.hero-title,
.hero-position {
  text-align: center;
}

.hero-title,
.hero-position,
.hero-subtitle {
  font-family: 'Abel';
  font-weight: bold;
}

.hero-title {
  font-size: 34px;
  margin-top: 40px;
  text-transform: uppercase;
}

.hero-position {
  font-size: 22px;
}

.hero-subtitle {
  font-size: 20px;
  margin: 20px 0 5px;
}

.hero-section {
  display: flex;
  flex-wrap: wrap;
  gap: 30px 50px;
  align-items: center;
  justify-content: space-around;
  margin: 40px 0;
}

.hero-frame {
  background: -webkit-linear-gradient(top, #f8f7f6, #f2f2ef 20%, #dbdad4 60%);
  box-shadow: 5px 5px 5px 0px rgba($lv-dark, .6);
  content: '';
  display: block;
  padding: 15px 25px 35px 25px;
  height: $frame-size;
  width: $frame-size;
  transform: rotate(-5deg) translateZ(1px);
}

.hero-image {
  width: $picture-size;
  height: $picture-size;
}

.hero-text {
  width: 50%;

  @include tablet {
    width: 100%;
  }
}

.hero-about:not(:last-child) {
  margin-bottom: 6px;
}
</style>
