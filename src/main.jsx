import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, createBrowserRouter, RouterProvider, Form } from 'react-router-dom'
import './index.css'

//import aos
import AOS from "aos"
import "aos/dist/aos.css"

//import components
import About from './components/About'
import App from './App.jsx'
import Blog from './components/Blog'
import Contact from './components/Contact';
import Feature from './components/Feature'
import Footer from './components/Footer'
import Navbar from "./components/Navbar"
import NotFound from './components/NotFound'

//layout
const UserLayout = () =>{

    useEffect(()=> {
      AOS.init({duration: 1500})
      AOS.refresh()
  }, [])

  return (
    <>
      <Navbar/>
      
      <Outlet/>
      
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/feature',
        element: <Feature />
      },
    ],
  },
  {
    path: '/*',
    element: <NotFound />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);