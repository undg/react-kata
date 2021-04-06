import { IsDev } from './isDev'

describe('IsDevelopMode', () => {
    it('should change mode to develop', () => {
        IsDev.on()
        expect(IsDev.status).toBe(true)
    })
    it('should change mode back to init', () => {
        IsDev.off()
        expect(IsDev.status).toBe(false)
    })
    describe('setControllerInBrowser()', () => {
        it('should exists', () => {
            expect(!!IsDev?.setControllerInBrowser).toBe(true)
        })
    })
})
