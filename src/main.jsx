import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, createBrowserRouter, RouterProvider, Form } from 'react-router-dom'
import './index.css'

//import aos
import AOS from "aos";
import "aos/dist/aos.css";

//import components
import Navbar from "./components/Navbar"
import App from './App.jsx'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FormContact from './components/FormContact'

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
      <Contact/>
      <FormContact/>
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
    ],
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);