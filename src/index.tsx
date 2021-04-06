import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { IsDev } from './util/isDev'

// I like use this flag to mock api's and stop care about networking while developing.
// When it is set in local Storage, it can be controlled from browser console `isDev.toggle()`.
IsDev.setControllerInBrowser()
// Simpler option is to hardcode it here with 
// `IsDev.on()`


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

