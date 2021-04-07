import { mockApiRes } from '.'
import { IsDev } from '../utils'
import { createUrl } from '../utils/url'

export enum Url {
    base = 'https://hacker-news.firebaseio.com/v0/',
    topstories = 'topstories',
    mockTest = 'test',
}

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

function mockJsonRes(url: RequestInfo) {
    return url === Url.mockTest ? mockApiRes.mockTest : mockApiRes.missingMock
}
