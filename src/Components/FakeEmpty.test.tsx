import { shallow } from 'enzyme'
import { FakeEmptyComponent } from './'

describe('<FakeEmptyComponent>', () => {
    it('render FakeEmptyComponent without crashing badly', () => {
        shallow(<FakeEmptyComponent />)
    })
})
