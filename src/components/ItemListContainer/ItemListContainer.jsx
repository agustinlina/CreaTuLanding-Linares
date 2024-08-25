import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

import { db } from '../services/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const { cat } = useParams()
  useEffect(() => {
    if (cat) {
      const productosPorCat = query(
        collection(db, 'products'),
        where('category', '==', cat)
      )
      getDocs(productosPorCat)
        .then(snapshot => {
          const dataProductos = snapshot.docs.map(doc => {
            const conId = doc.data()
            return { id: doc.id, ...conId }
          })
          setProducts(dataProductos)
        })
        .finally(() => setLoading(false))
    } else {
      const productosRef = collection(db, 'products')
      getDocs(productosRef)
        .then(snapshot => {
          const dataProductos = snapshot.docs.map(doc => {
            const conId = doc.data()
            return { id: doc.id, ...conId }
          })
          setProducts(dataProductos)
        })
        .finally(() => setLoading(false))
    }
  }, [cat])

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

  if (error) {
    return <h2>{error}</h2>
  }

  return <div>{products.length > 0 && <ItemList products={products} />}</div>
}

export default ItemListContainer
