import {IsDev} from "./isDev"

/**
 * One way for dealing with mock API is to spin simple/fake/fast restAPI server on localhost,
 * or even local copy of real api, if it is possible.
 * This is not what I am doing here, but there it option for that.
 *
 * @param {string} endpoint
 * @returns {string} url
 */
export function createUrl(endpoint: string): string {
    const realUrl = 'https://hacker-news.firebaseio.com/v0/' + endpoint + '.json'
    const mockUrl = endpoint
    return IsDev.off ? realUrl : mockUrl
}
