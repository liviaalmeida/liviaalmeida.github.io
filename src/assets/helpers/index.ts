export default {

  numberToRem(num: number): string {
    return `${num}rem`
  },

  elementStyle(el: Element | null): CSSStyleDeclaration {
    return (el as HTMLElement).style
  },

}
