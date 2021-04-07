import { IsDev } from './isDev'
import { createUrl } from './url'

describe('createUrl()', () => {
    it('should create mock url', () => {
        expect(createUrl('some-test')).toBe('some-test')
    })
    it('should create real url', () => {
        IsDev.setOff()
        expect(createUrl('test')).toBe('https://hacker-news.firebaseio.com/v0/test.json')
        IsDev.setOn()
    })
})
