import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../services/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const productoRef = doc(db, 'products', id)

    getDoc(productoRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          const dataProducto = snapshot.data()
          const productoListo = { ...dataProducto, id: snapshot.id }
          setProduct(productoListo)
        } else {
          console.log('Producto no encontrado')
        }
      })
      .catch(error => {
        console.error('Error al obtener el producto:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className='center_loading'>
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span>Cargando...</span>
      </div>
    )
  }

  return <div className='d-flex flex-column align-content-center justify-content-center'>{product && <ItemDetail product={product} />}</div>
}

export default ItemDetailContainer
