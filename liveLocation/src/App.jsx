import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Map from './components/map'
import './App.css'
import Debounce from './components/debounce'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Map></Map>
     {/* <Debounce></Debounce> */}
    </div>
  )
}

export default App
