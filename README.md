# Start

```
yarn
yarn test
yarn start
```

# Tech stack

* react
* context
* typescript
* jest
* enzyme
* mocking
* TDD

# Flow

1. index.tsx - this file have one small change that allowing me mock fetch not only in tests but anywhere I like.
    I like use this flag to mock api's and stop care about networking while developing.
    When it is set in local Storage, it can be controlled from browser console by writing `isDev.toggle()`.
    `isDev` is global and have few helper methods. global.isDev IS NOT MEANT TO BE USED in code. 
    There is `class IsDev` that is not in global scope and SHOULD BE USED in tests and code to set and control dev or
    live environment.
      * index.tsx - `IsDev.setControllerInBrowser()`
      * mocking functions = IsDev.off ? realFunction : mockFunction
      * tests - `IsDev.setOff(); (...test something without mocking); IsDev.setOn() (...back to mocked env)`
      * browser - ![DevTools](https://i.imgur.com/SF0OJJV.png)
2. App.tsx - is used as only wrapper to compose data and view components. 
3. <TopStoriesContextProvider> - this component is responsible for getting, keeping and providing data from API
4. <TopStoriesComponent> and <FakeEmptyComponent> - 100% view layer
5. api/fetchApi.ts - wrapper for fetch and mockFetch. Real fetch() is easy to understand, mockFetch() is allowing
    mitigate any networking and use stored data in api/fetchApi.mocks.ts.
6. Tests - Mostly it was done with TDD however I have few untested places.
7. Typescript - Not everything have interface, ts was used just to fill gaps, where dynamic types ware not passed.
8. There are few small shortcuts like nasty use of `as` in typescript, lazy mocking same item 10 times, no css,
    and finally mocking whole fetch, instead of spinning local api server.
