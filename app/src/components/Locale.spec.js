import { mount } from '@vue/test-utils'
import JSCookie from 'js-cookie'
import mixpanel from 'mixpanel-browser'
import { Keys } from '@/plugins/storage'

import Locale from './Locale.vue'

vi.mock('mixpanel-browser')

describe('Locale', () => {
  beforeEach(() => {
    JSCookie.remove(Keys.locale)
    localStorage.clear()
  })

  it('renders locale', () => {
    const wrapper = mount(Locale)
    const root = wrapper.find('div.locale')
    expect(root.exists()).to.be.true
  })

  it('has default locale checked in case nothing is stored', () => {
    const wrapper = mount(Locale)
    const input = wrapper.find('.locale-input[value="en"]')
    expect(input.element.checked).to.be.true
  })

  it('has default locale checked if cookie value is invalid', () => {
    JSCookie.set(Keys.locale, 'zz')
    const wrapper = mount(Locale)
    const input = wrapper.find('.locale-input[value="en"]')
    expect(input.element.checked).to.be.true
  })

  it('has stored locale checked if user has previously saved it', () => {
    JSCookie.set(Keys.locale, 'fr')
    const wrapper = mount(Locale)
    const input = wrapper.find('.locale-input[value="fr"]')
    expect(input.element.checked).to.be.true
  })

  it('changes locale on different choice', async () => {
    const wrapper = mount(Locale)
    const input = wrapper.find('.locale-input[value="pt"]')
    await input.trigger('click')
    expect(input.element.checked).to.be.true
    expect(JSCookie.get(Keys.locale)).to.equal('pt')
  })

  it('sends a tracking event on locale change', async () => {
    const trackSpy = vi.spyOn(mixpanel, 'track')
    const from = 'en'
    const to = 'pt'
    JSCookie.set(Keys.locale, from)
    const wrapper = mount(Locale)
    const input = wrapper.find('.locale-input[value="pt"]')
    await input.trigger('click')
    expect(mixpanel.track).toHaveBeenCalledWith('Locale-change', { from, to })
  })
})
