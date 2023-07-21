import React from 'react'
import Product from './Product'
// {cart,setCart}
const Cart = ({cart,setCart}) => { 
  return (
  
    <><br/><br/><br/><br /><br/><div>
      <div className='productContainer'>
      <span>My Cart</span>
        {cart.map(item=>(
          <Product item={item} key={item.id} cart={cart} setCart={setCart}/>
        ))
        }
      </div>

    </div> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></>
  )
}

export default Cart
