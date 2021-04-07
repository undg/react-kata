import { shallow } from 'enzyme'
import { HackerNewsItem, mockApiRes } from '../api'
import { TopStoriesComponent, TopStoriesItem } from './'

describe('<TopStoriesComponent>', () => {
    it('render TopStoriesComponent without crashing badly', () => {
        shallow(<TopStoriesComponent />)
    })
})

describe('<TopStoriesItem>', () => {
    describe('render TopStoriesItem have all neccesarry elements', () => {
        const wrapper = shallow(<TopStoriesItem {...(mockApiRes.item0 as HackerNewsItem)} />)
        it('have title', () => {
            expect(wrapper.text()).toContain('Title for single item')
        })
        it('have author', () => {
            expect(wrapper.text()).toContain('by: Single item author')
        })
        it('have date', () => {
            expect(wrapper.text()).toContain('Mon Jan 19 1970')
        })
        it('have button', () => {
            expect(wrapper.text()).toContain('Link')
        })
    })
})
