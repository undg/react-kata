export class IsDev {
    public static status = false

    public static on(): void {
        this.status = true
    }

    public static off(): void {
        this.status = false
    }

    public static setControllerInBrowser() {
        isDevControllerInBrowser()
    }
}

// It is global to expose api for console in devtools.
declare global {
    interface Window {
        isDev: {
            on(): void
            off(): void
            toggle(): void
            clean(): void
            get(): boolean
        }
    }
}

export function isDevControllerInBrowser() {
    window.isDev = {
        on: setOn,
        off: setOff,
        toggle: setToggle,
        clean: setClean,
        get: getIsDev,
    }
    setInStorage()

    if (getIsDev()) message()

    function message(optionalMessage = '') {
        /* eslint-disable no-console */
        if (getIsDev()) console.log('%c debuging mode ON ' + optionalMessage, 'background: green; color: white')
        else console.log('%c debuging mode OFF ' + optionalMessage, 'background: red; color: white')
        /* eslint-enable no-console */
    }

    function setOn() {
        window.sessionStorage.setItem('dev', 'true')
        setInStorage()
        message()
    }
    function setOff() {
        window.sessionStorage.setItem('dev', 'false')
        setInStorage()
        message()
    }
    function setToggle() {
        if (getIsDev()) {
            window.sessionStorage.setItem('dev', 'false')
        } else {
            window.sessionStorage.setItem('dev', 'true')
        }
        setInStorage()
        message()
    }
    function setClean() {
        window.sessionStorage.removeItem('dev')
        setInStorage()
        message('(flag deleted from session storage)')
    }

    function getIsDev() {
        let isDev = false
        try {
            isDev = JSON.parse(sessionStorage.dev)
        } catch {
            isDev = false
        }
        return isDev
    }

    function setInStorage() {
        if (getIsDev()) {
            IsDev.on()
        } else {
            IsDev.off()
        }
    }
}
