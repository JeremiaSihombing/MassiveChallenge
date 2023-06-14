import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, Form } from 'react-router-dom'
import router from './router'
import './index.css'

//import aos
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(()=> {
      AOS.init({duration: 1500})
      AOS.refresh()
  }, [])
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);