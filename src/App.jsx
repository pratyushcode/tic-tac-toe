import { useState } from 'react'

import './App.css'
import TicTaeToe from './components/TicTaeToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TicTaeToe/>
    </>
  )
}

export default App
