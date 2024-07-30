import React, { useState } from 'react'
import { useEffect } from 'react'
import { getOneProduct } from '../../products'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const {id} = useParams()
  useEffect(() => {
    getOneProduct(id)
      .then(res => setProduct(res))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <h1>cargando...</h1>
  }
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
