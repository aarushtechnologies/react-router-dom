import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'
import Navbar from './Navbar.jsx'
import {All, Men, Products, Women} from './Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<Router>

{/* Configuring Routes */}
{/* <App /> */}
<Navbar />
  <Routes>
    <Route path='/' element={ <Home /> }></Route>
    <Route path='/about'  element={ <About /> }></Route>
    <Route path='/contact' element={ <Contact /> }></Route>
    <Route path='/products' element={<Products />}>
      <Route  index element={<All />}></Route>
      <Route path='/products/men' element={<Men />}></Route>
      <Route path='/products/women' element={<Women />}></Route>
    </Route>
    
    <Route path='*' element={ <Error /> }></Route>
    
  </Routes>
</Router>
  
  </StrictMode>,
)
