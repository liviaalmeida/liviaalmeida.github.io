<template>
  <Section
    small
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
        {
          image: require('@/assets/icons/phone.png'),
          text: '+55 31 99435 8223',
          href: 'tel:+5531994358223',
        },
      ] as Contact[],
    }
  },
})
</script>

<style lang="scss" scoped>
.contact {
  background-color: $lv-lilac;

  &-form {
    margin-bottom: 6*$m;
  }

  &-icons {
    display: flex;
    align-content: flex-end;
    justify-content: space-between;

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
}
</style>
