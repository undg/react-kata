import { IsDev } from './isDev'

describe('IsDevelopMode', () => {
    it('should change mode to develop', () => {
        IsDev.setOn()
        expect(IsDev.on).toBe(true)
        expect(IsDev.off).toBe(false)
    })
    it('should change mode back to init', () => {
        IsDev.setOff()
        expect(IsDev.on).toBe(false)
        expect(IsDev.off).toBe(true)
    })
    describe('setControllerInBrowser()', () => {
        it('should exists', () => {
            expect(!!IsDev?.setControllerInBrowser).toBe(true)
        })
    })
})
