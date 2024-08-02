/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

const reactElement ={
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    childen: 'Click me to visit Google'
}

function myApp() {
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}
const AnotherElement = (
    <a href="https://google.com" target = '_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank'
    },
    'Click me to visit Google'
)
ReactDOM.createRoot(document.getElementById('root')).render(

    areactElement 
    // <App/>
  
)
