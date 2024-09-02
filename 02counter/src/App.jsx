import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCounter() {
    if (count+1 <= 20) {
      setCount(currentCount => currentCount+1)
    } 
  }

  function decreaseCounter() {
    if (count-1>=0) {
      setCount(currentCount => currentCount-1);
    }
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={increaseCounter}>Inc Value</button>
      <button onClick={decreaseCounter}>Dec Value</button>
    </>
  )
}

export default App
