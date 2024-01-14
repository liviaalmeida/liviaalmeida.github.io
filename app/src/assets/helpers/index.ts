import jsCaptcha from 'js-captcha'
import { Email as client } from '@/assets/helpers/smtp'

export type captchaCallback = (
  response: 'success' | 'error',
  captcha: Element,
  tries: number,
) => void

function captcha(el: string, callback: captchaCallback): jsCaptcha {
  return new jsCaptcha({
    el,
    callback,
    canvasClass: 'captcha-canvas',
    canvasStyle: {
      fillStyle: 'rgb(60, 0, 70)',
      font: '14px Open Sans',
      textAlign: 'left',
      textBaseline: 'top',
      height: 14,
      width: 45,
    },
    requiredValue: '=',
  })
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
  navigateTo,
  sendMail,
}
