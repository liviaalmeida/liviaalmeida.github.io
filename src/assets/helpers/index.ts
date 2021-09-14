const client = require('@/assets/helpers/smtp').Email

export default {
  elementStyle(el: Element | null): CSSStyleDeclaration {
    return (el as HTMLElement).style
  },

  numberToRem(num: number): string {
    return `${num}rem`
  },

  sendMail(email: Email): void {
    client.send({
      SecureToken: process.env.VUE_APP_MJ_SECURE_TOKEN,
      From: process.env.VUE_APP_MJ_FROM,
      To: 'leave.ah@gmail.com',
      Subject: email.subject,
      Body: `
        FROM
        ${email.name}
        
        CONTACT
        ${email.email || 'NO MAIL'}
        ${email.phone || 'NO PHONE'}
        
        MESSAGE
        ${email.message}
      `,
    }).then(
      (message: string) => {
        if (!/^OK$/.test(message)) window.alert(message)
        else window.alert('Success')
      },
    )
  },
}
