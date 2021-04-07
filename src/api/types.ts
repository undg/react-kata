export enum HackerNewsApiEndpoint {
    topstories = 'topstories',
}
export enum MockApiEndpoint {
    mockTest = 'mockTest',
    missingMock = 'missingMock',
    topstories = 'topstories',
    item0 = 'item0',
    item1 = 'item1',
    item2 = 'item2',
    item3 = 'item3',
    item4 = 'item4',
    item5 = 'item5',
    item6 = 'item6',
    item7 = 'item7',
    item8 = 'item8',
    item9 = 'item9',
}

export interface HackerNewsItem {
    by: string
    descendants: number
    id: number
    kids: number[]
    score: number
    time: number
    title: string
    type: string
    url: string
}
export type HackerNewsTopStories = string[]

export interface EmptyMock {
    title: string
}

