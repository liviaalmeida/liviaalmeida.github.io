import JSCookie from 'js-cookie'
import plugin, { Keys, StorageClass } from './storage'

describe('Storage Plugin', () => {
  const app = {
    config: { globalProperties: {} },
    provide: vi.fn(),
  }
  const locale = 'en'

  beforeEach(() => {
    localStorage.clear()
    JSCookie.remove(Keys.abuse)
    JSCookie.remove(Keys.locale)
    app.config.globalProperties = {}
    app.provide = vi.fn()
  })

  it('exports a plugin', () => {
    expect(plugin.install).to.exist
    expect(plugin.install).to.be.an.instanceof(Function)
  })

  it('adds a StorageClass instance as $storage variable to the app', () => {
    plugin.install(app)
    const { $storage } = app.config.globalProperties
    expect($storage).to.exist
    expect($storage).to.be.an.instanceof(StorageClass)
  })

  it('provides the $storage variable to the app', () => {
    plugin.install(app)
    expect(app.provide).toHaveBeenCalledWith(
      '$storage',
      app.config.globalProperties.$storage,
    )
  })

  it('sets the abuse storage when set abuse is called', () => {
    plugin.install(app)
    app.config.globalProperties.$storage.setAbuse()
    const cookie = JSCookie.get(Keys.abuse)
    const local = localStorage.getItem(Keys.abuse)
    expect(cookie).to.equal('1')
    expect(local).to.be.null
  })

  it('gets the abuse false when no abuse is set', () => {
    plugin.install(app)
    const abuse = app.config.globalProperties.$storage.getAbuse()
    expect(abuse).to.be.false
  })

  it('gets the abuse true when abuse is set', () => {
    plugin.install(app)
    app.config.globalProperties.$storage.setAbuse()
    const abuse = app.config.globalProperties.$storage.getAbuse()
    expect(abuse).to.be.true
  })

  it('sets the locale storage when set locale is called', () => {
    plugin.install(app)
    app.config.globalProperties.$storage.setLocale(locale)
    const cookie = JSCookie.get(Keys.locale)
    const local = localStorage.getItem(Keys.locale)
    expect(cookie).to.equal(locale)
    expect(local).to.equal(locale)
  })

  it('gets the locale null when no locale is set', () => {
    plugin.install(app)
    const localeStored = app.config.globalProperties.$storage.getLocale()
    expect(localeStored).to.be.null
  })

  it('gets the locale when locale is set', () => {
    plugin.install(app)
    app.config.globalProperties.$storage.setLocale(locale)
    const localeStored = app.config.globalProperties.$storage.getLocale()
    expect(localeStored).to.equal(locale)
  })
})
