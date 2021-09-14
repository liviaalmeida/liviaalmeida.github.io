<template>
  <form
    @input="onInput($event.target.form)"
    @submit.prevent="sendMessage"
    class="message"
  >
    <VInput
      v-model="email.name"
      :label="$t('contact.name.label')"
      :placeholder="$t('contact.name.placeholder')"
      class="message-name"
      minlength="3"
      required
    />
    <div class="message-row">
      <VInput
        v-model="email.subject"
        :label="$t('contact.subject.label')"
        :placeholder="$t('contact.subject.placeholder')"
        required
      />
      <VInput
        v-model="email.email"
        :label="$t('contact.email.label')"
        :placeholder="$t('contact.email.placeholder')"
        type="email"
      />
    </div>
    <VInput
      v-model="email.message"
        :label="$t('contact.message.label')"
        :placeholder="$t('contact.message.placeholder')"
      type="textarea"
      class="message-text"
      required
    />
    <VButton
    >
      Send
    </VButton>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import helper from '@/assets/helpers'

export default Vue.extend({
  data() {
    return {
      email: {
        name: '',
        subject: '',
        message: '',
      } as Email,
      sending: false,
      valid: false,
    }
  },
  methods: {
    onInput(form: HTMLFormElement) {
      this.valid = form.checkValidity()
    },
    sendMessage() {
      helper.sendMail(this.email)
    },
  },
})
</script>

<style lang="scss">
$gap: .5*$m;

.message {
  margin: 0 auto;
  width: 550px;

  @include tablet {
    width: 380px;
  }

  @include phone {
    width: 100%;
  }

  &-row {
    display: grid;
    grid-template-columns: 2fr 3fr;

    *:first-child {
      margin-right: $gap;
    }

    @include tablet {
      grid-template-columns: 1fr;

      *:first-child {
        margin-bottom: $gap;
        margin-right: 0;
      }
    }
  }

  &-name,
  &-row,
  &-text {
    margin-bottom: $gap;
  }
}
</style>
