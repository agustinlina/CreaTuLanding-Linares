import React, { useContext } from 'react'
import { CartContext } from '../CartContext/cartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'
const Cart = () => {
  const { cart, setCart } = useContext(CartContext)

  console.log(cart)

  if (cart.length === 0) {
    return (
      <div className='d-flex flex-column align-items-center'>
        <h3>Su carro esta vacio...</h3>
        <Link className='btn_emptycart mt-3' to='/'>
          {' '}
          Ir al inicio
        </Link>
      </div>
    )
  }

  return (
    <>
      {cart.length > 0 &&
        cart.map(e => {
          return <CartItem key={e.id} product={e} />
        })}
     <div className='d-flex gap-3 align-items-center justify-content-center mt-4'>
     <button className='btn btn-secondary px-5 py-3' onClick={() => setCart([])}>
        Vaciar carrito
      </button>
      <Link className='btn btn-success px-5 py-3' to='/checkout'>
        Finalizar Compra
      </Link>
     </div>
    </>
  )
}

export default Cart
