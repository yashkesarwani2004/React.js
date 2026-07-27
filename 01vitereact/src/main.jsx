import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
//yaha ReactDOM iss liye nahi likha kyuki uper 2 line se vo aa gaya

function MyApp(){ //ye chai jaiga kyuki ye function hai
    return(
        <div>
            <h1>custom App | chai</h1>
        </div>
    )
}

// const ReactElement = { //ye nahi chalega kyuki ye react me render me jane me role follow nahi kar raha apna custom react bana hai ye 
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = ( //ye chal jaiga kyuki ye ek html hai isko allow karta hai react render me per isko < /> me nahi rakhna ye functkon nahi hai
    <a href="https:google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react"

//main react render me jane ka format aur ye aram se jaiga
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    
    reactElement 
)
