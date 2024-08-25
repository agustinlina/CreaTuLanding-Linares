import React, { useContext } from 'react'
import { CartContext } from '../CartContext/cartContext'
import ItemCount from '../ItemCount/ItemCount'
import './CartItem.css'
const CartItem = ({ product }) => {
  const e = product

  const { removeItem, addToCart } = useContext(CartContext)

  return (
    <div className='item-card d-flex align-items-center flex-column'>
      <h2>{e.title}</h2>
      <img className='cartProductImg' src={e.img} alt='foto del producto' />
      <p className='fs-4'>${e.price}</p>
      <p className='fs-4'>Estas llevando {e.cantidad} unidades.</p>
      <p className='fs-1'>Subtotal : {e.price * e.cantidad}</p>
      <div className='d-flex flex-column align-items-center gap-4'>
      <ItemCount handleAddToCart={addToCart} prod={product} />
      <button className='btn btn-danger' onClick={() => removeItem(e.id)}>Quitar este producto</button>
      </div>
    </div>
  )
}

export default CartItem
