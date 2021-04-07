import { MockApiEndpoint, mockApiRes } from '.'
import { createUrl, IsDev } from '../utils'

/**
 * fetchAPi.
 *
 * @param {string} endpoint
 * @param {RequestInit} init
 */
export async function fetchAPi(endpoint: string, init?: RequestInit) {
    const fetchData = IsDev.on ? mockFetch : fetch

    const res = await fetchData(createUrl(endpoint), init)
    const json = await res.json()
    return json
}

/**
 * Simulate fetch to work in offline mode and for testing.
 *
 * @param {RequestInfo} url
 * @param {RequestInit | undefined} init
 */
export async function mockFetch(url: RequestInfo, init?: RequestInit | undefined) {
    return Promise.resolve({
        json: () => Promise.resolve(mockJsonRes(url)),
    })
}

/**
 * mock responses and map them with API endpoints.
 *
 * @param {RequestInfo} endpoint
 */
function mockJsonRes(endpoint: RequestInfo) {
    const endpointIsItem = RegExp(/^item\/item\d+$/).test(endpoint.toString())

    const randomNumber = Math.floor(Math.random() * 10) // there are 10 mocked api endpoints (what is small lie 🤫)
    const randomIdx = ('item' + randomNumber) as MockApiEndpoint // pick one randomly
    const randomSingleItem = { ...mockApiRes[randomIdx], id: Math.random() * 100000 }

    // prettier-ignore
    return endpoint === MockApiEndpoint.mockTest   ? mockApiRes.mockTest     // used to test mocking itself
         : endpoint === MockApiEndpoint.topstories ? mockApiRes.topstories
         : endpointIsItem                          ? randomSingleItem
         : mockApiRes.missingMock // default
}
