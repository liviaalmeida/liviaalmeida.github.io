type Captcha = (
  response: CaptchaResponse,
  captcha: Element,
  tries: number,
) => void

type CaptchaResponse = 'abuse' | 'error' | 'success'

type COLOR = 'green' | 'purple' | 'red' | 'white' | 'yellow'

type Contact = {
  href: string;
  image: string;
  text: string;
}

type Email = {
  email?: string;
  message: string;
  name: string;
  subject: string;
}

type Indexable<T> = {
  [key: string]: T
}

type Link = {
  class: string;
  text: string;
}

type ModalReason = 'error' | 'success' | 'info';

type Skill = {
  name: string;
  progress: number;
}

type TimeEvent = {
  description: string;
  duration?: string;
  intro?: string;
  link?: string;
  title: string;
}
