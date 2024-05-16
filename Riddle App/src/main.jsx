import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.jsx'
import About from './components/pages/about.jsx'
import Contact from './components/pages/contact.jsx'
import SignIn from './components/pages/signin.jsx'
import RegisterBike from './components/pages/registerbike.jsx'
import SignUp from './components/pages/signup.jsx'
import ForgetPassword from './components/pages/forgetpassword.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/forgetpassword',
    element: <ForgetPassword />
  },
  {
    path: '/registerbike',
    element: <RegisterBike />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <BrowserRouter> */}
        <App />
      {/* </BrowserRouter> */}
    </RouterProvider>
  </React.StrictMode>
)
