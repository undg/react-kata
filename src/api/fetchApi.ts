import { MockApiEndpoint, mockApiRes } from '.'
import { createUrl, IsDev } from '../utils'

export async function fetchAPi(endpoint: string) {
    const fetchData = IsDev.on ? mockFetch : fetch

    const res = await fetchData(createUrl(endpoint))
    const json = await res.json()
    return json
}

export async function mockFetch(url: RequestInfo, init?: RequestInit | undefined) {
    return Promise.resolve({
        json: () => Promise.resolve(mockJsonRes(url)),
    })
}

function mockJsonRes(endpoint: RequestInfo) {
    const endpointIsItem = +endpoint > 0 // enpoint can me number inside string '13213'

    const randomNumber = Math.floor(Math.random() * 11) // there is 10 mocked api endpoints
    const randomItem = ('item' + randomNumber) as MockApiEndpoint // pick one randomly

    // prettier-ignore
    return endpoint === MockApiEndpoint.mockTest   ? mockApiRes.mockTest     // used for testing mocking itself
         : endpoint === MockApiEndpoint.topstories ? mockApiRes.topstories   // topstories
         : endpointIsItem                          ? mockApiRes[randomItem]  // random single item
         : mockApiRes.missingMock // default
}
