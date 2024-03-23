import jsCaptcha from 'js-captcha'
import { Email as client } from '@/assets/helpers/smtp'

function captcha(el: string, callback: Captcha): jsCaptcha {
  return new jsCaptcha({
    el,
    callback,
    canvasClass: 'captcha-canvas',
    canvasStyle: {
      fillStyle: 'rgb(0, 0, 0)',
      font: '14px Open Sans',
      textAlign: 'left',
      textBaseline: 'top',
      height: 14,
      width: 45,
    },
    requiredValue: '=',
  })
}

function convertTimeEvent(objects: unknown): TimeEvent[] {
  return objects as TimeEvent[]
}

function navigateTo(targetClass: string, offset = 0): void {
  const el = document.querySelector(`.${targetClass}`) as HTMLElement
  const { top } = el.getBoundingClientRect()

  window.scrollTo({
    top: window.scrollY + top + offset,
  })
}

function sendMail(email: Email): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      client.send({
        SecureToken: import.meta.env.VITE_MJ_SECURE_TOKEN,
        From: import.meta.env.VITE_MJ_FROM,
        To: 'leave.ah@gmail.com',
        Subject: email.subject,
        Body: `
          FROM: ${email.name}
          |
          CONTACT: ${email.email || 'NO MAIL'}
          |
          MESSAGE: ${email.message}
        `,
      }).then(
        (message: string) => {
          if (!/^OK$/.test(message)) reject(message)
          resolve()
        },
      )
    } catch (error) {
      reject(error)
    }
  })
}

export {
  captcha,
  convertTimeEvent,
  navigateTo,
  sendMail,
}
