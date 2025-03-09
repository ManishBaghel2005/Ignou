import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Result from './Pages/Result.jsx'
import Assiment from './Pages/Assiment.jsx'
import Books from './Pages/Books.jsx'
import PYQ from './Pages/PYQ.jsx'

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element = {<Layout/>}>
  <Route path="" element={<Home/>} />
  <Route path="/result" element={<Result/>} />
  <Route path="/assginment" element={<Assiment/>} />
  <Route path="/books" element={<Books/>} />
  <Route path="/pyq" element={<PYQ/>} />
  </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
