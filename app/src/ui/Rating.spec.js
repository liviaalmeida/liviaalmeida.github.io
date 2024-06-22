import { mount } from '@vue/test-utils'
import Rating from './Rating.vue'

const stars = 3
const options = { propsData: { stars } }

describe('Rating', () => {
  it('renders rating', () => {
    const wrapper = mount(Rating, options)
    const root = wrapper.find('div.rating')
    expect(root.exists()).to.be.true
  })

  it('renders correct amount of filled stars', () => {
    const wrapper = mount(Rating, options)
    const totalStars = wrapper.findAll('.rating-star')
    expect(totalStars).to.have.length(stars)
  })

  it('renders correct amount of not filled stars', () => {
    const wrapper = mount(Rating, options)
    const totalStars = wrapper.findAll('.rating-empty')
    expect(totalStars).to.have.length(5 - stars)
  })
})
