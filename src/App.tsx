import { useEffect } from 'react'
import './App.css'

export function App() {
    useEffect(() => {
        // Example call to the Hackernews API.
        // Feel free to delete
        fetch('https://hacker-news.firebaseio.com/v0/item/8863.json')
            .then((response) => response.json())
            .then((data) => console.log(data))
    })

    return (
        <>
            <div className="App" data-testid="app">
                TODO: Monaco Solicitors React Coding Test
            </div>
        </>
    )
}
