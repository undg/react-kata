import { shallow } from 'enzyme'
import { TopStoriesContextProvider } from './'

describe('<TopStoriesContextProvider>', () => {
    it('render TopStoriesContextProvider without crashing badly', () => {
        shallow(<TopStoriesContextProvider />)
    })
})
