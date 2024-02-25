<template>
  <Section
    title-icon="message"
    :title="$t('title.contact')"
    class="contact"
  >
    <Message
      class="contact-form"
    />
    <div class="contact-icons">
      <Social
        v-for="contact in contacts"
        :key="contact.image"
        :image="contact.image"
        :text="contact.text"
        :href="contact.href"
      />
    </div>
    <div class="contact-copyright">
      Copyright © Lívia Almeida
    </div>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/ui/Section.vue'
import Social from '@/ui/Social.vue'

import Message from '@/components/Message.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      contacts: [
        {
          image: 'linkedin',
          text: 'Lívia Almeida',
          href: 'https://linkedin.com/in/livia001',
        },
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
      ] as Contact[],
    }
  },
})
</script>

<style lang="scss" scoped>
.contact {
  background-color: $lv-lilac;
}

.contact-icons {
  display: flex;
  align-content: flex-end;
  justify-content: space-between;
  margin: 7*$m auto 0;

  > *:not(:last-of-type) {
    margin-left: 2.5*$m;
    margin-right: 2.5*$m;
  }

  @include tablet {
    flex-direction: column;
    align-content: center;

    > *:not(:last-of-type) {
      margin: 0 0 5*$m;
    }
  }
}

.contact-copyright {
  font-size: 12px;
  text-align: center;
  transform: translateY(40px);
}
</style>
