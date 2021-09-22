<template>
  <form
    @input="onInput($event.target.form)"
    @submit.prevent="sendMessage"
    class="message"
  >
    <VInput
      v-model="email.name"
      :label="required($t('contact.name.label'))"
      :placeholder="$t('contact.name.placeholder')"
      :disabled="disabled"
      class="message-name"
      minlength="3"
      required
    />
    <div class="message-row">
      <VInput
        v-model="email.subject"
        :label="required($t('contact.subject.label'))"
        :placeholder="$t('contact.subject.placeholder')"
        :disabled="disabled"
        required
      />
      <VInput
        v-model="email.email"
        :label="$t('contact.email.label')"
        :placeholder="$t('contact.email.placeholder')"
        :disabled="disabled"
        type="email"
      />
    </div>
    <VInput
      v-model="email.message"
      :label="required($t('contact.message.label'))"
      :placeholder="$t('contact.message.placeholder')"
      :disabled="disabled"
      type="textarea"
      class="message-text"
      required
    />
    <Captcha
      ref="captcha"
      v-model="captcha"
      :callback="captchaCallback"
      class="message-captcha"
    />
    <VButton
      :disabled="!valid || disabled"
      :loading="sending"
    >
      {{ $t('contact.button') }}
    </VButton>
    
    <Modal
      v-model="modal"
      v-bind="feedback"
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import jsCaptcha from 'js-captcha'
import helper from '@/assets/helpers'
import mixpanel from 'mixpanel-browser'

export default Vue.extend({
  data() {
    return {
      captcha: '',
      disabled: !!this.$cookies.get('CTMT'),
      email: {
        email: '',
        message: '',
        name: '',
        subject: '',
      } as Email,
      feedback: {
        message: '',
        title: '',
        type: '',
      },
      modal: false,
      sending: false,
      valid: false,
    }
  },
  computed: {
    captchaElement(): jsCaptcha {
      const child = this.$refs.captcha as Vue
      return child.$data.captcha
    },
    errors(): { abused: string; incorrect: string } {
      return {
        abused: this.$t('contact.captcha.errors.abused').toString(),
        incorrect: this.$t('contact.captcha.errors.incorrect').toString(),
      }
    },
  },
  methods: {
    captchaCallback(response: 'success' | 'error', _: Element, tries: number) {
      if (response === 'success') return
      if (tries > 3) throw Error(this.errors.abused)
      throw Error(this.errors.incorrect)
    },
    onInput(form: HTMLFormElement) {
      this.valid = form.checkValidity() && !!this.captcha.length
    },
    required(label: string) {
      return `${label} *`
    },
    sendFinish() {
      this.captchaElement.reset()
      this.captcha = ''
      this.valid = false
      this.modal = true
    },
    sendMessage() {
      mixpanel.track('Message-send')

      try {
        this.captchaElement.validate()
      } catch (error) {
        mixpanel.track('Message-error-captcha', {
          error: error.message,
        })
        this.feedback = {
          ...this.feedback,
          title: 'Ops!',
          type: 'error',
        }
        switch (error.message) {
        case this.errors.abused:
          this.$cookies.set('CTMT', true)
          this.disabled = true
          this.feedback.message = this.errors.abused
          break
        case this.errors.incorrect:
          this.feedback.message = this.errors.incorrect
          break
        }
        this.sendFinish()
        return
      }

      this.sending = true
      helper.sendMail(this.email)
        .then(() => {
          this.feedback = {
            message: this.$t('contact.sent').toString(),
            title: 'Ok!',
            type: 'success',
          }
          this.email = {
            email: '',
            message: '',
            name: '',
            subject: '',
          }
          mixpanel.track('Message-sent')
        }).catch((error) => {
          this.feedback = {
            message: error.message,
            title: 'Ops!',
            type: 'error',
          }
          mixpanel.track('Message-error-send', {
            error: error.message,
          })
        }).finally(() => {
          this.sending = false
          this.sendFinish()
        })
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

  &-captcha {
    margin: $m auto;
    max-width: 150px;
  }
}
</style>
