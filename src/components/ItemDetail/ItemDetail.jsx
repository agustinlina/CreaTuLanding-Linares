import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../CartContext/cartContext'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
const ItemDetail = ({ product }) => {
  const { addToCart, isInCart, handleaddToCart } = useContext(CartContext)
  const { img, title, description, price } = product || {}

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <h3>{title}</h3>
      <img
        className='ItemDetail-img'
        src={img}
        alt={`imagen del producto ${title}`}
      />
      <p className='fs-4'>{description}</p>
      <p className='fs-1'>${price}</p>
      {isInCart(product.id) ? (
        <Link className='btn_emptycart' to='/cart'>Ir al carrito</Link>
      ) : (
        <ItemCount handleAddToCart={addToCart} prod={product} />
      )}
    </div>
  )
}

export default ItemDetail
