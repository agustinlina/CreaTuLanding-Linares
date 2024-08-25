import React, { useContext, useState } from 'react'
import { db } from '../services/firebaseConfig'
import { addDoc, collection, or } from 'firebase/firestore'
import './Checkout.css'
import { CartContext } from '../CartContext/cartContext'
import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Checkout = () => {
  const [nombre, setNombre] = useState('')
  const [mail, setMail] = useState('')
  const [dir, setDir] = useState('')

  const [orden, setOrden] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { cart, setCart } = useContext(CartContext)

  const formatOrder = {
    cart: cart,
    nombre: nombre,
    mail,
    dir
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log('Se ha enviado su pedido', nombre, mail, dir)
    const ordenRef = collection(db, 'ordenes')
    const orderId = await addDoc(ordenRef, formatOrder)
    setCart([])
    setOrden(orderId.id)
    setIsSubmitting(false)
  }

  if (orden) {
    return (
      <>
       <div className='d-flex flex-column align-items-center px-3 gap-1'>
       <FaCheckCircle className='fs-1'/>
       <h3 className='text-center'>Gracias por tu compra!<br/><br/> El id de tu orden es : {orden}</h3>
      <Link className='btn_emptycart' to ="/">Volver a inicio</Link>
       </div>
      </>
    )
  }

  return (
    <div className='checkout_form_box'>
      <h1>Datos de factuación</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='d-flex flex-column gap-2'>
          <span>Nombre y Apellido:</span>
          <input
            placeholder='Ingrese su nombre...'
            className='checkout_input'
            type='text'
            onChange={e => setNombre(e.target.value)}
            required
          />
        </div>
        <div className='d-flex flex-column gap-2'>
          <span>Email: </span>
          <input
            className='checkout_input'
            placeholder='Ingrese su email...'
            type='email'
            onChange={e => setMail(e.target.value)}
            required
          />
        </div>
        <div className='d-flex flex-column gap-2'>
          <span>Dirección de envio: </span>
          <input
            className='checkout_input'
            type='text'
            placeholder='Ingrese su dirección...'
            required
            onChange={e => setDir(e.target.value)}
          />
        </div>

        <div>
          <button className='checkout_btn' type='submit'>
            {isSubmitting ? 'cargando...' : 'Realizar compra'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
