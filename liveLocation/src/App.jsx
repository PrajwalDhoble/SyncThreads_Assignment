import { useState } from 'react'
import './App.css'
import AllRoutes from './components/Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <AllRoutes></AllRoutes>
    </div>
  )
}

export default App
