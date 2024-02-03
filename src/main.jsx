import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Signup from './pages/Signup.jsx'


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path : "",
        element: <Home />
      },
      {
        path : "/about",
        element: <About/>
      },
      {
        path : "/signup",
        element: <Signup />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={routes} />
  </React.StrictMode>,
)
