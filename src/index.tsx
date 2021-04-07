import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { IsDev } from './utils'

// I like use this flag to mock api's and stop care about networking while developing.
// When it is set in local Storage, it can be controlled from browser console `isDev.toggle()`.
IsDev.setControllerInBrowser()
// Simpler option is to hardcoding it as it is done in test setup.
// `IsDev.setOn()`
// It was priceless for developing in offline mode (London tube).
// https://i.imgur.com/SF0OJJV.png


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

