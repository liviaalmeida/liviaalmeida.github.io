import jsCaptcha from 'js-captcha'
const client = require('@/assets/helpers/smtp').Email

export type captchaCallback = (
  response: 'success' | 'error',
  captcha: Element,
  tries: number,
) => void

export default {
  captcha(el: string, callback: captchaCallback): jsCaptcha {
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
  },

  elementStyle(el: Element | null): CSSStyleDeclaration {
    return (el as HTMLElement).style
  },

  numberToRem(num: number): string {
    return `${num}rem`
  },

  navigateTo(targetClass: string, offset = 0): void {
    const el = document.querySelector(`.${targetClass}`) as HTMLElement
    const { top } = el.getBoundingClientRect()

    window.scrollTo({
      top: window.scrollY + top + offset,
    })
  },

  sendMail(email: Email): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        client.send({
          SecureToken: process.env.VUE_APP_MJ_SECURE_TOKEN,
          From: process.env.VUE_APP_MJ_FROM,
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
  },
}
