import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './components/Card'
function App() {
  let myobj={
    age: 22,
    course: 'MCA'
  }

  let myimg = "./images/IMG_1618.HEIC"; //
  return (
    <>
      <h1 className='bg-red-600 text-black p-4 rounded-xl mb-4'>Tailwind Css</h1>
      <div className='flex justify-center space-x-4'>
      <Card userName='Om Jaiswal' Details={myobj} bgimage= {myimg}/>
      <Card />
      </div>
    </>
  )
}

export default App
