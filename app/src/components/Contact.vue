<template>
  <Section
    :title="$t('title.contact')"
    class="contact"
  >
    <Message
      class="contact-form"
    />
    <h3 class="contact-social">
      {{ $t('title.socials') }}
    </h3>
    <div class="contact-socials">
      <Social
        v-for="contact in contacts"
        :key="contact.image"
        :image="contact.image"
        :text="contact.text"
        :href="contact.href"
      />
    </div>
    <Coffee class="contact-coffee" />
    <div class="contact-copyright">
      Copyright © Lívia Almeida
    </div>
  </Section>
</template>

<script setup lang="ts">
import Coffee from '@/ui/Coffee.vue'
import Section from '@/ui/Section.vue'
import Social from '@/ui/Social.vue'

import Message from '@/components/Message.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    contacts(): Contact[] {
      return [
        // {
        //   image: 'linkedin',
        //   text: 'Lívia Almeida',
        //   href: 'https://linkedin.com/in/livia001',
        // },
        {
          image: 'github',
          text: '@liviaalmeida',
          href: 'https://github.com/liviaalmeida',
        },
        {
          image: 'mail',
          text: 'leave.ah@gmail.com',
          href: 'mailto:leave.ah@gmail.com',
        },
      ] as Contact[]
    },
  },
})
</script>

<style lang="scss" scoped>
.contact {
  background-color: $lv-gray;
  position: relative;
}

.contact-social {
  font-family: 'Abel';
  font-size: 20px;
  font-weight: bold;
  margin: 70px 0 0;
  text-align: center;
}

.contact-socials {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px auto -10px;
  width: 170px;
}

.contact-coffee {
  margin: 0 auto;
  transform: scale(0.6) translateY(65px);
}

.contact-copyright {
  position: absolute;
  bottom: 2px;
  left: calc(50% - 70px);
  font-size: 12px;
}
</style>
