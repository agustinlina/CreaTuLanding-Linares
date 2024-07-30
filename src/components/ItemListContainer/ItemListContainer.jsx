import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {
  const [products, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const { cat } = useParams()
  useEffect(() => {
    if (cat) {
      getProducts()
        .then(data => setProductos(data.filter(e => e.category === cat)))
        .catch(err => {
          setError(err)
          console.log(err)
        })
        .finally(() => setLoading(false))
    } else {
      getProducts()
        .then(data => setProductos(data))
        .catch(err => {
          setError(err)
          console.log(err)
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
        <span>loading...</span>
      </div>
    )
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return <div>{products.length > 0 && <ItemList products={products} />}</div>
}

export default ItemListContainer
