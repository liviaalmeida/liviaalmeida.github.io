import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }

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
    phone?: string;
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
    description: string;
  }

}
