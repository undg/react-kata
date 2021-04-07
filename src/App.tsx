import React from 'react'
import { FakeEmptyComponent, TopStoriesComponent } from './Components'
import { TopStoriesContextProvider } from './context'

export const App: React.FC = () => {
    return (
        <div className="App" data-testid="app">
            <TopStoriesContextProvider>

                <TopStoriesComponent />

                <FakeEmptyComponent />
                <FakeEmptyComponent />
                <FakeEmptyComponent />
            </TopStoriesContextProvider>
        </div>
    )
}

