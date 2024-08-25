import React, { useContext } from 'react'
import { CiShoppingCart, CiBellOn } from 'react-icons/ci'
import { FaBell } from 'react-icons/fa'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../CartContext/cartContext'
import { Link } from 'react-router-dom'
const CartWidget = () => {
  const { cart, itemQuantity } = useContext(CartContext)

  console.log('CARRITO', cart)

  return (
    <div className='d-flex align-items-center gap-3 widget fs-2 fw-bold'>
      <Link to='/cart'>
        <TiShoppingCart />
      </Link>
      <span>{itemQuantity()}</span>
      <FaBell />
    </div>
  )
}

export default CartWidget
