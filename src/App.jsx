import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Our Main Component</h1>
      <p>Hello this is our Component called app</p>
    </>
  )
}

export default App
