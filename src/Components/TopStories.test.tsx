import { shallow } from 'enzyme'
import { HackerNewsItem, mockApiRes } from '../api'
import { TopStoriesComponent, TopStoriesItem } from './'

describe('<TopStoriesComponent>', () => {
    it('render TopStoriesComponent without crashing badly', () => {
        shallow(<TopStoriesComponent />)
    })
})

describe('<TopStoriesItem>', () => {
    it('render TopStoriesItem have all neccesarry classes and elements', () => {
        const wrapper = shallow(<TopStoriesItem {...mockApiRes.item0 as HackerNewsItem} />)
        expect(wrapper.find('.stories__item__title')).toHaveLength(1)
        expect(wrapper.find('.stories__item__link')).toHaveLength(1)
        expect(wrapper.find('.stories__item__author')).toHaveLength(1)
        expect(wrapper.find('.stories__item__date')).toHaveLength(1)
    })
})
