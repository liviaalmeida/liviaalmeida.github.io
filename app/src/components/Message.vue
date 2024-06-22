<template>
  <form
    class="message"
    @input="onInput(($event.target as HTMLFormElement).form)"
    @submit.prevent="onSubmit"
  >
    <Input
      v-model="email.name"
      :label="$t('contact.name.label')"
      :placeholder="$t('contact.name.placeholder')"
      :disabled="disabled || sending"
      class="message-name"
      minlength="3"
    />
    <div class="message-row">
      <Input
        v-model="email.subject"
        :label="$t('contact.subject.label')"
        :placeholder="$t('contact.subject.placeholder')"
        :disabled="disabled || sending"
        class="message-subject"
      />
      <Input
        v-model="email.email"
        :label="$t('contact.email.label')"
        :placeholder="$t('contact.email.placeholder')"
        :disabled="disabled || sending"
        class="message-email"
        type="email"
      />
    </div>
    <Input
      v-model="email.message"
      :label="$t('contact.message.label')"
      :placeholder="$t('contact.message.placeholder')"
      :disabled="disabled || sending"
      type="textarea"
      class="message-text"
      required
    />
    <Captcha
      v-model="captcha"
      :disabled="disabled || sending"
      :validate="sending"
      class="message-captcha"
      @abuse="onAbuse"
      @error="onIncorrect"
      @success="sendMessage"
    />
    <Button
      :disabled="!valid || disabled"
      :loading="sending"
      class="message-submit"
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
import { inject, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import mixpanel from 'mixpanel-browser'
import { sendMail } from '@/assets/js'

import Button from '@/ui/Button.vue'
import Captcha from '@/ui/Captcha.vue'
import Input from '@/ui/Input.vue'
import Modal from '@/ui/Modal.vue'

const { t } = useI18n({ useScope: 'global' })

const $storage = inject('$storage') as Storehouse

const disabled = ref($storage.getAbuse())
const feedback = ref({
  message: '',
  reason: 'info' as ModalReason,
  title: '',
})

const captcha = ref('')
const modal = ref(false)
const sending = ref(false)
const valid = ref(false)
function onInput(form: HTMLFormElement) {
  valid.value = form.checkValidity() && !!captcha.value.length
}
function resetForm() {
  captcha.value = ''
  modal.value = true
  sending.value = false
  valid.value = false
}

const email = ref<Email>({
  email: '',
  message: '',
  name: '',
  subject: '',
})
function resetEmail() {
  email.value = {
    email: '',
    message: '',
    name: '',
    subject: '',
  }
}

function setError(message: string) {
  feedback.value = {
    message,
    reason: 'error',
    title: 'Ops!',
  }
  mixpanel.track('Message-error-send', {
    error: message,
  })
  resetForm()
}
function onAbuse() {
  $storage.setAbuse()
  disabled.value = true
  const message = t('contact.captcha.errors.abused')
  setError(message)
}
function onIncorrect() {
  const message = t('contact.captcha.errors.incorrect')
  setError(message)
}

function onSubmit() {
  mixpanel.track('Message-send')
  sending.value = true
}
function sendMessage() {
  sendMail(email.value)
    .then(() => {
      feedback.value = {
        message: t('contact.sent'),
        reason: 'success',
        title: 'Ok!',
      }
      mixpanel.track('Message-sent')
      resetEmail()
      resetForm()
    }).catch((error) => {
      setError(error.message)
    })
}
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
