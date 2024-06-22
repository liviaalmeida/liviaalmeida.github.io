import { Email as client } from '@/assets/js/smtp'

import sendMail from './mail'

vi.mock('@/assets/js/smtp', () => ({
  Email: {
    ajaxPost: vi.fn(),
    createCORSRequest: vi.fn(),
    send: vi.fn(async () => {}),
  },
}))

const body = {
  email: 'jake@j.com',
  message: 'This is a message',
  name: 'Fill',
  subject: 'Message',
}

describe('sendMail', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('exports a function', () => {
    expect(sendMail).to.be.an.instanceof(Function)
  })

  it('calls email send on function call', async () => {
    const sendSpy = vi
      .spyOn(client, 'send')
      .mockResolvedValue('OK')
    await sendMail(body)
    expect(sendSpy).toHaveBeenCalled()
  })
})
