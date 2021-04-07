import { IsDev } from '../utils'
import { fetchAPi, HackerNewsApiEndpoint, mockApiRes } from './'

describe('fetchApi(url)', () => {
    it(`should NOT mock fetch and call real endpoint. This test should be skipped in offline mode`, async () => {
        // if(isOffline()) skip test @TODO (nice to have)
        IsDev.setOff()
        const api = await fetchAPi(HackerNewsApiEndpoint.topstories)
        expect(Array.isArray(api)).toBe(true)
        IsDev.setOn()
    })
    it('should mock fetch', async () => {
        const api = await fetchAPi('mockTest')
        expect(api).toEqual(mockApiRes.mockTest)
    })
    it('should mock fetch with missing url', async () => {
        const api = await fetchAPi('something-nothing-anything')
        expect(api).toEqual(mockApiRes.missingMock)
    })
})
