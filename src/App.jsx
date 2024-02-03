import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Signup</Link>
    </div>
    <div className='padding'>
      <Outlet />
    </div>
    </>
  )
}

export default App
