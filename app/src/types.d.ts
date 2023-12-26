type Contact = {
  image: string;
  text: string;
  href: string;
}

type Email = {
  name: string;
  subject: string;
  message: string;
  email?: string;
}

type Link = {
  class: string;
  text: string;
}

type Skill = {
  name: string;
  progress: number;
}

type TimeEvent = {
  title: string;
  duration?: string;
  intro?: string;
  link?: string;
  description: string;
}
