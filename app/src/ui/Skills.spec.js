import { mount } from '@vue/test-utils'
import Skills from './Skills.vue'

const skills = [
  {
    level: 'Super',
    listing: [
      'Chopping',
      'Slicing',
      'Cooking',
      'Baking',
    ],
    stars: 5,
  },
  {
    level: 'Good',
    listing: [
      'Hammering',
      'Drilling',
      'Assembling',
    ],
    stars: 4,
  },
]
const title = 'Some skills'
const options = { propsData: { skills, title } }

describe('Skills', () => {
  it('renders skills', () => {
    const wrapper = mount(Skills, options)
    const root = wrapper.find('div.skills')
    expect(root.exists()).to.be.true
  })

  it('renders title', () => {
    const wrapper = mount(Skills, options)
    const titleElement = wrapper.find('.skills-title')
    expect(titleElement.text()).to.equal(title)
  })

  it('renders one item per skill', () => {
    const wrapper = mount(Skills, options)
    const listing = wrapper.findAll('.skills-listing')
    expect(listing).to.have.length(skills.length)
  })

  it('renders the skills with the level and the number of stars', () => {
    const wrapper = mount(Skills, options)
    const listing = wrapper.findAll('.skills-listing')
    listing.forEach((element, index) => {
      const level = element.find('.skills-level')
      const rating = element.find('.skills-rating')
      const stars = rating.findAll('.rating-star')
      const skill = skills[index]

      expect(level.text()).to.equal(skill.level)
      expect(stars).to.have.length(skill.stars)
    })
  })

  it('renders listing of skillset under skill', () => {
    const wrapper = mount(Skills, options)
    const listing = wrapper.findAll('.skills-listing')
    listing.forEach((element, index) => {
      const items = element.findAll('.skills-item')
      const skill = skills[index]

      items.forEach((item, itemIndex) => {
        expect(item.text()).to.equal(skill.listing[itemIndex])
      })
    })
  })
})
