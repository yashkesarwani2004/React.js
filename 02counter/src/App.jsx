import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){ //function banega tabhi to export hoga
let [counter, setCounter] = useState(15)//usestate is hooks
//aur uper usestate pure ui me chnage kar deta hai jo bhi variable isko do aur counter cariable hai jiski value change karni hai aur usestate ke ander vo counter ki default value hai aur setcounter ek function hai jo ki counter ko chnage karta hai
// let counter = 5;

const addValue = () => {
    if(counter >= 20){
      return
    }
    setCounter(counter + 1)
    console.log(counter);
    
}

const removeValue = () => {
    if(counter <= 0){
      return
    }
    setCounter(counter - 1)
}

return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
)

}
export default App
