import React from 'react'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import { BrowserRouter , Route ,Routes } from 'react-router-dom'
import Nav from './Components/nav/nav'
import Footer from './Components/Footer/footer'
import Cart from './Pages/cart/Cart'
import Contact from './Pages/Contact/contact'
function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path ='/' element = {<Home/>}/>
      <Route path ='/shop' element = {<Shop/>}/>
      <Route path ='/cart' element = {<Cart/>}/>
      <Route path ='/contact' element = {<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App