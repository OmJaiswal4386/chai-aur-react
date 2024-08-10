import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5)
  const addValue = () =>{
    if(counter>=20){
      console.log("Values more than 20 are not allowed");
      return;
    }
    counter = counter +1
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter<=0){
      console.log("Negative values are not allowed");
      return;
    }
    counter = counter-1;
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
