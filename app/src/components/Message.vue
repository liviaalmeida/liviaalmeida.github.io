<template>
  <form
    class="message"
    @input="onInput(($event.target as HTMLFormElement).form)"
    @submit.prevent="onSubmit"
  >
    <Input
      v-model="email.name"
      :label="required($t('contact.name.label'))"
      :placeholder="$t('contact.name.placeholder')"
      :disabled="disabled"
      class="message-name"
      minlength="3"
      required
    />
    <div class="message-row">
      <Input
        v-model="email.subject"
        :label="required($t('contact.subject.label'))"
        :placeholder="$t('contact.subject.placeholder')"
        :disabled="disabled"
        required
      />
      <Input
        v-model="email.email"
        :label="$t('contact.email.label')"
        :placeholder="$t('contact.email.placeholder')"
        :disabled="disabled"
        type="email"
      />
    </div>
    <Input
      v-model="email.message"
      :label="required($t('contact.message.label'))"
      :placeholder="$t('contact.message.placeholder')"
      :disabled="disabled"
      type="textarea"
      class="message-text"
      required
    />
    <Captcha
      v-model="captcha"
      :validate="sending"
      class="message-captcha"
      @abuse="onError(true)"
      @error="onError(false)"
      @success="sendMessage"
    />
    <Button
      :disabled="!valid || disabled"
      :loading="sending"
    >
      {{ $t('contact.button') }}
    </Button>
    
    <Modal
      v-model="modal"
      :message="feedback.message"
      :reason="feedback.reason"
      :title="feedback.title"
    />
  </form>
</template>

<script setup lang="ts">
import Button from '@/ui/Button.vue'
import Captcha from '@/ui/Captcha.vue'
import Input from '@/ui/Input.vue'
import Modal from '@/ui/Modal.vue'
</script>

<script lang="ts">
import { defineComponent } from 'vue'
import { sendMail } from '@/assets/helpers'
import mixpanel from 'mixpanel-browser'

export default defineComponent({
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
        reason: 'info' as ModalReason,
        title: '',
      },
      modal: false,
      sending: false,
      valid: false,
    }
  },
  computed: {
    errors(): { abused: string; incorrect: string } {
      return {
        abused: this.$t('contact.captcha.errors.abused').toString(),
        incorrect: this.$t('contact.captcha.errors.incorrect').toString(),
      }
    },
  },
  methods: {
    onError(abuse: Boolean) {
      const message = abuse ? this.errors.abused : this.errors.incorrect
      this.feedback = {
        message,
        reason: 'error',
        title: 'Ops!',
      }
      this.reset()
    },
    onInput(form: HTMLFormElement) {
      this.valid = form.checkValidity() && !!this.captcha.length
    },
    onSubmit() {
      mixpanel.track('Message-send')
      this.sending = true
    },
    required(label: string) {
      return `${label} *`
    },
    reset() {
      this.sending = false
      this.captcha = ''
      this.valid = false
      this.modal = true
    },
    sendMessage() {
      sendMail(this.email)
        .then(() => {
          this.feedback = {
            message: this.$t('contact.sent').toString(),
            reason: 'success',
            title: 'Ok!',
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
            reason: 'error',
            title: 'Ops!',
          }
          mixpanel.track('Message-error-send', {
            error: error.message,
          })
        }).finally(() => {
          this.reset()
        })
    },
  },
})
</script>

<style lang="scss" scoped>
$gap: 5px;

.message {
  margin: 0 auto;
  width: 450px;

  @include tablet {
    width: 380px;
  }

  @include phone {
    width: 100%;
  }
}

.message-row {
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

.message-name,
.message-row,
.message-text {
  margin-bottom: $gap;
}

.message-captcha {
  margin: 10px auto;
  max-width: 150px;
}
</style>
