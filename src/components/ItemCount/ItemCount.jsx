import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ handleAddToCart, prod }) => {
  const [count, setCount] = useState(1)

  return (
    <div className='d-flex flex-column gap-3 align-items-center'>
      <div className='d-flex gap-3'>
        <button className='cart_countbtn' onClick={() => setCount(count + 1)}>+</button>
        <span className='fs-1'>{count}</span>
        <button  className='cart_countbtn' onClick={() => count > 0 && setCount(count - 1)}>-</button>
      </div>
      <button  className='cart_countbtn p-3' onClick={() => handleAddToCart(prod, count)}>
        {' '}
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
