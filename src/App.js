import React  from 'react'
import Navbar from './components/Navbar'
import { Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import Footer from './components/Footer'
import { useState } from 'react'

 function App() {
  const [cart , setCart] = useState([]);
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/product' element={<Product  cart={cart} setCart={setCart} />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
        {/* <Route path='/product'>
          <Product cart={cart} setCart={setCart} />
        </Route>
        
        <Route path='/cart'>
        <Cart cart={cart} setCart={setCart} />
        </Route> */}
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/login' element={<Login/>}/>
        </Routes>
        
        
        <Footer/>
    </div>
  )
}
export default App;
