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
      <AnimatedLink
        v-for="(contact, index) in contacts"
        :key="index"
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

<script lang="ts">
import Vue from 'vue'
import Message from '@/components/Message.vue'

export default Vue.extend({
  components: {
    Message,
  },
  data() {
    return {
      contacts: [
        {
          image: require('@/assets/icons/linkedin.png'),
          text: 'Lívia Almeida',
          href: 'https://linkedin.com/in/livia001',
        },
        {
          image: require('@/assets/icons/github.png'),
          text: '@liviaalmeida',
          href: 'https://github.com/liviaalmeida',
        },
        {
          image: require('@/assets/icons/mail.png'),
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

  &-icons {
    display: flex;
    align-content: flex-end;
    justify-content: space-between;
    margin: 7*$m auto 0;

    > *:not(:last-of-type) {
      margin-right: 5*$m;
    }

    @include tablet {
      flex-direction: column;
      align-content: center;

      > *:not(:last-of-type) {
        margin-bottom: 5*$m;
        margin-right: 0;
      }
    }
  }

  &-copyright {
    font-size: 12px;
    text-align: center;
    transform: translateY(25px);
  }
}
</style>
