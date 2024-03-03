import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AuthContextProvider, MyRoutes} from "./index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <di>
      <AuthContextProvider>
        <MyRoutes/>
      </AuthContextProvider>
    </di>
  )
}

export default App
