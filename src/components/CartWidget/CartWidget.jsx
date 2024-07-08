import React from 'react'
import { TiShoppingCart } from 'react-icons/ti'
const CartWidget = () => {
  return (
    <div className='d-flex align-items-center mx-2'>
      <span>0</span>
      <span>
        <TiShoppingCart style={{ fontSize: '36px' }} />
      </span>
    </div>
  )
}

export default CartWidget
