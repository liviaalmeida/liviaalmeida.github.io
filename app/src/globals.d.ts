type Area = {
  text: string;
  title: string;
}

type Captcha = (
  response: CaptchaResponse,
  captcha: Element,
  tries: number,
) => void

type CaptchaResponse = 'abuse' | 'error' | 'success'

type COLOR = 'gray' | 'green' | 'red' | 'white' | 'yellow'

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
  level: string;
  listing: string[];
  stars: number;
}

type TimeEvent = {
  description: string;
  duration?: string;
  intro?: string;
  link?: string;
  title: string;
}
